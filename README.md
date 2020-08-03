# Func Call Spacing with Prettier-Eslint and VSCode

## Purpose

- I like the formatting capabilities of `prettier`
- I don't like that `prettier` won't allow `func-calling-spacing` and `array-bracket-spacing`
- This repo shows how to get the best features of `prettier` without sacrificing customisability with `eslint`

## Packages

- `prettier` - used to format non-javascript files
- `eslint` - used to lint and format code for errors
- `prettier-eslint` - format code with `prettier` then auto-fix errors with `eslint`
- `prettier-eslint-cli` - prettier eslint does not work from the command line out of the box
- `babel-eslint` - the parser used to parse Javascript files. This could be replace with a parser of your choice.

## Prettier Eslint

- Install the required packages - `npm install`
- Open `src/index.js`
- Notice the func call spacing
- Edit the file to see that `prettier` is formatting the document and `eslint` is maintaining the `func-call-spacing`
- There is a `npm` script in `package.json` showing how to add this as a CI step

## VSCode

### Extensions

- The extensions I am using to format my code each time I save are:
  - `prettier` - format JSON files
  - `eslint` - lint Javascript files
  - `prettier-eslint` - runs each time I save to format and lint Javascript files

### Settings

- The `.vscode/settings.json` file triggers `prettier-eslint` to run on save of Javascript files and `prettier` to run on the save of JSON files. These settings are project specific and will take precedence over your generic User settings
