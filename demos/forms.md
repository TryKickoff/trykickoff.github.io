---
layout: demo
body-class: show-grid
navgroup: demo
navactive: demoforms
title: Form styling

meta:
  description: See Kickoff's form demo

next:
 - title: Typography demo
   body: See the default typography styles included with the framework
   link: typography.html
 - title: Components
   body: See all the included components
   link: components.html
---
<a name="singlefield"></a>

<h2>Single form input</h2>
For left-aligned labels or standard labels (above the field), we use the same exact markup.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<div class="form-controlGroup">
			<label class="form-label" for="sf-text">Label</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="text" id="sf-text" placeholder="Some text" required/>
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<div class="form-controlGroup">
	<label class="form-label" for="sf-text">Label</label>
	<div class="form-controlGroup-inputWrapper">
		<input class="form-input" type="text" id="sf-text" placeholder="Some text" required/>
	</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr>

<a name="labelsabove"></a>

<h2>Forms <small>with labels above inputs</small></h2>
<p>Having forms styled like this depends on specific markup with specific class names. Please use the example code below as a guide.</p>

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form class="form">
			<fieldset class="form-fieldset">
				<legend class="form-legend">Your form</legend>
				<div class="form-controlGroup">
					<label class="form-label" for="text">Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="text" id="text" placeholder="Some text" required/>
					</div>
				</div>

				<div class="form-controlGroup">
					<label class="form-label" for="comments">Textarea</label>
					<div class="form-controlGroup-inputWrapper">
						<textarea class="form-input form-input--textarea" id="comments" rows="3" cols="50"></textarea>
					</div>
				</div>
			</fieldset>

			<div class="form-actions text_centre">
				<input type="submit" value="Submit" class="btn btn--primary" />
				<input type="reset" class="btn" value="Cancel" />
			</div>
		</form>
	</div>
	<div class="demo-code">
{% highlight html %}
<form class="form">
	<fieldset class="form-fieldset">
		<legend class="form-legend">Your form</legend>
		<div class="form-controlGroup">
			<label class="form-label" for="text">Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="text" id="text" placeholder="Some text" required/>
			</div>
		</div>

		<div class="form-controlGroup">
			<label class="form-label" for="comments">Textarea</label>
			<div class="form-controlGroup-inputWrapper">
				<textarea class="form-input form-input--textarea" id="comments" rows="3" cols="50"></textarea>
			</div>
		</div>
	</fieldset>

	<div class="form-actions text_centre">
		<input type="submit" value="Submit" class="btn btn--primary" />
		<input type="reset" class="btn" value="Cancel" />
	</div>
</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<a name="labelsinline"></a>

<h2>Forms <small>with inline labels</small></h2>
Assuming you use the same markup as above, simply add a `.form--horizontal` class to the `<form>` element and you'll now have right aligned, inline form labels in an instant.

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form class="form form--horizontal">
			<fieldset class="form-fieldset">
				<legend class="form-legend">Your form</legend>
				<div class="form-controlGroup">
					<label class="form-label" for="fi-text">Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="text" id="fi-text" placeholder="Some text" required/>
					</div>
				</div>

				<div class="form-controlGroup">
					<label class="form-label" for="fi-comments">Textarea</label>
					<div class="form-controlGroup-inputWrapper">
						<textarea class="form-input form-input--textarea" id="fi-comments" rows="3" cols="50"></textarea>
					</div>
				</div>
			</fieldset>

			<div class="form-actions text_centre">
				<input type="submit" value="Submit" class="btn btn--primary" />
				<input type="reset" class="btn" value="Cancel" />
			</div>
		</form>
	</div>
	<div class="demo-code">
{% highlight html%}
<form class="form form--horizontal">
	<fieldset class="form-fieldset">
		<legend class="form-legend">Your form</legend>
		<div class="form-controlGroup">
			<label class="form-label" for="text">Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="text" id="text" placeholder="Some text" required/>
			</div>
		</div>

		<div class="form-controlGroup">
			<label class="form-label" for="comments">Textarea</label>
			<div class="form-controlGroup-inputWrapper">
				<textarea class="form-input form-input--textarea" id="comments" rows="3" cols="50"></textarea>
			</div>
		</div>
	</fieldset>

	<div class="form-actions text_centre">
		<input type="submit" value="Submit" class="btn btn--primary" />
		<input type="reset" class="btn" value="Cancel" />
	</div>
