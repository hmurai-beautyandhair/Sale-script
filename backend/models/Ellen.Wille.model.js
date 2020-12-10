const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ellenWilleSchema = new Schema(
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

const EllenWille = mongoose.model("EllenWille", ellenWilleSchema);

module.exports = EllenWille;