import { interopDefault } from './utils'

export async function stylistic () {
  const [
    pluginStylistic,
  ] = await Promise.all([
    interopDefault(import('@stylistic/eslint-plugin')),
  ] as const)

  const config = pluginStylistic.configs.customize({
    indent: 2,
    jsx: false,
    pluginName: 'style',
    quotes: 'single',
    semi: false,
    commaDangle: 'only-multiline'
  })

  return [
    config,
    {
      name: 'guave/stylistic',
      rules: {
        'style/space-before-function-paren': ['error', 'always'],
        'style/brace-style': ['error', '1tbs'],
        'style/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
            requireLast: false
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          },
          multilineDetection: 'brackets'
        }],
        'style/spaced-comment': ['error', 'always'],
        'style/arrow-parens': ['error', 'as-needed'],
        'style/quote-props': ['error', 'as-needed'],
      }
    }
  ]
}
