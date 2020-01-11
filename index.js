module.exports = function DatadogTrace(moduleOptions) {
  const path = require('path')
  const hostAppPkg = require(path.resolve(this.options.rootDir, 'package.json'))

  let mergedOptions = {
    hostname: process.env.DATADOG_AGENT_HOST || 'localhost',
    env: process.env.NODE_ENV,
    service: hostAppPkg.name,
    logInjection: true,
    ...moduleOptions,
    ...this.options.datadogTrace
  }
  console.log(mergedOptions)
  require('dd-trace').init(mergedOptions)
}

module.exports.meta = require('./package.json')
