const parent = document.getElementById("elem li");

function clear(elem) {
  while(elem.firstElementChild) {
     elem.firstElementChild.remove();
  }
}

clear(elem);

//The element.firstElementChild will return the first child of the 
// parent. We will remove the 
// firstElementChild of the parent as long as the parent has a child. 