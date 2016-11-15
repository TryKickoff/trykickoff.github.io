---
title: Components
layout: demo
body-class: show-grid
navgroup: demo
navactive: democomponents
meta:
  description: See Kickoff's components demo
next:
- title: Grids demo
  body: Find out about our grid and how to use it
  link: grids.html
- title: Forms
  body: See all the included form styles
  link: forms.html
---

<a name="buttons"></a>

<h2 class="demoHeading">Button</h2>
Button styles can be applied to anything with the `.btn` class applied. However, typically you'll want to apply these to only `<a>` and `<button>` elements for the best rendering.

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_buttons.scss" class="demo-src">_buttons.scss</a>

	<div class="demo-visual">
		<a href="#" class="btn">Button</a>
	</div>

	<div class="demo-code">
{% highlight html%}
<!-- Normal button with default colour -->
<a href="#" class="btn">Button</a>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">

<h3 class="demoHeading">Button variant</h3>
We provide only one button style variant because we think you should define your own. This variant, the *primary* button, uses the `.btn--primary` modifier class. We suggest setting up your own buttons in the same way, [see here](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_buttons.scss#L81-L95).

The colours used by this button are defined in our [colour palette](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/_color-palette.scss#L41-L42) file.

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_buttons.scss" class="demo-src">_buttons.scss</a>

	<div class="demo-visual">
		<a href="#" class="btn btn--primary">Button</a>
	</div>

	<div class="demo-code">
{% highlight html%}
<!-- Add .btn--primary to use the primary colours -->
<a href="#" class="btn btn--primary">Button</a>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">

<h3 class="demoHeading">Block-level buttons</h3>
To make buttons span to 100% width, add the `.btn--block` modifier class. You can also see that we are using the `.btn--primary` modifier class as well as `.btn--block`.

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_buttons.scss" class="demo-src">_buttons.scss</a>

	<div class="demo-visual">
		<a href="#" class="btn btn--block btn--primary">Button</a>
	</div>

	<div class="demo-code">
{% highlight html%}
<!-- Add .btn--block to use the block colours -->
<a href="#" class="btn btn--block btn--primary">Button</a>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">
<a name="mediaobject"></a>

<h2 class="demoHeading">Media Object</h2>
Place any image and text-like content side-by-side, as per: [media object](http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code). We now use our grid to create media objects because of greater flexibility.

<p data-height="500" data-theme-id="0" data-slug-hash="NRVaoB" data-default-tab="result" data-user="mrmartineau" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/mrmartineau/pen/NRVaoB/">kickoff flexbox media element</a> by Zander Martineau (<a href="http://codepen.io/mrmartineau">@mrmartineau</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<hr class="sectionSplitter">
<a name="fluidvideo"></a>

<h2 class="demoHeading">Fluid video</h2>
This is an external component, hosted at [github.com/TryKickoff/kickoff-fluidVideo.css](https://github.com/TryKickoff/kickoff-fluidVideo.css). Wrap any iframed video embed (from Youtube or Vimeo etc) in a `.fluidVideo` container. We assume 16:9 ratio so if you need anything else you will have to modify the [source](https://github.com/TryKickoff/kickoff-fluidVideo.css/blob/master/scss/index.scss) or use a script like [fitvid.js](http://fitvidsjs.com/).

<div class="demo">
	<a href="https://github.com/TryKickoff/kickoff-fluidVideo.css/blob/master/scss/index.scss" class="demo-src">_fluid-video.scss</a>

	<div class="demo-visual">
		<div class="fluidVideo">
			<iframe class="fluidVideo-item" width="560" height="315" src="//www.youtube-nocookie.com/embed/-5Ae-LhMIG0" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<div class="fluidVideo">
	<iframe class="fluidVideo-item" width="560" height="315" src="//www.youtube-nocookie.com/embed/-5Ae-LhMIG0" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">

<h3 class="demoHeading">Block grids</h3>
As of Kickoff v7.0.0, layouts that were previously handled by our block grid classes can now be easily achieved using the new flexbox grid classes and modifiers.

To find out more on the new Kickoff Grid, see our [Grid documentation](/learn/grid.html).

<hr class="sectionSplitter">
<a name="lists"></a>

<h2 class="demoHeading">Lists</h2>
For centred lists, add the `.l-list--centred` class to an [un]ordered list. For floated lists, add the `.l-list--floated` class.

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_lists.scss" class="demo-src">_lists.scss</a>

	<div class="demo-visual">
		<h4>Centre-aligned lists</h4>
		<ul class="l-list--centred">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
		</ul>
		<h4>Floated lists</h4>
		<ul class="l-list--floated">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
		</ul>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Centre-aligned lists -->
<ul class="l-list--centred">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
</ul>

<!-- Floated lists -->
<ul class="l-list--floated">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
</ul>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">
<a name="tables"></a>

## Tables
As tables should mainly be used for content, we have included a default set of styles that can easily be changed.  See the demo below for default styling.

<h3 class="demoHeading">Default table</h3>
<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_tables.scss" class="demo-src">_tables.scss</a>

	<div class="demo-visual">
		<table cellpadding="0" cellspacing="0">
			<thead>
				<tr>
					<th>Table head</th>
					<th>Table head</th>
					<th>Table head</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table cell</td>
					<td>Table cell</td>
					<td>Table cell</td>
				</tr>
				<tr>
					<td>Table cell</td>
					<td>Table cell</td>
					<td>Table cell</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td>Table foot</td>
					<td>Table foot</td>
					<td>Table foot</td>
				</tr>
			</tfoot>
		</table>
	</div>
	<div class="demo-code">
{% highlight html%}
<table cellpadding="0" cellspacing="0">
	<thead>
		<tr>
			<th>Table head</th>
			<th>Table head</th>
			<th>Table head</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Table cell</td>
			<td>Table cell</td>
			<td>Table cell</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Table foot</td>
			<td>Table foot</td>
			<td>Table foot</td>
		</tr>
	</tfoot>
</table>
{% endhighlight %}
	</div>
</div>

<h3 class="demoHeading">Table modifiers</h3>
A table can be modified in the following ways.

* To add even/odd stripes, add the `.table--striped` modifier class
* To add a hover affect, simply change the `$table-bgColor--hover` variable in `_tables.scss` to the hover colour you would like

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_tables.scss" class="demo-src">_tables.scss</a>

	<div class="demo-visual">
		<table class="table--striped" cellpadding="0" cellspacing="0">
			<thead>
				<tr>
					<th>Table head</th>
					<th>Table head</th>
					<th>Table head</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Table cell</td>
					<td>Table cell</td>
					<td>Table cell</td>
				</tr>
				<tr>
					<td>Table cell</td>
					<td>Table cell</td>
					<td>Table cell</td>
				</tr>
				<tr>
					<td>Table cell</td>
					<td>Table cell</td>
					<td>Table cell</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td>Table foot</td>
					<td>Table foot</td>
					<td>Table foot</td>
				</tr>
			</tfoot>
		</table>
	</div>
	<div class="demo-code">
{% highlight html%}
<table class="table--striped" cellpadding="0" cellspacing="0">
	<thead>
		<tr>
			<th>Table head</th>
			<th>Table head</th>
			<th>Table head</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Table cell</td>
			<td>Table cell</td>
			<td>Table cell</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>Table foot</td>
			<td>Table foot</td>
			<td>Table foot</td>
		</tr>
	</tfoot>
</table>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">
<a name="rwdtables"></a>

<h2 class="demoHeading">Responsive tables</h2>
We have included a simple way to make your tables responsive, wrap your tables in `.responsiveTable` and we'll make them mobile friendly by enabling horizontal scrolling. Only applies below the `$bp-single-col` scss variable. Everything above that will display normally.

If you need more responsive tables, consider [Tablesaw](https://github.com/filamentgroup/tablesaw) by the Filament Group.

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_tables.scss" class="demo-src">_tables.scss</a>

	<div class="demo-visual">
		<div class="responsiveTable">
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>Table Cell</th>
						<th>Table Cell</th>
						<th>Table Cell</th>
						<th>Table Cell</th>
						<th>Table Cell</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
					</tr>
					<tr>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
					</tr>
					<tr>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<div class="responsiveTable">
	<table cellpadding="0" cellspacing="0">
		<thead>
			<tr>
				<th>Table Cell</th>
				<th>Table Cell</th>
				<th>Table Cell</th>
				<th>Table Cell</th>
				<th>Table Cell</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
			</tr>
		</tfoot>
	</table>
</div>

{% endhighlight %}
	</div>
</div>
