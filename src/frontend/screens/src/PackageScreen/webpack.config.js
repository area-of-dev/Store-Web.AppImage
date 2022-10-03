// Copyright 2021 Alex Woroschilow(alex@ergofox.me)
//
// Licensed under the Apache License, Version 2.0(the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './main.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'WorkoutScreen.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './index.html'),
          to: path.resolve(__dirname, '../../dist/WorkoutScreen.html')
        },
        {
          from: path.resolve(__dirname, './static/img'),
          to: path.resolve(__dirname, '../../dist/static/img')
        },
        {
          from: 'node_modules/@mediapipe/pose',
          to: path.resolve(__dirname, '../../dist/static/@mediapipe/pose')
        }
      ]
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, '../../dist'),
    port: 3000,
  },
};