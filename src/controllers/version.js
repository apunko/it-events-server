const Router = require('koa-router');

const { version } = require('../../package');

const router = new Router();

async function get(ctx) {
  ctx.body = { version };
}

router.get('/', get);

module.exports = router;
