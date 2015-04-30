---
layout: demo
body-class: show-grid
navgroup: demo
navactive: demogrid
title: The Kickoff Grid

meta:
  description: See Kickoff's grid demo

next:
 - title: Typography demo
   body: See the default typography styles included with the framework
   link: typography.html
 - title: Forms
   body: See all the included form styles
   link: forms.html
---

<a name="standard"></a>
<h2>Standard Grid</h2>
Each `.g-col` element uses percentage widths, set the column size by modifying the width of the `.l-container` wrapper `<div>` in [_global.scss](https://github.com/tmwagency/kickoff/blob/master/scss/_global.scss) and the `$layout-max-width` variables found in [_variables.scss](https://github.com/tmwagency/kickoff/blob/master/scss/_variables.scss).

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_grid.scss" class="demo-src">_grid.scss</a>

	<div class="demo-visual">
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>

		<div class="g-row grid-test">
			<div class="g-col g-span3">
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span3">
				<img src="http://farm5.staticflickr.com/4094/4850604091_63fca411ab_z.jpg">
			</div>
			<div class="g-col g-span3">
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span3">
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span4">
				<img src="http://farm5.staticflickr.com/4094/4850624425_a5bb88e97c_z.jpg">
			</div>
			<div class="g-col g-span4">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span4">
				<img src="http://farm5.staticflickr.com/4094/4850624425_a5bb88e97c_z.jpg">
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span6">
				<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
			</div>
			<div class="g-col g-span6">
				<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g-row">
	<div class="g-col g-span3">

	</div>
	<div class="g-col g-span3">

	</div>
	<div class="g-col g-span3">

	</div>
	<div class="g-col g-span3">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span4">

	</div>
	<div class="g-col g-span4">

	</div>
	<div class="g-col g-span4">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span6">

	</div>
	<div class="g-col g-span6">

	</div>
</div>
{% endhighlight %}
	</div>
</div>

<a name="offset"></a>

## Offset
Move columns to the right using `.g-offset*` classes. Each class increases the left margin of a column by a whole column. For example, `.offset2` moves a `.g-col` element over by two columns.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_grid.scss" class="demo-src">_grid.scss</a>

	<div class="demo-visual">
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>

		<div class="g-row grid-test">
			<div class="g-col g-span4">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span4 g-offset2">
				<p><b>This is offset by 2 column widths</b></p>
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span5">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span5 g-offset2">
				<p><b>This is offset by 2 column widths</b></p>
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span1">
				1
			</div>
			<div class="g-col g-span10 g-offset1">
				<p><b>This is offset by 1 column width</b></p>
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g-row">
	<div class="g-col g-span4">

	</div>
	<div class="g-col g-span4 g-offset2">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span5">

	</div>
	<div class="g-col g-span5 g-offset2">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span1">

	</div>
	<div class="g-col g-span10 g-offset1">

	</div>
</div>
{% endhighlight %}
	</div>
</div>

<a name="sourceordering"></a>

## Source Ordering
Use `.g-push*` to push a column to the right. Use `.g-pull*` to pull column to the left.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_grid.scss" class="demo-src">_grid.scss</a>

	<div class="demo-visual">
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>

		<div class="g-row grid-test">
			<div class="g-col g-span9 g-push3">
				1st column
			</div>
			<div class="g-col g-span3 g-pull9">
				2nd column
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span4">
				1st column
			</div>
			<div class="g-col g-span3 g-push5">
				2nd column
			</div>
			<div class="g-col g-span5 g-pull3">
				3rd column
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g-row">
	<div class="g-col g-span9 g-push3">

	</div>
	<div class="g-col g-span3 g-pull9">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span4">

	</div>
	<div class="g-col g-span3 g-push5">

	</div>
	<div class="g-col g-span5 g-pull3">

	</div>
</div>
{% endhighlight %}
	</div>
</div>

<a name="centred"></a>

## Centred Columns
Add a `.g-col--centred` or `.g-col--centered` class to each column. This also means that you can only have one column per g-row.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_grid.scss" class="demo-src">_grid.scss</a>

	<div class="demo-visual">
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>
		<div class="g-row grid-test">
			<div class="g-col g-span1 g-col--centered">
				1
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span2 g-col--centered">
				2
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span3 g-col--centered">
				3
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span4 g-col--centered">
				4
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span5 g-col--centered">
				5
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span6 g-col--centered">
				6
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span7 g-col--centered">
				7
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span8 g-col--centered">
				8
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span9 g-col--centered">
				9
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span10 g-col--centered">
				10
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span11 g-col--centered">
				11
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span12 g-col--centered">
				12
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g-row">
	<div class="g-col g-span1 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span2 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span3 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span4 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span5 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span6 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span7 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span8 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span9 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span10 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span11 g-col--centered">

	</div>
</div>
<div class="g-row">
	<div class="g-col g-span12 g-col--centered">

	</div>
</div>
{% endhighlight %}
	</div>
</div>
