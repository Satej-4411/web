const dictionary = {
    Apple: "A sweet fruit that grows on trees.",
    Ant: "A small hardworking insect.",
    Ball: "A round object used in games.",
    Banana: "A long curved fruit with yellow skin.",
    Cat: "A small domesticated animal.",
    Car: "A vehicle used for transportation.",
    Dog: "A loyal domesticated animal.",
    Elephant: "A large mammal with a trunk.",
    Fish: "An aquatic animal.",
    Goat: "A farm animal known for milk.",
    House: "A building for living.",
    Ice: "Frozen water.",
    Jungle: "A dense forest.",
    Kite: "A toy flown in the wind.",
    Lion: "A wild animal known as 'The king of the jungle.'",
    Monkey: "An animal from which humans developed.",
    Nest: "A bird's home.",
    Orange: "A citrus fruit.",
    Pen: "An instrument for writing.",
    Queen: "A female ruler.",
    Rose: "A type of flower.",
    Sun: "The star at the center of our solar system.",
    Tiger: "A wild animal from cat family.",
    Umbrella: "Used to protect from rain.",
    Van: "A type of vehicle.",
    Wolf: "A wild animal related to dogs.",
    Xylophone: "A musical instrument.",
    Yawk: "A long-haired animal.",
    Zebra: "An animal with black and white stripes."
};

const wordContainer = document.getElementById("wordContainer");
const alphabetDiv = document.getElementById("alphabetButtons");
const searchInput = document.getElementById("searchBar");

function displayWords(wordsArray) {
    wordContainer.innerHTML = "";

    if (wordsArray.length === 0) {
        wordContainer.innerHTML = "<p>No words found.</p>";
        return;
    }

    wordsArray.forEach(word => {
        let card = document.createElement("div");
        card.className = "word-card";
        card.innerHTML = `<h3>${word}</h3><p>${dictionary[word]}</p>`;
        wordContainer.appendChild(card);
    });
}

function searchWord() {
    let value = searchInput.value.toLowerCase();
    let filtered = Object.keys(dictionary)
        .filter(word => word.toLowerCase().includes(value))
        .sort();
    displayWords(filtered);
}

function filterByLetter(letter) {
    searchInput.value = "";
    let filtered = Object.keys(dictionary)
        .filter(word => word.startsWith(letter))
        .sort();
    displayWords(filtered);
}

searchInput.addEventListener("input", searchWord);

for(let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    let btn = document.createElement("button");
    btn.innerText = letter;
    btn.onclick = () => filterByLetter(letter);
    alphabetDiv.appendChild(btn);
}

displayWords(Object.keys(dictionary).sort());