const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const inventorySchema = new Schema(
  {
    url: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
