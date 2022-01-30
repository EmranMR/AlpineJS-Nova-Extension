exports.testDef = [
  {
    label: 'x-data',
    description:
      '\u0060x-data\u0060 declares a new component scope. It tells the framework to initialize a new component with the following data object.\n\nThink of it like the \u0060data\u0060 property of a Vue component.\n\n**Example:** \u0060\u003Cdiv x-data=\u0022{ foo: \u0027bar\u0027 }\u0022\u003E...\u003C/div\u003E\u0060\n\n**Structure:** \u0060\u003Cdiv x-data=\u0022[JSON data object]\u0022\u003E...\u003C/div\u003E\u0060',
  },
  {
    label: 'x-init',
    description:
      '\u0060x-init\u0060 runs an expression when a component is initialized.\n\nIf you wish to run code AFTER Alpine has made its initial updates to the DOM (something like a \u0060mounted()\u0060 hook in VueJS), you can return a callback from \u0060x-init\u0060, and it will be run after:\n\n\u0060x-init=\u0022return () =\u003E { // we have access to the post-dom-initialization state here // }\u0022\u0060',
  },
  {
    label: 'x-show',
    description:
      '\u0060x-show\u0060 toggles the \u0060display: none;\u0060 style on the element depending if the expression resolves to \u0060true\u0060 or \u0060false\u0060.\n\n**Example:** \u0060\u003Cdiv x-show=\u0022open\u0022\u003E\u003C/div\u003E\u0060\n\n**Structure:** \u0060\u003Cdiv x-show=\u0022[expression]\u0022\u003E\u003C/div\u003E\u0060',
  },
]
