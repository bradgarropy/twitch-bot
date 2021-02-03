const twitch = require("../twitch")
const vscode = require("../vscode")

const id = "ee79b647-0fd6-43e4-a69e-91d136f47c57"

twitch.on("message", (channel, tags, message) => {
    if (tags["custom-reward-id"] === id) {
        const theme = vscode.setTheme(message)
        let themeMessage = message.toUpperCase()

        if (message === "random") {
            themeMessage = themeMessage + ` (${theme.toUpperCase()})`
        }

        twitch.say(
            channel,
            `@${tags.username} changed the theme to ${themeMessage}!`,
        )
    }
})
