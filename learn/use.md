---
layout: docs
navgroup: docs
navactive: docsuse
title: Use Kickoff

meta:
  description: Our getting starting guide to help you find your way around the framework.

next:
 - title: Get Kickoff
   body: Find out how to get your hands on Kickoff here.
   link: get.html
 - title: Understanding Grunt
   body: We’ll take you through some Grunt basics and explain how Kickoff is configured to use it.
   link: grunt.html
---

Once you have [downloaded Kickoff](get.html), creating a site or app usually involves the following:

1. Set up the basic structure of the site.
2. Add some content, style, and functionality.
3. Run your site locally to see how it looks.
4. Optionally run a Grunt build script to automate the optimization of your site
5. Deploy your site.

What follows is a general overview of each major part of Kickoff and how to use them.

<a name="checklist"></a>

## New project setup checklist

<div class="well interfaceType">
	<label class="control">
		<input type="checkbox">
		Download Kickoff
	</label>
	<div class="checklistInfo">
		Go to <a href="../learn/get.html">this link</a>
	</div>

	<label class="control">
		<input type="checkbox">
		Install NPM dependencies
	</label>
	<div class="checklistInfo">
		Run <code>npm install</code> (or <code>sudo npm install</code>) to install all Kickoff's Grunt dependencies. You will need Node, Sass and Grunt installed before this – for help, <a href="grunt.html#setup">see our guide to setting up Grunt</a>.
	</div>

	<label class="control">
		<input type="checkbox">
		Install Bower and its dependencies
	</label>
	<div class="checklistInfo">
		Run <code>npm install -g bower</code> and then when installed, run <code>bower install</code> to install the few <a href="js.html#bower">bower dependencies</a> included with the framework.
	</div>

	<label class="control">
		<input type="checkbox">
		Compile the Sass and JS initially
	</label>
	<div class="checklistInfo">
		Run <code>grunt</code> to compile the Sass and JS for the first time. This will also open a browser window with Kickoff's default <code>index.html</code>
	</div>

	<label class="control">
		<input type="checkbox">
		View the default styleguide
	</label>
	<div class="checklistInfo">
		Open <code>/_docs/styleguide.html</code> to see the default styles. The next steps are to update these styles.
	</div>
</div>

<h2 class="interfaceType">CSS / Sass</h2>
<p class="interfaceType">Kickoff provides many variables and sensible defaults (colour palette, fonts, grid settings and more) so you can start writing code as quickly as possible. To take advantage of the full power of this, it is advised that you start each project by defining your own defaults. See below for how to do this:</p>
<div class="well interfaceType">

	<h3>Sass project variables</h3>

	<label class="control">
		<input type="checkbox">
		Define your colour scheme
	</label>
	<div class="checklistInfo">
		Open <code>scss/_color-palette.scss</code> and change any vars to your own ones.
	</div>

	<h4>Open scss/_variables.scss</h4>
	<label class="control">
		<input type="checkbox">
		Define your font sizes
	</label>
	<div class="checklistInfo">
		<ul>
			<li>Line ~19 defines your base font size.</li>
			<li>Line ~29 defines your type scale: <code>$type-scale</code>. By default we use the 'major third' scale (1.25), this then determines the sizes all the other type size vars. See lines 32—40 for <code>$type-micro</code> to <code>$type-jumbo</code>. <br>
			<b>Use <code>$type-base</code> when you need the default font size.</b></li>
			<li>Lines ~24—26 define the leading and line-height.</li>
			<li><code>$baseline</code> is used for even spacing (like a baseline grid) for most typographical elements and some other items</li>
			<li>If your webfont's bold font-weight is not <code>700</code>, change the value of <code>$font-weight-bold</code> to the weight you are using.</li>
		</ul>
	</div>

	<label class="control">
		<input type="checkbox">
		Define your font stacks
	</label>
	<div class="checklistInfo">
		<ul>
			<li>Lines 47—52 define your base font stacks. These are used throughout the framework.</li>
			<li><code>$font-family-base</code> is used for the default typeface so make sure you update it's value with one of the font-stacks above.</li>
			<li><code>$font-family-headings</code> is used for headings typeface. The default value, <code>inherit</code>, means that it will inherit from <code>$font-family-base</code> so if you don't want that, make sure to change it.</li>
			<li>If your heading's webfont bold font-weight is not <code>700</code>, change this value to the weight you are using.</li>
		</ul>
	</div>

	<label class="control">
		<input type="checkbox">
		Define your breakpoints
	</label>
	<div class="checklistInfo">
		<ul>
			<li>Define your own breakpoints to suit your design; <strong>the defaults here are just a suggestion</strong>.</li>
			<li><code>$bp-single-col</code> is a convenience breakpoint for use when you want to switch from a single column (on mobile) to a muliple columns (on desktop).</li>
			<li>An example usage for these might be:
<pre class="l-mb0"><code>@include respond-min($bp-single-col) {
// RWD code
}</code></pre>
			</li>
			<li><code>$bp-block-grid-narrow</code> is used for narrow block grids.</li>
			<li><code>$bp-rwd-text</code> is used to define when text size changes (reduces) for narrower viewports.</li>
			<li>Please add more if you need them!</li>
		</ul>
	</div>

	<label class="control">
		<input type="checkbox">
		Define your path variables
	</label>
	<div class="checklistInfo">
		It can be useful to save certain paths as variables to ease development, especially image paths.
	</div>

	<label class="control">
		<input type="checkbox">
		Setup your layout and the grid
	</label>
	<div class="checklistInfo">
		Kickoff comes with a simple grid system, based on the Choreographic Grid. To define your grid column count, gutter widths etc change the vars from lines 88—105.
	</div>

	<label class="control">
		<input type="checkbox">
		Define some global app-specific variables
	</label>
	<div class="checklistInfo">
		On line 95 there is one example of an app-specific variable, this is for link transitions. Add any others that you may need below there.
	</div>
</div>

<h3 class="interfaceType">All done!</h3>
<p class="interfaceType">Now <a href="styleguide.html">view the styleguide</a> again and then run <code>grunt watch</code> or <code>grunt serve</code> to start creating magic!</p>
