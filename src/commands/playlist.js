const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!playlist") {
        twitch.say(channel, "https://bradgarropy.com/codetunes")
    }
})
