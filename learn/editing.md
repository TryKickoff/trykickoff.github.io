---
title: Editing this website
layout: docs
navgroup: docs
navactive: docsediting
meta:
  description: How to edit the Kickoff documentation site
---

### Before you start

* Install Jekyll, redcarpet and Sass globally - `gem install jekyll`
* Install Node from [nodejs.org](http://nodejs.org/)

### Step 1

Run `git clone https://github.com/TryKickoff/trykickoff.github.io.git`

### Step 2

Run `cd trykickoff.github.io`

### Step 3

Run `npm install` to install all Grunt's dependencies

### Step 4

* Run `grunt watcher` and a browser window will open with the site
* Run `jekyll serve --watch` as a separate process to compile the site. It can then be viewed at `http://localhost:4000`

#### Please note

The Kickoff site resides at [trykickoff.com/](http://trykickoff.com/) and Jekyll builds to `/_site/` wherever you run it. Make sure your localhost points to `trykickoff.github.io/_site` then browse to `http://your-localhost.dev/`

## Editing the content
Most content is found in the `learn` and `demos` directories, but the home page markup is located at `index.html`. The Javascript and Sass source files are found in the `assets/src/` directory.
