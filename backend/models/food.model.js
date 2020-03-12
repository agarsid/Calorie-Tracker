const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  foodItem: { type: String, required: true },
  calorie: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const FoodItem = mongoose.model('FoodItem', exerciseSchema);
console.log(FoodItem);
module.exports = FoodItem;