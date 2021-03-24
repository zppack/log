# @zp/log

A log tool in console with 4 levels.

[![NPM](https://nodei.co/npm/@zp/log.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@zp/log/)

## Features

- [x] colors log using chalk
- [x] 4 log levels
- [x] debug mode support

## Start

### Install

```sh
npm install --save @zp/log
```

### Usage

```js
import log from '@zp/log';

log.i('this is a info-level log');
log.info('this is also a info-level log');
```

### APIs

#### log.info

Info-level log function. Shorted as `log.i`.

#### log.warn

Warn-level log function. Shorted as `log.w`.

#### log.error

Error-level log function. Shorted as `log.e`.

#### log.debug

Debug log function. Shorted as `log.d`.

**Attention:** Only works when there is an env variable `process.env.DEBUG` or `process.env.ZP_DEBUG` set to true.

## Contributing

[How to contribute to this?](CONTRIBUTING.md)

## Recently changes

See the [change log](CHANGELOG.md).

## License

[MIT](LICENSE)
