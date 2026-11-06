async function loadCV() {
const response = await fetch("../data/cv.json")
const data = await response.json()
const experienceList = document.getElementById("experience-list")

data.experience.forEach((job) => {
const article = document.createElement("article")
const title = document.createElement("h3")
title.textContent = job.title
title.classList.add("entry-title")

console.log(title)
console.log(article)
});

console.log(experienceList);
console.log(data);
}

loadCV();