/* /backend/router/dataRouter.js */

const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');

router.get('/getData', dataController.getData);

module.exports = router;
