// $("#main").append("Andreas Lautenschläger");

var name = "Andreas Lautenschläger";
var role = "Web Developer";
var email = "andreas.lschlaeger@gmail.com";
var pictureURL = "images/me.jpg";
var welcomeMsg = "Hi! Welcome to my website!";
var skills = ["C++", "JavaScript"];

var bio = {
	"name" : name,
	"role" : role,
	"email" : email,
	"pictureURL" : pictureURL,
	"welcomeMsg" : welcomeMsg,
	"skills" : skills}
// var awesomeThoughts = "I am " + name + " and I am awesome!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("awesome","fun");
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.email)
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedEmail);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkills);