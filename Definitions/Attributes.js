const Global = require("./Global.js")
const Directives = require("./Directives.js")
const AlpineEvents = require("./AlpineEvents.js")

// property names are changed to be fit for Nova
let AlpineAttributes = {
  version: "1.1",
  attributes: [
    ...Global.attributes,
    ...Directives.attributes,
    ...AlpineEvents.attributes,
  ],
}
module.exports = AlpineAttributes
