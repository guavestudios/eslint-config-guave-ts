import { guave } from './src'

export default [
  ...await guave({
    vue: true,
    typescript: true,
    stylistic: true,
    ignores: ['**/node_modules/**', 'dist/*'],
    overrides: {

    }
  })
]
