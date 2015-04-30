---
layout: demo
body-class: show-grid
navgroup: demo
navactive: democomponents
title: Components

meta:
  description: See Kickoff's components demo

next:
 - title: Get Kickoff
   body: Find out how to get your hands on Kickoff here.
   link: get.html
 - title: Use Kickoff
   body: Ready to get your hands dirty?<br>We’ll show you where to start.
   link: use.html
---
<a name="buttons"></a>

## Buttons
Button styles can be applied to anything with the `.btn` class applied. However, typically you'll want to apply these to only `<a>` and `<button>` elements for the best rendering.

#### Button sizes
Fancy larger or smaller buttons? Add `.btn--large`, or `.btn--small` for additional sizes. The colours used by this button are defined in our [colour palette](https://github.com/tmwagency/kickoff/blob/master/scss/_color-palette.scss#L38-L39) file.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_buttons.scss" class="demo-src">_buttons.scss</a>

	<div class="demo-visual">
		<h4>Normal size</h4>
		<a href="#" class="btn">Button</a>

		<h4>Large size</h4>
		<a href="#" class="btn btn--large">Button</a>

		<h4>Small size</h4>
		<a href="#" class="btn btn--small">Button</a>
	</div>

	<div class="demo-code">
{% highlight html%}
<!-- Normal buttons with default colour -->
<a href="#" class="btn">Button</a>

<!-- Larger buttons use the .btn--large modifier class -->
<a href="#" class="btn btn--large">Button</a>

<!-- Small buttons use the .btn--small modifier class -->
<a href="#" class="btn btn--small">Button</a>
{% endhighlight %}
	</div>
</div>

---

### Button styles
We provide only one button style variant because we think you should define your own. This variant, the *primary* button, uses the `.btn--primary` modifier class. We suggest setting up your own buttons in the same way, [see here](https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_buttons.scss#L81-L95).

The colours used by this button are defined in our [colour palette](https://github.com/tmwagency/kickoff/blob/master/scss/_color-palette.scss#L41-L42) file.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_buttons.scss" class="demo-src">_buttons.scss</a>

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

---

### Block-level buttons
To make buttons span to 100% width, add the `.btn--block` modifier class. You can also see that we are using the `.btn--primary` modifier class as well as `.btn--block`.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_buttons.scss" class="demo-src">_buttons.scss</a>

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

---

### Natural buttons
We have `.btn--natural` modifier class that inherits sizing from its parent. This is extremely useful when you have a button inside a paragraph or a heading.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_buttons.scss" class="demo-src">_buttons.scss</a>

	<div class="demo-visual">
		<p>
			With <code>.btn--natural</code> modifier class: <a href="#" class="btn btn--natural btn--primary">button</a>
		</p>
		<p>
			Without <code>.btn--natural</code> modifier class: <a href="#" class="btn btn--primary">button</a>
		</p>
	</div>
	<div class="demo-code">
{% highlight html%}
<a href="#" class="btn btn--natural btn--primary">With .btn--natural button</a>
{% endhighlight %}
	</div>
</div>

---

### Pill Buttons
Add the `.btn--pill` modifier class to any `.btn`.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_buttons.scss" class="demo-src">_buttons.scss</a>

	<div class="demo-visual">
		<p>
			<a href="#" class="btn btn--pill btn--primary">Primary pill</a>
			<a href="#" class="btn btn--pill">Default pill</a>
		</p>

		<!-- Add the .btn--natural modifier class to fix the padding -->
		<p>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a button </a> in a paragraph!</p>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Pill buttons use the .btn--pill modifier class -->
<a href="#" class="btn btn--pill btn--primary">Pill</a>
<a href="#" class="btn btn--pill">This is a Pill</a>

<p>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a button </a> in a paragraph!</p>
{% endhighlight %}
	</div>
</div>

---

<a name="mediaobject"></a>

## Media Object
Place any image- and text-like content side-by-side, as per: [media object](http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code)

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_media-object.scss" class="demo-src">_media-object.scss</a>

	<div class="demo-visual">
		<div class="media">
			<div class="media-img">
				<img src="http://hhhhold.com/s">
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
				<img src="http://hhhhold.com/m">
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Media element with left aligned image -->
<div class="media">
	<div class="media-img">
		<img src="http://hhhhold.com/s">
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
		<img src="hhhhold.com/m">
	</div>
</div>
{% endhighlight %}
	</div>
</div>

---

<a name="fluidvideo"></a>

## Fluid video
Wrap any iframed video embed (from Youtube or Vimeo etc) in a `.fluidVideo` container. We assume 16:9 ratio so if you need anything else you will have to modify the [source](https://github.com/tmwagency/kickoff/blob/c3d6bbe23aa9fc51c66e11d6e13f40af16651510/scss/partials/components/_fluid-video.scss) or use a script like [fitvid.js](http://fitvidsjs.com/).

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_fluid-video.scss" class="demo-src">_fluid-video.scss</a>

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

---

<a name="blockgrids"></a>

## Block grids
Block grids give you a way to evenly split contents of a list within the grid. If you wanted to create a row of five images or paragraphs that need to stay evenly spaced no matter the screen size, the block grid is for you.

Add the `.l-blockGrid` class to any unordered list, the add the `.l-blockGrid--#up` class to determine how many grid columns appear in a row.

### Narrow block grids
There is also a narrow option for the block grid which allows you to choose a different column count on narrower viewports. Add the `.l-blockGrid--#up--narrow` modifier class to make use of this.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_block-grids.scss" class="demo-src">_block-grids.scss</a>

	<div class="demo-visual">
		<ul class="l-blockGrid l-blockGrid--6up">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
			<li>Item 5</li>
			<li>Item 6</li>
		</ul>
		<br>
		<ul class="l-blockGrid l-blockGrid--4up l-blockGrid--2up--narrow">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
			<li>Item 5</li>
			<li>Item 6</li>
			<li>Item 7</li>
			<li>Item 8</li>
		</ul>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- 6 columns on wide screen, then 1 column (stacked) when we are below the $bp-single-col breakpoint -->
<ul class="l-blockGrid l-blockGrid--6up">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
	<li>Item 5</li>
	<li>Item 6</li>
</ul>

<!-- 4 columns on wide screen, then 2 columns when we are below the $bp-single-col</code> breakpoint but above the $bp-block-grid-narrow breakpoint, then 1 when we are below the $bp-block-grid-narrow breakpoint -->
<ul class="l-blockGrid l-blockGrid--4up l-blockGrid--2up--narrow">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
</ul>
{% endhighlight %}
	</div>
</div>

---

<a name="lists"></a>

## Lists
For centred lists, add the `.l-list--centred` class to an [un]ordered list. For floated lists, add the `.l-list--floated` class.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_lists.scss" class="demo-src">_lists.scss</a>

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

---

<a name="tables"></a>

## Tables
All tables should use the `.table` class name. We have included many options, so see the demos below.

### Default table
<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_tables.scss" class="demo-src">_tables.scss</a>

	<div class="demo-visual">
		<table class="table" cellpadding="0" cellspacing="0">
			<thead>
				<th>Table head</th>
				<th>Table head</th>
				<th>Table head</th>
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
				<td>Table foot</td>
				<td>Table foot</td>
				<td>Table foot</td>
			</tfoot>
		</table>
	</div>
	<div class="demo-code">
{% highlight html%}
<table class="table" cellpadding="0" cellspacing="0">
	<thead>
		<th>Table head</th>
		<th>Table head</th>
		<th>Table head</th>
	</thead>
	<tbody>
		<tr>
			<td>Table cell</td>
			<td>Table cell</td>
			<td>Table cell</td>
		</tr>
	</tbody>
	<tfoot>
		<td>Table foot</td>
		<td>Table foot</td>
		<td>Table foot</td>
	</tfoot>
</table>
{% endhighlight %}
	</div>
</div>

### Bordered table
To add a table border, add the `.table--bordered` modifier class

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_tables.scss" class="demo-src">_tables.scss</a>

	<div class="demo-visual">
		<table class="table table--bordered" cellpadding="0" cellspacing="0">
			<thead>
				<th>Table head</th>
				<th>Table head</th>
				<th>Table head</th>
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
				<td>Table foot</td>
				<td>Table foot</td>
				<td>Table foot</td>
			</tfoot>
		</table>
	</div>
	<div class="demo-code">
{% highlight html%}
<table class="table table--bordered" cellpadding="0" cellspacing="0">
	<thead>
		<th>Table head</th>
		<th>Table head</th>
		<th>Table head</th>
	</thead>
	<tbody>
		<tr>
			<td>Table cell</td>
			<td>Table cell</td>
			<td>Table cell</td>
		</tr>
	</tbody>
	<tfoot>
		<td>Table foot</td>
		<td>Table foot</td>
		<td>Table foot</td>
	</tfoot>
</table>
{% endhighlight %}
	</div>
</div>

### Table with all the styles
The table below has many different styles.

* To add rounded corners, add the `.table--rounded` modifier class
* To add even/odd stripes, add the `.table--striped` modifier class
* To add a row hover effect, add the `.table--hover` modifier class

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_tables.scss" class="demo-src">_tables.scss</a>

	<div class="demo-visual">
		<table class="table table--bordered table--striped table--hover table--rounded" cellpadding="0" cellspacing="0">
			<thead>
				<th>Table head</th>
				<th>Table head</th>
				<th>Table head</th>
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
				<td>Table foot</td>
				<td>Table foot</td>
				<td>Table foot</td>
			</tfoot>
		</table>
	</div>
	<div class="demo-code">
{% highlight html%}
<table class="table table--bordered table--striped table--hover table--rounded" cellpadding="0" cellspacing="0">
	<thead>
		<th>Table head</th>
		<th>Table head</th>
		<th>Table head</th>
	</thead>
	<tbody>
		<tr>
			<td>Table cell</td>
			<td>Table cell</td>
			<td>Table cell</td>
		</tr>
	</tbody>
	<tfoot>
		<td>Table foot</td>
		<td>Table foot</td>
		<td>Table foot</td>
	</tfoot>
</table>
{% endhighlight %}
	</div>
</div>

---

<a name="rwdtables"></a>
## Responsive tables
We have included a simple way to make your tables responsive, wrap your tables in `.tableResponsive` and we'll make them mobile friendly by enabling horizontal scrolling. Only applies below the `$bp-single-col` scss variable. Everything above that will display normally.

If you need more responsive tables, consider [Tablesaw](https://github.com/filamentgroup/tablesaw) by the Filament Group.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_tables.scss" class="demo-src">_tables.scss</a>

	<div class="demo-visual">
		<div class="tableResponsive">
			<table class="table" cellpadding="0" cellspacing="0">
				<thead>
					<th>Table Cell</th>
					<th>Table Cell</th>
					<th>Table Cell</th>
					<th>Table Cell</th>
					<th>Table Cell</th>
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
					<td>Table Cell</td>
					<td>Table Cell</td>
					<td>Table Cell</td>
					<td>Table Cell</td>
					<td>Table Cell</td>
				</tfoot>
			</table>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<div class="tableResponsive">
	<table class="table" cellpadding="0" cellspacing="0">
		<thead>
			<th>Table Cell</th>
			<th>Table Cell</th>
			<th>Table Cell</th>
			<th>Table Cell</th>
			<th>Table Cell</th>
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
			<td>Table Cell</td>
			<td>Table Cell</td>
			<td>Table Cell</td>
			<td>Table Cell</td>
			<td>Table Cell</td>
		</tfoot>
	</table>
</div>

{% endhighlight %}
	</div>
</div>

---

<a name="tabs"></a>

## Tabs
Add a `.tabs` class to any unordered list to create some simple tabs. These will be aligned to the left as you can see below. If you need to align them to the centre, add the `.tabs--alignCenter` modifier class or to the right with the `.tabs--alignRight` modifier. Note, we use `float: right;` for the right-aligned tabs so the order is reversed.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_tabs.scss" class="demo-src">_tabs.scss</a>

	<div class="demo-visual">
		<!-- Default, left-aligned tabs -->
		<ul class="tabs">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
		<!-- Centre-aligned tabs -->
		<ul class="tabs tabs--alignCenter">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
		<!-- Right-aligned tabs -->
		<ul class="tabs tabs--alignRight">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Default, left-aligned tabs -->
<ul class="tabs">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>

<!-- Centre-aligned tabs -->
<ul class="tabs tabs--alignCenter">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>

<!-- Right-aligned tabs -->
<ul class="tabs tabs--alignRight">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>
{% endhighlight %}
	</div>
</div>

