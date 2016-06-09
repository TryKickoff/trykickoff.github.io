---
layout: docs
navgroup: docs
navactive: docschecklist
title: Kickoff setup checklist

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
# Success!
You installed Kickoff. To quickly get up and running there are a few things you will want to edit before adding any custom code.

<a name="checklist"></a>

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
		Define your type
	</label>
	<div class="checklistInfo">
		<ul>
			<li><a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L19">Line 19</a> defines your base font size var <code>$font-size-base</code>.</li>
			<li><a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L28">Line 28</a> defines your type scale: <code>$type-scale</code>. By default we use the 'major third' scale (1.25), this then determines the sizes all the other type size vars.</li>
			<li>
				<a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L30-37">Lines 30—37</a> defines your font-sizes in the <code>$type</code> sass map. Type sizes are defined by name, like <code>micro</code>, <code>small</code>, <code>base</code>, <code>mid</code>, <code>large</code> &amp; <code>jumbo</code>. By default, all type sizes use a modular scale, see <a href="http://www.modularscale.com/?20&px&1.25&web&text">this</a> for an example.
			</li>
			<li><a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L24-L26">Lines 24 & 25</a> define the leading and line-height.</li>
			<li>The <code>$baseline</code> var is used for even spacing (like a baseline grid) for most typographical elements and some other items like margins and padding.</li>
			<li>If your webfont's bold font-weight is not <code>700</code>, change the value of <code>$font-weight-bold</code> to the weight you are using.</li>
		</ul>
	</div>

	<label class="control">
		<input type="checkbox">
		Define your font stacks
	</label>
	<div class="checklistInfo">
		<ul>
			<li><a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L43-L45">Lines 47—52</a> define your base font stacks. These are used throughout the framework.</li>
			<li><code>$font-family-base</code> is used for the default typeface so make sure you update it's value with one of the font-stacks above.</li>
			<li><code>$font-family-headings</code> is used for headings typeface. Using <code>inherit</code> as a value, means that it will inherit from <code>$font-family-base</code>.</li>
			<li>If your heading's webfont bold font-weight is not <code>700</code>, change this value to the weight you are using.</li>
		</ul>
	</div>

	<label class="control">
		<input type="checkbox">
		Define your breakpoints
	</label>
	<div class="checklistInfo">
		<ul>
			<li>Define your own breakpoints (by editing the $breakpoints sass map on <a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L62-L67">lines 62-67</a>) to suit your design; <strong>the defaults here are just a suggestion</strong>.</li>
			<li>An example usage for these might be:
<pre class="l-mb0"><code>@include respond-min(mid) {
	// RWD code
}</code></pre>
				Read more about their usage <a href="/learn/css.html#responsive">here</a>.
			</li>
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
		<ul>
			<li>
				Define the maximum width of your main column by editing the <code>$layout-max-width</code> on <a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L84">line 84</a>. This directly affects the <code>.l-container</code> class that we suggest you use in your markup. See the <a href="https://github.com/TryKickoff/kickoff/blob/master/index.html#L49-L51">main index.html</a> for an example of this. Also, the <code>.l-container</code> class is styled in <a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_global.scss#L11-L15">_global.scss</a>.
			</li>
			<li>
				Kickoff comes with a flexbox-based grid system. To define your grid column count, gutter widths etc change the vars from <a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L86-L90">lines 86—90</a>.
			</li>
		</ul>
	</div>

	<label class="control">
		<input type="checkbox">
		Define some global app-specific variables
	</label>
	<div class="checklistInfo">
		On <a href="https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L95-L97">line 95</a> there is one example of an app-specific variable, this is for link transitions. Add any others that you may need below there.
	</div>
</div>

<h3 class="interfaceType">All done!</h3>
<p class="interfaceType">Now <a href="/styleguide.html">view the styleguide</a> again and then run <code>grunt watch</code> or <code>grunt serve</code> to start creating magic!</p>
