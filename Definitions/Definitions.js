const Global = require('./Global.js')
const AlpineEvents = require('./AlpineEvents.js')

// property names are changed to be fit for Nova
let AlpineJS = {
  version: '1.1',
  attributes: [...Global.attributes, ...AlpineEvents.attributes],
  snippets: '',
}
module.exports = AlpineAttributes
