---
title: Tooling
layout: docs
navgroup: docs
navactive: docstooling
meta:
  title: Tooling setup
  description: Read Kickoff's tooling documentation
next:
- title: Kickoff's CSS
  body: Take a look at how Kickoff structures it’s CSS.
  link: css.html
- title: Kickoff's Javascript
  body: Minimal and flexible, we show you how Kickoff structures it’s JS.
  link: js.html
---

<a name="setup"></a>

## Setting up node on your machine
Setting up Kickoff to use Grunt is extremely simple – just follow these simple steps:

#### Step 1 - Install Node
Install Node from [nodejs.org](https://nodejs.org/en/download/) or..

* for Mac:
  * Homebrew: `brew install node`
* for Linux using :
  * apt-get `apt-get install node npm`
  * yum `yum install node npm`
  * dnf `dnf install node npm`

#### Install Yeoman and the Kickoff Yeoman Generator
If you already have Node installed, the command below will install [Yeoman](http://yeoman.io) and the [Kickoff Yeoman generator](yeoman.html):

```sh
npm i -g yo generator-kickoff
```


#### Once you have got Kickoff, install all the Node dependencies
Grunt will not work without having installed it's dependencies. Kickoff's [package.json](https://github.com/trykickoff/kickoff/blob/master/package.json) uses a few essential Grunt plugins to operate.

To install them, use your terminal to `cd` into the root of the Kickoff directory, and then run `npm install`. This will install all of the required dependencies to a new folder called `node_modules` inside your project.

<hr class="sectionSplitter">

## Grunt
[Grunt](http://gruntjs.com) is used extensively in Kickoff; It is the beating heart of the framework. We use it to compile our Sass, bundle our JavaScript files, or to fire up a simple local server with [BrowserSync](http://browsersync.io) for some testing.

Using Grunt has other benefits besides this; it allows any dev to pick up a project, regardless of if they've worked on it before, and get up and running in no time.  It also helps to ensure the menial tasks (sass & js compilation) that can be forgotten, are already configured when you are ready to deploy your site.

<a name="tasks"></a>

### Kickoff’s Grunt tasks

Kickoff comes with a number of useful Grunt tasks configured for you to use.  These are tasks that you can run in the command line from the root directory of your Kickoff project.

Here is a guide to the tasks that are available and what each of them does.

* `grunt`: The default task. Alias for `grunt serve` task beow
* `grunt serve`: watch files and run a static server
* `grunt watcher`: watch files without static server
* `grunt compile`: compile scss, js & compress images
* `grunt compile--release`: same as above, but compress CSS as well
* `grunt styleguide`:
* `grunt images`: compress all images
* `grunt test`: run jshint and scsslint

### Grunt config variables

Grunt config variables allow you to control some of the basic settings of your Kickoff project. They can be found in the [`_grunt-configs/config.js` file](https://github.com/trykickoff/kickoff/blob/master/_grunt-configs/config.js), it allows

<hr class="sectionSplitter">

## npm scripts
We include a few useful npm scripts to

* `npm start`: Should be run when you first checkout a project that uses Kickoff. It installs npm dependencies, and opens starter checklist on trykickoff.com
* `npm run deploy`: To be used when deploying on a CI environment. It installs non-optional npm dependencies and compiles all assets for production deployment
* `npm run commit`: Commit using our standard git commit message format. This uses the [commitizen](https://github.com/commitizen/cz-cli)
* `npm run test`: Run Travis CI checks
