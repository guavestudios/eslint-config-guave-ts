import { guave } from './src'

export default [
  ...await guave({
    vue: true,
    typescript: true,
    stylistic: true,
    jest: {
      dir: 'tests',
    },
    ignores: ['**/node_modules/**', 'dist/*'],
    overrides: {

    }
  })
]
