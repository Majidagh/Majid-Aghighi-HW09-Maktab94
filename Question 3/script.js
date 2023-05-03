const listElm = document.getElementById("list");

let EscapeClick = false;

Escape();

getListInfo();

function getListInfo() {
  do {
    currentContent = prompt("Please enter element on the list: ");

    if (ckeckState(currentContent)) {
      listMake(currentContent);
    }
  } while (ckeckState(currentContent));
}

function listMake(content) {
  let li = document.createElement("li");
  li.textContent = content;
  listElm.appendChild(li);
}

function ckeckState(str) {
  return str != " " && currentContent;
}

function Escape() {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") isClickedESC = true;
  });
}
