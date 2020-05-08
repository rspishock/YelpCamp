var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

var campgrounds = [
	{name: "Salmon Creek", image: "https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547941762c7ed1934a_340.jpg"},
	{name: "Granite Hill", image: "https://pixabay.com/get/57e1dd4a4350a514f1dc84609620367d1c3ed9e04e5074417d2c78d19249c2_340.jpg"},
	{name: "Mountain Goat's Rest", image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e5074417d2c78d19249c2_340.jpg"}
];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect("/campgrounds");
});

// form to add new campground
app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});


// USE THIS FOR GOORM
app.listen(3000, () => {
	console.log("The YelpCamp server has started.");
});