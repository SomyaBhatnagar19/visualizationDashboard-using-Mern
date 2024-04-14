/* /backend/router/dataRouter.js */

const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');

router.get('/getData', dataController.getData);

router.get('/addData', dataController.addData);

module.exports = router;
