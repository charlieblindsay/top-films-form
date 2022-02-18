const Film = require("./film_model");
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // ACCESS ENV VARIABLES
dotenv.config({ path: "./config.env" });

DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    // Connecting to hosted database
    // .connect(process.env.DATABASE_LOCAL, { // Connecting to local database
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("Database connection successful"));

let films = [];

require("fs")
  .readFileSync("./films.txt", "utf-8")
  .split(/\r?\n/)
  .forEach(function (line, index) {
    if (line != "") {
      films.push({ name: line, position: index + 1 });
    }
  });

const createFilm = async () => {
  try {
    await Film.create(films);
    console.log("Imported films into database");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const removeDuplicateNames = async () => {
  try{
    films = await Film.find();
    films.forEach(film => {
      film.whoHasWatched = [...new Set(films.whoHasWatched)];
    })
  }
  catch(err){

  }
}

const deleteFilms = async () => {
  try {
    await Film.deleteMany();
    console.log("Deleted all films from database");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  createFilm();
} else if (process.argv[2] === "--delete") {
  deleteFilms();
} else if (process.argv[2] === "--remove") {
  removeDuplicateNames();
}
