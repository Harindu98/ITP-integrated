const express = require('express');
const { requireSignin, adminMiddleware } = require('../../common-middleware');
const { initialData, getInitialDataWithOutAuth } = require('../../controllers/admin/initialData');
const router = express.Router();


router.post('/initialdata', requireSignin, adminMiddleware, initialData);
router.post('/initialdataWithOutAuth', getInitialDataWithOutAuth);

module.exports = router;