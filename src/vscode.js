const fs = require("fs")
const os = require("os")
const {randomInteger} = require("./utils/random")

const path = `${os.homedir()}/AppData/Roaming/Code/User/settings.json`
const settings = require(path)

const themes = [
    "Shades of Purple",
    "Cobalt2",
    "SynthWave '84",
    "Night Owl",
    "Dracula",
    "In Bed by 7pm",
    "morgan.codes",
    "Level Up",
    "Level Up Syntax",
]

const setTheme = theme => {
    if (theme === "random") {
        setRandomTheme()
    } else {
        settings["workbench.colorTheme"] = theme
        fs.writeFileSync(path, JSON.stringify(settings, null, 4))
    }
}

const setRandomTheme = () => {
    const index = randomInteger(0, themes.length - 1)
    const theme = themes[index]

    settings["workbench.colorTheme"] = theme
    fs.writeFileSync(path, JSON.stringify(settings, null, 4))
}

module.exports = {setTheme}
