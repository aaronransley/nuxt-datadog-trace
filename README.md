# nuxt-datadog-trace

Quickly add `dd-trace` / Datadog APM tracing to your Nuxt application. Captures requests passing
through the Nuxt instance / `http` module in Node.js.

**Note:** This module is very barebones at the moment, and doesn't provide an interface to the `dd-trace` scope manager. This functionality is planned!

# Installation

1. Install npm package

```
$ yarn add nuxt-datadog-trace // or npm i nuxt-datadog-trace
```

2. Edit your `nuxt.config.js` file to add module

```
  {
    modules: [
      'nuxt-datadog-trace'
    ]
  }
```

By default, `dd-trace` will be configured like so:

```
{
  hostname: process.env.DATADOG_AGENT_HOST,
  env: process.env.NODE_ENV,
  service: require('./package.json').name,
  logInjection: true,
}
```

To override options, see Usage section.

# Usage

1. Configure `dd-trace` instance by adding `datadogTrace` to `nuxt.config.js`.
   - Learn [more about `dd-trace` options](https://datadog.github.io/dd-trace-js/interfaces/traceroptions.html)

```
{
  datadogTrace: {
    hostname: 'cool.net',
    logInjection: false
    // ...
  }
}
```

# [Changelog](./CHANGELOG.md)
