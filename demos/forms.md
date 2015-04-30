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

<a name="labelsabove"></a>

<h2>Forms <small>with labels above inputs</small></h2>
<p>Having forms styled like this depends on specific markup with specific class names. Please use the example code below as a guide.</p>

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form action="#" class="form">
			<fieldset class="form-fieldset">
				<legend class="form-legend">Your form</legend>
				<div class="form-controlGroup">
					<label class="form-label" for="text">Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="text" id="text" placeholder="Some text" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="email" class="form-label">Email</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="email" id="email" placeholder="tech@tmw.co.uk" required/>
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
<form action="#" class="form">
	<fieldset class="form-fieldset">
		<legend class="form-legend">Your form</legend>
		<div class="form-controlGroup">
			<label class="form-label" for="text">Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="text" id="text" placeholder="Some text" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="email" class="form-label">Email</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="email" id="email" placeholder="tech@tmw.co.uk" required/>
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
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form action="#" class="form form--horizontal">
			<fieldset class="form-fieldset">
				<legend class="form-legend">Your form</legend>
				<div class="form-controlGroup">
					<label class="form-label" for="fi-text">Text</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="text" id="fi-text" placeholder="Some text" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="fi-email" class="form-label">Email</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="email" id="fi-email" placeholder="tech@tmw.co.uk" required/>
					</div>
				</div>
				<div class="form-controlGroup">
					<label for="fi-password" class="form-label">Password</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="password" id="fi-password" placeholder="Your password" />
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
<form action="#" class="form form--horizontal">
	<fieldset class="form-fieldset">
		<legend class="form-legend">Your form</legend>
		<div class="form-controlGroup">
			<label class="form-label" for="text">Text</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="text" id="text" placeholder="Some text" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="email" class="form-label">Email</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="email" id="email" placeholder="tech@tmw.co.uk" required/>
			</div>
		</div>
		<div class="form-controlGroup">
			<label for="password" class="form-label">Password</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="password" id="password" placeholder="Your password" />
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
<p>Multi-column forms are easy to achieve by using the existing grid. See the comments in the code below for implementation details.</p>

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form action="#" class="form">
			<fieldset class="form-fieldset">
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
			</fieldset>
		</form>
	</div>
	<div class="demo-code">
{% highlight html %}
<form action="#" class="form">
	<fieldset class="form-fieldset">
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
				<label class="form-label" for="fm-text1">Label</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="text" id="fm-text1" placeholder="Some text" value="A value" required/>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span4">
				<label for="fm-text2" class="form-label">Label</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="email" id="fm-text2" placeholder="tech@tmw.co.uk" value="A value" required/>
				</div>
			</div>
			<div class="form-controlGroup g-col g-span4">
				<label for="fm-text3" class="form-label">Label</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="password" id="fm-text3" placeholder="Your password" value="A value" />
				</div>
			</div>
		</div>
	</fieldset>
</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>
<a name="singlefield"></a>

<h2>Single form field</h2>
For left-aligned labels or standard labels (above), we use the same exact markup.

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

<a name="formfieldstates"></a>

<h2>Form field states</h2>
You can easily update field states by adding modifier classes to `.form-controlGroup`. See the comments in the code below for implementation details.

<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form action="#" class="form">
			<fieldset class="form-fieldset">
				<div class="g-row">
					<!-- Add .form-controlGroup--success modifier class for valid or successful fields -->
					<div class="form-controlGroup g-col g-span4 form-controlGroup--success">
						<label class="form-label" for="st-success">Success</label>
						<div class="form-controlGroup-inputWrapper">
							<input class="form-input" type="text" id="st-success" placeholder="Some text" value="A value" required/>
						</div>
					</div>

					<!-- Add .form-controlGroup--error modifier class for invalid or unsuccessful fields -->
					<div class="form-controlGroup g-col g-span4 form-controlGroup--error">
						<label for="st-error" class="form-label">Error</label>
						<div class="form-controlGroup-inputWrapper">
							<input class="form-input" type="email" id="st-error" placeholder="tech@tmw.co.uk" value="A value" required/>
						</div>
					</div>

					<!-- Add .form-controlGroup--warning modifier class to give warning -->
					<div class="form-controlGroup g-col g-span4 form-controlGroup--warning">
						<label for="st-password" class="form-label">Warning</label>
						<div class="form-controlGroup-inputWrapper">
							<input class="form-input" type="password" id="st-password" placeholder="Your password" value="A value" />
						</div>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
	<div class="demo-code">
{% highlight html %}
<form action="#" class="form">
	<fieldset class="form-fieldset">
		<div class="g-row">
			<!-- Add .form-controlGroup--success modifier class for valid or successful fields -->
			<div class="form-controlGroup g-col g-span4 form-controlGroup--success">
				<label class="form-label" for="st-success">Success</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="text" id="st-success" placeholder="Some text" value="A value" required/>
				</div>
			</div>

			<!-- Add .form-controlGroup--error modifier class for invalid or unsuccessful fields -->
			<div class="form-controlGroup g-col g-span4 form-controlGroup--error">
				<label for="st-email" class="form-label">Error</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="email" id="st-email" placeholder="tech@tmw.co.uk" value="A value" required/>
				</div>
			</div>

			<!-- Add .form-controlGroup--warning modifier class to give warning -->
			<div class="form-controlGroup g-col g-span4 form-controlGroup--warning">
				<label for="st-password" class="form-label">Warning</label>
				<div class="form-controlGroup-inputWrapper">
					<input class="form-input" type="password" id="st-password" placeholder="Your password" value="A value" />
				</div>
			</div>
		</div>
	</fieldset>
