const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieByGenre,
} = require("../services/movies");

const getAllMoviesController = async (req, res, next) => {
  let result= await getAllMovies();
  res.status(200).send(result);
};

const getMovieByIdController = async (req, res, next) => {};
const getMovieByGenreController = async (req, res, next) => {};

const createMovieController = async (req, res, next) => {};
const updateMovieController = async (req, res, next) => {};
const deleteMovieController = async (req, res, next) => {};

module.exports = {
  getAllMoviesController,
  getMovieByIdController,
  getMovieByGenreController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
};
