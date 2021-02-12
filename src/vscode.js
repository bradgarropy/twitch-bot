const fs = require("fs")
const os = require("os")
const {randomInteger} = require("./utils/random")

const path = `${os.homedir()}/AppData/Roaming/Code/User/settings.json`
const settings = require(path)

let currentTheme = settings["workbench.colorTheme"]

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
        const randomTheme = setRandomTheme()
        return randomTheme
    }

    settings["workbench.colorTheme"] = theme
    fs.writeFileSync(path, JSON.stringify(settings, null, 4))

    currentTheme = theme
    return theme
}

const setRandomTheme = () => {
    const nextThemes = themes.filter(theme => theme !== currentTheme)
    const index = randomInteger(0, nextThemes.length - 1)
    const theme = nextThemes[index]

    settings["workbench.colorTheme"] = theme
    fs.writeFileSync(path, JSON.stringify(settings, null, 4))

    currentTheme = theme
    return theme
}

module.exports = {setTheme}
