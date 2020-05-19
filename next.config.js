const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withImages = require('next-images')

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv()

module.exports = withNextEnv();
module.exports = withImages(withSASS(withCSS({
	// Below: for adding svg to site
	webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
})));
