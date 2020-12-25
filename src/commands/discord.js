const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!discord") {
        twitch.say(channel, "https://bradgarropy.com/discord")
    }
})
