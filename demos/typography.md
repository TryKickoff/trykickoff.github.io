---
layout: demo
navgroup: demo
navactive: demotype
title: Typography

meta:
  description: See Kickoff's typography demo

next:
 - title: Grids demo
   body: Find out about our grid and how to use it
   link: grids.html
 - title: Components demo
   body: See all the included components with the framework
   link: components.html
---

<a name="hp"></a>

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/_typography.scss" class="demo-src">_typography.scss</a>

	<div class="demo-visual">
		<h1>Heading 1 <small>small</small></h1>
		<h2>Heading 2</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus perspiciatis labore quis, qui, animi hic autem est aut beatae sit!</p>
		<h3>Heading 3</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis modi a numquam commodi provident amet.</p>
		<h4>Heading 4</h4>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut error voluptates optio dolores vel libero. Odit hic nostrum a tempora, facere aut, quia.</p>
		<h5>Heading 5</h5>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, reiciendis.</p>
		<h6>Heading 6</h6>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, repellendus illum ad.</p>
	</div>
	<div class="demo-code">
{% highlight html%}
<h1>Heading 1</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fuga ducimus dolorem suscipit.</p>
<h2>Heading 2</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus perspiciatis labore quis, qui, animi hic autem est aut beatae sit!</p>
<h3>Heading 3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis modi a numquam commodi provident amet.</p>
<h4>Heading 4</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut error voluptates optio dolores vel libero. Odit hic nostrum a tempora, facere aut, quia.</p>
<h5>Heading 5</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, reiciendis.</p>
<h6>Heading 6</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, repellendus illum ad.</p>
{% endhighlight %}
	</div>
</div>

---

<a name="tuc"></a>

### Text utility classes
We include some helpful utility classes if you need to align your text quickly. Use <code>.text-centre</code> or  <code>.text-center</code> to centre your text. Use <code>.text-right</code> to right align. Or use <code>.text-left</code> to left align.

As we are British, we decided to include two spellings for our centred text : `.text-centre` and `.text-center` — use whichever one you prefer..

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/_typography.scss" class="demo-src">_typography.scss</a>

	<div class="demo-visual">

		<p class="text-left"><b>Left aligned: </b>Lorem ipsum dolor sit amet.</p>
		<p class="text-centre"><b>Centre aligned: </b>Lorem ipsum dolor sit amet.</p>
		<p class="text-right"><b>Right aligned: </b>Lorem ipsum dolor sit amet.</p>
	</div>
	<div class="demo-code">
{% highlight html%}
<p class="text-left">Lorem ipsum dolor sit amet.</p>
<p class="text-centre">Lorem ipsum dolor sit amet.</p>
<p class="text-right">Lorem ipsum dolor sit amet.</p>
{% endhighlight %}
	</div>
</div>

---

<a name="tls"></a>

<h3>Text-level semantics</h3>

<div class="g-row">
	<div class="g-span6 g-col">
		<p>
			The <a href="#">a element</a> example<br>
			The <abbr title="Title text">abbr element</abbr> example<br>
			The <b>b element</b> example<br>
			The <cite>cite element</cite> example<br>
			The <code>code element</code> example<br>
			The <del>del element</del> example<br>
			The <dfn>dfn element</dfn> example<br>
			The <em>em element</em> example<br>
			The <i>i element</i> example<br>
			The img element <img src="http://placekitten.com/16/16" alt=""> example<br>
			The <ins>ins element</ins> example<br>
			The <kbd>kbd element</kbd> example
		</p>
	</div>
	<div class="g-span6 g-col">
		<p>
			The <mark>mark element</mark> example<br>
			The <q>q element <q>inside</q> a q element</q> example <br>
			The <s>s element</s> example<br>
			The <samp>samp element</samp> example<br>
			The <small>small element</small> example<br>
			The <span>span element</span> example<br>
			The <strike>strike element</strike> example<br>
			The <strong>strong element</strong> example<br>
			The <sub>sub element</sub> example<br>
			The <sup>sup element</sup> example<br>
			The <var>var element</var> example<br>
			The <u>u element</u> example
		</p>
	</div>
</div>

---

<a name="bq"></a>

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/_typography.scss" class="demo-src">_typography.scss</a>

	<div class="demo-visual">
		<h3>Blockquote</h3>
		<blockquote>
			<p>Of all the gin joints in all the towns in all the world, she walks into mine.</p>
			<small>Rick Blaine</small>
		</blockquote>
	</div>
	<div class="demo-code">
{% highlight html%}
<blockquote>
	<p>Of all the gin joints in all the towns in all the world, she walks into mine.</p>
	<small>Rick Blaine</small>
</blockquote>
{% endhighlight %}
	</div>
</div>

---

