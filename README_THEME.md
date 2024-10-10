<h1 align="center">
  🎨 Let's go with Movies theme!
  <br/><br/>
</h1>

<h4 align="center">Theme project to style our web-app and components.</h4>

<p align="center">
  <a href="https://github.com/SUI-Components/pet-project">🏠 Home</a> •
  <a href="#-introduction">🔥 Introduction</a> •
  <a href="#-getting-started">🚀 Getting started</a> •
  <a href="#-checkpoint">📍 Checkpoint</a>
</p>

## 🔥 Introduction

A theme in Adevinta Spain is a set of variables and styling specifications based on SASS preprocessor that overrides the specifications and variables defined by the [sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme) on demand.

[sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme) is an Open Source theme built and mantained by all of Adevintans and is the basis of all frontend projects at Adevinta Spain.

Then, each marketplace has his own theme that overrides the basis tokens of [sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme).

So, in this learning step, you will create the movies theme that will use [sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme) as basis and override some tokens to personalize your website.

## 🚀 Getting started

The marketplace's theme is an NPM package, as a web-app workspace, to install it wherever you will need it ( for example: web-app or components).

### Let's start to set up our environment

Use this `./theme` folder inside your `frontend-mv--web-app` project. Using a terminal, move to the new `theme` folder and initialize a NPM package named `@mv/theme`.

```sh
> npm init
```

After that, you should have a project structure like:

```
/
├── src/
├── theme/
    └── package.json
├── .gitignore
└── package.json
```

#### ❓ What can we do with the theme?

Basically define and override variables like colors, margins, positions etc...

#### ❓ Then... who defines the base CSS of our components?

The base css of our components is defined inside the own components that are held inside our `<marketplace>-studio`. You will see it at next lesson creating your first component.

_Let's get into work!_

### Creating the base structure of our theme

Our theme must have the following structure:

```
src/
  └── components/
      └── .gitkeep
  └── layout/
      └── .gitkeep
  └── settings/
      └── .gitkeep
  └── utils/
      └── .gitkeep
└── .gitignore
```

The reason of those folders is:

- `components/` folder is to override SUI-Components tokens.
- `layout/` folder is to override breakpoints or grid tokens.
- `settings/` folder is to override all tokens like margins, paddings, colors, font-sizes, etc.
- `utils/` folder is to create some mixins

### Installing our dev dependencies

We are going to install the following packages:

```
"@s-ui/theme": "8"
"copyfiles": "2.3.0"
```

> 💡 Currently the last version of "@s-ui/theme" is v8. Try to use always the last one.

Starting with `devDependencies`, run:

```sh
> npm i -DE copyfiles
```

Then, install main dependencies:

```sh
> npm i -SE @s-ui/theme@latest
```

#### ❓ What do they do?

- _@s-ui/theme_ - As we said, this package has all the basis of a Frontend Marketplace in Adevinta Spain. We will override some tokens to personalize your marketplace.

- _copyfiles_ - Used to copy files.

Okay, now that we have all the necessary to work with our repository... let's go to the next step!

### Defining our main folder and project scripts

Open your package.json and add the next config:

```json
  "main": "lib/",
  "scripts": {
    "lib": "copyup './src/**/*.scss' lib/",
    "lint": "sui-lint sass",
    "prepublishOnly": "npm run lib"
  },
```

#### ❓ What do they do?

- `npm run lib` - Copy all folder files to `/lib` foler.
- `npm run lint` - Run `sui-lint` package to lint all sass files.
- `npm run prepublishOnly` - Runs any time after the package is installed

And that's it! we are ready to work with our theme!

### 👩🏼‍💻👨🏼‍💻 Working with our `<marketplace>-theme`

#### ❓ How do our theme matches with sui-theme?

Well, we will see in the next lessons but... basically what our components do inside their `index.scss` is first of all import the `sui-theme`.

In web-app styles (`index.scss`) you should import `sui-theme` and `<marketplace>-theme`, in that order. Our web-app theme will override `sui-theme` variables for entire application

> ⚠️ Never import all your `<marketplace>-theme` in a component `index.scss` because of components should be `sui-theme` friendly in order to be reusable in other web-app o as a widgets if required.

#### Let's get our hands dirty

Go to your `./theme` folder, create an `src` folder and inside of it, create the next file:

```
  └── settings/
      └── _color.scss
```

> 💡 **TIP**: the underscore on the file name is a sass feature called partials. It means that the stylesheet is going to be imported (@import) to a main stylesheet i.e. styles.scss. The advantage of using partials is that you can use many files to organize your code and everything will be compiled on a single file.

Inside of it add the next TWO variables:

```scss
$c-primary: #22988a;
$c-accent: #fec10f;
```

These two variables will OVERRIDE the base variables of [sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme). The folder structure doesn't matter but we are keeping the same folder structure that you'll find inside [sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme) repo to be consistent.

So if we go to [sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme) we will see that under the folder [`./settings/_color.scss`](https://github.com/SUI-Components/sui/blob/master/packages/sui-theme/src/settings/_color.scss) we have these two variables with some default colors. Note that the folder structure is the same in both themes.

> 💡 **TIP**: The `!default` flag is important here. It means that if the variable has already been assigned to a value, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one.

#### Import the files

To end with our first feature on our theme we need to import theme somehow.

Create a `settings.scss` inside the `./theme/src` path of our project and add the next import:

```scss
@import "./settings/color";
```

That will import our color file.

Now create a `index.scss` file inside our `./src` folder to import the settings file adding the next code:

```scss
@import "./settings";
```

#### Import sui-theme

Go to `index.scss` you created previously, and at the top of the file, import the [sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme):

```scss
@import "~@s-ui/theme/lib/index";
```

> 💡 TIP: The ~ char at the import path, says to the import flow that should go to node_modules folder and find the package.

And that's it! we are ready to use our theme!!

### Publishing our package - NOT RECOMMENDED FOR THE EXAMPLE

At Adevinta Spain, we make Continuous Integration (CI) and Continuous Delivery (CD). All of our components, themes, web-apps, domains are deployed automatically after a Pull Request is merged into master branch. So, you should not deploy manually "never".

Don't worry about that, if someday you need to deploy a project manually, ask to your colleagues.

### Developing within the web-app and linked theme

You can use `sui-bundler` in development mode to start your webapp locally and test it. In order to do that, you can use the following command:

```sh
npm run dev
```

This will launch a website in your `localhost:3000`. Like the components in sui-studio, you will need to add your dependencies in your `package.json` file and link the ones you want to use inside your pages. `sui-bundler` also supports linking packages locally with the `link-package` option:

```sh
npm run dev -- --link-package=/absolute_path/frontend-mv--uilib-theme/
```

## 📍 Checkpoint

To recap, at this lesson you have built your `mv-theme` using [sui-theme](https://github.com/SUI-Components/sui/tree/master/packages/sui-theme) and this is ready to use at your components and web-app.

Your current folder structure should be similar to:

```
/
├── src/
├── theme/
    └── src/
        ├── components/
            └── .gitkeep
        ├── layout/
            └── .gitkeep
        ├── settings/
            ├── _color.scss
            └── .gitkeep
        ├── utils/
            └── .gitkeep
        ├── settings.scss
        └── index.scss
      ├──  .gitignore
      └── package.json
├── .gitignore
└── package.json
```

> Don't forget to save your changes!! 😉
