const Router = require('koa-router');

const router = new Router();
const version = require('./controllers/version');

router.use('/version', version.routes(), version.allowedMethods());

module.exports = router;