<a name="ol"></a>

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/_typography.scss" class="demo-src">_typography.scss</a>

	<div class="demo-visual">
		<h3>Ordered lists</h3>
		<ol>
			<li>list item 1</li>
			<li>list item 1
			<ol>
				<li>list item 2</li>
				<li>list item 2
				<ol>
					<li>list item 3</li>
					<li>list item 3</li>
				</ol>
				</li>
				<li>list item 2</li>
				<li>list item 2</li>
			</ol>
			</li>
			<li>list item 1</li>
			<li>list item 1</li>
		</ol>
	</div>
	<div class="demo-code">
{% highlight html%}
<ol>
	<li>list item 1</li>
	<li>list item 1
	<ol>
		<li>list item 2</li>
		<li>list item 2
		<ol>
			<li>list item 3</li>
			<li>list item 3</li>
		</ol>
		</li>
		<li>list item 2</li>
		<li>list item 2</li>
	</ol>
	</li>
	<li>list item 1</li>
	<li>list item 1</li>
</ol>
{% endhighlight %}
	</div>
</div>

---

<a name="ul"></a>

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/_typography.scss" class="demo-src">_typography.scss</a>

	<div class="demo-visual">
		<h3>Unordered lists</h3>
		<ul>
			<li>list item 1</li>
			<li>list item 2
			<ul>
				<li>list item 2a</li>
				<li>list item 2b
				<ul>
					<li>list item 2bi</li>
					<li>list item 2bii</li>
				</ul>
				</li>
				<li>list item 2c</li>
				<li>list item 2d</li>
			</ul>
			</li>
			<li>list item 3</li>
			<li>list item 4</li>
		</ul>
	</div>
	<div class="demo-code">
{% highlight html%}
<ul>
	<li>list item 1</li>
	<li>list item 2
	<ul>
		<li>list item 2a</li>
		<li>list item 2b
		<ul>
			<li>list item 2bi</li>
			<li>list item 2bii</li>
		</ul>
		</li>
		<li>list item 2c</li>
		<li>list item 2d</li>
	</ul>
	</li>
	<li>list item 3</li>
	<li>list item 4</li>
</ul>
{% endhighlight %}
	</div>
</div>

---

<a name="usul"></a>

<h3>Unstyled [un]ordered lists</h3>
<p>Add an <code>.unstyled</code> class to any <code>&lt;ul></code> or <code>&lt;ol></code> to remove the default bullets, numbering and margins.</p>
<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/_typography.scss" class="demo-src">_typography.scss</a>

	<div class="demo-visual">
		<ul class="unstyled">
			<li>ul list item 1</li>
			<li>ul list item 2</li>
			<li>ul list item 3</li>
			<li>ul list item 4</li>
		</ul>
		<br/>
		<ol class="unstyled">
			<li>ol list item 1</li>
			<li>ol list item 2</li>
			<li>ol list item 3</li>
			<li>ol list item 4</li>
		</ol>
	</div>
	<div class="demo-code">
{% highlight html%}
<ul class="unstyled">
	<li>list item 1</li>
	<li>list item 2</li>
	<li>list item 3</li>
	<li>list item 4</li>
</ul>

<ol class="unstyled">
	<li>list item 1</li>
	<li>list item 2</li>
	<li>list item 3</li>
	<li>list item 4</li>
</ol>
{% endhighlight %}
	</div>
</div>

---

<a name="dl"></a>

<h3>Definition list</h3>
<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/_typography.scss" class="demo-src">_typography.scss</a>

	<div class="demo-visual">
		<dl>
			<dt>Definition name</dt>
			<dd>Definition value</dd>
			<dt>Definition name</dt>
			<dd>Definition value</dd>
			<dd>Definition value</dd>
			<dt>Definition name</dt>
			<dt>Definition name</dt>
			<dd>Definition value</dd>
		</dl>
	</div>
	<div class="demo-code">
{% highlight html%}
<dl>
	<dt>Definition name</dt>
	<dd>Definition value</dd>
	<dt>Definition name</dt>
	<dd>Definition value</dd>
	<dd>Definition value</dd>
	<dt>Definition name</dt>
	<dt>Definition name</dt>
	<dd>Definition value</dd>
</dl>
{% endhighlight %}
	</div>
</div>

---

<a name="hdl"></a>
<h3>Horizontal definition list</h3>
<p>Add a <code>.dl-horizontal</code> class to your definition list (<code>&lt;dl></code>) to make the values (<code>&lt;dd></code>) float beside the name (<code>&lt;dt></code>)</p>

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/_typography.scss" class="demo-src">_typography.scss</a>

	<div class="demo-visual">
		<dl class="dl-horizontal">
			<dt>Definition name</dt>
			<dd>Definition value</dd>
			<dt>Definition name</dt>
			<dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa pariatur animi totam, amet.</dd>
			<dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus aut consequuntur, recusandae delectus voluptatibus.</dd>
			<dt>Definition name</dt>
			<dt>Definition name</dt>
			<dd>Definition value</dd>
		</dl>
	</div>
	<div class="demo-code">
{% highlight html%}
<dl class="dl-horizontal">
	<dt>Definition name</dt>
	<dd>Definition value</dd>
	<dt>Definition name</dt>
	<dd>Definition value</dd>
	<dd>Definition value</dd>
	<dt>Definition name</dt>
	<dt>Definition name</dt>
	<dd>Definition value</dd>
</dl>
{% endhighlight %}
	</div>
</div>
