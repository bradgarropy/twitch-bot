const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!uses") {
        twitch.say(channel, "https://bradgarropy.com/uses")
    }
})
