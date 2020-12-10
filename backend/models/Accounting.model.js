const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const accountingSchema = new Schema(
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

const Accounting = mongoose.model("Accounting", accountingSchema);

module.exports = Accounting;