const Router = require('koa-router');

const router = new Router();
const version = require('./controllers/version');

router.use('/:infoAccessUUID/version', version.routes(), version.allowedMethods());

module.exports = router;
