class CompletitonProvidor {
  constructor(extension) {
    this.extension = extension
    this.items = []
    this.insertFormat = InsertTextFormat.Snippet
  }

  provideCompletionItems(editor, context) {
    //array of providors depending on the scope we are in
    return this.items
  }
  /*  !context scope methods*/
  // are we in any scopes?
  static _isNotScope(context) {
    return context.selectors[0] instanceof ScopeSelector ? false : true
  }
  // are we in attribute scopes?
  static isAttributeScope(context) {
    return CompletitonProvidor._isNotScope(context)
      ? false
      : context.selectors[0].matches('attribute.tag.name')
      ? true
      : false
  }
  // are we in attribute value scope
  static isAttributeValueScope(context) {
    return CompletitonProvidor._isNotScope(context)
      ? false
      : context.selectors[0].matches('html.tag.attribute.value.double-quoted')
      ? true
      : false
  }
}
