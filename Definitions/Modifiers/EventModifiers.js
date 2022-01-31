//TODO: to be addede to the Alpine events as a property to be used as modifiers for all
//concat to all events
exports.modifiers = [
  {
    detail: "Alpine.js .prevent",
    label: ".prevent",
    body: ".prevent",
    documentation:
      "Adding .prevent to an event listener will call preventDefault on the triggered event. For example, this means the checkbox wouldn't actually get checked when a user clicks on it.\r\nThis is useful for hiding dropdowns and modals when a user clicks away from them.",
  },
  {
    detail: "Alpine.js .stop",
    label: ".stop",
    body: ".stop",
    documentation:
      "Adding .stop to an event listener will call stopPropagation on the triggered event. For example, this means the \"click\" event won't bubble from the button to the outer <div>. Or in other words, when a user clicks the button, foo won't be set to 'bar'.",
  },
  {
    detail: "Alpine.js .window",
    label: ".window",
    body: ".window",
    documentation:
      "Adding .window to an event listener will install the listener on the global window object instead of the DOM node on which it is declared. This is useful for when you want to modify component state when something changes with the window, like the resize event.",
  },

  {
    detail: "Alpine.js .document",
    label: ".document",
    body: ".document",
    documentation:
      "You can also use the .document modifier to attach listeners to document instead of window.",
  },
  {
    detail: "Alpine.js .once",
    label: ".once",
    body: ".once",
    documentation:
      "Adding the .once modifier to an event listener will ensure that the listener will only be handled once. This is useful for things you only want to do once, like fetching HTML partials and such.",
  },
  {
    detail: "Alpine.js .debounce",
    label: ".debounce",
    body: ".debounce.${1:750}",
    documentation:
      'The debounce modifier allows you to add a "debounce" to a value update. In other words, the event handler will NOT run until a certain amount of time has elapsed since the last event that fired. When the handler is ready to be called, the last handler call will execute.',
  },
  {
    detail: "Alpine.js .outside",
    label: ".outside",
    body: ".outside",
    documentation:
      ".outside is a convenience helper for listening for a click outside of the element it is attached to.",
  },
  {
    detail: "Alpine.js .throttle",
    label: ".throttle",
    body: ".throttle",
    documentation:
      ".throttle is similar to .debounce except it will release a handler call every 250 milliseconds instead of deferring it indefinitely.",
  },
  {
    detail: "Alpine.js .self",
    label: ".self",
    body: ".self",
    documentation:
      "By adding .self to an event listener, you are ensuring that the event originated on the element it is declared on, and not from a child element.",
  },
]
