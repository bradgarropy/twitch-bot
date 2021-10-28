const twitch = require("../twitch")

twitch.on("message", (channel, tags, message) => {
    if (message === "!extralife") {
        twitch.say(channel, "https://extra-life.org/participant/bradgarropy")
    }
})
