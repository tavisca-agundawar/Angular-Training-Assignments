let dataStrings = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
];
let charCaseString = "this is. a string to be. capitalized. into statement case.";

// 1. Convert a string in Statement Case (First character after . must be in upper case)
console.log("charCaseString: " + charCaseString);
charCaseString = charCaseString.replace(/^\w|(\.(\s)*\w)*/gmi, s => s.toUpperCase());
console.log("charCaseString after update: " + charCaseString);

// 2. Print number of words in the string (string in between two blank spaces)
for (const value of dataStrings) {
    let totalWords = value.split(" ");
    console.log(`Number of words in the string are: ${totalWords.length}`);
}

// 3. List all strings having character 'a' in it. (Hint: Use 'contains()' method)
for (let stringValue of dataStrings){
    if(stringValue.includes(' a ')){  // Can be modified to 'a' or any other character
        console.log(stringValue);
    }
}
// 4. Print number of matching Words in string. e.g. the word 'the' occurs 10 times.
for (const stringValue of dataStrings) {
    console.log("-------------------------------------------------------------");
    console.log(`Current string: ${stringValue}`);
    let wordMap = new Map<string,number>();
    let words = stringValue.split(" ");
    for (let word of words) {
        word = word.replace(/[^A-z ]/gm,"");
        word = word.toLowerCase();
        if(wordMap.has(word)){
            var value = wordMap.get(word) ? wordMap.get(word) : 0;
            value = value + 1;
            wordMap.set(word,value);
        }
        else{
            wordMap.set(word,1);
        }
    }
    wordMap.forEach( (count: number, word: string,) => {
        console.log(`The word ${word} occurs ${count} times.\n`);
    })
    console.log("-------------------------------------------------------------");
}

// // 4'.  Print number of matching Words in string. e.g. the word 'the' occurs 10 times. (selecting the matching word)
let wordToMatch = "the"; // replace this with word to match
for (const stringValue of dataStrings){
    console.log("-------------------------------------------------------------");
    console.log(`Current string: ${stringValue}`);
    let words = stringValue.split(" ");
    let occurrence = 0;
    for (let word of words) {
        word = word.replace(/[^A-z ]/gm,""); // removing special characters including fullstops and apostrophes
        word = word.toLowerCase(); // ignore case when matching
        if(word === wordToMatch){
            occurrence++;
        }
    }
    console.log(`The word \'${wordToMatch}\' occurs ${occurrence} times.\n`);
    console.log("-------------------------------------------------------------");
}