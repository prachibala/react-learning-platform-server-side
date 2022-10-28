const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;
const allCourses = require("./Data/courses.json");
const categories = require("./Data/categories.json");

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/all-courses", (req, res) => {
	res.send(allCourses);
});

app.get("/get-categories", (req, res) => {
	res.send(categories);
});

app.get("/course/:id", (req, res) => {
	const id = req.params.id;
	const getSingleItem = allCourses?.find((p) => p.id == id);
	res.send(getSingleItem);
});

app.get("/get-category/:id", (req, res) => {
	const id = req.params.id;
	const getSingleItem = categories?.find((p) => p.id == id);
	res.send(getSingleItem);
});

app.get("/get-courses-by-categories/:id", (req, res) => {
	const catId = req.params.id;
	const getCategory = allCourses?.filter((p) => p.categoryId == catId);
	res.send(getCategory);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

// Export the Express API
module.exports = app;
