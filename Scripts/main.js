exports.activate = function () {
  // Do work when the extension is activated
}

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
}

class CompletionProvider {
  constructor() {}

  provideCompletionItems(editor, context) {
    console.log(context.selectors[0].string)
    //check if the editor is in any scopes
    if (context.selectors[0] instanceof ScopeSelector) {
      // is it in attribute scope
      if (context.selectors[0].matches("attribute.tag.name")) {
        let item = new CompletionItem("x-test", CompletionItemKind.Tag)
        item.documentation = "hello"
        item.insertText = "x-data='{$0}'"
        item.insertTextFormat = InsertTextFormat.Snippet
        return [item]
      }
    }
    // is it in attribute.value scope?
    if (
      context.selectors[0].matches("html.tag.attribute.value.double-quoted")
    ) {
      let item = new CompletionItem("atti.value", CompletionItemKind.Tag)
      item.documentation = "hello"
      item.insertText = "${0:yes}"
      item.insertTextFormat = InsertTextFormat.Snippet
      return [item]
    }
  }
}

nova.assistants.registerCompletionAssistant("html", new CompletionProvider())
