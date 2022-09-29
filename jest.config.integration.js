const config = require('./jest.config')
config.testRegex = 'ispec\\.[js|ts]'
console.log('RUNNING INTEGRATION TESTS')
module.exports = config
