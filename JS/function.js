function shuffleSyllableList(pSyllableList) {
    correctWord = pSyllableList.slice()
    randomized = pSyllableList.sort(() => Math.random() - Math.random())
    createUI(randomized)
}

function createUI(pRandomized) {
    dragList.innerHTML = addSyllables(pRandomized);
    buttons.innerHTML = createButtons();
}

document.addEventListener("click", (e) => {
    if (e.target.id === "next-word") {
        dragList.style.backgroundColor = "white";
        let index = Math.floor(Math.random() * words.length)
        let word = words[index].syllables
        shuffleSyllableList(word);
    }
});

document.addEventListener("click", (e) => {
    if (e.target.id === "check") {
        if (randomized.join("") === correctWord.join("")) {
            //alert("Dogru");
            dragList.style.backgroundColor = "green";
        } else {
            //alert("Tekrar Deneyiniz");
            dragList.style.backgroundColor = "red";
        }
    }
});