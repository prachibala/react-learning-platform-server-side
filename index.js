const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;
const allCourses = require("./Data/course.json");

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/allCourses", (req, res) => {
    res.send(allCourses);
});
app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = allCourses?.find((p) => p.id == id);
    res.send(getSingleItem);
});
app.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const getCategory = allCourses?.filter((p) => p.category == name);
    res.send(getCategory);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Export the Express API
module.exports = app;
