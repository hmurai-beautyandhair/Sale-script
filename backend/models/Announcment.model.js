const { Schema, model } = require("mongoose");

const announcmentSchema = new Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true}
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Announcment", announcmentSchema);