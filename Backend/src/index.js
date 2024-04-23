const express = require("express");
const cors = require("cors");
const path = require("path");

const port = 3230;
const clientBuildDir = path.join(__dirname, "../web");

// Express setup
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(clientBuildDir)); // Serve the client static build

// Create the local SQLite database
const db = require("./utilities/db");
db.boot();

const GenericCommandController = require("./controllers/generic_command");
const ContainerController = require("./controllers/container");
const ImageController = require("./controllers/image");
const GroupController = require("./controllers/group");
const CleanupController = require("./controllers/cleanup");

// Generic
app.get("/api/generic", GenericCommandController.command);
// Containers
app.get("/api/container/fetch", ContainerController.fetch);
app.get("/api/container/fetchById", ContainerController.fetchById);
app.get("/api/container/command", ContainerController.command);
app.get("/api/container/logs", ContainerController.logs);
app.get("/api/container/stats", ContainerController.stats);
// Images
app.get("/api/image/fetch", ImageController.fetch);
app.get("/api/image/command", ImageController.command);
app.get("/api/cleanup/command", CleanupController.command);
// Groups
app.post("/api/groups", GroupController.create);
app.get("/api/groups", GroupController.fetch);
app.delete("/api/groups", GroupController.delete);

// Client routes handler (React router)
app.get("/*", (req, res) => {
    const clientIndex = path.join(clientBuildDir, "index.html");
    console.log(clientIndex);
    res.sendFile(clientIndex);
});

app.listen(port, () => {
    console.log(`Docker dashboard ready on http://localhost:${port}`);
});
