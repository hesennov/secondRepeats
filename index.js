const express = require("express");
let data = require("./data/data");
let dataVikings = require("./data/data2");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hesennov buissnes solutions");
});

//get methodu
server.get("/enterpenur", (req, res) => {
  //   res.json(data);
  res.status(200).json(data);
});

//POST enterpenur
let next_id = 4;

server.post("/enterpenur", (req, res) => {
  // console.log(req.body);
  let newenterpenur = req.body;
  newenterpenur.id = next_id;
  next_id++;
  data.push(newenterpenur);
  res.status(201).json(newenterpenur);
});

//deleted enterpenur
server.delete("/enterpenur/:id", (req, res) => {
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
server.get("/enterpenur/:id", (req, res) => {
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

server.get("/vikings", (req, res) => {
  res.status(200).json(dataVikings);
});

// /vikings detail viev
server.get("/vikings/:id", (req, res) => {
  const { id } = req.params;
  const filterviking = dataVikings.find((viking) => viking.id === parseInt(id));

  if (filterviking) {
    res.status(200).json(filterviking);
  } else {
    res.status(404).send("siktir+");
  }
});

//delete vikings
server.delete("/vikings/:id", (req, res) => {
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
server.post("/vikings", (req, res) => {
  let newVikings = req.body;
  newVikings.id = next_id;
  nextId++;
  dataVikings.push(newVikings);
  res.status(201).json(dataVikings);
});

// put methodu

// server.put("/enterpenur/:id", (req, res) => {
//   const putId = parseInt(req.params.id);
//   const enterpenurValue = req.body;
//   const findenterpenur = data.find((enterpenur) => enterpenur.id === putId);
//   if (findenterpenur) {
//     findenterpenur.name = enterpenurValue.name;
//     findenterpenur.surname = enterpenurValue.surname;
//     findenterpenur.id = enterpenurValue.id;
//     console.log(findenterpenur.surname);

//     res.status(200);
//   } else {
//     res.status(404).send(errorMessage, "There is no actor for update");
//   }
// });

server.listen(5000, () => {
  console.log("http://localhost:5000 Hesennov buissnes solutions");
});
