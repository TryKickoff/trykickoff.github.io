---
title: The Kickoff Grid
layout: demo
body-class: show-grid
navgroup: demo
navactive: demogrid
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

Kickoff comes bundled with a powerful CSS Grid Framework.  To see a full list of it’s features, check out the [grid documentation](/learn/grid.html).

On this page we will show some further examples of grid layouts that can be achieved using the Kickoff Grid.

<a name="standard"></a>

<h2 class="demoHeading">Standard Grid</h2>

Each `.g-col` element uses percentage widths, which are relative to it’s parent `.g` grid container.  The grid’s max width can be modified by changing the `$layout-max-width` variable found in [_variables.scss](https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/_variables.scss).

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_grid.scss" class="demo-src">_grid.scss</a>

	<div class="demo-visual">
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>

		<div class="g g--gutter g--stack--mid grid-test">
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
		<div class="g g--gutter g--stack--mid grid-test">
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
		<div class="g g--gutter grid-test">
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
<div class="g g--gutter g--stack--mid">
	<div class="g-col g-span3">…</div>
	<div class="g-col g-span3">…</div>
	<div class="g-col g-span3">…</div>
	<div class="g-col g-span3">…</div>
</div>
<div class="g g--gutter g--stack--mid">
	<div class="g-col g-span4">…</div>
	<div class="g-col g-span4">…</div>
	<div class="g-col g-span4">…</div>
</div>
<div class="g g--gutter">
	<div class="g-col g-span6">…</div>
	<div class="g-col g-span6">…</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr class="sectionSplitter">
<a name="gutter"></a>

<h2 class="demoHeading">Grid Gutters</h2>

The grid can have several gutter states; No gutter (default), fixed width gutters or scaled gutters.

### Default grid – No gutters

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

### Grid with fixed width gutters

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

### Grid with scaled width gutters
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
<a name="centred"></a>

<h2 class="demoHeading">Centred Columns</h2>
Add a `.g-alignCenter` or `.g-col--centered` class to each column. This also means that you can only have one column per g g--stack.

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_grid.scss" class="demo-src">_grid.scss</a>

	<div class="demo-visual">
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>
		<div class="g grid-test">
			<div class="g-col g-span1 g-col--centered">
				1
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span2 g-col--centered">
				2
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span3 g-col--centered">
				3
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span4 g-col--centered">
				4
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span5 g-col--centered">
				5
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span6 g-col--centered">
				6
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span7 g-col--centered">
				7
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span8 g-col--centered">
				8
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span9 g-col--centered">
				9
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span10 g-col--centered">
				10
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span11 g-col--centered">
				11
			</div>
		</div>
		<div class="g grid-test">
			<div class="g-col g-span12 g-col--centered">
				12
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g">
	<div class="g-col g-span1 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span2 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span3 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span4 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span5 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span6 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span7 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span8 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span9 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span10 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span11 g-col--centered">…</div>
</div>
<div class="g">
	<div class="g-col g-span12 g-col--centered">…</div>
</div>
{% endhighlight %}
	</div>
</div>



<hr class="sectionSplitter">
<a name="columnspans"></a>

<h2 class="demoHeading">Example Grid Layouts</h2>

Here are some examples of the type of grids you can create using the Kickoff Grid.

### 9 / 3 column split above `mid` breakpoint, stacked at lower widths

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--stack--mid g--demo">
			<div class="g-col g-span9--mid"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span3--mid"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--stack--mid">
	<div class="g-col g-span9--mid">…</div>
	<div class="g-col g-span3--mid">…</div>
</div>
{% endhighlight %}
	</div>
</div>



### 4 / 4 / 4 split above `mid` breakpoint, 6 / 6 / 12 at lower widths (with gutters)

<div class="demo l-mb1">
	<div class="demo-visual">
		<div class="g g--gutter g--demo">
			<div class="g-col g-span6 g-span4--mid"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span6 g-span4--mid"><div class="g-content">&nbsp;</div></div>
			<div class="g-col g-span12 g-span4--mid"><div class="g-content">&nbsp;</div></div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g g--gutter">
	<div class="g-col g-span6 g-span4--mid"><div class="g-content">&nbsp;</div></div>
	<div class="g-col g-span6 g-span4--mid"><div class="g-content">&nbsp;</div></div>
	<div class="g-col g-span12 g-span4--mid"><div class="g-content">&nbsp;</div></div>
</div>
{% endhighlight %}
	</div>
</div>



