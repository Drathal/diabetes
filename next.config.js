module.exports = {
  target: 'serverless',
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  },
  future: {
    webpack5: true
  }
}
