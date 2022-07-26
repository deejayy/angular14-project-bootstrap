# Angular 14 Project Bootstrap

LIst of features:

- editorconfig, prettier, eslint, stylelint set up with rules
- jest for unit testing and some basic mocks
- lint-staged
- index.html with nojs fallback, loader, tuned viewport
- modern css reset, customized scrollbar, autofill-input patch
- material set up with
  - some offline fonts and iconset
  - example palette (check `app-theme.scss`)
  - dark mode support based on palette
- ngrx state manager with immer, dev tools
- optimized build for rarely-changing files, vendor chunk
- scss mixins: `mq` and `smart-scale`
- module path aliases

To be done:

- feature flag
- demo page

## How to leverage prepared setups

### VSCode plugins

(all listed in recommendations)

- Angular Language Service
- Editorconfig for VS Code
- Prettier - Code formatter
- ESLint
- Prettier ESLint
- SCSS IntelliSense
- Stylelint

### Reactive Config

Check: https://www.npmjs.com/package/@deejayy/reactive-config

Config file: /assets/config-{dev,prod}.json

*Protip*: if you want to hide your dev/staging/qa configs, generate a hash in the config's file name (security through obscurity), like this: `config-dev-ad7f82.json`. Since at build time it will only include the environment file which is required for that build env, your prod bundle won't contain the dev configs name, and also can't be guessed because of the hash.  
Or, of course, you can adjust `fileReplacements` section in angular.json for similar effect.

### Runtime Localizer

Check: https://www.npmjs.com/package/@deejayy/runtime-localizer

### API Caller

Check: https://www.npmjs.com/package/@deejayy/api-caller

### TBD

There will be some simple feature modules just to test library functionalities.  
They will be easy to remove, so you can have an empty but properly setup project.  
... or you can use it as reference implementation.
