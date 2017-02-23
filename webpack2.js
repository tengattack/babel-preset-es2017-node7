'use strict'

const babelPluginTransformClassProperties = require('babel-plugin-transform-class-properties')
const babelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread')
const babelPluginSyntaxTrailingFunctionCommas = require('babel-plugin-syntax-trailing-function-commas')

module.exports = {
  plugins: [
    babelPluginTransformClassProperties,
    babelPluginTransformObjectRestSpread,
    babelPluginSyntaxTrailingFunctionCommas,
  ],
}
