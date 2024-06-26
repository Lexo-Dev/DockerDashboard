const { safeTerminal } = require("../utilities/terminal");

exports.command = async (req, res) => {
    const output = await safeTerminal.containerLs();
    const filtered = output.replace(/}\s*{/g, "},{");
    res.json(filtered);
};
