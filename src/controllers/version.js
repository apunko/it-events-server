const Router = require('koa-router');

const { version } = require('../../package');

const router = new Router();

async function get(ctx) {
  if (ctx.params.infoAccessUUID !== process.env.INFO_ACCESS_UUID) {
    return;
  }

  ctx.body = { version };
}

router.get('/', get);

module.exports = router;
