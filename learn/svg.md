---
title: SVG workflow
navgroup: docs
layout: docs
navactive: docssvg
meta:
  description: SVG workflow in Kickoff
next:
- title: Kickoff's CSS
  body: Take a look at how Kickoff structures it’s CSS.
  link: css.html
- title: Kickoff's Javascript
  body: Minimal and flexible, we show you how Kickoff structures it’s JS.
  link: js.html
---
SVG's in the `/assets/src/svg/` directory will be transformed, with a gulp task, into an svg spritesheet. They should then used by using the `use` syntax, see below:

### Usage
The name of the svg file will be its `id` that you use to reference it, see below:

```html
<!-- source file: `logo-twitter.svg` -->
<svg role="img" title="Twitter" class="icon icon--large icon--twitter">
	<use xlink:href="/assets/dist/svg/svg.svg#logo-twitter"/>
</svg>
```

### SVG source
Wherever possible, in your SVG source file, you should ensure that the fill or stroke value is set to `currentColor`. That way you can set the value using CSS (see below) 👍

### Icon styling
There are some base styles for icons in `/assets/src/scss/components/_icons.scss`, it contains sizing modifiers like `.icon--large` and colour variant overrides like `.icon--twitter` to give the Twitter logo the correct colour as specified in the `_color-palette.scss`.

Using SVG in this way allows developers to control some aspects (`fill`, `stroke` etc) with CSS. Something as simple as changing the colour of the icon on `:hover` has traditionally been quite tricky, see below for an example of how this is done now:

```scss
.icon--twitter {
	color: $color-twitter; // set in _color-palette.scss

	&:hover {
		color: pink
	}
}
```

### Polyfill
[svg4everybody](https://github.com/jonathantneal/svg4everybody) is used to polyfill older browsers so we can benefit from the new workflow.

### More SVG icons resources

* [css-tricks.com/svg-sprites-use-better-icon-fonts/](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
* [css-tricks.com/svg-use-with-external-reference-take-2/](https://css-tricks.com/svg-use-with-external-reference-take-2/)
