// Predefined random words for each part of speech
var nouns = ["cat", "dog", "mountain", "river", "house"];
var pluralNouns = ["birds", "trees", "cars", "friends", "books"];
var pastTenseVerbs = ["jumped", "ran", "climbed", "danced", "laughed"];
var presentTenseVerbs = ["jumps", "runs", "climbs", "dances", "laughs"];
var adjectives = ["happy", "bright", "colorful", "rocky", "tiny"];


function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}


function fillFormWithRandomWords() {
    document.getElementById("noun1").value = getRandomWord(nouns);
    document.getElementById("noun2").value = getRandomWord(pluralNouns);
    document.getElementById("verb1").value = getRandomWord(pastTenseVerbs);
    document.getElementById("verb2").value = getRandomWord(presentTenseVerbs);
    document.getElementById("adjective1").value = getRandomWord(adjectives);
    document.getElementById("adjective2").value = getRandomWord(adjectives);
}


function generateStory() {
    var noun1 = document.getElementById("noun1").value.trim();
    var noun2 = document.getElementById("noun2").value.trim();
    var verb1 = document.getElementById("verb1").value.trim();
    var verb2 = document.getElementById("verb2").value.trim();
    var adjective1 = document.getElementById("adjective1").value.trim();
    var adjective2 = document.getElementById("adjective2").value.trim();

    if (!noun1 || !noun2 || !verb1 || !verb2 || !adjective1 || !adjective2) {
        alert("Please fill in all fields!");
        return false;
    }

     var story = "One million years in the future there's a very " + adjective1 + " " + noun1 +
        " that really wanted to make a lot of money, but they were " + adjective2 +
        " so instead of working hard to make money they came up with a 'get rich quick' scheme. " +
        "They went to their rich " + noun2 + " and told them that for one million dollars they would " + verb1 + ". " +
        "This seemed too good to be true, but " + noun2 + " went along with it. " + noun1 +
        " came back to gloat about how they scammed " + noun2 + ". As a result, " + noun2 +
        " " + verb2 + ", causing " + noun1 + " to turn into a frog.";

    document.getElementById("output").textContent = story;

    return false;
}
