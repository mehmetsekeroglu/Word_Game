function shuffleSyllableList(pSyllableList) {
    correctWord = pSyllableList.slice()
    mixSylbList = pSyllableList.sort(() => Math.random() - Math.random())
    createUI(mixSylbList)
}

function createUI(pMixSylbList) {
    dragList.innerHTML = addSyllables(pMixSylbList);
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
        if (mixSylbList.join("") === correctWord.join("")) {
            //alert("Dogru");
            dragList.style.backgroundColor = "green";
        } else {
            //alert("Tekrar Deneyiniz");
            dragList.style.backgroundColor = "red";
        }
    }
});