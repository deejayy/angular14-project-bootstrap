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
- localizer with example dictionary
- scss mixins: `mq` and `smart-scale`
- module path aliases

To be done:

- api caller
- config
- localizer runtime autoload
- feature flag

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

### TBD
