const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ITSchema = new Schema(
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

const IT = mongoose.model("IT", ITSchema);

module.exports = IT;