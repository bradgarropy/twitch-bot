const hue = require("../hue")
const twitch = require("../twitch")

const id = "14e6be4e-b501-420f-a76c-e8fd2de2feba"

twitch.on("message", (channel, tags, message) => {
    if (tags["custom-reward-id"] === id) {
        hue.setColor(13, message)
        hue.setColor(14, message)
        hue.setColor(15, message)
        hue.setColor(16, message)

        twitch.say(
            channel,
            `@${tags.username} changed the lights to ${message.toUpperCase()}!`,
        )
    }
})
