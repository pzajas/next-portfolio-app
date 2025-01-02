import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          bracketSpacing: true,
          jsxSingleQuote: false,
          quoteProps: 'as-needed',
          singleQuote: true,
          semi: false,
          printWidth: 120,
          useTabs: false,
          tabWidth: 2,
          endOfLine: 'crlf',
          trailingComma: 'none',
          plugins: ['prettier-plugin-classnames']
        }
      ]
    }
  }
]

export default eslintConfig
