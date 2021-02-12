const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    const commands = ["!music", "!playlist"]

    if (commands.includes(message)) {
        twitch.say(channel, "https://bradgarropy.com/codetunes")
    }
})
