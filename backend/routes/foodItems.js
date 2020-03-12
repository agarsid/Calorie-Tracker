const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
  Food.find()
    .then(foodItems => res.json(foodItems))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const foodItem = req.body.foodItem;
  const calorie = Number(req.body.calorie);
  const date = Date.parse(req.body.date);

  const newFood = new Food({
    username,
    foodItem,
    calorie,
    date,
  });

  newFood.save()
  .then(() => res.json('Food added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Food.findById(req.params.id)
    .then(food => res.json(food))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.json('Food deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Food.findById(req.params.id)
    .then(food => {
      food.username = req.body.username;
      food.foodItem = req.body.foodItem;
      food.calorie = Number(req.body.calorie);
      food.date = Date.parse(req.body.date);

      food.save()
        .then(() => res.json('Food updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;