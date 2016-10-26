"use strict";

function configBuilder(dirName){
  return {
    entry: {
      lti: './handler.js'
    },
    context : dirName,
    target: 'node',
    module: {
      loaders: [
        {
          test: /.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              'es2015', // Include all plugins needed to handle es2015 syntax
              'stage-3' // Enables experimental ES features.
            ],
            plugins: [
              'transform-runtime',          // Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals.
              'transform-class-properties'  // Allows class instance fields and class static properties.
            ]
          }
        },
        { test: /\.json$/, loader: "json-loader" }
      ]
    },
    externals: ["aws-sdk"],
    resolve: {
      extensions: ['', '.js', '.json'],
      modulesDirectories: ['node_modules']
    },
    output: {
      libraryTarget: 'commonjs',
      path: '.webpack',
      filename: '[name].js'
    }
  };
}

module.exports = configBuilder(__dirname);

