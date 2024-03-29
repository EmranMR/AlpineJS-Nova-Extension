///keyup and keydown modifers
let keyboard = require('./Modifiers/KeyboardModifiers.js')

exports.attributes = [
	{
		label: 'x-data',
		documentation:
			'\u0060x-data\u0060 declares a new component scope. It tells the framework to initialize a new component with the following data object.\n\nThink of it like the \u0060data\u0060 property of a Vue component.\n\n**Example:** \u0060\u003Cdiv x-data=\u0022{ foo: \u0027bar\u0027 }\u0022\u003E...\u003C/div\u003E\u0060\n\n**Structure:** \u0060\u003Cdiv x-data=\u0022[JSON data object]\u0022\u003E...\u003C/div\u003E\u0060',
		body: 'x-data="{$0}"',
	},
	{
		label: 'x-init',
		documentation:
			'\u0060x-init\u0060 runs an expression when a component is initialized.\n\nIf you wish to run code AFTER Alpine has made its initial updates to the DOM (something like a \u0060mounted()\u0060 hook in VueJS), you can return a callback from \u0060x-init\u0060, and it will be run after:\n\n\u0060x-init=\u0022return () =\u003E { // we have access to the post-dom-initialization state here // }\u0022\u0060',
	},
	{
		label: 'x-show',
		documentation:
			'\u0060x-show\u0060 toggles the \u0060display: none;\u0060 style on the element depending if the expression resolves to \u0060true\u0060 or \u0060false\u0060.\n\n**Example:** \u0060\u003Cdiv x-show=\u0022open\u0022\u003E\u003C/div\u003E\u0060\n\n**Structure:** \u0060\u003Cdiv x-show=\u0022[expression]\u0022\u003E\u003C/div\u003E\u0060',
		modifiers: [
			{
				detail: 'Alpine.js .transition',
				label: '.transition',
				body: '.transition',
				documentation:
					'x-show.transition is a convenience API for making your x-shows more pleasant using CSS transitions.',
			},
		],
	},
	{
		label: 'x-bind:',
		documentation:
			'\u0060x-bind\u0060 sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\u0027s data object, and will update every-time its data is updated.\n\n\u003E Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** \u0060\u003Cinput x-bind:type=\u0022inputType\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput x-bind:[attribute]=\u0022[expression]\u0022\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022:\u0022 syntax: \u0060:type=\u0022...\u0022\u0060\n\n**\u0060x-bind\u0060 for class attributes**\n\n\u0060x-bind\u0060 behaves a little differently when binding to the \u0060class\u0060 attribute.\n\nFor classes, you pass in an object who\u0027s keys are class labels, and values are boolean expressions to determine if those class labels are applied or not.\n\nFor example:\n\u0060\u003Cdiv x-bind:class=\u0022{ \u0027hidden\u0027: foo }\u0022\u003E\u003C/div\u003E\u0060\n\nIn this example, the \u0022hidden\u0022 class will only be applied when the value of the \u0060foo\u0060 data attribute is \u0060true\u0060.\n\n**\u0060x-bind\u0060 for boolean attributes**\n\n\u0060x-bind\u0060 supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to \u0060true\u0060 or \u0060false\u0060.\n\nFor example:\n\u0060\u003Cbutton x-bind:disabled=\u0022myVar\u0022\u003EClick me\u003C/button\u003E\u0060\n\nThis will add or remove the \u0060disabled\u0060 attribute when \u0060myVar\u0060 is true or false respectively.\n\nMost common boolean attributes are supported, like \u0060readonly\u0060, \u0060required\u0060, etc.',
		body: 'x-bind:$0',
	},
	{
		label: 'x-on:',
		documentation:
			'\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
		body: 'x-on:$0',
	},
	{
		label: 'x-model',
		documentation:
			'\u0060x-model\u0060 adds \u0022two-way data binding\u0022 to an element. In other words, the value of the input element will be kept in sync with the value of the data item of the component.\n\n\u003E Note: \u0060x-model\u0060 is smart enough to detect changes on text inputs, checkboxes, radio buttons, textareas, selects, and multiple selects. It should behave [how Vue would](https://vuejs.org/v2/guide/forms.html) in those scenarios.\n\n**Example:** \u0060\u003Cinput type=\u0022text\u0022 x-model=\u0022foo\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput type=\u0022text\u0022 x-model=\u0022[data item]\u0022\u003E\u0060',
	},
	{
		label: 'x-text',
		documentation:
			'\u0060x-text\u0060 works similarly to \u0060x-bind\u0060, except instead of updating the value of an attribute, it will update the \u0060innerText\u0060 of an element.\n\n**Example:** \u0060\u003Cspan x-text=\u0022foo\u0022\u003E\u003C/span\u003E\u0060\n\n**Structure:** \u0060\u003Cspan x-text=\u0022[expression]\u0022\u0060',
	},
	{
		label: 'x-html',
		documentation:
			'\u0060x-html\u0060 works similarly to \u0060x-bind\u0060, except instead of updating the value of an attribute, it will update the \u0060innerHTML\u0060 of an element.\n\n**Example:** \u0060\u003Cspan x-html=\u0022foo\u0022\u003E\u003C/span\u003E\u0060\n\n**Structure:** \u0060\u003Cspan x-html=\u0022[expression]\u0022\u0060',
	},
	{
		label: 'x-ref',
		documentation:
			'\u0060x-ref\u0060 provides a convenient way to retrieve raw DOM elements out of your component. By setting an \u0060x-ref\u0060 attribute on an element, you are making it available to all event handlers inside an object called \u0060$refs\u0060.\n\nThis is a helpful alternative to setting ids and using \u0060document.querySelector\u0060 all over the place.\n\n**Example:** \u0060\u003Cdiv x-ref=\u0022foo\u0022\u003E\u003C/div\u003E\u003Cbutton x-on:click=\u0022$refs.foo.innerText = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cdiv x-ref=\u0022[ref label]\u0022\u003E\u003C/div\u003E\u003Cbutton x-on:click=\u0022$refs.[ref label].innerText = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060',
	},
	{
		label: 'x-if',
		documentation:
			'For cases where \u0060x-show\u0060 isn\u0027t sufficient (\u0060x-show\u0060 sets an element to \u0060display: none\u0060 if it\u0027s false), \u0060x-if\u0060 can be used to  actually remove an element completely from the DOM.\n\nIt\u0027s important that \u0060x-if\u0060 is used on a \u0060\u003Ctemplate\u003E\u003C/template\u003E\u0060 tag because Alpine doesn\u0027t use a virtual DOM. This implementation allows Alpine to stay rugged and use the real DOM to work its magic.\n\n\u003E Note: \u0060x-if\u0060 must have a single element root inside the \u0060\u003Ctemplate\u003E\u003C/template\u003E\u0060 tag.\n\n**Example:** \u0060\u003Ctemplate x-if=\u0022true\u0022\u003E\u003Cdiv\u003ESome Element\u003C/div\u003E\u003C/template\u003E\u0060\n\n**Structure:** \u0060\u003Ctemplate x-if=\u0022[expression]\u0022\u003E\u003Cdiv\u003ESome Element\u003C/div\u003E\u003C/template\u003E\u0060',
	},
	{
		label: 'x-for',
		documentation:
			'\u0060x-for\u0060 is available for cases when you want to create new DOM nodes for each item in an array. This should appear similar to \u0060v-for\u0060 in Vue, with one exception of needing to exist on a \u0060template\u0060 tag, and not a regular DOM element.\n\n\u003E Note: the \u0060:key\u0060 binding is optional, but HIGHLY recommended.\n\n**Example:**\n\u0060\u0060\u0060html\n\u003Ctemplate x-for=\u0022item in items\u0022 :key=\u0022item\u0022\u003E\n    \u003Cdiv x-text=\u0022item\u0022\u003E\u003C/div\u003E\n\u003C/template\u003E\n\u0060\u0060\u0060',
	},
	{
		label: ':key',
		documentation:
			'Optional, but HIGHLY recommended binding for \u0060x-for\u0060 directive.',
	},
	{
		label: 'x-transition:enter',
		documentation:
			'Alpine offers 6 different transition directives for applying classes to various stages of an element\u0027s transition between \u0022hidden\u0022 and \u0022shown\u0022 states. These directives work both with \u0060x-show\u0060 AND \u0060x-if\u0060.\n\nThese behave exactly like VueJs\u0027s transition directives, except they have different, more sensible labels:\n\n| Directive | documentation |\n| --- | --- |\n| \u0060:enter\u0060 | Applied during the entire entering phase. |\n| \u0060:enter-start\u0060 | Added before element is inserted, removed one frame after element is inserted. |\n| \u0060:enter-end\u0060 | Added one frame after element is inserted (at the same time \u0060enter-start\u0060 is removed), removed when transition/animation finishes.\n| \u0060:leave\u0060 | Applied during the entire leaving phase. |\n| \u0060:leave-start\u0060 | Added immediately when a leaving transition is triggered, removed after one frame. |\n| \u0060:leave-end\u0060 | Added one frame after a leaving transition is triggered (at the same time \u0060leave-start\u0060 is removed), removed when the transition/animation finishes.\n\n**Example:**\n\u0060\u0060\u0060html\n\u003Cdiv\n    x-show=\u0022open\u0022\n    x-transition:enter=\u0022transition ease-out duration-300\u0022\n    x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n    x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave=\u0022transition ease-in duration-300\u0022\n    x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n\u003E...\u003C/div\u003E\n\u0060\u0060\u0060\n\n\u0060\u0060\u0060html\n\u003Ctemplate x-if=\u0022open\u0022\u003E\n    \u003Cdiv\n        x-transition:enter=\u0022transition ease-out duration-300\u0022\n        x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n        x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave=\u0022transition ease-in duration-300\u0022\n        x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n    \u003E...\u003C/div\u003E\n\u003C/template\u003E\n\u0060\u0060\u0060',
	},
	{
		label: 'x-transition:enter-start',
		documentation:
			'Alpine offers 6 different transition directives for applying classes to various stages of an element\u0027s transition between \u0022hidden\u0022 and \u0022shown\u0022 states. These directives work both with \u0060x-show\u0060 AND \u0060x-if\u0060.\n\nThese behave exactly like VueJs\u0027s transition directives, except they have different, more sensible labels:\n\n| Directive | documentation |\n| --- | --- |\n| \u0060:enter\u0060 | Applied during the entire entering phase. |\n| \u0060:enter-start\u0060 | Added before element is inserted, removed one frame after element is inserted. |\n| \u0060:enter-end\u0060 | Added one frame after element is inserted (at the same time \u0060enter-start\u0060 is removed), removed when transition/animation finishes.\n| \u0060:leave\u0060 | Applied during the entire leaving phase. |\n| \u0060:leave-start\u0060 | Added immediately when a leaving transition is triggered, removed after one frame. |\n| \u0060:leave-end\u0060 | Added one frame after a leaving transition is triggered (at the same time \u0060leave-start\u0060 is removed), removed when the transition/animation finishes.\n\n**Example:**\n\u0060\u0060\u0060html\n\u003Cdiv\n    x-show=\u0022open\u0022\n    x-transition:enter=\u0022transition ease-out duration-300\u0022\n    x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n    x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave=\u0022transition ease-in duration-300\u0022\n    x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n\u003E...\u003C/div\u003E\n\u0060\u0060\u0060\n\n\u0060\u0060\u0060html\n\u003Ctemplate x-if=\u0022open\u0022\u003E\n    \u003Cdiv\n        x-transition:enter=\u0022transition ease-out duration-300\u0022\n        x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n        x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave=\u0022transition ease-in duration-300\u0022\n        x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n    \u003E...\u003C/div\u003E\n\u003C/template\u003E\n\u0060\u0060\u0060',
	},
	{
		label: 'x-transition:enter-end',
		documentation:
			'Alpine offers 6 different transition directives for applying classes to various stages of an element\u0027s transition between \u0022hidden\u0022 and \u0022shown\u0022 states. These directives work both with \u0060x-show\u0060 AND \u0060x-if\u0060.\n\nThese behave exactly like VueJs\u0027s transition directives, except they have different, more sensible labels:\n\n| Directive | documentation |\n| --- | --- |\n| \u0060:enter\u0060 | Applied during the entire entering phase. |\n| \u0060:enter-start\u0060 | Added before element is inserted, removed one frame after element is inserted. |\n| \u0060:enter-end\u0060 | Added one frame after element is inserted (at the same time \u0060enter-start\u0060 is removed), removed when transition/animation finishes.\n| \u0060:leave\u0060 | Applied during the entire leaving phase. |\n| \u0060:leave-start\u0060 | Added immediately when a leaving transition is triggered, removed after one frame. |\n| \u0060:leave-end\u0060 | Added one frame after a leaving transition is triggered (at the same time \u0060leave-start\u0060 is removed), removed when the transition/animation finishes.\n\n**Example:**\n\u0060\u0060\u0060html\n\u003Cdiv\n    x-show=\u0022open\u0022\n    x-transition:enter=\u0022transition ease-out duration-300\u0022\n    x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n    x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave=\u0022transition ease-in duration-300\u0022\n    x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n\u003E...\u003C/div\u003E\n\u0060\u0060\u0060\n\n\u0060\u0060\u0060html\n\u003Ctemplate x-if=\u0022open\u0022\u003E\n    \u003Cdiv\n        x-transition:enter=\u0022transition ease-out duration-300\u0022\n        x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n        x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave=\u0022transition ease-in duration-300\u0022\n        x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n    \u003E...\u003C/div\u003E\n\u003C/template\u003E\n\u0060\u0060\u0060',
	},
	{
		label: 'x-transition:leave',
		documentation:
			'Alpine offers 6 different transition directives for applying classes to various stages of an element\u0027s transition between \u0022hidden\u0022 and \u0022shown\u0022 states. These directives work both with \u0060x-show\u0060 AND \u0060x-if\u0060.\n\nThese behave exactly like VueJs\u0027s transition directives, except they have different, more sensible labels:\n\n| Directive | documentation |\n| --- | --- |\n| \u0060:enter\u0060 | Applied during the entire entering phase. |\n| \u0060:enter-start\u0060 | Added before element is inserted, removed one frame after element is inserted. |\n| \u0060:enter-end\u0060 | Added one frame after element is inserted (at the same time \u0060enter-start\u0060 is removed), removed when transition/animation finishes.\n| \u0060:leave\u0060 | Applied during the entire leaving phase. |\n| \u0060:leave-start\u0060 | Added immediately when a leaving transition is triggered, removed after one frame. |\n| \u0060:leave-end\u0060 | Added one frame after a leaving transition is triggered (at the same time \u0060leave-start\u0060 is removed), removed when the transition/animation finishes.\n\n**Example:**\n\u0060\u0060\u0060html\n\u003Cdiv\n    x-show=\u0022open\u0022\n    x-transition:enter=\u0022transition ease-out duration-300\u0022\n    x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n    x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave=\u0022transition ease-in duration-300\u0022\n    x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n\u003E...\u003C/div\u003E\n\u0060\u0060\u0060\n\n\u0060\u0060\u0060html\n\u003Ctemplate x-if=\u0022open\u0022\u003E\n    \u003Cdiv\n        x-transition:enter=\u0022transition ease-out duration-300\u0022\n        x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n        x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave=\u0022transition ease-in duration-300\u0022\n        x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n    \u003E...\u003C/div\u003E\n\u003C/template\u003E\n\u0060\u0060\u0060',
	},
	{
		label: 'x-transition:leave-start',
		documentation:
			'Alpine offers 6 different transition directives for applying classes to various stages of an element\u0027s transition between \u0022hidden\u0022 and \u0022shown\u0022 states. These directives work both with \u0060x-show\u0060 AND \u0060x-if\u0060.\n\nThese behave exactly like VueJs\u0027s transition directives, except they have different, more sensible labels:\n\n| Directive | documentation |\n| --- | --- |\n| \u0060:enter\u0060 | Applied during the entire entering phase. |\n| \u0060:enter-start\u0060 | Added before element is inserted, removed one frame after element is inserted. |\n| \u0060:enter-end\u0060 | Added one frame after element is inserted (at the same time \u0060enter-start\u0060 is removed), removed when transition/animation finishes.\n| \u0060:leave\u0060 | Applied during the entire leaving phase. |\n| \u0060:leave-start\u0060 | Added immediately when a leaving transition is triggered, removed after one frame. |\n| \u0060:leave-end\u0060 | Added one frame after a leaving transition is triggered (at the same time \u0060leave-start\u0060 is removed), removed when the transition/animation finishes.\n\n**Example:**\n\u0060\u0060\u0060html\n\u003Cdiv\n    x-show=\u0022open\u0022\n    x-transition:enter=\u0022transition ease-out duration-300\u0022\n    x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n    x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave=\u0022transition ease-in duration-300\u0022\n    x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n\u003E...\u003C/div\u003E\n\u0060\u0060\u0060\n\n\u0060\u0060\u0060html\n\u003Ctemplate x-if=\u0022open\u0022\u003E\n    \u003Cdiv\n        x-transition:enter=\u0022transition ease-out duration-300\u0022\n        x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n        x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave=\u0022transition ease-in duration-300\u0022\n        x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n    \u003E...\u003C/div\u003E\n\u003C/template\u003E\n\u0060\u0060\u0060',
	},
	{
		label: 'x-transition:leave-end',
		documentation:
			'Alpine offers 6 different transition directives for applying classes to various stages of an element\u0027s transition between \u0022hidden\u0022 and \u0022shown\u0022 states. These directives work both with \u0060x-show\u0060 AND \u0060x-if\u0060.\n\nThese behave exactly like VueJs\u0027s transition directives, except they have different, more sensible labels:\n\n| Directive | documentation |\n| --- | --- |\n| \u0060:enter\u0060 | Applied during the entire entering phase. |\n| \u0060:enter-start\u0060 | Added before element is inserted, removed one frame after element is inserted. |\n| \u0060:enter-end\u0060 | Added one frame after element is inserted (at the same time \u0060enter-start\u0060 is removed), removed when transition/animation finishes.\n| \u0060:leave\u0060 | Applied during the entire leaving phase. |\n| \u0060:leave-start\u0060 | Added immediately when a leaving transition is triggered, removed after one frame. |\n| \u0060:leave-end\u0060 | Added one frame after a leaving transition is triggered (at the same time \u0060leave-start\u0060 is removed), removed when the transition/animation finishes.\n\n**Example:**\n\u0060\u0060\u0060html\n\u003Cdiv\n    x-show=\u0022open\u0022\n    x-transition:enter=\u0022transition ease-out duration-300\u0022\n    x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n    x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave=\u0022transition ease-in duration-300\u0022\n    x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n    x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n\u003E...\u003C/div\u003E\n\u0060\u0060\u0060\n\n\u0060\u0060\u0060html\n\u003Ctemplate x-if=\u0022open\u0022\u003E\n    \u003Cdiv\n        x-transition:enter=\u0022transition ease-out duration-300\u0022\n        x-transition:enter-start=\u0022opacity-0 transform scale-90\u0022\n        x-transition:enter-end=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave=\u0022transition ease-in duration-300\u0022\n        x-transition:leave-start=\u0022opacity-100 transform scale-100\u0022\n        x-transition:leave-end=\u0022opacity-0 transform scale-90\u0022\n    \u003E...\u003C/div\u003E\n\u003C/template\u003E\n\u0060\u0060\u0060',
	},
	{
		label: 'x-on:abort',
		documentation:
			'The loading of a resource has been aborted.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:blur',
		documentation:
			'An element has lost focus (does not bubble).\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:canplay',
		documentation:
			'The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:canplaythrough',
		documentation:
			'The user agent can play the media up to its end without having to stop for further buffering of content.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:change',
		documentation:
			'The change event is fired for \u003Cinput\u003E, \u003Cselect\u003E, and \u003Ctextarea\u003E elements when a change to the element\u0027s value is committed by the user.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:click',
		documentation:
			'A pointing device button has been pressed and released on an element.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:contextmenu',
		documentation:
			'The right button of the mouse is clicked (before the context menu is displayed).\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:dblclick',
		documentation:
			'A pointing device button is clicked twice on an element.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:drag',
		documentation:
			'An element or text selection is being dragged (every 350ms).\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:dragend',
		documentation:
			'A drag operation is being ended (by releasing a mouse button or hitting the escape key).\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:dragenter',
		documentation:
			'A dragged element or text selection enters a valid drop target.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:dragleave',
		documentation:
			'A dragged element or text selection leaves a valid drop target.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:dragover',
		documentation:
			'An element or text selection is being dragged over a valid drop target (every 350ms).\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:dragstart',
		documentation:
			'The user starts dragging an element or text selection.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:drop',
		documentation:
			'An element is dropped on a valid drop target.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:durationchange',
		documentation:
			'The duration attribute has been updated.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:emptied',
		documentation:
			'The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:ended',
		documentation:
			'Playback has stopped because the end of the media was reached.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:error',
		documentation:
			'A resource failed to load.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:focus',
		documentation:
			'An element has received focus (does not bubble).\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:input',
		documentation:
			'The value of an element changes or the content of an element with the attribute contenteditable is modified.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:invalid',
		documentation:
			'A submittable element has been checked and doesn\u0027t satisfy its constraints.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:keydown',
		documentation:
			'A key is pressed down.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
		modifiers: keyboard.modifiers,
		body: 'x-on:keydown.$0="$1"',
	},
	{
		label: 'x-on:keyup',
		documentation:
			'A key is released.\n\n---sn\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
		modifiers: keyboard.modifiers,
		body: 'x-on:keyup.$0="$1"',
	},
	{
		label: 'x-on:load',
		documentation:
			'A resource and its dependent resources have finished loading.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:loadeddata',
		documentation:
			'The first frame of the media has finished loading.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:loadedmetadata',
		documentation:
			'The metadata has been loaded.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:loadstart',
		documentation:
			'Progress has begun.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:mousedown',
		documentation:
			'A pointing device button (usually a mouse) is pressed on an element.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:mousemove',
		documentation:
			'A pointing device is moved over an element.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:mouseout',
		documentation:
			'A pointing device is moved off the element that has the listener attached or off one of its children.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:mouseover',
		documentation:
			'A pointing device is moved onto the element that has the listener attached or onto one of its children.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:mouseup',
		documentation:
			'A pointing device button is released over an element.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:pause',
		documentation:
			'Playback has been paused.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:play',
		documentation:
			'Playback has begun.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:playing',
		documentation:
			'Playback is ready to start after having been paused or delayed due to lack of data.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:progress',
		documentation:
			'In progress.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:ratechange',
		documentation:
			'The playback rate has changed.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:reset',
		documentation:
			'A form is reset.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:resize',
		documentation:
			'The document view has been resized.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:readystatechange',
		documentation:
			'The readyState attribute of a document has changed.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:scroll',
		documentation:
			'The document view or an element has been scrolled.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:seeked',
		documentation:
			'A seek operation completed.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:seeking',
		documentation:
			'A seek operation began.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:select',
		documentation:
			'Some text is being selected.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:show',
		documentation:
			'A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:stalled',
		documentation:
			'The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:submit',
		documentation:
			'A form is submitted.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:suspend',
		documentation:
			'Media data loading has been suspended.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:timeupdate',
		documentation:
			'The time indicated by the currentTime attribute has been updated.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:volumechange',
		documentation:
			'The volume has changed.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-on:waiting',
		documentation:
			'Playback has stopped because of a temporary lack of data.\n\n---\n\n\u0060x-on\u0060 attaches an event listener to the element it\u0027s declared on. When that event is emitted, the JavaScript expression set as its value is executed.\n\nIf any data is modified in the expression, other element attributes \u0022bound\u0022 to this data, will be updated.\n\n**Example:** \u0060\u003Cbutton x-on:click=\u0022foo = \u0027bar\u0027\u0022\u003E\u003C/button\u003E\u0060\n\n**Structure:** \u0060\u003Cbutton x-on:[event]=\u0022[expression]\u0022\u003E\u003C/button\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022@\u0022 syntax: \u0060@click=\u0022...\u0022\u0060',
	},
	{
		label: 'x-bind:class',
		documentation:
			'A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors) or functions like the method [\u0060Document.getElementsByClasslabel()\u0060](/en-US/docs/Web/API/Document/getElementsByClasslabel \u0022returns an array-like object of all child elements which have all of the given class labels.\u0022).\n\n---\n\n\u0060x-bind\u0060 sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\u0027s data object, and will update every-time its data is updated.\n\n\u003E Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** \u0060\u003Cinput x-bind:type=\u0022inputType\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput x-bind:[attribute]=\u0022[expression]\u0022\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022:\u0022 syntax: \u0060:type=\u0022...\u0022\u0060\n\n**\u0060x-bind\u0060 for class attributes**\n\n\u0060x-bind\u0060 behaves a little differently when binding to the \u0060class\u0060 attribute.\n\nFor classes, you pass in an object who\u0027s keys are class labels, and values are boolean expressions to determine if those class labels are applied or not.\n\nFor example:\n\u0060\u003Cdiv x-bind:class=\u0022{ \u0027hidden\u0027: foo }\u0022\u003E\u003C/div\u003E\u0060\n\nIn this example, the \u0022hidden\u0022 class will only be applied when the value of the \u0060foo\u0060 data attribute is \u0060true\u0060.\n\n**\u0060x-bind\u0060 for boolean attributes**\n\n\u0060x-bind\u0060 supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to \u0060true\u0060 or \u0060false\u0060.\n\nFor example:\n\u0060\u003Cbutton x-bind:disabled=\u0022myVar\u0022\u003EClick me\u003C/button\u003E\u0060\n\nThis will add or remove the \u0060disabled\u0060 attribute when \u0060myVar\u0060 is true or false respectively.\n\nMost common boolean attributes are supported, like \u0060readonly\u0060, \u0060required\u0060, etc.',
	},
	{
		label: 'x-bind:disabled',
		documentation:
			'This Boolean attribute indicates that the user cannot interact with the control.\n\n---\n\n\u0060x-bind\u0060 sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\u0027s data object, and will update every-time its data is updated.\n\n\u003E Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** \u0060\u003Cinput x-bind:type=\u0022inputType\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput x-bind:[attribute]=\u0022[expression]\u0022\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022:\u0022 syntax: \u0060:type=\u0022...\u0022\u0060\n\n**\u0060x-bind\u0060 for class attributes**\n\n\u0060x-bind\u0060 behaves a little differently when binding to the \u0060class\u0060 attribute.\n\nFor classes, you pass in an object who\u0027s keys are class labels, and values are boolean expressions to determine if those class labels are applied or not.\n\nFor example:\n\u0060\u003Cdiv x-bind:class=\u0022{ \u0027hidden\u0027: foo }\u0022\u003E\u003C/div\u003E\u0060\n\nIn this example, the \u0022hidden\u0022 class will only be applied when the value of the \u0060foo\u0060 data attribute is \u0060true\u0060.\n\n**\u0060x-bind\u0060 for boolean attributes**\n\n\u0060x-bind\u0060 supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to \u0060true\u0060 or \u0060false\u0060.\n\nFor example:\n\u0060\u003Cbutton x-bind:disabled=\u0022myVar\u0022\u003EClick me\u003C/button\u003E\u0060\n\nThis will add or remove the \u0060disabled\u0060 attribute when \u0060myVar\u0060 is true or false respectively.\n\nMost common boolean attributes are supported, like \u0060readonly\u0060, \u0060required\u0060, etc.',
	},
	{
		label: 'x-bind:readonly',
		documentation:
			'This Boolean attribute indicates that the user cannot modify the value of the control.\n\n---\n\n\u0060x-bind\u0060 sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\u0027s data object, and will update every-time its data is updated.\n\n\u003E Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** \u0060\u003Cinput x-bind:type=\u0022inputType\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput x-bind:[attribute]=\u0022[expression]\u0022\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022:\u0022 syntax: \u0060:type=\u0022...\u0022\u0060\n\n**\u0060x-bind\u0060 for class attributes**\n\n\u0060x-bind\u0060 behaves a little differently when binding to the \u0060class\u0060 attribute.\n\nFor classes, you pass in an object who\u0027s keys are class labels, and values are boolean expressions to determine if those class labels are applied or not.\n\nFor example:\n\u0060\u003Cdiv x-bind:class=\u0022{ \u0027hidden\u0027: foo }\u0022\u003E\u003C/div\u003E\u0060\n\nIn this example, the \u0022hidden\u0022 class will only be applied when the value of the \u0060foo\u0060 data attribute is \u0060true\u0060.\n\n**\u0060x-bind\u0060 for boolean attributes**\n\n\u0060x-bind\u0060 supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to \u0060true\u0060 or \u0060false\u0060.\n\nFor example:\n\u0060\u003Cbutton x-bind:disabled=\u0022myVar\u0022\u003EClick me\u003C/button\u003E\u0060\n\nThis will add or remove the \u0060disabled\u0060 attribute when \u0060myVar\u0060 is true or false respectively.\n\nMost common boolean attributes are supported, like \u0060readonly\u0060, \u0060required\u0060, etc.',
	},
	{
		label: 'x-bind:required',
		documentation:
			'This attribute specifies that the user must fill in a value before submitting a form.\n\n---\n\n\u0060x-bind\u0060 sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\u0027s data object, and will update every-time its data is updated.\n\n\u003E Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** \u0060\u003Cinput x-bind:type=\u0022inputType\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput x-bind:[attribute]=\u0022[expression]\u0022\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022:\u0022 syntax: \u0060:type=\u0022...\u0022\u0060\n\n**\u0060x-bind\u0060 for class attributes**\n\n\u0060x-bind\u0060 behaves a little differently when binding to the \u0060class\u0060 attribute.\n\nFor classes, you pass in an object who\u0027s keys are class labels, and values are boolean expressions to determine if those class labels are applied or not.\n\nFor example:\n\u0060\u003Cdiv x-bind:class=\u0022{ \u0027hidden\u0027: foo }\u0022\u003E\u003C/div\u003E\u0060\n\nIn this example, the \u0022hidden\u0022 class will only be applied when the value of the \u0060foo\u0060 data attribute is \u0060true\u0060.\n\n**\u0060x-bind\u0060 for boolean attributes**\n\n\u0060x-bind\u0060 supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to \u0060true\u0060 or \u0060false\u0060.\n\nFor example:\n\u0060\u003Cbutton x-bind:disabled=\u0022myVar\u0022\u003EClick me\u003C/button\u003E\u0060\n\nThis will add or remove the \u0060disabled\u0060 attribute when \u0060myVar\u0060 is true or false respectively.\n\nMost common boolean attributes are supported, like \u0060readonly\u0060, \u0060required\u0060, etc.',
	},
	{
		label: 'x-bind:checked',
		documentation:
			'Indicates the current \u0022checked\u0022 state of checkboxes, radio buttons, and other widgets.\n\n---\n\n\u0060x-bind\u0060 sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\u0027s data object, and will update every-time its data is updated.\n\n\u003E Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** \u0060\u003Cinput x-bind:type=\u0022inputType\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput x-bind:[attribute]=\u0022[expression]\u0022\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022:\u0022 syntax: \u0060:type=\u0022...\u0022\u0060\n\n**\u0060x-bind\u0060 for class attributes**\n\n\u0060x-bind\u0060 behaves a little differently when binding to the \u0060class\u0060 attribute.\n\nFor classes, you pass in an object who\u0027s keys are class labels, and values are boolean expressions to determine if those class labels are applied or not.\n\nFor example:\n\u0060\u003Cdiv x-bind:class=\u0022{ \u0027hidden\u0027: foo }\u0022\u003E\u003C/div\u003E\u0060\n\nIn this example, the \u0022hidden\u0022 class will only be applied when the value of the \u0060foo\u0060 data attribute is \u0060true\u0060.\n\n**\u0060x-bind\u0060 for boolean attributes**\n\n\u0060x-bind\u0060 supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to \u0060true\u0060 or \u0060false\u0060.\n\nFor example:\n\u0060\u003Cbutton x-bind:disabled=\u0022myVar\u0022\u003EClick me\u003C/button\u003E\u0060\n\nThis will add or remove the \u0060disabled\u0060 attribute when \u0060myVar\u0060 is true or false respectively.\n\nMost common boolean attributes are supported, like \u0060readonly\u0060, \u0060required\u0060, etc.',
	},
	{
		label: 'x-bind:hidden',
		documentation:
			'A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can\u0027t be used until the login process has been completed. The browser won\u0027t render such elements. This attribute must not be used to hide content that could legitimately be shown.\n\n---\n\n\u0060x-bind\u0060 sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\u0027s data object, and will update every-time its data is updated.\n\n\u003E Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** \u0060\u003Cinput x-bind:type=\u0022inputType\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput x-bind:[attribute]=\u0022[expression]\u0022\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022:\u0022 syntax: \u0060:type=\u0022...\u0022\u0060\n\n**\u0060x-bind\u0060 for class attributes**\n\n\u0060x-bind\u0060 behaves a little differently when binding to the \u0060class\u0060 attribute.\n\nFor classes, you pass in an object who\u0027s keys are class labels, and values are boolean expressions to determine if those class labels are applied or not.\n\nFor example:\n\u0060\u003Cdiv x-bind:class=\u0022{ \u0027hidden\u0027: foo }\u0022\u003E\u003C/div\u003E\u0060\n\nIn this example, the \u0022hidden\u0022 class will only be applied when the value of the \u0060foo\u0060 data attribute is \u0060true\u0060.\n\n**\u0060x-bind\u0060 for boolean attributes**\n\n\u0060x-bind\u0060 supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to \u0060true\u0060 or \u0060false\u0060.\n\nFor example:\n\u0060\u003Cbutton x-bind:disabled=\u0022myVar\u0022\u003EClick me\u003C/button\u003E\u0060\n\nThis will add or remove the \u0060disabled\u0060 attribute when \u0060myVar\u0060 is true or false respectively.\n\nMost common boolean attributes are supported, like \u0060readonly\u0060, \u0060required\u0060, etc.',
	},
	{
		label: 'x-bind:selected',
		documentation:
			'If present, this Boolean attribute indicates that the option is initially selected. If the \u0060\u003Coption\u003E\u0060 element is the descendant of a [\u0060\u003Cselect\u003E\u0060](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select \u0022The HTML \u003Cselect\u003E element represents a control that provides a menu of options\u0022) element whose [\u0060multiple\u0060](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute is not set, only one single \u0060\u003Coption\u003E\u0060 of this [\u0060\u003Cselect\u003E\u0060](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select \u0022The HTML \u003Cselect\u003E element represents a control that provides a menu of options\u0022) element may have the \u0060selected\u0060 attribute.\n\n---\n\n\u0060x-bind\u0060 sets the value of an attribute to the result of a JavaScript expression. The expression has access to all the keys of the component\u0027s data object, and will update every-time its data is updated.\n\n\u003E Note: attribute bindings ONLY update when their dependencies update. The framework is smart enough to observe data changes and detect which bindings care about them.\n\n**Example:** \u0060\u003Cinput x-bind:type=\u0022inputType\u0022\u003E\u0060\n\n**Structure:** \u0060\u003Cinput x-bind:[attribute]=\u0022[expression]\u0022\u003E\u0060\n\n\u003E Note: You are free to use the shorter \u0022:\u0022 syntax: \u0060:type=\u0022...\u0022\u0060\n\n**\u0060x-bind\u0060 for class attributes**\n\n\u0060x-bind\u0060 behaves a little differently when binding to the \u0060class\u0060 attribute.\n\nFor classes, you pass in an object who\u0027s keys are class labels, and values are boolean expressions to determine if those class labels are applied or not.\n\nFor example:\n\u0060\u003Cdiv x-bind:class=\u0022{ \u0027hidden\u0027: foo }\u0022\u003E\u003C/div\u003E\u0060\n\nIn this example, the \u0022hidden\u0022 class will only be applied when the value of the \u0060foo\u0060 data attribute is \u0060true\u0060.\n\n**\u0060x-bind\u0060 for boolean attributes**\n\n\u0060x-bind\u0060 supports boolean attributes in the same way that value attributes, using a variable as the condition or any JavaScript expression that resolves to \u0060true\u0060 or \u0060false\u0060.\n\nFor example:\n\u0060\u003Cbutton x-bind:disabled=\u0022myVar\u0022\u003EClick me\u003C/button\u003E\u0060\n\nThis will add or remove the \u0060disabled\u0060 attribute when \u0060myVar\u0060 is true or false respectively.\n\nMost common boolean attributes are supported, like \u0060readonly\u0060, \u0060required\u0060, etc.',
	},
	{
		label: 'x-mask',
		documentation:
			"Alpine's Mask plugin allows you to automatically format a text input field as a user types. This is useful for many different types of inputs: phone numbers, credit cards, dollar amounts, account numbers, dates, etc.",
	},
	{
		label: 'x-mask:dynamic',
		documentation:
			'x-mask:dynamic allows you to dynamically generate masks on the fly based on user input.',
	},
	{
		label: 'x-modelable',
		documentation:
			'x-modelable allows you to expose any Alpine property as the target of the x-model directive.',
	},
	{
		label: 'x-id',
		documentation:
			'x-id allows you to declare a new "scope" for any new IDs generated using $id(). It accepts an array of strings (ID names) and adds a suffix to each $id("...") generated within it that is unique to other IDs on the page.',
	},
	{
		label: 'x-teleport',
		documentation:
			'The x-teleport directive allows you to transport part of your Alpine template to another part of the DOM on the page entirely.',
	},
	{
		label: 'x-ignore',
		documentation:
			"If for some reason, you don't want Alpine to touch a specific section of your HTML, you can prevent it from doing so using x-ignore. By default, Alpine will crawl and initialize the entire DOM tree of an element containing x-init or x-data.",
		body: 'x-ignore',
	},
	{
		label: 'x-cloak',
		documentation:
			'Sometimes, when you\'re using AlpineJS for a part of your template, there is a "blip" where you might see your uninitialized template after the page loads, but before Alpine loads.x-cloak addresses this scenario by hiding the element it\'s attached to until Alpine is fully loaded on the page.',
		body: 'x-cloak',
	},
]
