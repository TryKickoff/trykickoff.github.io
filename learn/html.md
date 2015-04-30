---
layout: docs
navgroup: docs
navactive: docshtml
title: HTML

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
<a name="svg"></a>

## SVG icons
If you need a reliable way to provide hiDPi icons, we recommend using SVG. The only problem is that SVGs do not have the best browser support. To fix this, we recommend using [Grunticon](https://github.com/filamentgroup/grunticon) by The Filament Group.

#### From Grunticon's readme:
> grunticon is a Grunt.js task that makes it easy to manage icons and background images for all devices, preferring HD (retina) SVG icons but also provides fallback support for standard definition browsers, and old browsers alike. From a CSS perspective, it's easy to use, as it generates a class referencing each icon, and doesn't use CSS sprites.

We have included a Grunt task to minify SVGs before running the grunticon task on them. These tasks watch the `img/src` folder (where they are minified), and added to the `img/src-min` folder. grunticon watches this folder and generates 3 stylesheets, fallback PNGs and some other related files.

In order for your user's to benefit from this, you will need to add a small inline script to the head of each page.

```html
<script>window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(o){var a=t.document.createElement("link"),r=t.document.getElementsByTagName("script")[0];a.rel="stylesheet",a.href=e[o&&n?0:o?1:2],a.media="only x",r.parentNode.insertBefore(a,r),setTimeout(function(){a.media="all"})},a=new t.Image;a.onerror=function(){o(!1)},a.onload=function(){o(1===a.width&&1===a.height)},a.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};grunticon(["/img/icons/icons.data.svg.css", "/img/icons/icons.data.png.css", "/img/icons/icons.fallback.css"]);</script>
<noscript><link href="/img/icons/icons.fallback.css" rel="stylesheet"></noscript>
```

This script detects what SVG support the user's browser has and serves the appropriate CSS file. **NOTE:** If do not have the same folder structure as us, you will need to change the above script, the value of this Grunt variable `<%=config.img.dir%>` defined in our [Gruntfile line ~44](https://github.com/tmwagency/kickoff/blob/master/Gruntfile.js#L44). You will also need to move the `src-min` & `src` folders into your new image directory.

<hr class="sectionSplitter">
<a name="skip"></a>

## Skip to content link
We recommend that you include a 'skip to content' link so that user's can quickly move past your masthead area if they wish. Include the below HTML as the very first item after your `<body>` tag. You should be able to see that the anchor's href within the `.skipToContent` div points to `#mainContent`, this means that you will need add that id to another div that wraps your main content.

The styling for this is simple, so please modify it; see [/scss/partials/components/_skip-navigation.scss](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_skip-navigation.scss) to edit styles.

```html
<div class="skipToContent">
	<a href="#mainContent" class="btn btn--primary">Skip to main content</a>
</div>
```

<hr class="sectionSplitter">
<a name="socialmeta"></a>

## Social meta tags
We recommend that each site created with Kickoff also include as many social meta tags so that whenever users share your content, they are presented with useful share/social content. See the snippet below for the recommended items:

The wildcard items like `{page title}` are supposed to be changed by you.

```html
<!-- Twitter - more info at https://dev.twitter.com/cards/overview -->
<meta name="twitter:site" content="@{twitter-username}"> <!-- e.g. @TMWKickoff -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="{page title}" />
<meta name="twitter:description" content="{page description}" />
<meta name="twitter:image" content="{share image}" />
<meta name="twitter:url" content="{page url}" />

<!-- Open Graph data - more info at http://ogp.me/ -->
<meta property="og:title" content="{page title}" />
<meta property="og:description" content="{page description}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="{page url}" />
<meta property="og:image" content="{share image}" />

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

## Icon meta tags
Favicons, webclip icons and even MS tile images should all, ideally, be included on each site. If generating all these sizes and the code seem laborious, it is, but there are a few sites that will help ease the pain. Try http://iconifier.net or http://realfavicongenerator.net/. See below for what you need:

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
<a name="jquery"></a>

## jQuery
If you use jQuery, we recommend bundling it with all the other javascripts on your site rather than linking to Google's CDN or similar. This has the benefit of not needing another DNS lookup (which is costly on mobile connections) but it also means that should a user have a primed cache for the same version of jQuery hosted externally, that you will miss out on those benefits - we believe that the benefits outweigh the risks.

If you prefer to rely on an external source, we suggest adding the code below. This assumes that you need support for older versions of Internet Explorer. See this [post](http://martineau.tv/2013/06/two-versions-of-jquery/) for more information about this technique.

```html
<!--[if lte IE 8]>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/js/libs/jquery.min.js"><\/script>')</script>
<![endif]-->
<!--[if gt IE 8]><!-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/js/libs/jquery.2.min.js"><\/script>')</script>
<!--<![endif]-->
```



