const links = document.getElementById("text")
const navBtn = document.getElementById('hider')

navBtn.addEventListener('click', handleClick, false);

function handleClick() {
    if (links.style.display === "none") {
        links.style.display = "block";
      } else {
        links.style.display = "none";
      }

      setTimeout(() => {
         
        navBtn.style.visibility = 'hidden';
      }, 3000);
      


}

