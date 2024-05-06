import globals from 'globals'
import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import eslintPrettier from 'eslint-plugin-prettier/recommended'

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintPrettier
]
