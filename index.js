'use strict'

const babelPluginTransformES2015ModulesCommonjs = require('babel-plugin-transform-es2015-modules-commonjs')
const babelPluginSyntaxTrailingFunctionCommas = require('babel-plugin-syntax-trailing-function-commas')

module.exports = {
  plugins: [ babelPluginTransformES2015ModulesCommonjs, babelPluginSyntaxTrailingFunctionCommas ],
}
