const title = document.getElementById("title");

title.textContent="New text using getElementById";

console.log(title);
/*-------------------------------------*/
const paragraph = document.querySelector(".paragraph");

paragraph.textContent="New paragraph using querySelector";

paragraph.style.color = "red";

paragraph.classList.add ("active");

console.log(paragraph);