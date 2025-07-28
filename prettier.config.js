/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  printWidth: 80,
  plugins: ['prettier-plugin-tailwindcss'],
}
