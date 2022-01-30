// This needs to be inserted in the html body scope
// use this for matching if context.selector[0] does not exist
exports.html = [
  {
    detail: "Alpine.js x-if",
    label: "x-if",
    body: '<template x-if="${1:true}">\n\t$0\n</template>',
  },
  {
    detail: "Alpine.js x-for",
    label: "x-for",
    body: '<template x-for="${1:item} in ${2:items}">\n\t$0\n</template>',
  },
  {
    detail: "Alpine.js x-for with :key",
    label: "x-for-key",
    body: '<template x-for="${1:item} in ${2:items}" :key="${3:item}">\n\t$0\n</template>',
  },
  {
    detail: "Alpine.js x-for with index",
    label: "x-for-index",
    body: '<template x-for="(${1:item}, ${2:index}) in ${3:items}\n" :key="$2">\n\t$0\n</template>',
  },
  {
    detail: "Alpine.js x-bind:class",
    label: "x-bind:class",
    body: "x-bind:class=\"{ '${1:hidden}': ${2:foo} }\"",
  },
  {
    detail: "Alpine.js x-bind",
    label: "x-bind",
    body: 'x-bind:${1:attribute}="${2:expression}"',
    description:
      "x-bind sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component's data object, and will update every-time its data is updated.",
  },
  { detail: "Alpine.js x-show", label: "x-show", body: 'x-show="$0"' },
  {
    detail: "Alpine.js x-transition:enter",
    label: "x-transition:enter",
    body: 'x-transition:enter="$0"',
  },
  {
    detail: "Alpine.js x-transition:enter-start",
    label: "x-transition:enter-start",
    body: 'x-transition:enter-start="$0"',
  },
  {
    detail: "Alpine.js x-transition:enter-end",
    label: "x-transition:enter-end",
    body: 'x-transition:enter-end="$0"',
  },
  {
    detail: "Alpine.js x-transition:leave",
    label: "x-transition:leave",
    body: 'x-transition:leave="$0"',
  },
  {
    detail: "Alpine.js x-transition:leave-start",
    label: "x-transition:leave-start",
    body: 'x-transition:leave-start="$0"',
  },
  {
    detail: "Alpine.js x-transition:leave-end",
    label: "x-transition:leave-end",
    body: 'x-transition:leave-end="$0"',
  },
  {
    detail: "Alpine.js $el",
    label: "$el",
    body: "\\$el",
    description:
      "$el is a magic property that can be used to retrieve the root component DOM node.",
  },
  {
    detail: "Alpine.js $refs",
    label: "$refs",
    body: "\\$refs.${1:name}",
    description:
      "$refs is a magic property that can be used to retrieve DOM elements marked with x-ref inside the component. This is useful when you need to manually manipulate DOM elements.",
  },
  {
    detail: "Alpine.js $event",
    label: "$event",
    body: "\\$event",
    description:
      "$event is a magic property that can be used within an event listener to retrieve the native browser Event object.",
  },
  {
    detail: "Alpine.js $dispatch",
    label: "$dispatch",
    body: "\\$dispatch('${1:custom-event}', ${2:{ foo: 'bar' \\}})",
    description:
      "$dispatch is a shortcut for creating a CustomEvent and dispatching it using .dispatchEvent() internally. You will notice that any data passed as the second parameter to $dispatch('some-event', { some: 'data' }), becomes available through the new events detail property: $event.detail.some.",
  },
  {
    detail: "Alpine.js $nextTick",
    label: "$nextTick",
    body: "\\$nextTick(${1:() => { console.log(\\$event.target.innerText) \\}});",
    description:
      "$nextTick is a magic property that allows you to only execute a given expression AFTER Alpine has made its reactive DOM updates. This is useful for times you want to interact with the DOM state AFTER it's reflected any data updates you've made.",
  },
  {
    detail: "Alpine.js $watch",
    label: "$watch",
    body: "\\$watch('${1:open}', ${2:value => console.log(value)})",
    description:
      'You can "watch" a component property with the $watch magic method. In the above example, when the button is clicked and open is changed, the provided callback will fire and console.log the new value.',
  },

  {
    detail: "Alpine.js CDN",
    label: "alpine-cdn",
    body: '<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v${1:2.x.x}/dist/alpine.js" defer></script>',
    description: "Add the following script to the end of your <head> section.",
  },
]

// //TODO: these should be refactred as child to x-on event
// {detail:"Alpine.js .away",
//   label: ".away",
//   body: [".away"],
//   description:
// 	"When the .away modifier is present, the event handler will only be executed when the event originates from a source other than itself, or its children.\r\n\r\nThis is useful for hiding dropdowns and modals when a user clicks away from them.",
// },
// {detail:"Alpine.js .prevent",
//   label: ".prevent",
//   body: [".prevent"],
//   description:
// 	"Adding .prevent to an event listener will call preventDefault on the triggered event. For example, this means the checkbox wouldn't actually get checked when a user clicks on it.\r\nThis is useful for hiding dropdowns and modals when a user clicks away from them.",
// },
// {detail:"Alpine.js .stop",
//   label: ".stop",
//   body: [".stop"],
//   description:
// 	"Adding .stop to an event listener will call stopPropagation on the triggered event. For example, this means the \"click\" event won't bubble from the button to the outer <div>. Or in other words, when a user clicks the button, foo won't be set to 'bar'.",
// },
// detail: {detail:"Alpine.js .window",
//   label: ".window",
//   body: [".window"],
//   description:
// 	"Adding .window to an event listener will install the listener on the global window object instead of the DOM node on which it is declared. This is useful for when you want to modify component state when something changes with the window, like the resize event.",
// },
// {detail:"Alpine.js .document",
//   label: ".document",
//   body: [".document"],
//   description:
// 	"You can also use the .document modifier to attach listeners to document instead of window.",
// },
// {detail:"Alpine.js .once",
//   label: ".once",
//   body: [".once"],
//   description:
// 	"Adding the .once modifier to an event listener will ensure that the listener will only be handled once. This is useful for things you only want to do once, like fetching HTML partials and such.",
// },
// {detail:"Alpine.js .debounce",
//   label: ".debounce",
//   body: [".debounce.${1:750}"],
//   description:
// 	'The debounce modifier allows you to add a "debounce" to a value update. In other words, the event handler will NOT run until a certain amount of time has elapsed since the last event that fired. When the handler is ready to be called, the last handler call will execute.',
// },
// {detail:"Alpine.js .transition",
//   label: ".transition",
//   body: [".transition"],
//   description:
// 	"x-show.transition is a convenience API for making your x-shows more pleasant using CSS transitions.",
// },
