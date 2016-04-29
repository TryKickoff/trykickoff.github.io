---
layout: docs
navgroup: docs
navactive: docsgrid
title: The Grid

meta:
  description: Read Kickoff's Grid documentation

next:
 - title: Kickoff's CSS
   body: Take a look at how Kickoff structures it’s CSS.
   link: css.html
 - title: Kickoff's Javascript
   body: Minimal and flexible, we show you how Kickoff structures it’s JS.
   link: js.html
---

Kickoff's Grid is a simple, fully responsive, grid framework that can help you build complex layouts very easily.  It is based on a 12 column grid layout and column widths can be set for each media query you specify.

The grid system uses flexbox while also providing fallbacks that can be used in tandem with a feature detection script such as Modernizr in order to support older browsers.  By utilising flexbox, the grid can make otherwise difficult layout tasks very simple, such as allignment and spacing.  Grid column widths are also set in percentages rather than pixels, which makes the grid more flexible for responsive sites.


<hr class="sectionSplitter">
<a name="gridhow"></a>

### How it works

Here’s an overview of how the Kickoff Grid works:

- There are two major components of the grid – the **grid container** and **grid columns**.
- A grid container is specified with the `.g` class, while grid columns are set with the `.g-col` class.
- Content should be placed inside the grid columns and only grid columns can be immediate children of a grid container
- Each grid column can span up to 12 column widths of the overall grid.  By default, grid columns will split the width of the grid equally between them.  For example, if you have three grid columns, each will take up a third of the grid each (four column widths).
- Column widths are set in percentages, so they are responsive relative to their parent element.
- Column widths can be set by adding the appropriate class to a grid column (`.g-col`).  For example, if you want two grid columns spanning 6 column widths each, you would add the class `.g-span6` to each grid column.
- Column widths can be specified for each breakpoint you define.
- Each grid container can contain any number of grid columns.  If the combined width of the grid columns exceed 12 column widths, then they will wrap onto a new row.
- By default, grid columns are given no gutters.  To add gutters to your grid, add the `.g--gutter` class to the grid container for fixed size gutters or `.g--gutter--scaled` for gutters that scale in respect to the viewport.
- Grids columns can be aligned both horizontally and vertically inside their grid container using helper classes.
- You can choose to stack your grid columns up to a certain breakpoint by using the `.g--stack--{breakpoint}` class.

Let’s take a look at how all of that works with some examples.

<hr class="sectionSplitter">
<a name="gridbasic"></a>

### Grid basics

 To setup a basic grid, use the `.g` and `.g-col` classes to specify the grid container and grid columns.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g">
			<div class="g-col g-span4">Column 1 of 3</div>
			<div class="g-col g-span4">Column 2 of 3</div>
			<div class="g-col g-span4">Column 3 of 3</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g">
	<div class="g-col g-span4">Column One</div>
	<div class="g-col g-span4">Column Two</div>
	<div class="g-col g-span4">Column Three</div>
</div>
{% endhighlight %}
	</div>
</div>

The above example has three columns, each spanning 4 column widths each.

Each grid column can span up to 12 column widths.  Here is what the grid looks like split into 12 separate columns:

<div class="demo">
	<div class="demo-visual">
		<div class="g g--demo">
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>

<hr class="sectionSplitter">
<a name="gridoptions"></a>

### Grid options

<table class="table table--striped">
    <thead>
      <tr>
        <th></th>
        <th class="u-textCenter">
          Narrow<br>
          <small>≥400px</small>
        </th>
        <th class="u-textCenter">
          Mid<br>
          <small>≥750px</small>
        </th>
        <th class="u-textCenter">
          Wide<br>
          <small>≥1000px</small>
        </th>
        <th class="u-textCenter">
          Huge<br>
          <small>≥1250px</small>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Class suffix</th>
        <td><code>--narrow</code></td>
        <td><code>--mid</code></td>
        <td><code>--wide</code></td>
        <td><code>--huge</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Grid behaviour</th>
        <td colspan="4">Horizontal by default.</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="4">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Gutter width</th>
        <td colspan="4">Either:<br>20px (10px on each side of a column) when using <code>.g--gutter</code>,<br>or calculated as a percentage of the <code>$layout-max-width</code> using <code>.g--gutter--scaled</code>.</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="4">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column Alignment</th>
        <td colspan="4">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Flexible Stacking</th>
        <td colspan="4">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Equal Height Columns</th>
        <td colspan="4">Yes</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Flexbox Fallback</th>
        <td colspan="4">Yes, available via feature classes (i.e. <a href="https://modernizr.com/">Modernizr</a>).</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Offset</th>
        <td colspan="4">Coming Soon</td>
      </tr>
    </tbody>
  </table>

<hr class="sectionSplitter">
<a name="gridvariables"></a>

### Grid Variables

The Kickoff Grid provides a number of variables that can be changed to modify certain aspects of the grid.  You will find these in the `_variables.scss` file of Kickoff.

