---
layout: docs
navgroup: docs
navactive: docssublime
title: Sublime Text snippets for Kickoff

meta:
  description: Use Sublime? These handy snippets will make life with Kickoff even easier.

next:
 - title: See some demos
   body: View demos of all our components and modules.
   link: ../demos/components.html
 - title: Use Yeoman
   body: The fastest way to get Kickoff is using our Yeoman generator. Find out about it here.
   link: yeoman.html
---

If you use Sublime Text, we have created some snippets to use with the framework.

## How to install

If you experience problems or editor crashes please [file an issue](https://github.com/sergeche/emmet-sublime/issues).

With [Package Control](http://wbond.net/sublime_packages/package_control):

1. Run “Package Control: Install Package” command, find and install `Kickoff Snippets` plugin.
2. Restart ST editor (if required)

Manually:

1. Clone or [download](https://github.com/tmwagency/Kickoff-snippets/archive/master.zip) git repo into your packages folder (in ST, find Browse Packages... menu item to open this folder)
2. Restart ST editor (if required)

##### Tab trigger for all items: 'ko' &#8677;

## HTML
[Reference](https://github.com/tmwagency/Kickoff-snippets/tree/master/HTML)

#### form - [ko&#8677;]
Add the `.form--horizontal` class to have form labels to the left of the inputs:

	<form action="#" class="form--horizontal">
		<fieldset>
			<legend>Your form</legend>

		</fieldset>
	</form>


#### form items - [ko&#8677;]

	<ul>
		<li class="form-controlGroup">
			<label for="name" class="form-controlGroup-label">Name</label>
			<div class="form-controlGroup-input">
				<input type="text" id="name" placeholder="Zander Martineau" />
			</div>
		</li>
		<li class="form-controlGroup">
			<label for="email" class="form-controlGroup-label">Email</label>
			<div class="form-controlGroup-input">
				<input type="email" id="email" placeholder="steve@apple.com" />
			</div>
		</li>
		<li class="form-controlGroup">
			<label for="phone" class="form-controlGroup-label">Phone</label>
			<div class="form-controlGroup-input">
				<input type="number" id="phone" placeholder="020 123 4567" />
			</div>
		</li>
		<li class="form-controlGroup">
			<label for="comments" class="form-controlGroup-label">Comments <br>
				<small>This is a description</small>
			</label>
			<div class="form-controlGroup-input">
				<textarea id="comments" rows="3" cols="50"></textarea>
			</div>
		</li>
	</ul>


#### form item - [ko&#8677;]

	<li class="form-controlGroup">
		<label for="name" class="form-controlGroup-label">Label</label>
		<div class="form-controlGroup-input">
			<input type="text" id="name" placeholder="Placeholder text" />
		</div>
	</li>


#### form note - [ko&#8677;]

	<span class="form-note">?<span>First name &amp; last name</span></span>


#### Grid - Row - [ko&#8677;]

	<div class="g-row">

	</div>


#### Grid - 2 columns - [ko&#8677;]

	<div class="g-row">
		<div class="g-span-6 g-col">

		</div>
		<div class="g-span-6 g-col">

		</div>
	</div>


#### Grid - One column - [ko&#8677;]

	<div class="g-span-6 g-col">

	</div>


## CSS
[Reference](https://github.com/tmwagency/Kickoff-snippets/tree/master/CSS)

#### background - [ko&#8677;]

	background: #f2f2f2 url("/img/ui/") left top no-repeat;


#### media-query - [ko&#8677;]

	/* === 760> === */
	@media screen and (min-width: 760) {

	}
	/* === end 760> === */


## Sass
[Reference](https://github.com/tmwagency/Kickoff-snippets/tree/master/SCSS)

#### background-size - [ko&#8677;]

	@include background-size(cover);


#### border-radius - [ko&#8677;]

	@include border-radius(5px);


#### box-shadow - [ko&#8677;]

	@include box-shadow(0 1px 3px rgba(0,0,0,.25));


#### box-sizing - [ko&#8677;]

	@include box-sizing(border-box);


#### font-size REM mixin - [ko&#8677;]

	@include font-size(16);


#### line-height REM mixin - [ko&#8677;]

	@include line-height(50);


#### linear-gradient - [ko&#8677;]
[Reference](https://github.com/tmwagency/kickoff/blob/master/scss/mixins/_linear-gradient.scss)

	@include linear-gradient(left, #1e5799 0%, #2989d8 50%);


#### opacity - [ko&#8677;]

	@include opacity(60);


#### respond-min - [ko&#8677;]

	// === 760> ===
	@include respond-min(760}) {
		[...]
	}
	// === end 760> ===


#### respond-max - [ko&#8677;]

	// === 760> ===
	@include respond-max(760}) {
		[...]
	}
	// === end 760> ===


#### respond-min-max - [ko&#8677;]

	// === 100, 300 ===
	@include respond-min-max(100, 300) {
		[...]
	}
	// === end 100, 300 ===


#### size (sizing an element - w x h) - [ko&#8677;]

	@include size(10px,10px);


#### square (for elements with same height & width) - [ko&#8677;]

	@include square(50px);


#### transition - [ko&#8677;]

	@include transition(all 200ms ease-in-out);


## Javascript
[Reference](https://github.com/tmwagency/Kickoff-snippets/tree/master/Javascript)

#### object - [ko&#8677;]

	TMW.? = {
		init : function() {
			var that = this;

		}
	};
