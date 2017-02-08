---
title: HTML in Kickoff
layout: docs
navgroup: docs
navactive: docshtml
meta:
  description: HTML in Kickoff
next:
- title: Kickoff's CSS
  body: Take a look at how Kickoff structures it’s CSS.
  link: css.html
- title: Kickoff's Javascript
  body: Minimal and flexible, we show you how Kickoff structures it’s JS.
  link: js.html
---
Here are some pointers regarding Kickoff's HTML features and usage

<a name="headmeta"></a>

### <head> metatags
For a list of everything that could go in the `<head>` of your document, see [github.com/joshbuchea/HEAD](https://github.com/joshbuchea/HEAD)

### .no-js / .js??

The code below in the `<head>` section of index.html simply switches the markup on the `<html class="no-js">` to `<html class="js">`. This means we can adjust our CSS based on if the user has Javascript on or off.

```html
<script>
	var win = window, doc = win.document, docElem = doc.documentElement;

	// Replace 'no-js'/'js' class on <html>
	docElem.className = docElem.className.replace(/\bno-js\b/g, '') + ' js ';
</script>
```

```scss
.no-js .foo {
	// Styles for users without js
}

.js .foo {
	// Styles for users with js
}
```

---

<a name="skip"></a>

### Skip to content link
We recommend that you include a 'skip to content' link so that user's can quickly move past your masthead area if they wish. Include the below HTML as the very first item after your `<body>` tag. You should be able to see that the anchor's href within the `.skipToContent` div points to `#mainContent`, this means that you will need add that id to another div that wraps your main content.

The styling for this is simple, so please modify it; see [/scss/partials/components/_skip-navigation.scss](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/partials/components/_skip-navigation.scss) to edit styles.

```html
<div class="skipToContent">
	<a href="#mainContent" class="btn btn--primary">Skip to main content</a>
</div>
```

---

<a name="socialmeta"></a>

### Social meta tags
We recommend that each site created with Kickoff also include social meta tags so that whenever users share your content, they are presented with useful share/social content. See the snippet below for the recommended items:

The wildcard items like `{page title}` are supposed to be changed by you.

```html
<!-- Open Graph data - more info at http://ogp.me/ -->
<meta property="og:title" content="{page title}" />
<meta property="og:description" content="{page description}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="{page url}" />
<meta property="og:image" content="{share image}" />

<!-- Twitter - more info at https://dev.twitter.com/cards/overview -->
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@TryKickoff">

<!-- Open Search - include this if you have search on your site
     More info at http://www.opensearch.org/Home
     Examples at:
     * https://uk.thebar.com/osd.xml
     * https://uk.thebar.com/opensearch.xml
 -->
<link rel="search" type="application/opensearchdescription+xml" href="{siteurl}/osd.xml" title="{page title}">
<link rel="search" type="application/opensearchdescription+xml" href="{siteurl}/opensearch.xml" title="{page title}">
```


<hr class="sectionSplitter">
<a name="iconmeta"></a>

### Icon meta tags
Favicons, webclip icons and even MS tile images should all, ideally, be included on each site. If generating all these sizes and the code seem laborious, it is, but there are a few sites that will help ease the pain. Try [realfavicongenerator.net](http://realfavicongenerator.net) or [iconifier.net](http://iconifier.net). See below for what you need:

The wildcard items like `{page title}` are supposed to be changed by you.

```html
<meta name="application-name" content="Kickoff">

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

<!-- Apple iOS -->
<meta name="apple-mobile-web-app-title" content="Kickoff">
<link rel="apple-touch-icon-precomposed" href="apple-touch-icon.png" />
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16">
<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">


<!-- Windows - more info at http://www.buildmypinnedsite.com/windows7/en -->
<!-- Windows 8 -->
<meta name="application-name" content="{page title}"/>
<meta name="msapplication-TileColor" content="#f65a17"/>
<meta name="msapplication-TileImage" content="{siteurl}/favicons/114x114.png"/>

<!-- Windows 7 -->
<meta name="msapplication-starturl" content="{siteurl}" />
<meta name="msapplication-navbutton-color" content="#f65a17" />
<meta name="msapplication-window" content="width=1024;height=768" />
<meta name="msapplication-tooltip" content="{page title}" />

<!-- Jump lists -->
<meta name="msapplication-task" content="name=Spirits;action-uri={siteurl}spirits;icon-uri=favicon.ico" />
<meta name="msapplication-task" content="name=Occasions;action-uri={siteurl}occasions;icon-uri=favicon.ico" />
<meta name="msapplication-task" content="name=Recipes;action-uri={siteurl}recipes;icon-uri=favicon.ico" />
<meta name="msapplication-task" content="name=Ingredients;action-uri={siteurl}ingredients;icon-uri=favicon.ico" />
```

<hr class="sectionSplitter">

### Conditional CSS files

Using the Kickoff Yeomna Generator, you may choose to opt for IE8 support.  If you do, Kickoff will compile two SCSS files: one for IE9+ & and another for old IE (<8); these browsers do not support media queries and so rather than having old IE show mobile-first styles (which would suck), we serve them a slightly different CSS file instead. We use some clever Sass mixins to determine what CSS should be served – [see the CSS docs](css.html) for more info.

#### Add your stylesheets to HTML using the code below

```html
<!--[if lte IE 8]>
	<link rel="stylesheet" href="/assets/dist/css/kickoff-old-ie.css">
<![endif]-->
<!--[if gt IE 8]><!-->
	<link rel="stylesheet" href="/assets/dist/css/kickoff.css">
<!--<![endif]-->
```

If you're not supporting IE8, then you only need one stylesheet..

```html
<link rel="stylesheet" href="/assets/dist/css/kickoff.css">
```

<hr class="sectionSplitter">
<a name="jquery"></a>

### jQuery
If you use jQuery, we recommend bundling it with all the other javascript files on your site rather than linking to Google's CDN or similar. This has the benefit of not needing another DNS lookup (which is costly on mobile connections) but it also means that should a user have a primed cache for the same version of jQuery hosted externally, that you will miss out on those benefits - we believe that the benefits outweigh the risks.

If you prefer to rely on an external source, we suggest adding it using the code below. This assumes that you need support for older versions of Internet Explorer. See this [post](http://martineau.tv/2013/06/two-versions-of-jquery/) for more information about this technique.

```html
<!--[if lte IE 8]>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/js/libs/jquery.min.js"><\/script>')</script>
<![endif]-->
<!--[if gt IE 8]><!-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/js/libs/jquery.2.min.js"><\/script>')</script>
<!--<![endif]-->
```


