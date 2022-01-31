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

// class CompletionProvider {
//   constructor() {}
//
//   provideCompletionItems(editor, context) {
// let item = new CompletionItem("hello", CompletionItemKind.Property)
// item.insertText = "<div>\n" + "\t$0\n" + "</div>"
// item.insertTextFormat = InsertTextFormat.Snippet
// return [item]

// let items = []
// let testAttributes = Attributes.globalAttributes[2]
// //check if the editor is in any scopes
// if (context.selectors[0] instanceof ScopeSelector) {
//   // is it in attribute scope
//   if (context.selectors[0].matches("attribute.tag.name")) {
//     let item = new CompletionItem(
//       testAttributes.label,
//       CompletionItemKind.Property
//     )
//     item.documentation = testAttributes.description.value
//     item.insertText = `${testAttributes.label}='{$0}'`
//     item.insertTextFormat = InsertTextFormat.Snippet
//     return [item]
//   }
// }
//   }
// }

// !Attribute Value Discussion
// // is it in attribute.value scope?
// if (
//   context.selectors[0].matches("html.tag.attribute.value.double-quoted")
// ) {
//   let item = new CompletionItem("atti.value", CompletionItemKind.Tag)
//   item.documentation = "hello"
//   item.insertText = "${0:yes}"
//   item.insertTextFormat = InsertTextFormat.Snippet
// return [item]
// }
