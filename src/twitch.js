require("dotenv").config()
const tmi = require("tmi.js")

const twitch = new tmi.Client({
    options: {debug: true},
    connection: {
        secure: true,
        reconnect: true,
    },
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_PASSWORD,
    },
    channels: [process.env.TWITCH_USERNAME],
})

twitch.connect()

module.exports = twitch
