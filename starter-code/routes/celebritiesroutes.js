const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrityView/celebrities", { celebrities });
    })
    .catch(e => next(e));
});

router.get("/detail/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    //.populate('tiendaID')
    .then(celebrity => {
      res.render("celebrityView/detail", celebrity);
    })
    .catch(err => next(err));
});

router.get("/new", (req, res, next) => {
  const action = "/celebrities/new";
  res.render("celebrityView/form", { action });
});

router.post("/new", (req, res) => {
  Celebrity.create(req.body)
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      console.log(error);
      res.render("celebrityView/form", { celebrity: req.body, error });
    });
});

router.get("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
    .then(celebrity => {
      res.redirect("/celebrities");
    })
    .catch(e => next(e));
});

module.exports = router;
