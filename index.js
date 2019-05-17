const pkg = require('./package.json')

module.exports = function DatadogTrace() {
  require('dd-trace').init({
    hostname: process.env.DATADOG_AGENT_HOST,
    env: process.env.NODE_ENV,
    service: pkg.name,
    logInjection: true,
    ...this.options.datadogTrace
  })
}

module.exports.meta = pkg
