mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: Number,
    required: true,
  },
  whoHasWatched: {
    type: Array,
  },
  wantsToWatch: {
    type: Array,
  },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
