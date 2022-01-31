class CompletionProvider {
  constructor(definitions) {
    this.definitions = definitions
    this.items = []
    this.insertFormat = InsertTextFormat.Snippet
    this.CompletitionKind = CompletionItemKind.Property
  }

  provideCompletionItems(editor, context) {
    //array of provider depending on the scope we are in
    for (let definition of this.definitions) {
      let completion = new CompletionItem(
        definition.label,
        this.CompletitionKind
      )
      completion.insertText = `${definition.label}="{$0}"`
      completion.documentation = definition.description
      completion.insertTextFormat = this.insertFormat
      this.items = [...this.items, completion]
    }
    return this.items
  }

  /*  !context scope methods*/
  // are we in any scopes?
  static _isNotScope(context) {
    return context.selectors[0] instanceof ScopeSelector ? false : true
  }
  // are we in attribute scopes?
  static isAttributeScope(context) {
    return CompletionProvider._isNotScope(context)
      ? false
      : context.selectors[0].matches('attribute.tag.name')
      ? true
      : false
  }
  // are we in attribute value scope
  static isAttributeValueScope(context) {
    return CompletionProvider._isNotScope(context)
      ? false
      : context.selectors[0].matches('html.tag.attribute.value.double-quoted')
      ? true
      : false
  }

  _createCompletion(definition) {
    let completion = new CompletionItem(definition.label, this.CompletitionKind)
    completion.insertText = `${definition.label}="{$0}"`
    completion.documentation = definition.description
    completion.insertTextFormat = this.insertFormat
  }
}

module.exports = CompletionProvider
