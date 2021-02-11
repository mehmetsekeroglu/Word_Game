/**
 * Sürüklenecek elemana ilk kez tiklandiginda elemanin IDsini alir ve degiskene atar
 */
function setDragStart() {
document.addEventListener("drag", (e) => {
    if (e.target.className === "drag-item") {
        e.dataTransfer.setData("Text", e.target.id)
        dragging = e.target.id
    }
});
}
/**
 * Sürüklenenen elemanin birakilacagi alanda bulunan elemanin IDsini alir ve degiskene atar 
 */
function setDragOver() {
document.addEventListener("dragover", (e) => {
    if (e.target.className === "drag-item") {
        e.preventDefault();
        draggedOver = e.target.id
    }
}) 
}
/**
 * drop fonksiyonunun tetiklenmesini saglar
 */
function setDrop() {
    document.addEventListener("drop", (e) => {
    if (e.target.className === "drag-item") {
        e.preventDefault();
        dropped();
    }
})
}

/**
 * birakilan hecenin birakildigi bölgeye girmesini, birakilan bölgedeki hecenin ise kaydirilmasini saglar
 */
let dropped = () => {
    let indexDragging = mixSylbList.indexOf(dragging)
    let indexDragOver = mixSylbList.indexOf(draggedOver)
    mixSylbList.splice(indexDragging, 1)
    mixSylbList.splice(indexDragOver, 0 , dragging)
    createUI(mixSylbList)
}

