const consumptionRouter = require('express').Router();
const ConsumptionController = require('../controllers/consumption');
const {validateBody, schemas} = require('../helpers/validators');

const auth = require('../authenticate.js');


// Get today's Consumption
consumptionRouter.get('/today',
    auth.userAuth,
    ConsumptionController.todayConsumption
)


// Get Consumption document by date
consumptionRouter.get('/date/:date',
    auth.userAuth,
    ConsumptionController.dateConsumption
)


// Get all-time Consumption
consumptionRouter.get('/all',
    auth.userAuth,
    ConsumptionController.allTimeConsumption
)


// Consume a product
consumptionRouter.post('/',
    auth.userAuth,
    validateBody(schemas.consumeProductSchema),
    ConsumptionController.consumeProduct,
);


// Export the router
module.exports = consumptionRouter;