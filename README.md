# Eslint Config Guave
This config covers
Typescript, Javascript and Vue files

### Install

```bash
npm install -D eslint github:github.com:guavestudios/eslint-config-guave-ts
```

### Config `.eslintrc`

```json
{
  "extends": "eslint-config-guave-ts"
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint:js": "eslint --ext \".ts,.js,.vue\" --ignore-path .gitignore .",
    "lint:js:fix": "eslint --fix --ext \".ts,.js,.vue\" --ignore-path .gitignore .",
  }
}
```

### Add Husky and stage-lint to enforce lintstyle on commit
```
npm i -D husky lint-staged
```
add to packge json
```
"scripts": {
  "prepare": "husky install"
},
"lint-staged": {
    "*.{js,vue,ts}": "eslint",
    "*.{css,vue}": "stylelint"
  }
```
run husky first time
```
npm run prepare
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```
Now you can commit hte pre-commit hook
