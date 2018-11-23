const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movieView/movies", {
        movies
      });
    })
    .catch(e => next(e));
});

router.get("/detail/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    //.populate('tiendaID')
    .then(movie => {
      res.render("movieView/detail", movie);
    })
    .catch(err => next(err));
});

router.get("/new", (req, res, next) => {
  const action = "/movies/new";
  res.render("movieView/form", { action });
});

router.post("/new", (req, res) => {
  Movie.create(req.body)
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => {
      console.log(error);
      res.render("movieView/form", { movie: req.body, error });
    });
});

router.get("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(e => next(e));
});

module.exports = router;
