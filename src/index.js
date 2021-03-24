import chalk from 'chalk';

const log = (...args) => {
  console.log(...args);
};

const logDebug = (...args) => {
  if (process.env.DEBUG || process.env.ZP_DEBUG) {
    console.log(chalk.white.bgYellow(' DEBUG '), ...args);
  }
};
log.debug = logDebug;
log.d = logDebug;

const logInfo = (...args) => {
  console.log(chalk.white.bgCyanBright(' INFO  '), ...args);
}
log.info = logInfo;
log.i = logInfo;

const logWarn = (...args) => {
  console.log(chalk.white.bgYellowBright(' WARN  '), ...args);
}
log.warn = logWarn;
log.w = logWarn;

const logError = (...args) => {
  console.log(chalk.white.bgRed(' ERROR '), ...args.map(arg => chalk.red(arg)));
}
log.error = logError;
log.e = logError;

export default log;
