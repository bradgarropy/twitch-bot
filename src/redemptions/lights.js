const twitch = require("../twitch")
const {setColor} = require("../hue")

const id = "14e6be4e-b501-420f-a76c-e8fd2de2feba"

twitch.on("message", (channel, tags, message) => {
    if (tags["custom-reward-id"] === id) {
        setColor(13, message)
        setColor(14, message)
        setColor(15, message)
        setColor(16, message)

        twitch.say(
            channel,
            `@${tags.username} changed the lights to ${message.toUpperCase()}!`,
        )
    }
})
