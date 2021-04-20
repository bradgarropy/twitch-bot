const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!promo") {
        twitch.say(
            channel,
            `
                https://bradgarropy.com/discord
                https://bradgarropy.com/sponsor
                https://bradgarropy.com/store
            `,
        )
    }
})
