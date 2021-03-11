const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!sponsor") {
        twitch.say(channel, "https://bradgarropy.com/sponsor")
    }
})
