const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  runtimeCaching,
});

module.exports = withPWA({
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { 
    domains: [
      'localhost',
      'http://localhost:10034',
      'http://localhost',
      'http://spectrumpsychiatry.local',
      'spectrumpsychiatry.local',
      'localhost:10034',
      'localhost:10011',
      '54.188.89.209',
      '127.0.0.1:10034',
      'res.cloudinary.com',
      'maps.googleapis.com',
      's3.amazonaws.com',
      'spectrumpsychiatry-wp.com',
      'https://spectrumpsychiatry-wp.com',
    ], 
  }
});
