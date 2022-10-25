const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
  
const Port = process.env.Port || 5000;

// const learn = require("./Data/learns.json");

app.get("/", (req, res) => {
    res.send("Now server is running");
});

// app.get("/learn", (req, res) => {
//     res.send(learn);
// });

// app.get("/learn/:id", (req, res) => {
//     const id = req.params.id;
//     const getSingleItem = learn?.find((p) => p.id == id);
//     if (!getSingleItem) {
//         res.send("data khuje pacchi naaa to vai");
//     }
//     res.send(getSingleItem);
// });

// app.get("/category/:name", (req, res) => {
//     const name = req.params.name;
//     const getLearn = learn?.filter((p) => p.category == name);
//     res.send(getLearn);
// });

app.listen(Port, () => {
    console.log("server is running", Port);
});
