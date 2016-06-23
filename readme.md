# React Component Boilerplate

This is a simple boilerplate project to get started quickly with ES6 modules.
The purpose of this is to make a module to easily publish on npm.

## Installation

- `npm install @lukeboyle/es6-module-boilerplate`
- Copy the files from node modules into your project root

## Getting Started

## Building your module

- Develop your component in `src/index.js`
- `npm run build` will run rollup on `index.js` under the `src` folder
- Add your component to the demo project js
- `npm run build-demo` will run the gulp default process in `demo/src`
- The gulp process will use babelify to transform the es6 to commonjs.