</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<a name="multicolumnform"></a>

<h2>Multi column forms <small>with labels above inputs</small></h2>
<p>Multi-column forms are easy to achieve by using the existing Kickoff grid. See the comments in the code below for implementation details.</p>

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<!-- Add a grid row: .g-row -->
		<div class="g-row">
			<!-- Add .g-col and .g-span# to the .form-controlGroup -->
			<div class="form-controlGroup g-col g-span6">
				<label class="form-label" for="fm-text">Text</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="text" id="fm-text" placeholder="Some text" required/>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span6">
				<label for="fm-email" class="form-label">Email</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="email" id="fm-email" placeholder="tech@tmw.co.uk" required/>
				</div>
			</div>
		</div>

		<!-- Add a grid row: .g-row -->
		<div class="g-row">
			<!-- Add .g-col and .g-span# to the .form-controlGroup -->
			<div class="form-controlGroup g-col g-span4">
				<label class="form-label" for="fm-label1">Label</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="text" id="fm-label1" placeholder="Some text" value="A value" required/>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span4">
				<label for="fm-label2" class="form-label">Label</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="email" id="fm-label2" placeholder="tech@tmw.co.uk" value="A value" required/>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span4">
				<label for="fm-label3" class="form-label">Label</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="password" id="fm-label3" placeholder="Your password" value="A value" />
				</div>
			</div>
		</div>

	</div>
	<div class="demo-code">
{% highlight html %}
<!-- Add a grid row: .g-row -->
<div class="g-row">
	<!-- Add .g-col and .g-span# to the .form-controlGroup -->
	<div class="form-controlGroup g-col g-span6">
		<label class="form-label" for="fm-text">Text</label>
		<div class="form-controlGroup-inputWrapper">
			<input class="form-input" type="text" id="fm-text" placeholder="Some text" required/>
		</div>
	</div>
	<div class="form-controlGroup g-col g-span6">
		<label for="fm-email" class="form-label">Email</label>
		<div class="form-controlGroup-inputWrapper">
			<input class="form-input" type="email" id="fm-email" placeholder="tech@tmw.co.uk" required/>
		</div>
	</div>
</div>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<a name="formfieldstates"></a>

<h2>Form field states</h2>
You can easily update field states by adding modifier classes to `.form-controlGroup`. See the comments in the code below for implementation details.

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<div class="g-row">
			<!-- Add .has-success modifier class for valid or successful fields -->
			<div class="form-controlGroup has-success g-col g-span4">
				<label class="form-label" for="st-success">Success</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="text" id="st-success" placeholder="Some text" value="A value" required/>
				</div>
			</div>

			<!-- Add .has-error modifier class for invalid or unsuccessful fields -->
			<div class="form-controlGroup has-error g-col g-span4">
				<label for="st-error" class="form-label">Error</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="email" id="st-error" placeholder="tech@tmw.co.uk" value="A value" required/>
				</div>
			</div>

			<!-- Add .has-warning modifier class to give warning -->
			<div class="form-controlGroup has-warning g-col g-span4">
				<label for="st-password" class="form-label">Warning</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="password" id="st-password" placeholder="Your password" value="A value" />
				</div>
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<!-- Add .has-success modifier class for valid or successful fields -->
<div class="form-controlGroup has-success">
	<label class="form-label" for="st-success">Success</label>
	<div class="form-controlGroup-inputWrapper">
		<input class="form-input" type="text" id="st-success" placeholder="Some text" value="A value" required/>
	</div>
</div>

<!-- Add .has-error modifier class for invalid or unsuccessful fields -->
<div class="form-controlGroup has-error">
	<label for="st-email" class="form-label">Error</label>
	<div class="form-controlGroup-inputWrapper">
		<input class="form-input" type="email" id="st-email" placeholder="tech@tmw.co.uk" value="A value" required/>
	</div>
