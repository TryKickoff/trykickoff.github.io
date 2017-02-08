---
title: Linting in Kickoff
layout: docs
navgroup: docs
navactive: docslinting
meta:
  description: Understand how we use CSS in Kickoff
next:
- title: Kickoff's Javascript
  body: Minimal and flexible, we show you how Kickoff structures it’s JS.
  link: js.html
- title: Tooling
  body: We’ll take you through Kickoff's tooling options and configuration
  link: tooling.html
---
## CSS linting
Our Sass code (`.scss`) is linted with [stylelint](https://github.com/stylelint/stylelint) and uses [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for its ruleset with a few minor amendments to cater for the scss syntax - stylelint is supposed to be used on CSS, you see..

### Stylelint config
The stylelint rules can be found in the `package.json`. We have added a few items to the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) rules:

* `indentation` - indentation with tabs not spaces
* [`declaration-empty-line-before`](http://stylelint.io/user-guide/rules/declaration-empty-line-before/) - this is turned off
* [`at-rule-empty-line-before`](http://stylelint.io/user-guide/rules/at-rule-empty-line-before/) - the changes here allow the linter to work with scss code
* [`max-empty-lines`](http://stylelint.io/user-guide/rules/max-empty-lines/) - no more than two empty lines

### Stylelint rules
The following code is a good example of what your CSS should look like when linted with Stylelint:

```scss
/**
 * Multi-line comment
 */

// Each selector should *always* be on their own line
.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-a,
.selector-b:not(:first-child) {
  padding: 10px !important;
  top: calc(calc(1em * 2) / 3);
}

// Items with only property can be on a single line
.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, "arial black", sans-serif;
  }
}

/* Flush single line comment */
@media
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  .selector {
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    margin: 10px;
    margin-bottom: 5px;
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
    height: 10rem;
  }

  /* Flush nested single line comment */
  .selector::after {
    content: '→';
    background-image: url(x.svg);
  }
}
```

---

## JavaScript linting
Javascript is linted with [XO](https://github.com/sindresorhus/xo) with a few minor amendments.

> XO is an opinionated but configurable ESLint wrapper with lots of goodies included. Enforces strict and readable code. Never discuss code style on a pull request again! No decision-making. No `.eslintrc` or `.jshintrc` to manage. It just works!

### XO config
The XO rules can be found in the `package.json`. We have added two items to the below rules:

* `comma-dangle` - trailing commas should always be added to multi-line objects & arrays. This promotes cleaner git commits. XO will error if there is not a trailing comma.
* [`xo/filename-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md) - all js files should be camelCase. XO will error if this is not the case.

### XO code style
*Any of these can be [overridden](#rules) if necessary.*

- Tab indentation
- Semicolons
- Single-quotes
- No unused variables
- Space after keyword `if (condition) {}`
- Always `===` instead of `==`

See an [example here](https://github.com/sindresorhus/xo/blob/master/index.js).