These variables determine the number of grid columns, the gutter width, max grid container width and the breakpoints from which the column width classes are generated.  They also control whether certain aspects of the grid are generated in the compiled CSS.

```scss
$layout-max-width:   1000; // [in pixels]
$grid-column-count:   12; // Total column count
$grid-gutter-width:   20; // [in pixels]

$breakpoints: (
	narrow: 400px,
	mid:    750px,
	wide:   1000px,
	huge:   1250px
);

$responsive-grid-sizes : true; // Set to false if you don't want grid column classes for each breakpoint
$use-legacy-grid       : true;  // Set to false if you don’t want flexbox fallback classes to be provided
```

Note that you can change both the name and the value of the breakpoints if you want to, but this will also change the grid column breakpoint classes.

So for example, by default, using the class `.g-span4--mid` will make a grid column span 4 column widths above the mid breakpoint.  If you were to change the name of the `mid` breakpoint to `foo` you would then need to apply the class `.g-span4--foo` to reference this breakpoint.

<hr class="sectionSplitter">
<a name="gridgutters"></a>

### Gutters

By default, grid columns have no gutters applied to them.  You can add two different types of gutter to your grid, using the following two classes:

N.b. For consistency, we advise using one of these gutter classes throughout your website, rather than mixing and matching.

#### `.g--gutter`

Applying the `.g--gutter` class to your grid container will add a fixed width gutter to grid columns (by default this gutter is 20px).

<div class="demo">
	<div class="demo-visual">
		<div class="g g--gutter g--demo">
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>

#### `.g--gutter--scaled`

Applying the `.g--gutter--scaled` class to your grid container will add a percentage width gutter that scales in respect to its container.

<div class="demo">
	<div class="demo-visual">
		<div class="g g--gutter--scaled g--demo">
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span1"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>

<hr class="sectionSplitter">
<a name="gridstacking"></a>

### Column Stacking

In the demos above, you will notice that if you narrow the browser viewport, the grid columns will not automatically stack.  This is because this isn’t necessarily the required behaviour, you may want columns to keep their proportions no matter what the width of the viewport.jpg

Therefore, for better flexibility, when you want grid columns to stack, this can be specified in a couple of different ways.

#### The `.g--stack` class

If you want grid columns to stack by default, you can add the `.g--stack` class to a grid container.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--stack">
			<div class="g-col">Column 1 of 3</div>
			<div class="g-col">Column 2 of 3</div>
			<div class="g-col">Column 3 of 3</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--stack">
	<div class="g-col">Column 1 of 3</div>
	<div class="g-col">Column 2 of 3</div>
	<div class="g-col">Column 3 of 3</div>
</div>
{% endhighlight %}
	</div>
</div>

The `.g--stack` class will stack grid columns until this behaviour is overriden by a column span class.

For example, if we want our columns to stack until the `mid` breakpoint and to be evenly divided above this breakpoint, we can add a class of `.g-span4--mid` to our three grid columns:

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--stack">
			<div class="g-col g-span4--mid">Column 1 of 3</div>
			<div class="g-col g-span4--mid">Column 2 of 3</div>
			<div class="g-col g-span4--mid">Column 3 of 3</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--stack">
	<div class="g-col g-span4--mid">Column 1 of 3</div>
	<div class="g-col g-span4--mid">Column 2 of 3</div>
	<div class="g-col g-span4--mid">Column 3 of 3</div>
</div>
{% endhighlight %}
	</div>
</div>

Alternatively, we can modify the `.g--stack` class slightly to only stack our columns up until a certain breakpoint.  So to make our columns stack only up to the `mid` breakpoint we would use a class of `.g--stack--mid`:

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--stack--mid">
			<div class="g-col g-span4">Column 1 of 3</div>
			<div class="g-col g-span4">Column 2 of 3</div>
			<div class="g-col g-span4">Column 3 of 3</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--stack--mid">
	<div class="g-col g-span4">Column 1 of 3</div>
	<div class="g-col g-span4">Column 2 of 3</div>
	<div class="g-col g-span4">Column 3 of 3</div>
</div>
{% endhighlight %}
	</div>
</div>

Both of these examples show two different ways of achieving the same grid layout.  We’ve made our stacking classes as flexible as possible for many potential use cases.

<hr class="sectionSplitter">
<a name="gridcolumns"></a>

### Column Spans

Each column can span up to 12 grid column widths, and you can control this width across each breakpoint.

The default breakpoints are defined in the `_variables.scss` file in Kickoff:

```scss
$breakpoints: (
	narrow: 400px,
	mid:    750px,
	wide:   1000px,
	huge:   1250px
);
```

Both the names and the values of these can be changed depending on your preferences.  You can also add additional breakpoints and doing so will automatically add these to the grid classes available.

If you have been through the basic demos, you will have seen some examples of the column span classes in use already.  Here’s a couple of more complex examples.

#### Narrow to Wider Viewports

For many designs you will want to have a different grid layout on narrow devices (such as mobile) to wider viewports (such as on a desktop).