</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<a name="customfields"></a>

<h2>Custom field elements</h2>
<p>Improved styling for checkboxes, radios &amp; file upload</p>
<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_forms-custom-controls.scss" class="demo-src">_forms-custom-controls.scss</a>

	<div class="demo-visual">
		<form action="#" class="form">
			<fieldset class="form-fieldset">
				<div class="g-row">
					<!-- Custom checkboxes -->
					<div class="form-controlGroup g-span6 g-col">
						<label class="form-label">Checkboxes</label>
						<div class="form-controlGroup-inputWrapper">
							<!-- Wrap checkbox elements with .control.control--custom.control--checkbox <label> -->
							<label class="control control--custom control--checkbox">
								<input type="checkbox" value="check4">
								<span class="control-indicator"></span>
								This is a custom checkbox
							</label>
							<label class="control control--custom control--checkbox">
								<input type="checkbox" value="check4">
								<span class="control-indicator"></span>
								This is a custom checkbox
							</label>
							<label class="control control--custom control--checkbox">
								<input type="checkbox" value="check4">
								<span class="control-indicator"></span>
								This is a custom checkbox
							</label>
						</div>
					</div>

					<!-- Custom radio buttons -->
					<div class="form-controlGroup g-span6 g-col">
						<label class="form-label">Radio buttons</label>
						<div class="form-controlGroup-inputWrapper">
							<!-- Wrap radio elements with .control.control--custom.control--radio <label> -->
							<label class="control control--custom control--radio">
								<input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
								<span class="control-indicator"></span>
								This is a custom radio button
							</label>
							<label class="control control--custom control--radio">
								<input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
								<span class="control-indicator"></span>
								This is a custom radio button
							</label>
							<label class="control control--custom control--radio">
								<input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
								<span class="control-indicator"></span>
								This is a custom radio button
							</label>
						</div>
					</div>
				</div>

				<!-- Custom file uploads -->
				<div class="form-controlGroup">
					<label class="form-label" for="file">File upload (alt)<br>
						<small>This version hides the default file input, you will need js to change the 'Choose file..' copy </small>
					</label>

					<div class="form-controlGroup-inputWrapper">
						<!-- Wrap a input[type=file] element with .form-input--fileWrapper--styled -->
						<label class="form-input form-input--fileWrapper--styled">
							<input class="form-input-file" type="file" id="file" accept="image/*" size="14" />
						</label>
					</div>
				</div>

				<!-- Custom select elements -->
				<div class="form-controlGroup">
					<label class="form-label" for="cs-choice">Custom select element</label>
					<div class="form-controlGroup-inputWrapper">
						<!-- Wrap a select element with .form-input--selectWrapper -->
						<label class="form-input form-input--selectWrapper">
							<select class="form-input" id="cs-choice">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</label>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
	<div class="demo-code">
{% highlight html %}
<form class="form" action="#">
	<fieldset class="form-fieldset">
		<div class="g-row">
			<!-- Custom checkboxes -->
			<div class="form-controlGroup g-span6 g-col">
				<label class="form-label">Checkboxes</label>
				<div class="form-controlGroup-inputWrapper">
					<!-- Wrap checkbox elements with .control.control--custom.control--checkbox <label> -->
					<label class="control control--custom control--checkbox">
						<input type="checkbox" value="check4">
						<span class="control-indicator"></span>
						This is a custom checkbox
					</label>
					<label class="control control--custom control--checkbox">
						<input type="checkbox" value="check4">
						<span class="control-indicator"></span>
						This is a custom checkbox
					</label>
					<label class="control control--custom control--checkbox">
						<input type="checkbox" value="check4">
						<span class="control-indicator"></span>
						This is a custom checkbox
					</label>
				</div>
			</div>

			<!-- Custom radio buttons -->
			<div class="form-controlGroup g-span6 g-col">
				<label class="form-label">Radio buttons</label>
				<div class="form-controlGroup-inputWrapper">
					<!-- Wrap radio elements with .control.control--custom.control--radio <label> -->
					<label class="control control--custom control--radio">
						<input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
						<span class="control-indicator"></span>
						This is a custom radio button
					</label>
					<label class="control control--custom control--radio">
						<input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
						<span class="control-indicator"></span>
						This is a custom radio button
					</label>
					<label class="control control--custom control--radio">
						<input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">
						<span class="control-indicator"></span>
						This is a custom radio button
					</label>
				</div>
			</div>
		</div>

		<!-- Custom file uploads -->
		<div class="form-controlGroup">
			<label class="form-label" for="file">File upload (alt)<br>
				<small>This version hides the default file input, you will need js to change the 'Choose file..' copy </small>
			</label>

			<div class="form-controlGroup-inputWrapper">
				<!-- Wrap a input[type=file] element with .form-input--fileWrapper--styled -->
				<label class="form-input form-input--fileWrapper--styled">
					<input class="form-input-file" type="file" id="file" accept="image/*" size="14" />
				</label>
			</div>
		</div>

		<!-- Custom select elements -->
		<div class="form-controlGroup">
			<label class="form-label" for="cs-choice">Custom select element</label>
			<div class="form-controlGroup-inputWrapper">
				<!-- Wrap a select element with .form-input--selectWrapper -->
				<label class="form-input form-input--selectWrapper">
					<select class="form-input" id="cs-choice">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</label>
			</div>
		</div>
	</fieldset>
