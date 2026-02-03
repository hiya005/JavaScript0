const task2 = document.getElementsByClassName
    ("important");
console.log(task2)

for (let i = 0; i < task2.length; i++) {
    task2[i].style.color = "pink"
    task2[i].style.fontSize = "40px"
}
console.log(task2.length)

const task = document.getElementsByClassName
    ("new");
console.log(task)

for (let i = 0; i < paragraphs.length; i++) {
    if (i % 2 === 1) { // even position
        paragraphs[i].style.color = "pink";
        paragraphs[i].style.fontSize = "40px";
    }
}
console.log(task2.length)