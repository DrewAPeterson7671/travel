
function Visited() {
  this.places = []
}

Visited.prototype.addPlace = function(place) {
  this.places.push(place);
}

function Place(location,landmark,timeOfYear,favoriteThing) {
  this.location = location,
  this.landmark = landmark,
  this.timeOfYear = timeOfYear,
  this.favoriteThing = favoriteThing
}

Place.prototype.stateMent = function() {
  return "In " + this.location + ", I saw " + this.landmark + " during " + this.timeOfYear + ". I enjoyed " + this.favoriteThing + ".";
}
var visitMe = new Visited();
var newYork =  new Place("New York","Statue of Liberty","Fall","taxi ride weirdness");
var sanFran = new Place("San Francisco", "Golden Gate Bridge", "Summer", "the parks");
var jamaica = new Place("Jamaica", "beach", "Winter", "lots of Mama Juana");
var lasVegas = new Place("Las Vegas", "Belagio", "Spring", "people watching");
visitMe.addPlace(newYork);
visitMe.addPlace(sanFran);
visitMe.addPlace(jamaica);
visitMe.addPlace(lasVegas);


$(document).ready(function(){




  $("img#empire").click(function(event){
    $("#ny").text(newYork.stateMent());
  });
  $("img#sanFa").click(function(event){
    $("#sanFran").text(sanFran.stateMent());
  });
  $("img#jamaic").click(function(event){
    $("#jamaica").text(jamaica.stateMent());
  });
  $("img#lasVega").click(function(event){
    $("#lasVegas").text(lasVegas.stateMent());
    event.preventDefault();
  });


});
