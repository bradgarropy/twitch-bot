const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!wdw") {
        twitch.say(channel, "https://bradgarropy.com/wdw")
    }
})