</form>
{% endhighlight %}
	</div>
</div>
<!-- END EXAMPLE -->

<hr>

<a name="allformelements"></a>

<h2>All Form Elements</h2>
<p>All the form elements you could need.</p>
<div class="demo">
	<a href="https://github.com/tmwagency/kickoff/blob/master/scss/partials/components/_forms.scss" class="demo-src">_forms.scss</a>

	<div class="demo-visual">
		<form action="#" class="form">
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

				<div class="form-controlGroup form-controlGroup--success">
					<label class="form-label" for="form-success">Text (Success)</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="text" id="form-success" placeholder="Some text" value="A value" required/>
					</div>
				</div>
				<div class="form-controlGroup form-controlGroup--error">
					<label for="form-error" class="form-label">Email (Error)</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="email" id="form-error" placeholder="tech@tmw.co.uk" value="A value" required/>
					</div>
				</div>
				<div class="form-controlGroup form-controlGroup--warning">
					<label for="form-warning" class="form-label">Password (Warning)</label>
					<div class="form-controlGroup-inputWrapper">
						<input class="form-input" type="password" id="form-warning" placeholder="Your password" value="A value" />
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
				<div class="form-controlGroup">
					<label class="form-label" for="form-file--alt">File upload (alt)<br>
						<small>This version hides the default file input, you will need js to change the 'Choose file..' copy </small>
					</label>

					<div class="form-controlGroup-inputWrapper">
						<label class="form-input form-input--fileWrapper--styled">
							<input class="form-input-file" type="file" id="form-file--alt" accept="image/*" size="14" />
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
						<label for="form-choiceMult" class="form-label">Choice (mulitple)</label>
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
<form action="#" class="form">
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

		<div class="form-controlGroup form-controlGroup--success">
			<label class="form-label" for="form-success">Text (Success)</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="text" id="form-success" placeholder="Some text" value="A value" required/>
			</div>
		</div>
		<div class="form-controlGroup form-controlGroup--error">
			<label for="form-error" class="form-label">Email (Error)</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="email" id="form-error" placeholder="tech@tmw.co.uk" value="A value" required/>
			</div>
		</div>
		<div class="form-controlGroup form-controlGroup--warning">
			<label for="form-warning" class="form-label">Password (Warning)</label>
			<div class="form-controlGroup-inputWrapper">
				<input class="form-input" type="password" id="form-warning" placeholder="Your password" value="A value" />
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
		<div class="form-controlGroup">
			<label class="form-label" for="form-file--alt">File upload (alt)<br>
				<small>This version hides the default file input, you will need js to change the 'Choose file..' copy </small>
			</label>

			<div class="form-controlGroup-inputWrapper">
				<label class="form-input form-input--fileWrapper--styled">
					<input class="form-input-file" type="file" id="form-file--alt" accept="image/*" size="14" />
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
				<label for="form-choiceMult" class="form-label">Choice (mulitple)</label>
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
