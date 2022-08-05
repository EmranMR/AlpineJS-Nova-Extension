//import modifiers
let event = require('./Modifiers/EventModifiers.js')

exports.attributes = [
	{
		label: '@abort',
		documentation: 'The loading of a resource has been aborted.',
		modifiers: event.modifiers,
	},
	{
		label: '@blur',
		documentation: 'An element has lost focus (does not bubble).',
		modifiers: event.modifiers,
	},
	{
		label: '@canplay',
		documentation:
			'The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.',
		modifiers: event.modifiers,
	},
	{
		label: '@canplaythrough',
		documentation:
			'The user agent can play the media up to its end without having to stop for further buffering of content.',
		modifiers: event.modifiers,
	},
	{
		label: '@change',
		documentation:
			'The change event is fired for \u003Cinput\u003E, \u003Cselect\u003E, and \u003Ctextarea\u003E elements when a change to the element\u0027s value is committed by the user.',
		modifiers: event.modifiers,
	},
	{
		label: '@click',
		documentation:
			'A pointing device button has been pressed and released on an element.',
		modifiers: event.modifiers,
	},
	{
		label: '@contextmenu',
		documentation:
			'The right button of the mouse is clicked (before the context menu is displayed).',
		modifiers: event.modifiers,
	},
	{
		label: '@dblclick',
		documentation: 'A pointing device button is clicked twice on an element.',
		modifiers: event.modifiers,
	},
	{
		label: '@drag',
		documentation:
			'An element or text selection is being dragged (every 350ms).',
		modifiers: event.modifiers,
	},
	{
		label: '@dragend',
		documentation:
			'A drag operation is being ended (by releasing a mouse button or hitting the escape key).',
		modifiers: event.modifiers,
	},
	{
		label: '@dragenter',
		documentation:
			'A dragged element or text selection enters a valid drop target.',
		modifiers: event.modifiers,
	},
	{
		label: '@dragleave',
		documentation:
			'A dragged element or text selection leaves a valid drop target.',
		modifiers: event.modifiers,
	},
	{
		label: '@dragover',
		documentation:
			'An element or text selection is being dragged over a valid drop target (every 350ms).',
		modifiers: event.modifiers,
	},
	{
		label: '@dragstart',
		documentation: 'The user starts dragging an element or text selection.',
		modifiers: event.modifiers,
	},
	{
		label: '@drop',
		documentation: 'An element is dropped on a valid drop target.',
		modifiers: event.modifiers,
	},
	{
		label: '@durationchange',
		documentation: 'The duration attribute has been updated.',
		modifiers: event.modifiers,
	},
	{
		label: '@emptied',
		documentation:
			'The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.',
		modifiers: event.modifiers,
	},
	{
		label: '@ended',
		documentation:
			'Playback has stopped because the end of the media was reached.',
		modifiers: event.modifiers,
	},
	{
		label: '@error',
		documentation: 'A resource failed to load.',
		modifiers: event.modifiers,
	},
	{
		label: '@focus',
		documentation: 'An element has received focus (does not bubble).',
		modifiers: event.modifiers,
	},
	{
		label: '@input',
		documentation:
			'The value of an element changes or the content of an element with the attribute contenteditable is modified.',
		modifiers: event.modifiers,
	},
	{
		label: '@invalid',
		documentation:
			'A submittable element has been checked and doesn\u0027t satisfy its constraints.',
		modifiers: event.modifiers,
	},
	{
		label: '@keydown',
		documentation: 'A key is pressed down.',
		modifiers: event.modifiers,
		body: 'keydown.$0="$1"',
	},
	{
		label: '@keyup',
		documentation: 'A key is released.',
		modifiers: event.modifiers,
		body: 'keyup.$0="$1"',
	},
	{
		label: '@load',
		documentation:
			'A resource and its dependent resources have finished loading.',
		modifiers: event.modifiers,
	},
	{
		label: '@loadeddata',
		documentation: 'The first frame of the media has finished loading.',
		modifiers: event.modifiers,
	},
	{
		label: '@loadedmetadata',
		documentation: 'The metadata has been loaded.',
		modifiers: event.modifiers,
	},
	{
		label: '@loadstart',
		documentation: 'Progress has begun.',
		modifiers: event.modifiers,
	},
	{
		label: '@mousedown',
		documentation:
			'A pointing device button (usually a mouse) is pressed on an element.',
		modifiers: event.modifiers,
	},
	{
		label: '@mousemove',
		documentation: 'A pointing device is moved over an element.',
		modifiers: event.modifiers,
	},
	{
		label: '@mouseout',
		documentation:
			'A pointing device is moved off the element that has the listener attached or off one of its children.',
		modifiers: event.modifiers,
	},
	{
		label: '@mouseover',
		documentation:
			'A pointing device is moved onto the element that has the listener attached or onto one of its children.',
		modifiers: event.modifiers,
	},
	{
		label: '@mouseup',
		documentation: 'A pointing device button is released over an element.',
		modifiers: event.modifiers,
	},
	{
		label: '@pause',
		documentation: 'Playback has been paused.',
		modifiers: event.modifiers,
	},
	{
		label: '@play',
		documentation: 'Playback has begun.',
		modifiers: event.modifiers,
	},
	{
		label: '@playing',
		documentation:
			'Playback is ready to start after having been paused or delayed due to lack of data.',
		modifiers: event.modifiers,
	},
	{
		label: '@progress',
		documentation: 'In progress.',
		modifiers: event.modifiers,
	},
	{
		label: '@ratechange',
		documentation: 'The playback rate has changed.',
		modifiers: event.modifiers,
	},
	{
		label: '@reset',
		documentation: 'A form is reset.',
		modifiers: event.modifiers,
	},
	{
		label: '@resize',
		documentation: 'The document view has been resized.',
		modifiers: event.modifiers,
	},
	{
		label: '@readystatechange',
		documentation: 'The readyState attribute of a document has changed.',
		modifiers: event.modifiers,
	},
	{
		label: '@scroll',
		documentation: 'The document view or an element has been scrolled.',
		modifiers: event.modifiers,
	},
	{
		label: '@seeked',
		documentation: 'A seek operation completed.',
		modifiers: event.modifiers,
	},
	{
		label: '@seeking',
		documentation: 'A seek operation began.',
		modifiers: event.modifiers,
	},
	{
		label: '@select',
		documentation: 'Some text is being selected.',
		modifiers: event.modifiers,
	},
	{
		label: '@show',
		documentation:
			'A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute',
		modifiers: event.modifiers,
	},
	{
		label: '@stalled',
		documentation:
			'The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.',
		modifiers: event.modifiers,
	},
	{
		label: '@submit',
		documentation: 'A form is submitted.',
		modifiers: event.modifiers,
	},
	{
		label: '@suspend',
		documentation: 'Media data loading has been suspended.',
		modifiers: event.modifiers,
	},
	{
		label: '@timeupdate',
		documentation:
			'The time indicated by the currentTime attribute has been updated.',
		modifiers: event.modifiers,
	},
	{
		label: '@volumechange',
		documentation: 'The volume has changed.',
		modifiers: event.modifiers,
	},
	{
		label: '@waiting',
		documentation: 'Playback has stopped because of a temporary lack of data.',
		modifiers: event.modifiers,
	},
]
