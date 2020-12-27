const fs = require("fs")
const os = require("os")

const path = `${os.homedir()}/Library/Application Support/Code/User/settings.json`
const settings = require(path)

const setTheme = theme => {
    settings["workbench.colorTheme"] = theme
    fs.writeFileSync(path, JSON.stringify(settings, null, 4))
}

module.exports = {setTheme}