</div>

<!-- Add .has-warning modifier class to give warning -->
<div class="form-controlGroup has-warning">
	<label for="st-password" class="form-label">Warning</label>
	<div class="form-controlGroup-inputWrapper">
		<input class="form-input" type="password" id="st-password" placeholder="Your password" value="A value" />
	</div>
</div>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<a name="customfields"></a>

<h2>Custom field elements</h2>
<p>Improved styling for checkboxes, radios &amp; file upload</p>

<h3>Custom checkbox inputs <a href="#demo-form-checkboxes" class="btn--showCode">Show code</a></h3>
<div class="demo" id="demo-form-checkboxes">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms-custom-radioscheckboxes.scss" class="demo-src">_forms-custom-radioscheckboxes.scss</a>

	<div class="demo-visual">
		<label class="control control--custom">
			<input class="control--custom-input" type="checkbox" id="checkbox1" name="mycheckboxBtn" checked/>
			<span class="control-indicator control-indicator--checkbox"></span>
			My checkbox Button Label Text
		</label>

		<label class="control control--custom">
			<input class="control--custom-input" type="checkbox" id="checkbox1" name="mycheckboxBtn" checked/>
			<span class="control-indicator control-indicator--tickbox"></span>
			My tickbox Label Text
		</label>
	</div>
	<div class="demo-code">
{% highlight html %}
<label class="control control--custom">
	<input class="control--custom-input" type="checkbox" id="checkbox1" name="mycheckboxBtn" checked/>
	<span class="control-indicator control-indicator--checkbox"></span>
	My checkbox Button Label Text
</label>

<label class="control control--custom">
	<input class="control--custom-input" type="checkbox" id="checkbox1" name="mycheckboxBtn" checked/>
	<span class="control-indicator control-indicator--tickbox"></span>
	My tickbox Label Text
</label>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->


<h3>Custom radio inputs <a href="#demo-form-radios" class="btn--showCode">Show code</a></h3>
<div class="demo" id="demo-form-radios">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms-custom-radioscheckboxes.scss" class="demo-src">_forms-custom-radioscheckboxes.scss</a>

	<div class="demo-visual">

		<label class="control control--custom">
			<input class="control--custom-input" type="radio" id="radio1" name="myRadioBtn" checked/>
			<span class="control-indicator control-indicator--radio"></span>
			My Radio Button Label Text
		</label>

		<label class="control control--custom">
			<input class="control--custom-input" type="radio" id="radio2" name="myRadioBtn" />
			<span class="control-indicator control-indicator--radio"></span>
			Another Radio Button Label Text
		</label>

	</div>
	<div class="demo-code">
{% highlight html %}
<label class="control control--custom">
	<input class="control--custom-input" type="radio" id="radio1" name="myRadioBtn" checked/>
	<span class="control-indicator control-indicator--radio"></span>
	My Radio Button Label Text
</label>

<label class="control control--custom">
	<input class="control--custom-input" type="radio" id="radio2" name="myRadioBtn" />
	<span class="control-indicator control-indicator--radio"></span>
	Another Radio Button Label Text
</label>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->


<h3>Custom select element</h3>
<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms-custom-select.scss" class="demo-src">_forms-custom-select.scss</a>

	<div class="demo-visual">
		<div class="form-controlGroup">
 			<label for="cs-choice" class="form-label">Custom select</label>
 			<div class="form-controlGroup-inputWrapper form-controlGroup-inputWrapper--select">
 				<select id="cs-choice" name="cs-choice" class="form-input form-input--select">
 					<option value="--">Select title</option>
 					<option value="Mr">Mr</option>
 					<option value="Mrs">Mrs</option>
 				</select>
 			</div>
 		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="form-controlGroup">
	<label for="cs-choice" class="form-label">Custom select</label>
	<div class="form-controlGroup-inputWrapper form-controlGroup-inputWrapper--select">
		<select id="cs-choice" name="cs-choice" class="form-input form-input--select">
			<option value="--">Select title</option>
			<option value="Mr">Mr</option>
			<option value="Mrs">Mrs</option>
		</select>
	</div>
