const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!newsletter") {
        twitch.say(channel, "https://bradgarropy.com/newsletter")
    }
})
