//import modifiers
let event = require("./EventModifiers.js")

exports.attributes = [
  {
    label: "@abort",
    description: "The loading of a resource has been aborted.",
    modifiers: event.modifiers,
  },
  {
    label: "@blur",
    description: "An element has lost focus (does not bubble).",
    modifiers: event.modifiers,
  },
  {
    label: "@canplay",
    description:
      "The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.",
    modifiers: event.modifiers,
  },
  {
    label: "@canplaythrough",
    description:
      "The user agent can play the media up to its end without having to stop for further buffering of content.",
    modifiers: event.modifiers,
  },
  {
    label: "@change",
    description:
      "The change event is fired for \u003Cinput\u003E, \u003Cselect\u003E, and \u003Ctextarea\u003E elements when a change to the element\u0027s value is committed by the user.",
    modifiers: event.modifiers,
  },
  {
    label: "@click",
    description:
      "A pointing device button has been pressed and released on an element.",
    modifiers: event.modifiers,
  },
  {
    label: "@contextmenu",
    description:
      "The right button of the mouse is clicked (before the context menu is displayed).",
    modifiers: event.modifiers,
  },
  {
    label: "@dblclick",
    description: "A pointing device button is clicked twice on an element.",
    modifiers: event.modifiers,
  },
  {
    label: "@drag",
    description: "An element or text selection is being dragged (every 350ms).",
    modifiers: event.modifiers,
  },
  {
    label: "@dragend",
    description:
      "A drag operation is being ended (by releasing a mouse button or hitting the escape key).",
    modifiers: event.modifiers,
  },
  {
    label: "@dragenter",
    description:
      "A dragged element or text selection enters a valid drop target.",
    modifiers: event.modifiers,
  },
  {
    label: "@dragleave",
    description:
      "A dragged element or text selection leaves a valid drop target.",
    modifiers: event.modifiers,
  },
  {
    label: "@dragover",
    description:
      "An element or text selection is being dragged over a valid drop target (every 350ms).",
    modifiers: event.modifiers,
  },
  {
    label: "@dragstart",
    description: "The user starts dragging an element or text selection.",
    modifiers: event.modifiers,
  },
  {
    label: "@drop",
    description: "An element is dropped on a valid drop target.",
    modifiers: event.modifiers,
  },
  {
    label: "@durationchange",
    description: "The duration attribute has been updated.",
    modifiers: event.modifiers,
  },
  {
    label: "@emptied",
    description:
      "The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.",
    modifiers: event.modifiers,
  },
  {
    label: "@ended",
    description:
      "Playback has stopped because the end of the media was reached.",
    modifiers: event.modifiers,
  },
  {
    label: "@error",
    description: "A resource failed to load.",
    modifiers: event.modifiers,
  },
  {
    label: "@focus",
    description: "An element has received focus (does not bubble).",
    modifiers: event.modifiers,
  },
  {
    label: "@input",
    description:
      "The value of an element changes or the content of an element with the attribute contenteditable is modified.",
    modifiers: event.modifiers,
  },
  {
    label: "@invalid",
    description:
      "A submittable element has been checked and doesn\u0027t satisfy its constraints.",
    modifiers: event.modifiers,
  },
  {
    label: "@keydown",
    description: "A key is pressed down.",
    modifiers: event.modifiers,
  },
  {
    label: "@keypress",
    description:
      "A key is pressed down and that key normally produces a character value (use input instead).",
    modifiers: event.modifiers,
  },
  {
    label: "@keyup",
    description: "A key is released.",
    modifiers: event.modifiers,
  },
  {
    label: "@load",
    description:
      "A resource and its dependent resources have finished loading.",
    modifiers: event.modifiers,
  },
  {
    label: "@loadeddata",
    description: "The first frame of the media has finished loading.",
    modifiers: event.modifiers,
  },
  {
    label: "@loadedmetadata",
    description: "The metadata has been loaded.",
    modifiers: event.modifiers,
  },
  {
    label: "@loadstart",
    description: "Progress has begun.",
    modifiers: event.modifiers,
  },
  {
    label: "@mousedown",
    description:
      "A pointing device button (usually a mouse) is pressed on an element.",
    modifiers: event.modifiers,
  },
  {
    label: "@mousemove",
    description: "A pointing device is moved over an element.",
    modifiers: event.modifiers,
  },
  {
    label: "@mouseout",
    description:
      "A pointing device is moved off the element that has the listener attached or off one of its children.",
    modifiers: event.modifiers,
  },
  {
    label: "@mouseover",
    description:
      "A pointing device is moved onto the element that has the listener attached or onto one of its children.",
    modifiers: event.modifiers,
  },
  {
    label: "@mouseup",
    description: "A pointing device button is released over an element.",
    modifiers: event.modifiers,
  },
  {
    label: "@pause",
    description: "Playback has been paused.",
    modifiers: event.modifiers,
  },
  {
    label: "@play",
    description: "Playback has begun.",
    modifiers: event.modifiers,
  },
  {
    label: "@playing",
    description:
      "Playback is ready to start after having been paused or delayed due to lack of data.",
    modifiers: event.modifiers,
  },
  {
    label: "@progress",
    description: "In progress.",
    modifiers: event.modifiers,
  },
  {
    label: "@ratechange",
    description: "The playback rate has changed.",
    modifiers: event.modifiers,
  },
  {
    label: "@reset",
    description: "A form is reset.",
    modifiers: event.modifiers,
  },
  {
    label: "@resize",
    description: "The document view has been resized.",
    modifiers: event.modifiers,
  },
  {
    label: "@readystatechange",
    description: "The readyState attribute of a document has changed.",
    modifiers: event.modifiers,
  },
  {
    label: "@scroll",
    description: "The document view or an element has been scrolled.",
    modifiers: event.modifiers,
  },
  {
    label: "@seeked",
    description: "A seek operation completed.",
    modifiers: event.modifiers,
  },
  {
    label: "@seeking",
    description: "A seek operation began.",
    modifiers: event.modifiers,
  },
  {
    label: "@select",
    description: "Some text is being selected.",
    modifiers: event.modifiers,
  },
  {
    label: "@show",
    description:
      "A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute",
    modifiers: event.modifiers,
  },
  {
    label: "@stalled",
    description:
      "The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.",
    modifiers: event.modifiers,
  },
  {
    label: "@submit",
    description: "A form is submitted.",
    modifiers: event.modifiers,
  },
  {
    label: "@suspend",
    description: "Media data loading has been suspended.",
    modifiers: event.modifiers,
  },
  {
    label: "@timeupdate",
    description:
      "The time indicated by the currentTime attribute has been updated.",
    modifiers: event.modifiers,
  },
  {
    label: "@volumechange",
    description: "The volume has changed.",
    modifiers: event.modifiers,
  },
  {
    label: "@waiting",
    description: "Playback has stopped because of a temporary lack of data.",
    modifiers: event.modifiers,
  },
]
