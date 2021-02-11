const dragableItems = document.querySelectorAll(".drag-item");
const dragList = document.querySelector("#drag-list");
const buttons = document.querySelector("#buttons");
const container = document.querySelector("#container");


let correctWord, mixSylbList, dragging, draggedOver;

let words = [{
    name: "BILGISAYAR",
    syllables: ["BIL", "GI", "SA", "YAR"]
  },
  {
    name: "DEFTER",
    syllables: ["DEF", "TER"]
  },
  {
    name: "KALEM",
    syllables: ["KA", "LEM"]
  },
  {
    name: "SILGI",
    syllables: ["SIL", "GI"]
  },
  {
    name: "TELEFON",
    syllables: ["TE", "LE", "FON"]
  },
  {
    name: "OKUL",
    syllables: ["O", "KUL"]
  },
  {
    name: "SINIF",
    syllables: ["SI", "NIF"]
  },
  {
    name: "OGRETMEN",
    syllables: ["OG", "RET", "MEN"]
  },
  {
    name: "OGRENCI",
    syllables: ["OG", "REN", "CI"]
  },
  {
    name: "MUDUR",
    syllables: ["MU", "DUR"]
  }
];



shuffleSyllableList(words[0].syllables);
setDragStart();
setDragOver();
setDrop();
