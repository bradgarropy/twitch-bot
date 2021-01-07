const twitch = require("../twitch")

const id = "bde4f029-a7c6-4c1c-b584-babefb6b4b57"

twitch.on("message", (channel, tags, message) => {
    if (tags["custom-reward-id"] === id) {
        twitch.say(channel, `@${tags.username} plugged ${message}!`)
    }
})
