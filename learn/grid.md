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

Kickoff's Grid is a simple, but fully responsive, grid framework developed by <a href="http://github.com/mrmartineau/">Zander Martineau</a>. The grid system uses percents instead of pixels for column widths. It has the same responsive capabilities as our fixed grid system, ensuring proper proportions for key screen resolutions and devices.

<hr class="sectionSplitter">
<a name="gridbasic"></a>
### Basic grid HTML
For a simple two column layout, create a `.g-row` and add the appropriate number of `.g-span*` columns. As this is a 12-column grid, each `.g-span*` spans a number of those 12 columns, and should always add up to 12 for each row (or the number of columns in the parent).

```html
<div class="g-row">
    <div class="g-span5 g-col">
        ...
    </div>
    <div class="g-span7 g-col">
        ...
    </div>
</div>
```
See a demo of this technique [here](../demos/grids.html#standard).

<hr class="sectionSplitter">
<a name="gridnesting"></a>
### Nesting columns
To nest your content with the default grid, add a new `.g-row` and set of `.g-span*` columns within an existing `.g-span*` column. Nested rows should include a set of columns that add up to the number of columns of its parent.

```html
<div class="g-row">
    <div class="g-span4 g-col">
        ...
    </div>
    <div class="g-span7 g-col">
        ...
        <div class="g-row">
            <div class="g-span4 g-col">
                ...
            </div>
            <div class="g-span7 g-col">
                ...
            </div>
        </div>
    </div>
</div>
```

<hr class="sectionSplitter">
<a name="gridoffset"></a>
### Offset columns
Move columns to the right using `.g-offset*` classes. Each class increases the left margin of a column by a whole column. For example, `.g-offset4` moves `.g-span4` over four columns.

```html
<div class="g-row">
    <div class="g-span3 g-col">
        ...
    </div>
    <div class="g-span7 g-offset2 g-col">
        ...
    </div>
</div>
```
See a demo of this technique [here](../demos/grids.html#offset).

<hr class="sectionSplitter">
<a name="gridsourceorder"></a>
### Source Ordered columns
By utilizing the `.g-push*` and `.g-pull*` classes, elements can be rearranged, independent of the order in which they appear in the markup. This allows you to keep more pertinent info higher in the HTML, without sacrificing precision in your page layout.

```html
<div class="g-row">
    <div class="g-col g-span2 g-push10">
        1st column in source, 2nd when viewed
    </div>
    <div class="g-col g-span10 g-pull2">
        2nd column in source, 1st when viewed
    </div>
</div>
```
See a demo of this technique [here](../demos/grids.html#source-ordering).

<hr class="sectionSplitter">
<a name="gridcentred"></a>
### Centred columns
Centred columns can only appear by themselves in a row. Add a `.g-centred` or `.g-centered` class to any `.g-col` element.

```html
<div class="g-row">
    <div class="g-span3 g-col g-centred">
        ...
    </div>
</div>
```
See a demo of this technique [here](../demos/grids.html#centred).
