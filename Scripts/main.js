
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


class CompletionProvider {
    constructor() {
        
    }
    
    provideCompletionItems(editor, context) {
        // The text immediately preceding the cursor
        let text = context.text;
        
        let tags = ["foo", "bar", "baz"];
        let items = [];
        
        for (let i = 0; i < tags.length; i++) {
            let tag = tags[i];
            
            let item = new CompletionItem(tag, CompletionItemKind.Tag);
            
            // The text to be inserted in the editor
            item.insertText = "<" + tag + ">$0</" + tag + ">";
            
            // Tokenizes snippet placeholders such as "$0"
            // Remove this line or set to InsertTextFormat.PlainText if not using the snippet format.
            item.insertTextFormat = InsertTextFormat.Snippet;
            
            items.push(item);
        }
        
        return items;
    }
}


nova.assistants.registerCompletionAssistant("html", new CompletionProvider());