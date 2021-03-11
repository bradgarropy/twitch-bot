const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!music") {
        twitch.say(channel, "https://bradgarropy.com/codetunes")
    }
})
