const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensor.controller');

router.get('/', sensorController.getSensor);
router.post('/', sensorController.addSensor);
router.put('/:id', sensorController.updateSensor);
router.delete('/:id', sensorController.deleteSensor);

module.exports = router;
