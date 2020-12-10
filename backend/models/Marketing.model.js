const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const marketingSchema = new Schema(
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

const Marketing = mongoose.model("Marketing", marketingSchema);

module.exports = Marketing;