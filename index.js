'use strict'

const babelPluginTransformES2015ModulesCommonjs = require('babel-plugin-transform-es2015-modules-commonjs')
const babelPluginTransformExportExtensions = require('babel-plugin-transform-export-extensions')
const babelPluginTransformClassProperties = require('babel-plugin-transform-class-properties')
const babelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread')
const babelPluginSyntaxTrailingFunctionCommas = require('babel-plugin-syntax-trailing-function-commas')

module.exports = {
  plugins: [
    babelPluginTransformES2015ModulesCommonjs,
    babelPluginTransformExportExtensions,
    babelPluginTransformClassProperties,
    babelPluginTransformObjectRestSpread,
    babelPluginSyntaxTrailingFunctionCommas,
  ],
}
