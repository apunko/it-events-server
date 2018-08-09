const Router = require('koa-router');

const router = new Router();

function index(ctx) {
  ctx.body = { users: [] };
}

function show(ctx) {
  ctx.body = { name: 'temp' };
}

router
  .get('/:id', show)
  .get('/', index);

module.exports = router;
