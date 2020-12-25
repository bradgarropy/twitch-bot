const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!dotfiles") {
        twitch.say(channel, "https://bradgarropy.com/dotfiles")
    }
})
