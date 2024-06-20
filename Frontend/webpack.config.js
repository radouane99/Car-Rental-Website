const path = require('path');

module.exports = {
  // Your existing webpack configuration goes here

  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      // Other fallbacks if necessary
    }
  },

  // Other webpack configurations as needed
};