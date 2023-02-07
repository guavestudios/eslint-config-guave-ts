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
