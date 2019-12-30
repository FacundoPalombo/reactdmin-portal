const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ],
  plugins = ['@babel/plugin-syntax-dynamic-import']

module.exports = { presets, plugins }
