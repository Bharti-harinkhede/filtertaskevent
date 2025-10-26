const flower = document.getElementById("flower");
const alldivs = [...document.querySelectorAll(".all")]

const onBgChange = (eve) =>{
let classClr = eve.target.value;
console.log(classClr);


alldivs.forEach(box => box.classList.add("d-none"));

let selectBox = [...document.querySelectorAll(`.${classClr}`)];
selectBox.forEach(div=> div.classList.remove("d-none"))

}

flower.addEventListener("change", onBgChange);

