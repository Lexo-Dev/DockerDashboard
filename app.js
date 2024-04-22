const path = require("path");

const { safeTerminal } = require("./Backend/src/utilities/terminal");

const port = 3230;

async function app() {
    console.clear();
    const backendDir = path.resolve(__dirname + "/Backend/");
    setTimeout(() => console.log(`Dashboard is available at http://localhost:${port}`), 1000);
    await safeTerminal.serve(backendDir);
};

app();
