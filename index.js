const path = require("path");
const express = require("express");
const app = express();

app.use("/static/", express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/flatpickr", (req, res) => {
    res.render("flatpickr.html");
});

app.get("/fullcalendar", (req, res) => {
    res.render("fullcalendar.html");
});

app.listen("8080", () => {
    console.log("app running at port 5000...");
});
