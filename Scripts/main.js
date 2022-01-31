let FUNCTIONS = require('./Functions')
let CompletionProvider = require('./CompletionProvidor.js')
let selectors = ['html', 'php', 'blade']

exports.activate = function () {
  // Do work when the extension is activated
}

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
}

nova.assistants.registerCompletionAssistant(
  selectors,
  new CompletionProvider(FUNCTIONS.getDefinitions())
)
