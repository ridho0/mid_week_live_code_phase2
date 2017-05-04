# mid_week_live_code_phase2

#simple-api-crud

sebuah aplikasi semacam data base yg dapat CRUD foods restaurant..
plus fitur login

|Route|http|description|
|-----|----|-----------|
/api/signup|POST|Sign up with new user info
/api/signin|POST|Sign in while get an access token based on credentials

api/foods | get | foodController.getAllData
api/foods/:id | get | foodController.getOneData //by ID
api/foods | post | foodController.createData
api/foods/:id | put | foodController.updateData //by ID
api/foods/:id | delete | foodController.deleteData //by ID
api/restaurants | get | restaurantController.getAllData
api/restaurants/:id | get | restaurantController.getOneData //by ID
api/restaurants | post | restaurantController.createData
api/restaurants/:id | put | restaurantController.updateData //by ID
api/restaurants/:id | delete | restaurantController.deleteData //by ID

To Use
```javascript
npm install
npm run dev
```
