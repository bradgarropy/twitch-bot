const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!donate") {
        twitch.say(channel, "https://bradgarropy.com/donate")
    }
})
