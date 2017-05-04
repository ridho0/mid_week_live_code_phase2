const router = require('express').Router()
const foodController = require('../controllers/foods')
const userController = require('../controllers/users')
const restaurantController = require('../controllers/restaurants')

router.get('/', function(req, res) {
  res.send("hai")
})
/////////////////////// FOODS /////////////////////////////////////
router.get('/foods', foodController.getAllData)
router.get('/foods/:id', foodController.getOneData)//by ID
router.post('/foods', foodController.createData)
router.put('/foods/:id', foodController.updateData)//by ID
router.delete('/foods/:id', foodController.deleteData)//by ID
/////////////////////// USERS /////////////////////////////////////
// login
// logout
router.post('/users', userController.signup)
router.put('/users/:id', userController.updateById)//update data
router.delete('/users/:id', userController.deleteById)
////////////////////////// RESTAURANTS /////////////////////////////////////

router.get('/restaurants', restaurantController.getAllData)
router.get('/restaurants/:id', restaurantController.getOneData)//by ID
router.post('/restaurants', restaurantController.createData)
router.put('/restaurants/:id', restaurantController.updateData)//by ID
router.delete('/restaurants/:id', restaurantController.deleteData)//by ID

module.exports = router;
