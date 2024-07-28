const express = require("express");
const bodyparser = require("body-parser");
const blogEntry = require(__dirname + "/entries.js");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

let EntryPreview = blogEntry.entriesPreview();
let EntryFull = blogEntry.entriesFull();

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.get("/", function (req, res) {
  EntryPreview = blogEntry.entriesPreview();
  for (var i = 0; i < EntryPreview.length; i++) {
    EntryPreview[i].entry = EntryPreview[i].entry.substring(0, 100);
  }

  res.render("homepage", {
    newEntry: EntryPreview,
  });
});

app.post("/entry", function (req, res) {
  EntryFull = blogEntry.entriesFull();
  let id = req.body.entryI - 1;

  res.render("entries", {
    newEntryF: EntryFull,
    id: id,
  });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  let Entrysize = EntryFull.length - 1;
  let id = Number.parseInt(EntryFull[Entrysize].id) + 1;
  let newEntry = {
    id: id.toString(),
    title: req.body.entryTitle,
    entry: req.body.entryPost,
  };

  blogEntry.pushEntry(newEntry);
  res.redirect("/");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});
