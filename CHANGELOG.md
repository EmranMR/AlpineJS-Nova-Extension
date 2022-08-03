## Version 1.0

Initial release

## Version 1.0.1

fixed the broken photo link for md file

## Version 1.0.2

Bug fix: The bracket autocompletion now only applies to the x-data attribute.

## Version 1.0.3

Bug fix: outputting double "@" sign or ":" for directives that start with them such as @click or :class

## version 1.0.5

Language Support: The extension now supports Ruby on Rails html.erb files as well as .liquid files ✅

## version 1.0.6

Snippet Update: Alpine-CDN snippet has been updated to the lates version (3.x.x) ⤴️

## version 1.0.7

New Directive: Support for Alpine Mask (x-mask & x-mask:dynamic)

## version 1.0.10

Annoying pesky bug 🐞 fix (the colon : bug) and new features addition:

- **Bug Fix**:
  - Issue resulting in removal of (:) from the directives
  - Such as (:) in x-on:click (x-onclick ➡️ x-on:click) etc...
- **Enhancement:**

  - More sound directive expansion/snippet depending on the directive
  - e.g x-cloak x-ignore expand correctly
  - In x-bind: & x-on: the cursor falls in the correct position
  - better keyup and keydown insertion position/snippet

- **New Directives:**
  - x-ignore
  - :style
  - x-modelable
  - x-teleport
  - x-id
