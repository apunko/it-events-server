const Router = require('koa-router');

const { version } = require('../../package');

const router = new Router();

function show(ctx) {
  if (ctx.params.infoAccessUUID !== process.env.INFO_ACCESS_UUID) {
    return;
  }

  ctx.body = { version };
}

router.get('/', show);

module.exports = router;
