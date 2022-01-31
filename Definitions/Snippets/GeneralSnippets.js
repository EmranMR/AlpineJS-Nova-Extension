// This needs to be inserted in the html body scope
// use this for matching if context.selector[0] does not exist
exports.html = [
  {
    detail: 'Alpine.js x-if',
    label: 'x-if',
    body: '<template x-if="${1:true}">\n\t$0\n</template>',
  },
  {
    detail: 'Alpine.js x-for',
    label: 'x-for',
    body: '<template x-for="${1:item} in ${2:items}">\n\t$0\n</template>',
  },
  {
    detail: 'Alpine.js x-for with :key',
    label: 'x-for-key',
    body: '<template x-for="${1:item} in ${2:items}" :key="${3:item}">\n\t$0\n</template>',
  },
  {
    detail: 'Alpine.js x-for with index',
    label: 'x-for-index',
    body: '<template x-for="(${1:item}, ${2:index}) in ${3:items}\n" :key="$2">\n\t$0\n</template>',
  },
  { detail: 'Alpine.js x-show', label: 'x-show', body: 'x-show="$0"' },

  {
    detail: 'Alpine.js $el',
    label: '$el',
    body: '\\$el',
    documentation:
      '$el is a magic property that can be used to retrieve the root component DOM node.',
  },
  {
    detail: 'Alpine.js $refs',
    label: '$refs',
    body: '\\$refs.${1:name}',
    documentation:
      '$refs is a magic property that can be used to retrieve DOM elements marked with x-ref inside the component. This is useful when you need to manually manipulate DOM elements.',
  },
  {
    detail: 'Alpine.js $event',
    label: '$event',
    body: '\\$event',
    documentation:
      '$event is a magic property that can be used within an event listener to retrieve the native browser Event object.',
  },
  {
    detail: 'Alpine.js $dispatch',
    label: '$dispatch',
    body: "\\$dispatch('${1:custom-event}', ${2:{ foo: 'bar' \\}})",
    documentation:
      "$dispatch is a shortcut for creating a CustomEvent and dispatching it using .dispatchEvent() internally. You will notice that any data passed as the second parameter to $dispatch('some-event', { some: 'data' }), becomes available through the new events detail property: $event.detail.some.",
  },
  {
    detail: 'Alpine.js $nextTick',
    label: '$nextTick',
    body: '\\$nextTick(${1:() => { console.log(\\$event.target.innerText) \\}});',
    documentation:
      "$nextTick is a magic property that allows you to only execute a given expression AFTER Alpine has made its reactive DOM updates. This is useful for times you want to interact with the DOM state AFTER it's reflected any data updates you've made.",
  },
  {
    detail: 'Alpine.js $watch',
    label: '$watch',
    body: "\\$watch('${1:open}', ${2:value => console.log(value)})",
    documentation:
      'You can "watch" a component property with the $watch magic method. In the above example, when the button is clicked and open is changed, the provided callback will fire and console.log the new value.',
  },

  {
    detail: 'Alpine.js CDN',
    label: 'alpine-cdn',
    body: '<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v${1:2.x.x}/dist/alpine.js" defer></script>',
    documentation:
      'Add the following script to the end of your <head> section.',
  },
]
