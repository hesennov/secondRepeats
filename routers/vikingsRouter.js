const router2 = require("express").Router();
const dataVikings = require("../data/data2");

router2.get("/", (req, res) => {
  res.status(200).json(dataVikings);
});

// /vikings detail viev
router2.get("/:id", (req, res) => {
  const { id } = req.params;
  const filterviking = dataVikings.find((viking) => viking.id === parseInt(id));

  if (filterviking) {
    res.status(200).json(filterviking);
  } else {
    res.status(404).send("siktir+");
  }
});

//delete vikings
router2.delete("/:id", (req, res) => {
  let vikingId = parseInt(req.params.id);
  let deletedvikings = dataVikings.find((del) => del.id === vikingId);
  console.log(deletedvikings);
  if (deletedvikings) {
    dataVikings = dataVikings.filter(
      (updatedData) => updatedData !== deletedvikings
    );
    res.status(204).end();
  } else {
    res.status(404).json({ errorMessage: "siktir" });
  }
});

//post vikings
let nextId = 4;
router2.post("/", (req, res) => {
  let newVikings = req.body;
  newVikings.id = nextId;
  nextId++;
  dataVikings.push(newVikings);
  res.status(201).json(dataVikings);
});
module.exports = router2;
