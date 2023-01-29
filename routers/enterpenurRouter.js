const router = require("express").Router();
let data = require("../data/data");

//get methodu
router.get("/", (req, res) => {
  //   res.json(data);
  res.status(200).json(data);
});

//POST enterpenur
let next_id = 4;

router.post("/", (req, res) => {
  // console.log(req.body);
  let newenterpenur = req.body;
  newenterpenur.id = next_id;
  next_id++;
  data.push(newenterpenur);
  res.status(201).json(newenterpenur);
});

//deleted enterpenur
router.delete("/:id", (req, res) => {
  let deletedenterpenurid = parseInt(req.params.id);
  let deletedenterepnur = data.find(
    (enterpenur) => enterpenur.id === deletedenterpenurid
  );
  console.log(deletedenterepnur);
  if (deletedenterepnur) {
    data = data.filter((updatedData) => updatedData !== deletedenterepnur);
    res.status(204).end();
  } else {
    res.status(404).json({ errorMesaage: "hgf" });
  }
});

//detail wiev
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const enterpenurfilter = data.find(
    (enterpenur) => enterpenur.id === parseInt(id)
  );
  if (enterpenurfilter) {
    res.status(200).json(enterpenurfilter);
  } else {
    res.status(404).send("aradiginiz irisimci bulunamadi...");
  }
});

module.exports = router