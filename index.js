const pkg = require('./package.json')

export default function DatadogTrace(moduleOptions = {}) {
  require('dd-trace').init({
    hostname: process.env.DATADOG_AGENT_HOST,
    env: process.env.NODE_ENV,
    service: pkg.name,
    logInjection: true,
    ...moduleOptions
  })
}

module.exports.meta = pkg
