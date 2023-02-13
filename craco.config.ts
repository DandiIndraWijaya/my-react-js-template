/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@helpers': path.resolve(__dirname, 'src/helpers')
    }
  }
};

export {};
