# Eslint Config Guave
This config covers
Typescript, Javascript and Vue files

It is heavely inspired and modified version of https://github.com/antfu/eslint-config, a truely amazing base to start a general linter
Shoutout to @antfu for this great work!

### Install

```bash
npm install -D eslint github:github.com:guavestudios/eslint-config-guave-ts
```

### Config `eslint.config.ts`

```js
import { guave } from 'eslint-config-guave-ts'

export default [
  ...await guave({
    vue: true,
    typescript: true,
    stylistic: true,
  })
]
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint:js": "eslint",
    "lint:js:fix": "eslint --fix",
  }
}
```

### (DOCU OUTDATED) Add Husky and stage-lint to enforce lintstyle on commit
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
