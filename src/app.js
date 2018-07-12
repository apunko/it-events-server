const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const router = require('./router');

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
