/**
 * Hece arrayini karistirir
 * @param {*} pSyllableList 
 */
function shuffleSyllableList(pSyllableList) {
    correctWord = pSyllableList.slice()
    mixSylbList = pSyllableList.sort(() => Math.random() - Math.random())
        createUI(mixSylbList)   
}
/**
 * UI'i olusturur
 * @param {*} pMixSylbList 
 */
function createUI(pMixSylbList) {
    dragList.innerHTML = addSyllables(pMixSylbList);
    buttons.innerHTML = createButtons();
}
/**
 * Bir sonraki hece grubunun kelime listesinden rastgele secilip getirilmesini saglar
 */
document.addEventListener("click", (e) => {
    if (e.target.id === "next-word") {
        dragList.style.backgroundColor = "white";
        let index = Math.floor(Math.random() * words.length)
        let word = words[index].syllables
           shuffleSyllableList(word); 
    }
});

/**
 * Hece grubunun dogru siralanip siralanmadigini denetler
 */
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