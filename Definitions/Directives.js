exports.attributes = [
  {
    label: "x-data",
    description:
      '`x-data` declares a new component scope. It tells the framework to initialize a new component with the following data object.\n\nThink of it like the `data` property of a Vue component.\n\n**Example:** `<div x-data="{ foo: \'bar\' }">...</div>`\n\n**Structure:** `<div x-data="[JSON data object]">...</div>`',
  },
  {
    label: "x-init",
    description:
      '`x-init` runs an expression when a component is initialized.\n\nIf you wish to run code AFTER Alpine has made its initial updates to the DOM (something like a `mounted()` hook in VueJS), you can return a callback from `x-init`, and it will be run after:\n\n`x-init="return () => { // we have access to the post-dom-initialization state here // }"`',
  },
  {
    label: "x-show",
    description:
      '`x-show` toggles the `display: none;` style on the element depending if the expression resolves to `true` or `false`.\n\n**Example:** `<div x-show="open"></div>`\n\n**Structure:** `<div x-show="[expression]"></div>`',
  },
  {
    label: "x-bind:",
    description:
      '`x-bind` sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\'s data object, and will update every-time its data is updated.\n\n> Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** `<input x-bind:type="inputType">`\n\n**Structure:** `<input x-bind:[attribute]="[expression]">`\n\n> Note: You are free to use the shorter ":" syntax: `:type="..."`\n\n**`x-bind` for class attributes**\n\n`x-bind` behaves a little differently when binding to the `class` attribute.\n\nFor classes, you pass in an object who\'s keys are class names, and values are boolean expressions to determine if those class names are applied or not.\n\nFor example:\n`<div x-bind:class="{ \'hidden\': foo }"></div>`\n\nIn this example, the "hidden" class will only be applied when the value of the `foo` data attribute is `true`.\n\n**`x-bind` for boolean attributes**\n\n`x-bind` supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to `true` or `false`.\n\nFor example:\n`<button x-bind:disabled="myVar">Click me</button>`\n\nThis will add or remove the `disabled` attribute when `myVar` is true or false respectively.\n\nMost common boolean attributes are supported, like `readonly`, `required`, etc.',
  },
  {
    label: "x-on:",
    description:
      '`x-on` attaches an event listener to the element it\'s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes "bound" to this data, will be updated.\n\n**Example:** `<button x-on:click="foo = \'bar\'"></button>`\n\n**Structure:** `<button x-on:[event]="[expression]"></button>`\n\n> Note: You are free to use the shorter "@" syntax: `@click="..."`',
  },
  {
    label: "x-model",
    description:
      '`x-model` adds "two-way data binding" to an element. In other words, the value of the input element will be kept in sync with the value of the data item of the component.\n\n> Note: `x-model` is smart enough to detect changes on text inputs, checkboxes, radio buttons, textareas, selects, and multiple selects. It should behave [how Vue would](https://vuejs.org/v2/guide/forms.html) in those scenarios.\n\n**Example:** `<input type="text" x-model="foo">`\n\n**Structure:** `<input type="text" x-model="[data item]">`',
  },
  {
    label: "x-text",
    description:
      '`x-text` works similarly to `x-bind`, except instead of updating the value of an attribute, it will update the `innerText` of an element.\n\n**Example:** `<span x-text="foo"></span>`\n\n**Structure:** `<span x-text="[expression]"`',
  },
  {
    label: "x-html",
    description:
      '`x-html` works similarly to `x-bind`, except instead of updating the value of an attribute, it will update the `innerHTML` of an element.\n\n**Example:** `<span x-html="foo"></span>`\n\n**Structure:** `<span x-html="[expression]"`',
  },
  {
    label: "x-ref",
    description:
      '`x-ref` provides a convenient way to retrieve raw DOM elements out of your component. By setting an `x-ref` attribute on an element, you are making it available to all event handlers inside an object called `$refs`.\n\nThis is a helpful alternative to setting ids and using `document.querySelector` all over the place.\n\n**Example:** `<div x-ref="foo"></div><button x-on:click="$refs.foo.innerText = \'bar\'"></button>`\n\n**Structure:** `<div x-ref="[ref name]"></div><button x-on:click="$refs.[ref name].innerText = \'bar\'"></button>`',
  },
  {
    label: "x-if",
    description:
      "For cases where `x-show` isn't sufficient (`x-show` sets an element to `display: none` if it's false), `x-if` can be used to  actually remove an element completely from the DOM.\n\nIt's important that `x-if` is used on a `<template></template>` tag because Alpine doesn't use a virtual DOM. This implementation allows Alpine to stay rugged and use the real DOM to work its magic.\n\n> Note: `x-if` must have a single element root inside the `<template></template>` tag.\n\n**Example:** `<template x-if=\"true\"><div>Some Element</div></template>`\n\n**Structure:** `<template x-if=\"[expression]\"><div>Some Element</div></template>`",
  },
  {
    label: "x-for",
    description:
      '`x-for` is available for cases when you want to create new DOM nodes for each item in an array. This should appear similar to `v-for` in Vue, with one exception of needing to exist on a `template` tag, and not a regular DOM element.\n\n> Note: the `:key` binding is optional, but HIGHLY recommended.\n\n**Example:**\n```html\n<template x-for="item in items" :key="item">\n    <div x-text="item"></div>\n</template>\n```',
  },
  {
    label: ":key",
    description:
      "Optional, but HIGHLY recommended binding for `x-for` directive.",
  },
  {
    label: "x-transition:enter",
    description:
      'Alpine offers 6 different transition directives for applying classes to various stages of an element\'s transition between "hidden" and "shown" states. These directives work both with `x-show` AND `x-if`.\n\nThese behave exactly like VueJs\'s transition directives, except they have different, more sensible names:\n\n| Directive | Description |\n| --- | --- |\n| `:enter` | Applied during the entire entering phase. |\n| `:enter-start` | Added before element is inserted, removed one frame after element is inserted. |\n| `:enter-end` | Added one frame after element is inserted (at the same time `enter-start` is removed), removed when transition/animation finishes.\n| `:leave` | Applied during the entire leaving phase. |\n| `:leave-start` | Added immediately when a leaving transition is triggered, removed after one frame. |\n| `:leave-end` | Added one frame after a leaving transition is triggered (at the same time `leave-start` is removed), removed when the transition/animation finishes.\n\n**Example:**\n```html\n<div\n    x-show="open"\n    x-transition:enter="transition ease-out duration-300"\n    x-transition:enter-start="opacity-0 transform scale-90"\n    x-transition:enter-end="opacity-100 transform scale-100"\n    x-transition:leave="transition ease-in duration-300"\n    x-transition:leave-start="opacity-100 transform scale-100"\n    x-transition:leave-end="opacity-0 transform scale-90"\n>...</div>\n```\n\n```html\n<template x-if="open">\n    <div\n        x-transition:enter="transition ease-out duration-300"\n        x-transition:enter-start="opacity-0 transform scale-90"\n        x-transition:enter-end="opacity-100 transform scale-100"\n        x-transition:leave="transition ease-in duration-300"\n        x-transition:leave-start="opacity-100 transform scale-100"\n        x-transition:leave-end="opacity-0 transform scale-90"\n    >...</div>\n</template>\n```',
  },
  {
    label: "x-transition:enter-start",
    description:
      'Alpine offers 6 different transition directives for applying classes to various stages of an element\'s transition between "hidden" and "shown" states. These directives work both with `x-show` AND `x-if`.\n\nThese behave exactly like VueJs\'s transition directives, except they have different, more sensible names:\n\n| Directive | Description |\n| --- | --- |\n| `:enter` | Applied during the entire entering phase. |\n| `:enter-start` | Added before element is inserted, removed one frame after element is inserted. |\n| `:enter-end` | Added one frame after element is inserted (at the same time `enter-start` is removed), removed when transition/animation finishes.\n| `:leave` | Applied during the entire leaving phase. |\n| `:leave-start` | Added immediately when a leaving transition is triggered, removed after one frame. |\n| `:leave-end` | Added one frame after a leaving transition is triggered (at the same time `leave-start` is removed), removed when the transition/animation finishes.\n\n**Example:**\n```html\n<div\n    x-show="open"\n    x-transition:enter="transition ease-out duration-300"\n    x-transition:enter-start="opacity-0 transform scale-90"\n    x-transition:enter-end="opacity-100 transform scale-100"\n    x-transition:leave="transition ease-in duration-300"\n    x-transition:leave-start="opacity-100 transform scale-100"\n    x-transition:leave-end="opacity-0 transform scale-90"\n>...</div>\n```\n\n```html\n<template x-if="open">\n    <div\n        x-transition:enter="transition ease-out duration-300"\n        x-transition:enter-start="opacity-0 transform scale-90"\n        x-transition:enter-end="opacity-100 transform scale-100"\n        x-transition:leave="transition ease-in duration-300"\n        x-transition:leave-start="opacity-100 transform scale-100"\n        x-transition:leave-end="opacity-0 transform scale-90"\n    >...</div>\n</template>\n```',
  },
  {
    label: "x-transition:enter-end",
    description:
      'Alpine offers 6 different transition directives for applying classes to various stages of an element\'s transition between "hidden" and "shown" states. These directives work both with `x-show` AND `x-if`.\n\nThese behave exactly like VueJs\'s transition directives, except they have different, more sensible names:\n\n| Directive | Description |\n| --- | --- |\n| `:enter` | Applied during the entire entering phase. |\n| `:enter-start` | Added before element is inserted, removed one frame after element is inserted. |\n| `:enter-end` | Added one frame after element is inserted (at the same time `enter-start` is removed), removed when transition/animation finishes.\n| `:leave` | Applied during the entire leaving phase. |\n| `:leave-start` | Added immediately when a leaving transition is triggered, removed after one frame. |\n| `:leave-end` | Added one frame after a leaving transition is triggered (at the same time `leave-start` is removed), removed when the transition/animation finishes.\n\n**Example:**\n```html\n<div\n    x-show="open"\n    x-transition:enter="transition ease-out duration-300"\n    x-transition:enter-start="opacity-0 transform scale-90"\n    x-transition:enter-end="opacity-100 transform scale-100"\n    x-transition:leave="transition ease-in duration-300"\n    x-transition:leave-start="opacity-100 transform scale-100"\n    x-transition:leave-end="opacity-0 transform scale-90"\n>...</div>\n```\n\n```html\n<template x-if="open">\n    <div\n        x-transition:enter="transition ease-out duration-300"\n        x-transition:enter-start="opacity-0 transform scale-90"\n        x-transition:enter-end="opacity-100 transform scale-100"\n        x-transition:leave="transition ease-in duration-300"\n        x-transition:leave-start="opacity-100 transform scale-100"\n        x-transition:leave-end="opacity-0 transform scale-90"\n    >...</div>\n</template>\n```',
  },
  {
    label: "x-transition:leave",
    description:
      'Alpine offers 6 different transition directives for applying classes to various stages of an element\'s transition between "hidden" and "shown" states. These directives work both with `x-show` AND `x-if`.\n\nThese behave exactly like VueJs\'s transition directives, except they have different, more sensible names:\n\n| Directive | Description |\n| --- | --- |\n| `:enter` | Applied during the entire entering phase. |\n| `:enter-start` | Added before element is inserted, removed one frame after element is inserted. |\n| `:enter-end` | Added one frame after element is inserted (at the same time `enter-start` is removed), removed when transition/animation finishes.\n| `:leave` | Applied during the entire leaving phase. |\n| `:leave-start` | Added immediately when a leaving transition is triggered, removed after one frame. |\n| `:leave-end` | Added one frame after a leaving transition is triggered (at the same time `leave-start` is removed), removed when the transition/animation finishes.\n\n**Example:**\n```html\n<div\n    x-show="open"\n    x-transition:enter="transition ease-out duration-300"\n    x-transition:enter-start="opacity-0 transform scale-90"\n    x-transition:enter-end="opacity-100 transform scale-100"\n    x-transition:leave="transition ease-in duration-300"\n    x-transition:leave-start="opacity-100 transform scale-100"\n    x-transition:leave-end="opacity-0 transform scale-90"\n>...</div>\n```\n\n```html\n<template x-if="open">\n    <div\n        x-transition:enter="transition ease-out duration-300"\n        x-transition:enter-start="opacity-0 transform scale-90"\n        x-transition:enter-end="opacity-100 transform scale-100"\n        x-transition:leave="transition ease-in duration-300"\n        x-transition:leave-start="opacity-100 transform scale-100"\n        x-transition:leave-end="opacity-0 transform scale-90"\n    >...</div>\n</template>\n```',
  },
  {
    label: "x-transition:leave-start",
    description:
      'Alpine offers 6 different transition directives for applying classes to various stages of an element\'s transition between "hidden" and "shown" states. These directives work both with `x-show` AND `x-if`.\n\nThese behave exactly like VueJs\'s transition directives, except they have different, more sensible names:\n\n| Directive | Description |\n| --- | --- |\n| `:enter` | Applied during the entire entering phase. |\n| `:enter-start` | Added before element is inserted, removed one frame after element is inserted. |\n| `:enter-end` | Added one frame after element is inserted (at the same time `enter-start` is removed), removed when transition/animation finishes.\n| `:leave` | Applied during the entire leaving phase. |\n| `:leave-start` | Added immediately when a leaving transition is triggered, removed after one frame. |\n| `:leave-end` | Added one frame after a leaving transition is triggered (at the same time `leave-start` is removed), removed when the transition/animation finishes.\n\n**Example:**\n```html\n<div\n    x-show="open"\n    x-transition:enter="transition ease-out duration-300"\n    x-transition:enter-start="opacity-0 transform scale-90"\n    x-transition:enter-end="opacity-100 transform scale-100"\n    x-transition:leave="transition ease-in duration-300"\n    x-transition:leave-start="opacity-100 transform scale-100"\n    x-transition:leave-end="opacity-0 transform scale-90"\n>...</div>\n```\n\n```html\n<template x-if="open">\n    <div\n        x-transition:enter="transition ease-out duration-300"\n        x-transition:enter-start="opacity-0 transform scale-90"\n        x-transition:enter-end="opacity-100 transform scale-100"\n        x-transition:leave="transition ease-in duration-300"\n        x-transition:leave-start="opacity-100 transform scale-100"\n        x-transition:leave-end="opacity-0 transform scale-90"\n    >...</div>\n</template>\n```',
  },
  {
    label: "x-transition:leave-end",
    description:
      'Alpine offers 6 different transition directives for applying classes to various stages of an element\'s transition between "hidden" and "shown" states. These directives work both with `x-show` AND `x-if`.\n\nThese behave exactly like VueJs\'s transition directives, except they have different, more sensible names:\n\n| Directive | Description |\n| --- | --- |\n| `:enter` | Applied during the entire entering phase. |\n| `:enter-start` | Added before element is inserted, removed one frame after element is inserted. |\n| `:enter-end` | Added one frame after element is inserted (at the same time `enter-start` is removed), removed when transition/animation finishes.\n| `:leave` | Applied during the entire leaving phase. |\n| `:leave-start` | Added immediately when a leaving transition is triggered, removed after one frame. |\n| `:leave-end` | Added one frame after a leaving transition is triggered (at the same time `leave-start` is removed), removed when the transition/animation finishes.\n\n**Example:**\n```html\n<div\n    x-show="open"\n    x-transition:enter="transition ease-out duration-300"\n    x-transition:enter-start="opacity-0 transform scale-90"\n    x-transition:enter-end="opacity-100 transform scale-100"\n    x-transition:leave="transition ease-in duration-300"\n    x-transition:leave-start="opacity-100 transform scale-100"\n    x-transition:leave-end="opacity-0 transform scale-90"\n>...</div>\n```\n\n```html\n<template x-if="open">\n    <div\n        x-transition:enter="transition ease-out duration-300"\n        x-transition:enter-start="opacity-0 transform scale-90"\n        x-transition:enter-end="opacity-100 transform scale-100"\n        x-transition:leave="transition ease-in duration-300"\n        x-transition:leave-start="opacity-100 transform scale-100"\n        x-transition:leave-end="opacity-0 transform scale-90"\n    >...</div>\n</template>\n```',
  },
  {
    label: "x-cloak",
    description:
      '**Example:** `<div x-data="{}" x-cloak></div>`\n\n`x-cloak` attributes are removed from elements when Alpine initializes. This is useful for hiding pre-initialized DOM. It\'s typical to add the following global style for this to work:\n\n```html\n<style>\n    [x-cloak] { display: none; }\n</style>\n```',
  },
]
