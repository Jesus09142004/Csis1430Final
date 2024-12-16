/* javacript includes:
-declariations
-commands
-questions
-fucntions
-controls
*/

var name = prompt("What is your name?");
var age = prompt("How old are you?");
var month = prompt("What month were you born?");
var birthstone;
var season;

// make month lowercase to simplify if statements
month = month.toLowerCase();

if (month == "january") {
    birthstone = "Garnet";
} else if (month == "february") {
    birthstone = "Amethyst";
} else if (month == "march") {
    birthstone = "Aquamarine";
} else if (month == "april") {
    birthstone = "Diamond";
} else if (month == "may") {
    birthstone = "Emerald";
} else if (month == "june") {
    birthstone = "Alexandrite";
} else if (month == "july") {
    birthstone = "Ruby";
} else if (month == "august") {
    birthstone = "Peridot";
} else if (month == "september") {
    birthstone = "Sapphire";
} else if (month == "october") {
    birthstone = "Tourmaline";
} else if (month == "november") {
    birthstone = "Citrine";
} else if (month == "december") {
    birthstone = "Blue Topaz";
}

// Determine season
if (month == "january" || month == "february" || month == "december") {
    season = "Winter";
} else if (month == "march" || month == "april" || month == "may") {
    season = "Spring";
} else if (month == "june" || month == "july" || month == "august") {
    season = "Summer";
} else if (month == "september" || month == "october" || month == "november") {
    season = "Fall";
}

// Final output
alert("Happy Birthday " + name + "!");
alert("Howdy " + name + ". You are " + age + " years old, and you were born in " + month + ", which is in the " + season + ", and your birthstone is a " + birthstone + ".");
