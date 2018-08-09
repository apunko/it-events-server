require('dotenv').config();

const logger = require('koa-logger');
const helmet = require('koa-helmet');
const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const router = require('./router');

const app = new Koa();

app.use(logger());
app.use(helmet());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
