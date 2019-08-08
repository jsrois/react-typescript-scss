# Re-learning frontend (I): Setting up a project

The goal of this is to learn how to set up a basic frontend project, including state of the art tools, namely:

- yarn
- typescript, ES6
- react
- scss

### Things we want to do:

- [ ] Run the project
- [ ] Run the tests
- [ ] Watch the files and auto compile
 
## Progress Record

- Using `yarn init` to create a new package json and two directories, `src` and `test`
- adding typescript using `yarn add typescript` and then generating a typescript configuration file using `tsc --init`
- Adding webpack and ts-loader with `yarn add webpack webpack-cli webpack-dev-server ts-loader` and the corresponding configuration files for webpack to generate the page from `app.ts` and `index.ts`
- adding react, react dom
- adding the style-loader and the css-loader plugins and configured webpack-dev-server to serve the dist folder
