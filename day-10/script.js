// create a new element and set its content
const newParagraph=document.createElement("p")
newParagraph.textContent = "this is dynamically created paragraph"
console.log(newParagraph);

// append the new element to the container
const container = document.getElementById("container")
container.appendChild(newParagraph);

// remove the first paragraph
// const rev = document.querySelector("#container p");
// rev.remove()
document.querySelector("#container p").remove()

// adding image
const image = document.createElement("img");
image.setAttribute("src","https://www.krmangalam.edu.in/wp-content/uploads/2024/02/178bs_Best-Colleges-for-Master-in-Commerce-in-Gurgaon-768x431-1.webp");
image.setAttribute("alt","K.R Mangalam");
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

// date method
let date = new Date()
console. log(date);
setInterval(()=>{
let date = new Date()
console. log(date);
let hour = date.getHours( );
let min=date.getMinutes();
let second= date.getSeconds();
let clock = document.getElementById
("digi-clock");
clock.textContent='${hour} : ${min} : ${second}'
},1000)