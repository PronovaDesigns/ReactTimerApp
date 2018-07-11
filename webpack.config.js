var webpack = require('webpack');

module.exports = {

  // Location of scripts for jquery and foundation
  // Location of the web app's root file
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  // Whenever the keys of those object are used in the cose they will use the corresponding value
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],

  // Location and name for bundle
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    // Gives you the path that you are currently in
    root: __dirname,

    // Define the locations and names of each component
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Controls: 'app/components/Controls.jsx',
      applicationStyles: 'app/styles/app.scss'
    },

    // The types of file extensions that we want to work with
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        // Defines loaders for handling .jsx
        loader: 'babel-loader',
        // Parse them through react and run that output through es2015
        query: {
          presets: ['react', 'es2015']
        },
        // Regular expressions for selecting any file with the .jsx suffix
        test: /\.jsx?$/,
        // Ignore these directories when using the loader
        exclude: /(node_modules|bowers_components)/
      }
    ]
  },
  // For debugging with source maps
  devtool: 'eval-source-map'
};
