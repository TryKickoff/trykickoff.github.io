---
layout: docs
navgroup: docs
navactive: docsediting
title: Editing this website

meta:
  description: How to edit the Kickoff documentation site
---

### Before you start
Ruby v2 is needed for Sass compilation. Install it.

* Install Jekyll, redcarpet and Sass globally - `gem install jekyll sass redcarpet rouge`
* Install Node from [nodejs.org](http://nodejs.org/)
* Install Grunt CLI - `npm install -g grunt-cli`

### Step 1

Run `git clone https://github.com/tmwagency/kickoff.git -b gh-pages kickoff-docs`

### Step 2

Run `cd kickoff-docs`

### Step 3

Run `npm install` to install all Grunt's dependencies

### Step 4

Run `grunt serve` and a browser window will open with the site

#### Please note

The Kickoff site resides at [tmwagency.github.io/kickoff/](http://tmwagency.github.io/kickoff/) and Jekyll builds to `/kickoff/` wherever you run it. Make sure your localhost points to `kickoff-docs` then browse to `http://your-localhost.dev/kickoff/`
