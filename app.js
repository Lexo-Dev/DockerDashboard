const fs = require("fs");
const path = require("path");

const { safeTerminal } = require("./Backend/src/utilities/terminal");

const port = 3230;

async function app() {

    console.clear();

    const BACKEND = path.resolve(__dirname + "/Backend/");
    const NODE_MODULES = BACKEND + "/node_modules";

    if (!fs.existsSync(NODE_MODULES)) {
        console.log("Installing dependencies...");
        await safeTerminal.installModules(BACKEND);
        console.log("All dependencies installed.");
    }

    setTimeout(() => console.log(`Dashboard is available at http://localhost:${port}`), 1000);
    await safeTerminal.serve(BACKEND);
};

app();
