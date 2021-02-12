const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!store") {
        twitch.say(channel, "https://bradgarropy.com/store")
    }
})
