---
layout: demo
body-class: show-grid
navgroup: demo
navactive: democomponents
title: Components

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
Place any image and text-like content side-by-side, as per: [media object](http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code)

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_media-object.scss" class="demo-src">_media-object.scss</a>

	<div class="demo-visual">
		<div class="media">
			<div class="media-img">
				<img src="http://placehold.it/250x150">
			</div>
			<div class="media-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
		<div class="media media--rev">
			<div class="media-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div class="media-img">
				<img src="http://placehold.it/250x150">
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Media element with left aligned image -->
<div class="media">
	<div class="media-img">
		<img src="http://placehold.it/250x150">
	</div>
	<div class="media-body">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div>
</div>

<!-- Media element with right aligned image -->
<div class="media media--rev">
	<div class="media-body">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div>
	<div class="media-img">
		<img src="http://placehold.it/250x150">
	</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">

<a name="fluidvideo"></a>

<h2 class="demoHeading">Fluid video</h2>
Wrap any iframed video embed (from Youtube or Vimeo etc) in a `.fluidVideo` container. We assume 16:9 ratio so if you need anything else you will have to modify the [source](https://github.com/trykickoff/kickoff/blob/c3d6bbe23aa9fc51c66e11d6e13f40af16651510/scss/components/_fluid-video.scss) or use a script like [fitvid.js](http://fitvidsjs.com/).

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_fluid-video.scss" class="demo-src">_fluid-video.scss</a>

	<div class="demo-visual">
		<div class="fluidVideo">
			<iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/-5Ae-LhMIG0" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<div class="fluidVideo">
	<iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/-5Ae-LhMIG0" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">

<a name="blockgrids"></a>

<h2 class="demoHeading">Block grids</h2>
Block grids give you a way to evenly split contents of a list within the grid. If you wanted to create a row of five images or paragraphs that need to stay evenly spaced no matter the screen size, the block grid is for you.

Add the `.l-blockGrid` class to any element, then add the `.l-blockGrid--#` class to determine how many grid columns appear in a row. Then add `.l-blockGrid-item` to each direct descendant.

* `.l-blockGrid--6` - 6 columns above the `$bp-single-col` breakpoint

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_block-grids.scss" class="demo-src">_block-grids.scss</a>

	<div class="demo-visual">
		<div class="l-blockGrid l-blockGrid--6">
			<div class="l-blockGrid-item">Item 1</div>
			<div class="l-blockGrid-item">Item 2</div>
			<div class="l-blockGrid-item">Item 3</div>
			<div class="l-blockGrid-item">Item 4</div>
			<div class="l-blockGrid-item">Item 5</div>
			<div class="l-blockGrid-item">Item 6</div>
		</div>
	</div>

	<div class="demo-code">
{% highlight html%}
<!-- 6 columns on wide screen, then 1 column (stacked) when we are below the $bp-single-col breakpoint -->
<div class="l-blockGrid l-blockGrid--6">
	<div class="l-blockGrid-item">Item 1</div>
	<div class="l-blockGrid-item">Item 2</div>
	<div class="l-blockGrid-item">Item 3</div>
	<div class="l-blockGrid-item">Item 4</div>
	<div class="l-blockGrid-item">Item 5</div>
	<div class="l-blockGrid-item">Item 6</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">

<h3 class="demoHeading">Responsive block grids</h3>
Block grids can now (since v6.0.0) have more responsive modifiers and these directly match your existing breakpoint variables. You can see below that 3 lines have been commented-out. If you need block-grids for wider viewports, uncomment these lines [here](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_block-grids.scss#L22-L28)

{% highlight scss%}
$block-grid-breakpoints: (
	narrow: $bp-narrow,
	default: $bp-single-col,
	//mid: $bp-mid,
	//wide: $bp-wide,
	//huge: $bp-huge
);
{% endhighlight %}

<h4>Modifier classes that can be added:</h4>

* `.l-blockGrid--3` - **the default**. 3 columns above the `$bp-single-col` breakpoint
* `.l-blockGrid--2--narrow` - 2 columns above the `$bp-narrow` breakpoint
* `.l-blockGrid--3--mid` - 3 columns above the `$bp-mid` breakpoint
* `.l-blockGrid--4--wide` - 4 columns above the `$bp-wide` breakpoint
* `.l-blockGrid--5--huge` - 5 columns above the `$bp-huge` breakpoint


<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_block-grids.scss" class="demo-src">_block-grids.scss</a>

	<div class="demo-visual">
		<div class="l-blockGrid l-blockGrid--4 l-blockGrid--2--narrow l-blockGrid--3--mid l-blockGrid--5--wide l-blockGrid--6--huge">
			<div class="l-blockGrid-item">Item 1</div>
			<div class="l-blockGrid-item">Item 2</div>
			<div class="l-blockGrid-item">Item 3</div>
			<div class="l-blockGrid-item">Item 4</div>
			<div class="l-blockGrid-item">Item 5</div>
			<div class="l-blockGrid-item">Item 6</div>
			<div class="l-blockGrid-item">Item 7</div>
			<div class="l-blockGrid-item">Item 8</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- 4 columns on wide screen, then 2 columns when we are below the $bp-single-col</code> breakpoint but above the $bp-block-grid-narrow breakpoint, then 1 when we are below the $bp-block-grid-narrow breakpoint -->
<div class="l-blockGrid l-blockGrid--4 l-blockGrid--2--narrow">
	<div class="l-blockGrid-item">Item 1</div>
	<div class="l-blockGrid-item">Item 2</div>
	<div class="l-blockGrid-item">Item 3</div>
	<div class="l-blockGrid-item">Item 4</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">

<h3 class="demoHeading">Guttered block grids</h3>
Block grids can now (since v6.0.0) have added spacing/guttering in between columns. If you add  the `.l-blockGrid--guttered` modifier class

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_block-grids.scss" class="demo-src">_block-grids.scss</a>

	<div class="demo-visual">
		<div class="l-blockGrid l-blockGrid--4 l-blockGrid--guttered">
			<div class="l-blockGrid-item">Item 1</div>
			<div class="l-blockGrid-item">Item 2</div>
			<div class="l-blockGrid-item">Item 3</div>
			<div class="l-blockGrid-item">Item 4</div>
			<div class="l-blockGrid-item">Item 5</div>
			<div class="l-blockGrid-item">Item 6</div>
			<div class="l-blockGrid-item">Item 7</div>
			<div class="l-blockGrid-item">Item 8</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<div class="l-blockGrid l-blockGrid--4 l-blockGrid--guttered">
	<div class="l-blockGrid-item">Item 1</div>
	<div class="l-blockGrid-item">Item 2</div>
	<div class="l-blockGrid-item">Item 3</div>
	<div class="l-blockGrid-item">Item 4</div>
	<div class="l-blockGrid-item">Item 5</div>
	<div class="l-blockGrid-item">Item 6</div>
	<div class="l-blockGrid-item">Item 7</div>
	<div class="l-blockGrid-item">Item 8</div>
</div>
{% endhighlight %}
	</div>
</div>

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
