const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!ama") {
        twitch.say(channel, "https://bradgarropy.com/ama")
    }
})
