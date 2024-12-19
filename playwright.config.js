/** @type {import('@playwright/test').PlaywrightTestConfig} */ export default  {
  testDir: './src/tests', // Update this path to your test directory
  testMatch: ['*.spec.js', '*.spec.cjs'],     // Update this pattern to match your test files
  webServer: {
    port: 8080,
    command: 'npm run start',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080/',
  },
}