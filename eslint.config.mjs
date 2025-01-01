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
          printWidth: 120,
          semi: false,
          singleQuote: true,
          trailingComma: 'none',
          tabWidth: 2,
          plugins: ['prettier-plugin-classnames']
        }
      ]
    }
  }
]

export default eslintConfig
