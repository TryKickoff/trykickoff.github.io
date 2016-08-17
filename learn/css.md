---
title: CSS
layout: docs
navgroup: docs
navactive: docscss
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

<a name="philosophy"></a>
Kickoff comes with a robust CSS framework; it provides many sensible defaults so that you can get your project up and running in the shortest possible time.

We make use of the excellent [Sass](#sass) CSS preprocessor which allows us to use many extra features beyond the capabilities of vanilla CSS.

This section will take you through how Kickoff uses CSS and Sass, and how easy it is to manipulate the code when developing your own projects.

<hr class="sectionSplitter">
<a name="sass"></a>

## Sass
Kickoff is made with [Sass](http://sass-lang.com/) at its core.  It makes developing systems-based CSS faster, easier, and more fun.

Sass has two syntaxes. The most commonly used syntax is known as “SCSS” (for “Sassy CSS”), and is a superset of CSS3’s syntax. This means that every valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension `.scss`; we use this version for Kickoff.

<hr class="sectionSplitter">
<a name="structure"></a>

## Sass structure
Kickoff structures it's Sass files in quite a specific way. The `scss` directory contains the following directories:

```
.
├── README.md
├── _color-palette.scss
├── _dependencies.scss
├── _global.scss
├── _helper-classes.scss
├── _reset.scss
├── _typography.scss
├── _variables.scss
├── changelog.md
├── components
│   ├── _buttons.scss
│   ├── _code.scss
│   ├── _embedded-content.scss
│   ├── _fluid-video.scss
│   ├── _icons.scss
│   ├── _links.scss
│   ├── _lists.scss
│   ├── _media-object.scss
│   ├── _scrollbars.scss
│   ├── _skip-navigation.scss
│   ├── _tables.scss
│   ├── forms
│   │   ├── README.md
│   │   ├── _form-helpers.scss
│   │   ├── _forms-custom-file.scss
│   │   ├── _forms-custom-radioscheckboxes.scss
│   │   ├── _forms-custom-select.scss
│   │   └── _forms.scss
│   └── grid
│       ├── README.md
│       ├── _grid-helpers.scss
│       └── _grid.scss
├── functions
│   ├── _functions.scss
│   ├── _get-value.scss
│   ├── _golden-ratio.scss
│   ├── _map-deep-get.scss
│   ├── _modular-scale.scss
│   ├── _px-to-em.scss
│   ├── _px-to-rem.scss
│   ├── _strip-units.scss
│   └── _tint-shade.scss
├── kickoff.scss
├── mixins
│   ├── _hidpi.scss
│   ├── _mixins.scss
│   ├── _module-naming-helpers.scss
│   ├── _position.scss
│   ├── _responsive.scss
│   ├── _units.scss
│   ├── _utility.scss
│   └── _vertical-center.scss
├── partials
│   ├── _browser-upgrade.scss
│   ├── _footer.scss
│   └── _masthead.scss
├── styleguide.scss
└── views
    ├── _home.scss
    └── _print.scss
```

### Views, partials & components
Our distinction between views, partials and components:

#### Components

Small, self-contained files that concern one type of thing, that crucially, are reusable. For example, lists, forms etc. We have included quite a few in the [components](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/) directory: [buttons](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_buttons.scss), [forms](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms.scss), [fluid video](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_fluid-video.scss) or [grid](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_grid.scss) for example, but you should add your components there too. Please [browse through](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/) the included components to see what Kickoff offers, or see some of them in action in our [demo area](../demos/).

#### Partials

Partials are partial parts of a page, like a masthead, sidebar or footer. They can have components inside them and can also be reusable. The [partials](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/partials/) directory should contain style partials, like `_footer.scss` or `_masthead.scss`.

#### Views

Used for entire views (or pages). Usually these files consist of small tweaks that only concern a particular view. The [views](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/views/) directory should contain view-specific styles that don't fit into their own module, think `_home.scss` or `_recipe-page.scss` for example.

**N.b.** We recommend that it is better to make reusable components rather than styling based on a view.  Therefore, the styles in this folder _should _ be minimal.

#### Mixins

The [mixins](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/mixins/) directory contains a few mixins that will help you day-to-day. Amongst others, `_responsive.scss` contains our media query mixins ([read below](#responsive) for more info), `_hidpi.scss` contains our mixins for working with hiDPi (retina) styles and `_utility.scss` has a bunch of helpful mixins. For example, the `@include font-size()` mixin for specifying your font sizes with a `px` value but outputting both `rem` and `px` in your compiled styles.

##### Font-size mixin
This mixin allows input of all kinds. It essentially converts pixel values to REMs.

```scss
$module-font-size: 30px;

a {
	@include font-size(small); // uses the $type map. use a keyword to set the size
	@include font-size(20); // unitless values are seen to be px
	@include font-size($module-font-size); // vars can be used, these should be set in px
}
```

#### Functions

The [functions](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/functions/) directory contains various Sass functions that are used in the framework and that you might find useful.

##### Modular scale function
This function is used to generate font-sizes with a pleasing vertical rythm. The scale is based on the base font size and a scale factor, see an example of this [here](http://www.modularscale.com/?20&px&1.25&web&text).

Our `$type` sass map uses the `modular-scale` function extensively:

```scss
$type: (
	micro : modular-scale($font-size-base, -2, $type-scale),
	small : modular-scale($font-size-base, -1, $type-scale), // h5, h6
	base  : modular-scale($font-size-base, 0, $type-scale),  // p, h4
	mid   : modular-scale($font-size-base, 1, $type-scale),  // h3
	large : modular-scale($font-size-base, 1, $type-scale),  // h2
	jumbo : modular-scale($font-size-base, 3, $type-scale)   // h1
);
```

If you have a custom element and need to go larger or smaller on the modular scale, try using something like this:

```scss
.article-title {
	@include font-size(modular-scale($font-size-base, 4, $type-scale));
}
```

#### Breakpoint function
This can be used to easily get the value from the `$breakpoints` sass map:

```css
bp(mid) /* 750px */
```

#### Type size function
This can be used to easily get the value from the `$type` sass map:

```css
type(large) /* modular-scale($font-size-base, 2, $type-scale) */
```

### Important files

It’s important to become familiar with **all of these files** so you can make full use of the framework.

#### [kickoff.scss](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/kickoff.scss)
All roads lead to here. This is the base SCSS file and is the hook by which Grunt compiles the projects CSS. Inspecting the source of the file reveals only one `@import`, for `_dependencies.scss`.

In older versions of Kickoff (and still available in the generator), we compile two versions of of the CSS – this is explained below:

* `kickoff.scss` is compiled to `/assets/dist/css/kickoff.css` and is used on Internet Explorer 9+, Chrome, Safari, Firefox and Opera.
* `kickoff-old-ie.scss` is compiled to `/assets/dist/css/kickoff-old-ie.css` and is used on Internet Explorer 8 and below only. These browsers do not support media queries and so rather than having old IE show mobile-first styles (which would suck), we serve them a slightly different CSS file instead. We use some clever Sass mixins to determine what CSS should be served – [see below](#responsive) for more details on this.

---

#### [_dependencies.scss](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/_dependencies.scss)
This file is where all of Kickoff’s Sass dependencies are defined. It imports all of the scss files that will be compiled into your project.

If you need to add or remove a file, do it here. The order of the imported files is the same order that the CSS will be compiled to.

---

#### [_global.scss](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/_global.scss)
This file contains all styles that do not obviously fit within any other scss partial. For example, we include our body's background styles and the main `.l-container` styles.

**Try not to fill this up with all your styles though.**  Your Sass should be written in a modular way, and so the majority of your Sass should be organised within the `components`, `partials` or `views` directories.

---

#### [_helper-classes.scss](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/_helper-classes.scss)
This file contains a bunch of helper styles, like `.clearfix` (for clearing floats), `.ir` for using background image replacement, `.is-hidden` etc.

<hr class="sectionSplitter">
<a name="variables"></a>

## Sass Variables
We take full advantage of Sass' variables and there are two key files that should be edited at the start of development on any new Kickoff project. These are `scss/_variables.scss` and `scss/_color-palette.scss`.

---

#### [_variables.scss](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/_variables.scss)
This is where you define your global Sass variables. Here you can define your:

* **Global typographic styles** — including font choices and typographic scale.
* **Responsive breakpoints** — we try not to target specific devices or device types with these variables.  Instead they should be set with the design in mind. The `$breakpoints` sass map, contains our default breakpoints, these are used by the grid and can be referenced by using the `bp(mid)` sass function. See how to use the breakpoints when using our mixins, [below](#responsive).

---

#### [_color-palette.scss](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/_color-palette.scss)
Text colour, link colours, background colour, form fields and various component colours can all be set in this file.

<hr class="sectionSplitter">
<a name="responsive"></a>

## Responsive
Kickoff does not enforce a mobile first approach to CSS, but it is encouraged and it takes a fairly unique approach to responsive sites.

Media queries in Kickoff are typically handled with a [set of useful mixins](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/mixins/_responsive.scss). These are used so that we can define separate media-query content for `< IE9` and browsers with support for media queries. These are directly related to the global `$fix-mqs` var defined in `kickoff-old-ie.scss`. `kickoff-old-ie.scss` ignores any content in media-queries with values less than the `$fix-mqs` var value.

* `respond-min` for `min-width` media queries
* `respond-max` for `max-width` media queries
* `respond-min-max` for `min-width` & `max-width` media queries

#### Media query example

```scss
/**
 * This Sass mixin:
 * The value for the width should be unitless and we suggest
 * using your predefined breakpoint variables as the argument
 */
@include respond-min(800) {
	a {
		color: darkgoldenrod;
	}
}
/* Is the same as: */
@media screen and (min-width: 800px) {
	a {
		color: darkgoldenrod;
	}
}

/**
 * All the mixins:
 */
@include respond-min(wide) {
	a {
		color: darkgoldenrod;
	}
}
@include respond-max($bp-single-col) {
	a {
		color: green;
	}
}
@include respond-min-max(narrow, mid) {
	a {
		color: purple;
	}
}
```

#### Better media query example
Rather than having all of your media queries for different widths stored in separate scss files or placed at the bottom of each SCSS partial, we suggest making use of Sass' nested media queries.

This means that all styles related to an element are together, for example:

```scss
a {
	padding: 1em;

	@include respond-min(800) {
		padding: 2em;
	}
}
```

<hr class="sectionSplitter">
<a name="namingscheme"></a>

## CSS Naming scheme
Kickoff uses a bespoke naming scheme for classnames, inspired loosely by the [BEM naming scheme](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

This obviously isn’t compulsory to use in your own Kickoff projects, but is documented here as guidance, and is what we use across our Kickoff projects.

```scss
/* Descriptors use camel-casing if more than one word: e.g. twoWords */
.form {
	...
}

/* ========= */

/* Child elements use single hyphens: - */
.form-controlGroup {
	...
}

/* ========= */

/* Modifier element use a double hyphen: -- */
.form {
	...
}
.form--horizontal {
	...
}

/* ========= */

/* Element state: .is- or .has- */
.is-active {
	...
}

/* ========= */

/* Sass variables use dash-case */
a {
	color: $color-primary;
}
```

#### Module naming helper mixins
In v7, we included some mixins to help keep consistent CSS output. See below:

```scss
@include component('foo') {
	margin: auto;

	@include modifier('bar') {
		padding: 20px;
	}

	@include modifier('baz') {
		padding: 50px;

		@include respond-min(mid) {
			padding: 20px;
		}
	}

	@include state('active') {
		background-color: green;
	}
}
```

```css
.foo {
  margin: auto;
}

.foo--bar {
  padding: 20px;
}

.foo--baz {
  padding: 50px;
}

@media screen and (min-width: 46.875em) {
  .foo--baz {
    padding: 20px;
  }
}

.foo.is-active {
  background-color: green;
}
```

<hr class="sectionSplitter">

### Modernizr

Kickoff includes a version of Modernizr but it is not used by default. If you are using our new grid and are supporting IE8 or below, you will need it to detect flexbox support. To find out how to use it, see [their documentation](http://modernizr.com) or see our [Javascript documentation](js.html) to find out where it is included.
