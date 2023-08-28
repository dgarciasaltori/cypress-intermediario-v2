const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '3wc7uv',
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})
