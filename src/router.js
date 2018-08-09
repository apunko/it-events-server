const Router = require('koa-router');

const router = new Router();
const events = require('./controllers/events');
const version = require('./controllers/version');

router
  .use('/events', events.routes(), events.allowedMethods())
  .use('/:infoAccessUUID/version', version.routes(), version.allowedMethods());

module.exports = router;
