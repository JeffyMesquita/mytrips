// eslint-disable-next-line @typescript-eslint/no-vars-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
  images: {
    domains: ['media.graphcms.com']
  }
});


