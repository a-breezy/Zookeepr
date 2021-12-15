const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON Data
app.use(express.json());
// middleware that provides path to a location in out application.
// instructs serve to make these files static resources
app.use(express.static("public"));
// calls routes for api and html
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// const { animals } = require("./data/animals");

app.listen(PORT, () => {
	console.log(`API serve now on port ${PORT}!`);
});
