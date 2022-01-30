// these are the common attributes which are shorthanded
// example :placeholder such as :class=""
exports.attributes = [
  {
    name: "class",
    description:
      'A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](/en-US/docs/Web/API/Document/getElementsByClassName "returns an array-like object of all child elements which have all of the given class names.").',
  },
  {
    name: "disabled",
    description:
      "This Boolean attribute indicates that the user cannot interact with the control.",
  },
  {
    name: "readonly",
    description:
      "This Boolean attribute indicates that the user cannot modify the value of the control.",
  },
  {
    name: "required",
    description:
      "This attribute specifies that the user must fill in a value before submitting a form.",
  },
  {
    name: "checked",
    description:
      'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
  },
  {
    name: "hidden",
    description:
      "A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.",
  },
  {
    name: "selected",
    description:
      'If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element whose [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute is not set, only one single `<option>` of this [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element may have the `selected` attribute.',
  },
]
