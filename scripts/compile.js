const babel = require('@babel/core');
const fs = require('fs');

function writeToLib(file) {
  const compiledCode = babel.transformFileSync(`./src/${file}.js`, {
    comments: false,
    minified: true,
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-classes',
      '@babel/plugin-transform-modules-commonjs',
      'babel-plugin-minify-mangle-names',
    ],
  }).code;
  fs.writeFileSync(`./lib/${file}.js`, compiledCode, 'utf-8');
}

const fileStack = ['index', 'react']
for (const file of fileStack) {
  writeToLib(file)
}
