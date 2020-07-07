var dataStrings = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
];
var charCaseString = "this is. a string to be. capitalized. into statement case.";
// 1. Convert a string in Statement Case (First character after . must be in upper case)
console.log("charCaseString: " + charCaseString);
charCaseString = charCaseString.replace(/^\w|(\.(\s)*\w)*/gmi, function (s) { return s.toUpperCase(); });
console.log("charCaseString after update: " + charCaseString);
// 2. Print number of words in the string (string in between two blank spaces)
for (var _i = 0, dataStrings_1 = dataStrings; _i < dataStrings_1.length; _i++) {
    var value_1 = dataStrings_1[_i];
    var totalWords = value_1.split(" ");
    console.log("Number of words in the string are: " + totalWords.length);
}
// 3. List all strings having character 'a' in it. (Hint: Use 'contains()' method)
for (var _a = 0, dataStrings_2 = dataStrings; _a < dataStrings_2.length; _a++) {
    var stringValue = dataStrings_2[_a];
    if (stringValue.includes(' a ')) { // Can be modified to 'a' or any other character
        console.log(stringValue);
    }
}
// 4. Print number of matching Words in string. e.g. the word 'the' occurs 10 times.
for (var _b = 0, dataStrings_3 = dataStrings; _b < dataStrings_3.length; _b++) {
    var stringValue = dataStrings_3[_b];
    console.log("-------------------------------------------------------------");
    console.log("Current string: " + stringValue);
    var wordMap = new Map();
    var words = stringValue.split(" ");
    for (var _c = 0, words_1 = words; _c < words_1.length; _c++) {
        var word = words_1[_c];
        word = word.replace(/[^A-z ]/gm, "");
        word = word.toLowerCase();
        if (wordMap.has(word)) {
            var value = wordMap.get(word) ? wordMap.get(word) : 0;
            value = value + 1;
            wordMap.set(word, value);
        }
        else {
            wordMap.set(word, 1);
        }
    }
    wordMap.forEach(function (count, word) {
        console.log("The word " + word + " occurs " + count + " times.\n");
    });
    console.log("-------------------------------------------------------------");
}
// // 4'.  Print number of matching Words in string. e.g. the word 'the' occurs 10 times. (selecting the matching word)
var wordToMatch = "the"; // replace this with word to match
for (var _d = 0, dataStrings_4 = dataStrings; _d < dataStrings_4.length; _d++) {
    var stringValue = dataStrings_4[_d];
    console.log("-------------------------------------------------------------");
    console.log("Current string: " + stringValue);
    var words = stringValue.split(" ");
    var occurrence = 0;
    for (var _e = 0, words_2 = words; _e < words_2.length; _e++) {
        var word = words_2[_e];
        word = word.replace(/[^A-z ]/gm, ""); // removing special characters including fullstops and apostrophes
        word = word.toLowerCase(); // ignore case when matching
        if (word === wordToMatch) {
            occurrence++;
        }
    }
    console.log("The word '" + wordToMatch + "' occurs " + occurrence + " times.\n");
    console.log("-------------------------------------------------------------");
}
