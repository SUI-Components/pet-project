<h1 align="center">
  🧅 Let's go with Movies domain!
  <br/><br/>
</h1>

<h4 align="center">Creating the boilerplate that will host the business logic of our application.</h4>

<p align="center">
  <a href="./README.md">🏠 Home</a> •
  <a href="#-introduction">🔥 Introduction</a> •
  <a href="#-getting-started">🚀 Getting started</a> •
  <a href="#-checkpoint">📍 Checkpoint</a>
</p>

## 🔥 Introduction

### But first... what's a domain?

According to our Layers architecture guide, it's the layer with all the calls to other systems to retrieve data, the place where we do all our calculations, transformations and other validations independently from the interface.

To sum up, an SDK to control the business logic of our application it's developed using only pure Javascript.

### Why is the domain important?

In order to avoid coupling our frontend solution to our logic. This will help us to move faster our stack to another solution in the future if we want as the Domain is written in pure Javascript. Also, this offers us to focus our logic in a single point, avoiding unnecessary noise. Furthermore, the domain provides us with a single point of truth for our logic business and a perfect place to make the best test coverage of our core.

## 🚀 Getting started

We've created [`@s-ui/domain`](https://github.com/SUI-Components/sui/tree/master/packages/sui-domain) that's meant to be the backbone for our domains. It provides the basic stuff and some examples to start creating a domain from the ground. Anyway, before that, you'll need a great understanding of the core concepts.

Once you have the core concepts more or less clear, ask your mentor to create the boilerplate of the domain and your first use case.

## Let's build our domain project

Now that you know how we treat with business logic, it's time to get our hands dirty creating our DDD folder.

**Create a directory called** `domain`.

In our case, as we are using monorepo, the path is the root of the project `frontend-mv--web-app/domain`.

After that, there are a bunch of things that we need to do to set up our domain dev environment.

First of all, as you've done on the other projects, you need to _init your npm project_.

```sh
cd domain
npm init
```

Set the default values of the initializer wizard and it's all done.

After that open your package.json file:

And **change/add the next line to this**:

```json
  "main": "./lib/index.js",
```

After that, we are going to **install some npm packages** that will help us to build and work with our domain project.

```sh
npm install --save-dev @s-ui/mockmock @s-ui/mono @s-ui/test @babel/cli babel-preset-sui
```

- @s-ui/mockmock - Responsible to let us mock the backend requests made by our domain repository

- @s-ui/mono - Our commit and release step wizard

- @s-ui/test - Responsible of abstract us of our testing library, just run sui-test browser | server and the tool will do their job

- babel-cli - Will be the one responsible for transpiling our app to es5.

- babel-preset-sui - The babel preset of sui

Once we have installed that dev packages we are going to **install the production ones**.

```sh
npm install @s-ui/domain
```

- @s-ui/domain - Is the package that includes the interfaces, fetcher and tools that we will use to work with the domain.

- @s-ui/js - A set of common tools and libraries that will help us to deal with strings, cookies etc....

_⚠️ NOTE: Some specific packages of our marketplace must be installed in order to work. For example with literals, but at this point, you will not need them._

####  Adding the npm scripts

Once you have this done add the next npm scripts and configs:

```json
"scripts": {
  "lib": "rm -Rf ./lib && babel ./src -d lib",
  "lint": "sui-lint js --fix",
  "test": "NODE_ENV=test npm run test:client && NODE_ENV=test npm run test:server",
  "test:ci": "NODE_ENV=test ./node_modules/.bin/karma start --single-run --browsers Firefox",
  "test:client": "NODE_ENV=test sui-test browser",
  "test:client:watch": "npm run test:client -- --watch",
  "test:server": "NODE_ENV=test sui-test server",
  "test:server:watch": "npm run test:server -- --watch",
}
```

Congrats! With that, you should be able to make your first use case! 🔝

Talk with your mentor to set up the folders and first config files or to clarify the doubts or problems that you've found on the process.
