// $("#main").append("Andreas Lautenschläger");

var name = "Andreas Lautenschläger";
var role = "Web Developer";
// var awesomeThoughts = "I am " + name + " and I am awesome!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("awesome","fun");
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);