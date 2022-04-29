class CompletionProvider {
  constructor(definitions) {
    this.definitions = definitions
    this.insertFormat = InsertTextFormat.Snippet
    this.CompletionKind = CompletionItemKind.Property
  }

  provideCompletionItems(editor, context) {
    //array of provider depending on the scope we are in
    let items = []
    if (CompletionProvider._isNotScope(context)) {
      for (let definition of this.definitions.snippets) {
        items = [
          ...items,
          this._createCompletion(definition, CompletionItemKind.Tag),
        ]
      }
    } else if (CompletionProvider._isAttributeScope(context)) {
      for (let definition of this.definitions.attributes) {
        items = [...items, this._createCompletion(definition)]
      }
    } else if (CompletionProvider._isAttributeValueScope(context)) {
      for (let definition of this.definitions.attributes) {
        items = [...items, this._createCompletion(definition)]
      }
    }
    return items
  }

  /*  !context scope methods*/
  // are we in any scopes?
  static _isNotScope(context) {
    return context.selectors[0] instanceof ScopeSelector ? false : true
  }
  // are we in attribute scopes?
  static _isAttributeScope(context) {
    return context.selectors[0].matches('attribute.tag.name') ? true : false
  }
  // are we in attribute value scope
  static _isAttributeValueScope(context) {
    return context.selectors[0].matches(
      'html.tag.attribute.value.double-quoted'
    )
      ? true
      : false
  }

  _createCompletion(definition, kind = this.CompletionKind) {
    let completion = new CompletionItem(definition.label, kind)
    completion.insertTextFormat = this.insertFormat
    completion.insertText = definition.body
      ? definition.body
      : `${definition.label.replace(/^@|:|\$/, '')}="$0"` //replace the none word characters otherwise you get duplicates
    completion.detail = definition.detail ? definition.detail : ''
    completion.documentation = definition.documentation
      ? definition.documentation
      : ''
    return completion
  }
}

module.exports = CompletionProvider
