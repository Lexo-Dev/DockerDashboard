const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const port = 3230;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../web")));

const db = require("./utilities/db");
db.boot();

const { DefaultController } = require("./controllers/default");
const { GenericCommandController } = require("./controllers/generic_command");
const ContainerController = require("./controllers/container");
const ImageController = require("./controllers/image");
const GroupController = require("./controllers/group");
const CleanupController = require("./controllers/cleanup");

app.get("/", DefaultController);
app.get("/api/generic", GenericCommandController);

app.get("/api/container/fetch", ContainerController.fetch);
app.get("/api/container/fetchById", ContainerController.fetchById);
app.get("/api/container/command", ContainerController.command);
app.get("/api/container/logs", ContainerController.logs);
app.get("/api/container/stats", ContainerController.stats);

app.get("/api/image/fetch", ImageController.fetch);
app.get("/api/image/command", ImageController.command);
app.get("/api/cleanup/command", CleanupController.command);

app.post("/api/groups", GroupController.create);
app.get("/api/groups", GroupController.fetch);
app.delete("/api/groups", GroupController.delete);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
