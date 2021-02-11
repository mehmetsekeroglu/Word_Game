function setDragStart() {
document.addEventListener("drag", (e) => {
    if (e.target.className === "drag-item") {
        e.dataTransfer.setData("Text", e.target.id)
        dragging = e.target.id
    }
});
}

function setDragOver() {
document.addEventListener("dragover", (e) => {
    if (e.target.className === "drag-item") {
        e.preventDefault();
        draggedOver = e.target.id
    }
}) 
}

function setDrop() {
    document.addEventListener("drop", (e) => {
    if (e.target.className === "drag-item") {
        e.preventDefault();
        dropped();
    }
})
}


let dropped = () => {
    let indexDragging = randomized.indexOf(dragging)
    let indexDragOver = randomized.indexOf(draggedOver)
    randomized.splice(indexDragging, 1)
    randomized.splice(indexDragOver, 0, dragging)
    createUI(randomized)
}
