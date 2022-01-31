// TODO: make Async, it is a heavy operation

exports.getDefinitions = function () {
  let attributes = []
  let snippets = require('../Definitions/Snippets/GeneralSnippets.js')
  let definitionFiles = nova.fs.listdir(`${__dirname}/../Definitions`)
  // to avoid folders
  let file = /\w+(?=\.js)/
  for (definitionFile of definitionFiles) {
    if (file.test(definitionFile)) {
      let module = require(`../Definitions/${definitionFile}`)
      for ([key, value] of Object.entries(module)) {
        attributes = [...attributes, ...value]
      }
    }
  }
  // returns AlpineJS
  return {
    attributes: attributes,
    snippets: snippets.html,
  }
}
