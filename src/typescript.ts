// import { interopDefault } from './utils'
import tseslint from 'typescript-eslint'

export async function typescript () {
  // const [
  //   pluginVue,
  // ] = await Promise.all([
  //   interopDefault(import('eslint-plugin-vue')),
  // ] as const)

  return [
    ...tseslint.configs.recommended,
    {
      name: 'guave/typescript',
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      }
    }
  ]
}
