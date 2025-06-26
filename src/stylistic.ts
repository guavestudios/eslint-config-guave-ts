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
        'style/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
            requireLast: false
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false
          },
          multilineDetection: 'brackets'
        }]
      }
    }
  ]
}
