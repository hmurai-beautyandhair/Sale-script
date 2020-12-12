const { Schema, model } = require("mongoose");

const trackSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    links: { type: [Object], default: [] }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Track", trackSchema);