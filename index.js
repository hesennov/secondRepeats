const express = require("express");
const enterpenurRouter = require("./routers/enterpenurRouter");
const vikingsRouter = require("./routers/vikingsRouter");
const server = express();
server.use(express.json());
server.use("/enterpenur", enterpenurRouter);
server.use("/vikings", vikingsRouter);

server.get("/", (req, res) => {
  res.send("Hesennov buissnes solutions");
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
