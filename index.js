const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.port || 5000;

const courses = require("./data/learns.json");

app.get("/courses", (req, res) => {
    res.send(courses);
});

app.get("/courses/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourses = courses.find(c => c.id === id);
    res.send(selectedCourses);
    console.log(selectedCourses);
});

app.get("/", (req, res) => {
    res.send("news api running");
});

app.listen(port, () => {
    console.log("news serve rn", port);
});