The example below shows how you can do this.   Here our three grid columns will each span 4 column widths above the `wide` breakpoint.  Below this breakpoint column one and two will take up 6 column widths and column three will spread across the whole width of the grid.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--gutter g--demo">
			<div class="g-col g-span6 g-span4--wide"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span6 g-span4--wide"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span12 g-span4--wide"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--gutter">
	<div class="g-col g-span6 g-span4--wide">…</div>
	<div class="g-col g-span6 g-span4--wide">…</div>
	<div class="g-col g-span12 g-span4--wide">…</div>
</div>
{% endhighlight %}
	</div>
</div>

#### Combining Stacking and Column Classes

We can easily combine our stacking classes with column width classes to define fairly complex grids:

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--stack g--gutter g--demo">
			<div class="g-col g-span9--mid g-span2--wide g-span12--huge"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span4--mid g-span8--wide g-span6--huge"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span4--mid g-span2--wide g-span6--huge"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--stack g--gutter">
	<div class="g-col g-span9--mid g-span2--wide g-span12--huge">…</div>
	<div class="g-col g-span4--mid g-span8--wide g-span6--huge">…</div>
	<div class="g-col g-span4--mid g-span2--wide g-span6--huge">…</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">
<a name="gridalignment"></a>

### Allignment

Grid columns can be aligned vertically and horizontally with respect to their grid container using the following classes.

N.b. These classes rely on flexbox CSS properties, and so gracefully degrade on older browsers that don’t support this.

---

#### `.g--alignTop`

Aligns grid cells to the top of the grid container.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--alignTop g--demo">
			<div class="g-col g-span4"><div class="g-content g-content--tall">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>

---

#### `.g--alignBottom`

Aligns grid cells to the bottom of the grid container.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--alignBottom g--demo">
			<div class="g-col g-span4"><div class="g-content g-content--tall">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>

---

#### `.g--alignRight`

Aligns grid cells to the right of the grid container.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--alignRight g--demo">
			<div class="g-col g-span4"><div class="g-content g-content--tall">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>

---

#### `.g--alignCenter`

Aligns grid cells in the horizontal center of the grid container.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--alignCenter g--demo">
			<div class="g-col g-span4"><div class="g-content g-content--tall">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>

---

#### `.g--alignCenter--v`

Aligns grid cells in the vertical center of the grid container.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--alignCenter--v g--demo">
			<div class="g-col g-span4"><div class="g-content g-content--tall">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>

---

#### `.g-col--centered`

Aligns an individual grid cells horizontally in the grid container.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--demo">
			<div class="g-col g-span6"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span6"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-col--centered g-span9"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>


<hr class="sectionSplitter">
<a name="gridnesting"></a>

### Nesting Grids

Nesting grids is made very simple.  Just apply the base grid classes to an element inside your parent grid columns and use it like you would any other grid.


<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--gutter g--demo">
			<div class="g-col g-span9"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span9">
				<div class="g g--gutter">
					<div class="g-col g-span4"><div class="g-content">&nbsp;</div></div>
					<div class="g-col g-span4"><div class="g-content">&nbsp;</div></div>
					<div class="g-col g-span4"><div class="g-content">&nbsp;</div></div>
				</div>
			</div>
			<div class="g-col g-span6"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--gutter">
	<div class="g-col g-span9">…</div>
	<div class="g-col g-span9">
		<div class="g g--gutter">
			<div class="g-col g-span4">…</div>
			<div class="g-col g-span4">…</div>
			<div class="g-col g-span4">…</div>
		</div>
	</div>
	<div class="g-col g-span6">…</div>
</div>
{% endhighlight %}
	</div>
</div>


<hr class="sectionSplitter">
<a name="gridequalheight"></a>

### Equal Height Content

If you would like to make all of the child elements inside your grid columns the same height, you can use the `.g--equalHeight` class.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--equalHeight g--demo">
			<div class="g-col g-span4"><div class="g-content g-content--tall">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span2"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
</div>


<hr class="sectionSplitter">
<a name="gridholdWidth"></a>

### Holding Column Width

Sometimes, you may wish to hold the width of a column between breakpoints, usually when you are not using the whole width of the grid for your columns and want a column to maintain it’s width.  A good example is a narrow navigation sidebar.

You can do this by giving a grid column the `.g-holdWidth--mid`, where `mid` is the breakpoint above which to hold the width and can be any of your defined breakpoints.

N.b.  The held width will be calculated in pixels relative to the `$layout-max-width` variable in `_variables.scss`.

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--gutter g--demo">
			<div class="g-col g-span6 g-span3--mid g-span2--wide g-holdWidth--wide"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span6 g-span9--mid g-span6--wide"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--gutter">
	<div class="g-col g-span6 g-span3--mid g-span2--wide g-holdWidth--wide">…</div>
	<div class="g-col g-span6 g-span9--mid g-span6--wide">…</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">
<a name="gridexamples"></a>

### More Grid Examples

To see more examples of the grid, check out our [grid demo page](/demos/grids.html).
