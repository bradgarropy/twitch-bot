const hue = require("../hue")
const twitch = require("../twitch")

const id = "14e6be4e-b501-420f-a76c-e8fd2de2feba"
const lights = [13, 14, 15, 16]

twitch.on("message", (channel, tags, message) => {
    if (tags["custom-reward-id"] === id) {
        const color = hue.setColors(lights, message)
        let colorMessage = message.toUpperCase()

        if (message === "random") {
            colorMessage = colorMessage + ` (${color.toUpperCase()})`
        }

        twitch.say(
            channel,
            `@${tags.username} changed the lights to ${colorMessage}!`,
        )
    }
})
