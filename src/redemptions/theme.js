const twitch = require("../twitch")
const vscode = require("../vscode")

const id = "ee79b647-0fd6-43e4-a69e-91d136f47c57"

twitch.on("message", (channel, tags, message) => {
    if (tags["custom-reward-id"] === id) {
        vscode.setTheme(message)

        twitch.say(
            channel,
            `@${tags.username} changed the theme to ${message.toUpperCase()}!`,
        )
    }
})
