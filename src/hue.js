require("dotenv").config()

const fetch = require("node-fetch")
const colors = require("./colors")
const {randomInteger} = require("./utils")

// low level

const readLight = async id => {
    const response = await fetch(
        `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${id}`,
    )

    const json = await response.json()
    const light = {id, ...json}

    return light
}

const readLights = async () => {
    const response = await fetch(
        `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights`,
    )

    const json = await response.json()

    const lights = Object.entries(json).map(([id, light]) => {
        return {id, ...light}
    })

    return lights
}

const updateLight = (id, state) => {
    fetch(
        `http://${process.env.HUE_BRIDGE_IP}/api/${process.env.HUE_USERNAME}/lights/${id}/state`,
        {method: "PUT", body: JSON.stringify(state)},
    )
}

// high level

const turnOnLight = id => {
    updateLight(id, {on: true})
}

const turnOffLight = id => {
    updateLight(id, {on: false})
}

const setBrightness = (id, brightness) => {
    updateLight(id, {bri: brightness})
}

const setColor = (id, color) => {
    if (color === "random") {
        setRandomColor(id)
    } else {
        updateLight(id, {xy: colors[color]})
    }
}

const setRandomColor = id => {
    const index = randomInteger(0, Object.entries(colors).length - 1)
    const color = Object.keys(colors)[index]
    setColor(id, color)
}

module.exports = {
    readLight,
    readLights,
    updateLight,
    turnOnLight,
    turnOffLight,
    setBrightness,
    setColor,
    setRandomColor,
}
