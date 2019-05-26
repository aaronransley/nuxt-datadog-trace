module.exports = function DatadogTrace() {
  require('dd-trace').init({
    hostname: process.env.DATADOG_AGENT_HOST,
    env: process.env.NODE_ENV,
    service: require('./package.json').name,
    logInjection: true,
    ...this.options.datadogTrace
  })
}

module.exports.meta = pkg
