const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!promo") {
        twitch.say(channel, "https://bradgarropy.com/discord")
        twitch.say(channel, "https://bradgarropy.com/sponsor")
        twitch.say(channel, "https://bradgarropy.com/store")
    }
})
