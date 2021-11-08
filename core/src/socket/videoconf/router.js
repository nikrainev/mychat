const controller = require('../videoconf/controller');
const router = new (require('../../utils/socket/socketRouter'));
const { withUser } = require('../../middelwares/withUser');
const { withAuthorization } = require('../../middelwares/withAuthorization');

router.addRoute(
    'JOIN',
    withUser(),
    withAuthorization(),
    controller.joinConf,
);

router.addRoute(
    'UPDATE_ONLINE_STATUS',
    withUser(),
    withAuthorization(),
    controller.updateOnlineStatus,
);

module.exports = router;
