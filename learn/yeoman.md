---
title: Kickoff Yeoman Generator
layout: docs
navgroup: docs
navactive: docsyo
meta:
  description: The fastest way to get Kickoff is using our yeoman generator. Find
    out about it here.
next:
- title: Get Kickoff
  body: Find out the other ways to get your hands on Kickoff here.
  link: get.html
- title: Sublime Text snippets
  body: Use Sublime? These handy snippets will make life with Kickoff even easier.
  link: sublime.html
---

Using our Yeoman Generator is the best and fastest way to get Kickoff each time you want to start a new project. It will ask you a few questions and then build a custom version of Kickoff for your needs.

## What is Yeoman?
Yeoman helps you kickstart new projects, prescribing best practices and tools to help you stay productive. Yeoman is open-source but is maintained by a number of people from Google.

We have created a generator that once installed, allows you to create a custom build of Kickoff whenever you need.

<hr class="sectionSplitter">
<a name="installation"></a>

## Installation

### Install Yeoman
If you haven't installed Yeoman yet, run this command in your terminal:

```sh
npm install -g yo
```

### Install the generator
To install generator-kickoff from npm, run:

```sh
npm install -g generator-kickoff
```

### Install them both at the same time
```sh
npm install -g yo generator-kickoff
```

<hr class="sectionSplitter">
<a name="usage"></a>

## Usage
Once everything is installed, run the generator using the below command.

```sh
yo kickoff
```

<hr class="sectionSplitter">
<a name="subcommands"></a>

## Sub-commands
Generator sub-commands are especially useful once the project is up and running. Our generator includes some helpful sub-commands to speed up the addition of sass and javascript modules.

### Sass

#### Add new Sass component
Run `yo kickoff:sass:component name` where `name` is the name of the component you want to add. This new file will be added to the `/scss/components` directory and an `@import` for it will be added to `kickoff.scss`

```sh
$ yo kickoff:sass:component name
# creates /scss/components/_name.scss
```

#### Add new Sass view
Run `yo kickoff:sass:view name` where `name` is the name of the view you want to add. This new file will be added to the `/scss/views` directory and an `@import` for it will be added to `kickoff.scss`

```sh
$ yo kickoff:sass:view name
# creates /scss/views/_name.scss
```

### Javascript

#### Add new Javascript module
Run `yo kickoff:js:module name` where `name` is the name of the component you want to add. This new file will be added to the `/js/modules` directory.

```sh
$ yo kickoff:js:module name
# creates /js/modules/name.js
```

#### Add new Javascript util
Run `yo kickoff:js:util name` where `name` is the name of the view you want to add. This new file will be added to the `/js/utils` directory.

```sh
$ yo kickoff:js:util name
# creates /js/utils/name.js
```

---

The repo and more information can be found at [github.com/TryKickoff/generator-kickoff](https://github.com/TryKickoff/generator-kickoff)

If you'd like to get to know Yeoman better check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).
