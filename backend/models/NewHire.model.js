const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const newhireSchema = new Schema(
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

const Newhire = mongoose.model("Newhire", newhireSchema);

module.exports = Newhire;