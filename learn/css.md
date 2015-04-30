---
layout: docs
navgroup: docs
navactive: docscss
title: CSS

meta:
  description: Understand how we use CSS in Kickoff

next:
 - title: Kickoff's Javascript
   body: Minimal and flexible, we show you how Kickoff structures it’s JS.
   link: js.html
 - title: Understanding Grunt
   body: We’ll take you through some Grunt basics and explain how Kickoff is configured to use it.
   link: grunt.html
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

To start using Sass you will need to first install the Sass Ruby gem.  Simply fire up Terminal – or Command Prompt on Windows – and type in this command:

```sh
$ gem install sass
```

<hr class="sectionSplitter">
<a name="structure"></a>
## Sass structure
Kickoff structures it's Sass files in quite a specific way. The `scss` folder contains the following directories:

```
scss
┣ functions
┃ ┗ [...]
┣ mixins
┃ ┗ [...]
┣ partials
┃ ┣ [...]
┃ ┗ components
┃   ┗ [...]
┣ views
┃ ┗ [...]
┗ [...]
```

The [views](https://github.com/tmwagency/kickoff/blob/master/scss/views/) folder should contain view-specific styles that don't fit into their own module, think `_home.scss` or `_recipe.scss` for example.

The [partials](https://github.com/tmwagency/kickoff/blob/master/scss/partials/) folder should contain style partials, like `_footer.scss` or `_masthead.scss`. It also contains a folder meant for your [components](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/). We have included quite a few; [buttons](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_buttons.scss), [forms](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_forms.scss), [fluid video](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_fluid-video.scss) or [grid](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_grid.scss) for example, but you should add your components there too. Please [browse through](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/) the included components to see what Kickoff offers, or see some of them in action in our [demo area](../demo/).

The [mixins](https://github.com/tmwagency/kickoff/blob/master/scss/mixins/) folder contains a few mixins that will help you day-to-day. Amongst others, `_responsive.scss` contains our media query mixins ([read below](#responsive) for more info), `_hidpi.scss` contains our mixins for working with hiDPi (retina) styles and `_utility.scss` has a bunch of helpful mixins. For example, the `@include font-size()` mixin for specifying your font sizes with a `px` value but outputting both `rem` and `px` in your compiled styles.

The [functions](https://github.com/tmwagency/kickoff/blob/master/scss/functions/) folder contains various Sass functions that are used in the framework and that you might find useful.

### Important files

It’s important to become familiar with **all of these files** so you can make full use of the framework.

#### [kickoff.scss](https://github.com/tmwagency/kickoff/blob/master/scss/kickoff.scss) & [kickoff-old-ie.scss](https://github.com/tmwagency/kickoff/blob/master/scss/kickoff-old-ie.scss)
All roads lead to here. Both these files are used and compile with Grunt. Inspecting the source of these files reveals only one `@import`, for `_dependencies.scss`. Both files require the exact same dependencies so it made sense to extract all of those into another partial.

* `kickoff.scss` is compiled to `css/kickoff.css` and is used on Internet Explorer 9+, Chrome, Safari, Firefox and Opera.
* `kickoff-old-ie.scss` is compiled to `css/kickoff-old-ie.css` and is used on Internet Explorer 8 and below only. These browsers do not support media queries and so rather than having old IE show mobile-first styles (which would suck), we serve them a slightly different CSS file instead. We use some clever Sass mixins to determine what CSS should be served – [see below](#responsive) for more details on this.

#### Add your stylesheets to HTML using the code below
```html
<!--[if lte IE 8]>
	<link rel="stylesheet" href="css/kickoff-old-ie.css">
<![endif]-->
<!--[if gt IE 8]><!-->
	<link rel="stylesheet" href="css/kickoff.css">
<!--<![endif]-->
```

---
#### [_dependencies.scss](https://github.com/tmwagency/kickoff/blob/master/scss/_dependencies.scss)
This file is where all of Kickoff’s Sass dependencies are defined. It imports all of the scss files that will be compiled into your project.

If you need to add or remove a file, do it here. The order of the imported files is the same order that the CSS will be compiled to.

---
#### [_global.scss](https://github.com/tmwagency/kickoff/blob/master/scss/_global.scss)
This file contains all styles that do not obviously fit within any other scss partial. For example, we include our body's background styles and the main `.l-container` styles.

**Try not to fill this up with all your styles though.**  Your Sass should be written in a modular way, and so the majority of your Sass should be organised within the `partials` or `views` folders.

---
#### [_helper-classes.scss](https://github.com/tmwagency/kickoff/blob/master/scss/_helper-classes.scss)
This file contains a bunch of helper styles, like `.clearfix` (for clearing floats), `.ir` for using background image replacement, `.is-hidden` etc.

<hr class="sectionSplitter">
<a name="variables"></a>
## Sass Variables
We take full advantage of Sass' variables and there are two key files that should be edited at the start of development on any new Kickoff project. These are `scss/_variables.scss` and `scss/_color-palette.scss`.

---
#### [_variables.scss](https://github.com/tmwagency/kickoff/blob/master/scss/_variables.scss)
This is where you define your global Sass variables. Here you can define your:

* **Global typographic styles** — including font choices and typographic scale.
* **Responsive breakpoints** — we try not to target specific devices or device types with these variables.  Instead they should be set with the design in mind.
  Breakpoints included are: `$bp-narrow`, `$bp-mid`, `$bp-wide`, `$bp-huge` and a few *special* vars. These include `$bp-single-col` for when you need your design to break from a single column to multiple columns, `$bp-block-grid-narrow` for use with the block grids and `$bp-rwd-text` for our simple implementation of responsive typography.

---
#### [_color-palette.scss](https://github.com/tmwagency/kickoff/blob/master/scss/_color-palette.scss)
Text colour, link colours, background colour, form fields and various component colours can all be set in this file.

<hr class="sectionSplitter">
<a name="responsive"></a>
## Responsive
Kickoff does not enforce a mobile first approach to CSS, but it is encouraged and it takes a fairly unique approach to responsive sites.

Media queries in Kickoff are typically handled with a [set of useful mixins](https://github.com/tmwagency/kickoff/blob/master/scss/mixins/_responsive.scss). These are used so that we can define separate media-query content for `< IE9` and browsers with support for media queries. These are directly related to the global `$fix-mqs` var defined in `kickoff-old-ie.scss`. `kickoff-old-ie.scss` ignores any content in media-queries with values less than the `$fix-mqs` var value.

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
@include respond-min($bp-wide) {
	a {
		color: darkgoldenrod;
	}
}
@include respond-max($bp-single-col) {
	a {
		color: green;
	}
}
@include respond-min-max($bp-narrow, $bp-mid) {
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
.skipToContent {
	...
}

/* ========= */

/* Child elements use single hyphens: - */
.form-controlGroup {
	...
}

/* ========= */

/* Modifier element use a double hyphen: -- */
.btn.btn--primary {
	...
}

/* ========= */

/* Element state: .is- */
.is-active {
	...
}

/* ========= */

/* Sass variables are dash-case */
a {
	color: $color-primary;
}
```

<hr class="sectionSplitter">

### Modernizr
Kickoff includes a version of Modernizr by default. To find out how to use it, see [their documentation](http://modernizr.com) or see our [Javascript documentation](js.html) to find out where it is included.
