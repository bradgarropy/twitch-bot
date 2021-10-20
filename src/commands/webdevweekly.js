const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!webdevweekly") {
        twitch.say(channel, "https://bradgarropy.com/webdevweekly")
    }
})
