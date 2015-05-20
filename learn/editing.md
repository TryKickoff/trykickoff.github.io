---
layout: docs
navgroup: docs
navactive: docsediting
title: Editing this website

meta:
  description: How to edit the Kickoff documentation site
---

### Before you start

* Install Jekyll, redcarpet and Sass globally - `gem install jekyll redcarpet`
* Install Node from [nodejs.org](http://nodejs.org/)
* Install Grunt CLI - `npm install -g grunt-cli`

### Step 1

Run `git clone https://github.com/TryKickoff/trykickoff.github.io.git`

### Step 2

Run `cd trykickoff.github.io`

### Step 3

Run `npm install` to install all Grunt's dependencies

### Step 4

Run `grunt serve` and a browser window will open with the site

#### Please note

The Kickoff site resides at [trykickoff.github.io/](http://trykickoff.github.io/) and Jekyll builds to `/_site/` wherever you run it. Make sure your localhost points to `trykickoff.github.io/_site` then browse to `http://your-localhost.dev/`
