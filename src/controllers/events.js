const Router = require('koa-router');

const router = new Router();

function index(ctx) {
  ctx.body = { events: [] };
}

function show(ctx) {
  ctx.body = { title: 'temp' };
}

router
  .get('/:id', show)
  .get('/', index);

module.exports = router;
