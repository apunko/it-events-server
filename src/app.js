/* eslint-disable no-process-exit */

require('dotenv').config();

const koaLogger = require('koa-logger');
const helmet = require('koa-helmet');
const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const router = require('./router');

const app = new Koa();

app.use(koaLogger());
app.use(helmet());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const logger = require('./helpers/logger')(__filename);

async function onStop() {
  try {
    logger.info('Server successfully stopped');

    process.exit(0);
  } catch (error) {
    logger.warn(`Server stopped with error: ${error}`);

    process.exit(1);
  }
}

async function main() {
  process.on('SIGINT', onStop);
  app.listen(3000);
  logger.info('App started successfully on the port 3000');
}

main().catch(error => {
  logger.error(`App doesn't started, error: ${error}`);

  process.exit(1);
});
