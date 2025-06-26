import eslint from '@eslint/js'
import { vue } from './vue'
import { stylistic } from './stylistic'
import { typescript } from './typescript'
import { TypedFlatConfigItem } from './types'
import globals from 'globals'

interface GuaveLinterOptions {
  typescript?: boolean
  stylistic?: boolean
  vue?: boolean
  ignores?: string[]
  overrides?: TypedFlatConfigItem['rules']
}

export async function guave (options: GuaveLinterOptions) {
  return [
    {
      name: 'guave/base',
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      ignores: options.ignores ?? [],
      rules: {
        'n/no-callback-literal': 'off',
      }
    },
    eslint.configs.recommended,
    ...(options.typescript ? await typescript() : []),
    ...(options.stylistic ? await stylistic() : []),
    ...(options.vue ? await vue() : []),
    {
      name: 'project/custom',
      rules: {
        ...(options.overrides ?? {})
      },
    }
  ]
}
