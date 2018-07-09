var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    // A globbing pattern searches project using the "*" symbol as wildcards -- ** is for any directory name * is any for file name
    files: ['app/tests/**/*.test.jsx'],
    // Preprocessors specify the things we want to do with our test files
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000' // timeout test in 5000 milliseconds
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo:  true
    }
  });
};
