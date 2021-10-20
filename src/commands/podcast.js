const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!podcast") {
        twitch.say(channel, "https://bradgarropy.com/podcast")
    }
})