</div>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<h3>Custom file upload fields</h3>
<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms-custom-file.scss" class="demo-src">_forms-custom-file.scss</a>

	<div class="demo-visual">

		<!-- Custom file uploads -->
		<div class="form-controlGroup">
				<label class="form-label" for="file">File upload</label>

				<div class="form-controlGroup-inputWrapper">
						<label class="form-input form-input--file">
								<span class="form-input--file-text">Choose file..</span>
								<span class="form-input--file-button">Browse</span>
								<input class="form-input-file" type="file" id="file" accept="image/*" size="14" />
						</label>
				</div>
		</div>

	</div>
	<div class="demo-code">
{% highlight html %}
<div class="form-controlGroup">
		<label class="form-label" for="file">File upload</label>

		<div class="form-controlGroup-inputWrapper">
				<label class="form-input form-input--file">
						<span class="form-input--file-text">Choose file..</span>
						<span class="form-input--file-button">Browse</span>
						<input class="form-input-file" type="file" id="file" accept="image/*" size="14" />
				</label>
		</div>
</div>
{% endhighlight %}

{% highlight javascript %}
var fileInput = document.querySelector('.form-input-file');
var fileInputText = document.querySelector('.form-input--file-text');
fileInputTextContent = fileInputText.textContent;

fileInput.addEventListener('change', function(e) {
	var value = e.target.value.length > 0 ? e.target.value.replace("C:\\fakepath\\", "") : fileInputTextContent;
	fileInputText.textContent = value;
});
{% endhighlight %}
	</div>

</div>

<!-- END EXAMPLE -->

<hr>

<a name="validation"></a>
<h2>Validation With D'accord</h2>
<p>HTML 5 validation for Kickoff. See <a href="https://github.com/nicbell/daccord">D'accord</a> for more details.</p>

<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form class="form form-daccord">
			<div class="form-controlGroup">
				<label class="form-label" for="field1">Text, required, maxlength 10</label>
				<input class="form-input" id="field1" name="field1" type="text" required maxlength="10">
			</div>
			<div class="form-controlGroup">
				<label class="form-label" for="field2">Email, required</label>
				<input class="form-input" id="field2" name="field2" type="email" required>
			</div>
			<div class="form-controlGroup">
				<label class="form-label" for="field3">Text, required with message</label>
				<input class="form-input" id="field3" name="field3" type="text" data-val-required="This field is required" required>
				<div class="form-message"></div>
			</div>
			<button class="btn btn--primary" type="submit">Submit</button>
		</form>
	</div>
	<div class="demo-code">
{% highlight html %}
<form class="form form-daccord">
	<div class="form-controlGroup">
		<label class="form-label" for="field1">Text, required, maxlength 10</label>
		<input class="form-input" id="field1" name="field1" type="text" required maxlength="10">
	</div>
	<div class="form-controlGroup">
		<label class="form-label" for="field2">Email, required</label>
		<input class="form-input" id="field2" name="field2" type="email" required>
	</div>
	<div class="form-controlGroup">
		<label class="form-label" for="field3">Text, required with message</label>
		<input class="form-input" id="field3" name="field3" type="text" data-val-required="This field is required" required>
		<div class="form-message"></div>
	</div>
	<button class="btn btn--primary" type="submit">Submit</button>
</form>
{% endhighlight %}

{% highlight javascript %}
new Daccord(document.querySelector('.form-daccord'));
{% endhighlight %}
	</div>
</div>

<!-- END EXAMPLE -->

<hr>

<a name="allformelements"></a>

<h2>All Form Elements</h2>
<p>All the form elements you could need.</p>
<div class="demo">
	<a href="https://github.com/trykickoff/kickoff/blob/master/assets/src/scss/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form class="form">
			<fieldset class="form-fieldset">
				<legend class="form-legend">Your form</legend>
				<div class="form-controlGroup">
					<label class="form-label" for="form-text">Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="text" id="form-text" placeholder="Some text" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="form-email" class="form-label">Email</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="email" id="form-email" placeholder="tech@tmw.co.uk" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="form-password" class="form-label">Password</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="password" id="form-password" placeholder="Your password" />
					</div>
				</div>

				<div class="form-controlGroup">
					<label class="form-label" for="form-comments">Textarea</label>
					<div class="form-controlGroup-inputWrapper">
						<textarea class="form-input form-input--textarea" id="form-comments" rows="3" cols="50"></textarea>
					</div>
				</div>
				<div class="form-controlGroup">
					<label class="form-label" for="form-disabled">Disabled Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="text" id="form-disabled" placeholder="Some text" disabled/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label class="form-label" for="form-file">File upload <br>
						<small>Firefox uses the <code>size</code> attribute to determine width.</small>
					</label>

					<div class="form-controlGroup-inputWrapper">
						<label class="form-input form-input--fileWrapper">
							<input class="form-input-file" type="file" id="form-file" accept="image/*" size="14" />
						</label>
					</div>
				</div>

				<div class="g-row">
					<div class="form-controlGroup g-span6 g-col">
						<label class="form-label">Checkboxes</label>
						<div class="form-controlGroup-inputWrapper">
							<label class="control">
								<input type="checkbox" value="check1">
								This is a checkbox
							</label>
							<label class="control">
								<input type="checkbox" value="check2">
								This is a checkbox
							</label>
							<label class="control">
								<input type="checkbox" value="check3" disabled>
								This is a checkbox
							</label>
						</div>
					</div>

					<div class="form-controlGroup g-span6 g-col">
						<label class="form-label">Radio buttons</label>
						<div class="form-controlGroup-inputWrapper">
							<label class="control">
								<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
								This is a radio
							</label>
							<label class="control">
								<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
								This is another radio
							</label>
							<label class="control">
								<input type="radio" name="optionsRadios" id="optionsRadios2" value="option3" disabled>
								This is another radio
							</label>
						</div>
					</div>
				</div>

				<div class="form-controlGroup">
					<label class="form-label">Inline Checkboxes</label>
					<div class="form-controlGroup-inputWrapper">
						<label class="control control--inline">
							<input type="checkbox" value="check1">
							This is a checkbox
						</label>
						<label class="control control--inline">
							<input type="checkbox" value="check2">
							This is a checkbox
						</label>
						<label class="control control--inline">
							<input type="checkbox" value="check3" disabled>
							This is a checkbox
						</label>
					</div>
				</div>

				<div class="form-controlGroup">
					<label class="form-label">Inline radio buttons</label>
					<div class="form-controlGroup-inputWrapper">
						<label class="control control--inline">
							<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
							This is a radio
						</label>
						<label class="control control--inline">
							<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
							This is another radio
						</label>
						<label class="control control--inline">
							<input type="radio" name="optionsRadios" id="optionsRadios2" value="option3" disabled>
							This is another radio
						</label>
					</div>
				</div>

				<div class="g-row">
					<div class="form-controlGroup g-col g-span6">
						<label for="form-choice" class="form-label">Choice</label>
						<div class="form-controlGroup-inputWrapper">
							<select id="form-choice" class="form-input form-input--select">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
					</div>
					<div class="form-controlGroup g-col g-span6">
						<label for="form-choiceMult" class="form-label">Choice (multiple)</label>
						<div class="form-controlGroup-inputWrapper">
							<select id="form-choiceMult" multiple class="form-input form-input--select">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
					</div>
				</div>

				<div class="form-controlGroup">
					<label for="form-search" class="form-label">Search</label>
					<div class="form-controlGroup-inputWrapper">
						<input type="search" id="form-search" placeholder="Some text" class="form-input form-input--search">
					</div>
				</div>

			</fieldset>

			<div class="form-actions text_centre">
				<input type="submit" value="Submit" class="btn btn--primary" />
				<input type="reset" class="btn" value="Cancel" />
			</div>

		</form>
	</div>
	<div class="demo-code">
{% highlight html%}
<form class="form">
	<fieldset class="form-fieldset">
		<legend class="form-legend">Your form</legend>
		<div class="form-controlGroup">
			<label class="form-label" for="form-text">Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="text" id="form-text" placeholder="Some text" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="form-email" class="form-label">Email</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="email" id="form-email" placeholder="tech@tmw.co.uk" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="form-password" class="form-label">Password</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="password" id="form-password" placeholder="Your password" />
			</div>
		</div>

		<div class="form-controlGroup">
			<label class="form-label" for="form-comments">Textarea</label>
			<div class="form-controlGroup-inputWrapper">
				<textarea class="form-input form-input--textarea" id="form-comments" rows="3" cols="50"></textarea>
			</div>
		</div>
		<div class="form-controlGroup">
			<label class="form-label" for="form-disabled">Disabled Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="text" id="form-disabled" placeholder="Some text" disabled/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label class="form-label" for="form-file">File upload <br>
				<small>Firefox uses the <code>size</code> attribute to determine width.</small>
			</label>

			<div class="form-controlGroup-inputWrapper">
				<label class="form-input form-input--fileWrapper">
					<input class="form-input-file" type="file" id="form-file" accept="image/*" size="14" />
				</label>
			</div>
		</div>
		<div class="g-row">
			<div class="form-controlGroup g-span6 g-col">
				<label class="form-label">Checkboxes</label>
				<div class="form-controlGroup-inputWrapper">
					<label class="control">
						<input type="checkbox" value="check1">
						This is a checkbox
					</label>
					<label class="control">
						<input type="checkbox" value="check2">
						This is a checkbox
					</label>
					<label class="control">
						<input type="checkbox" value="check3" disabled>
						This is a checkbox
					</label>
				</div>
			</div>

			<div class="form-controlGroup g-span6 g-col">
				<label class="form-label">Radio buttons</label>
				<div class="form-controlGroup-inputWrapper">
					<label class="control">
						<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
						This is a radio
					</label>
					<label class="control">
						<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
						This is another radio
					</label>
					<label class="control">
						<input type="radio" name="optionsRadios" id="optionsRadios2" value="option3" disabled>
						This is another radio
					</label>
				</div>
			</div>
		</div>

		<div class="form-controlGroup">
			<label class="form-label">Inline Checkboxes</label>
			<div class="form-controlGroup-inputWrapper">
				<label class="control control--inline">
					<input type="checkbox" value="check1">
					This is a checkbox
				</label>
				<label class="control control--inline">
					<input type="checkbox" value="check2">
					This is a checkbox
				</label>
				<label class="control control--inline">
					<input type="checkbox" value="check3" disabled>
					This is a checkbox
				</label>
			</div>
		</div>

		<div class="form-controlGroup">
			<label class="form-label">Inline radio buttons</label>
			<div class="form-controlGroup-inputWrapper">
				<label class="control control--inline">
					<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
					This is a radio
				</label>
				<label class="control control--inline">
					<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
					This is another radio
				</label>
				<label class="control control--inline">
					<input type="radio" name="optionsRadios" id="optionsRadios2" value="option3" disabled>
					This is another radio
				</label>
			</div>
		</div>

		<div class="g-row">
			<div class="form-controlGroup g-col g-span6">
				<label for="form-choice" class="form-label">Choice</label>
				<div class="form-controlGroup-inputWrapper">
					<select id="form-choice" class="form-input form-input--select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span6">
				<label for="form-choiceMult" class="form-label">Choice (multiple)</label>
				<div class="form-controlGroup-inputWrapper">
					<select id="form-choiceMult" multiple class="form-input form-input--select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</div>
		</div>

		<div class="form-controlGroup">
			<label for="form-search" class="form-label">Search</label>
			<div class="form-controlGroup-inputWrapper">
				<input type="search" id="form-search" placeholder="Some text" class="form-input form-input--search">
			</div>
		</div>
	</fieldset>

	<div class="form-actions text_centre">
		<input type="submit" value="Submit" class="btn btn--primary" />
		<input type="reset" class="btn" value="Cancel" />
	</div>

</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->
