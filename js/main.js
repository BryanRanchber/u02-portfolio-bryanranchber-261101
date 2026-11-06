async function loadCV() {
const response = await fetch("../data/cv.json")
const data = await response.json()
const experienceList = document.getElementById("experience-list")

data.experience.forEach((job) => {
const article = document.createElement("article")
const title = document.createElement("h3")
const entryHeader = document.createElement("div")
const status = document.createElement("span")
const detailsList = document.createElement("ul")
const detailsRow = document.createElement("li")
const detailsLeft = document.createElement("div")
const organization = document.createElement("span")
const location = document.createElement("span")
const dates = document.createElement("span")
const buildingIcon = document.createElement("img")
const locationIcon = document.createElement("img")
const calendarIcon = document.createElement("img")

title.textContent = job.title
status.textContent = job.status
organization.textContent = job.organization
location.textContent = job.location
dates.textContent = job.dates

buildingIcon.src = "../images/icons/building.svg"
locationIcon.src = "../images/icons/location.svg"
calendarIcon.src = "../images/icons/calendar.svg"
buildingIcon.alt = ""
locationIcon.alt = ""
calendarIcon.alt = ""

title.classList.add("entry-title")
entryHeader.classList.add("entry-header")
status.classList.add("type")
detailsRow.classList.add("details-row")
detailsLeft.classList.add("details-left")
organization.classList.add("organization")
location.classList.add("location")
dates.classList.add("date")

article.append(entryHeader, detailsList)
entryHeader.append(title, status)
detailsList.append(detailsRow)
detailsRow.append(detailsLeft, dates)
detailsLeft.append(organization, location)

organization.prepend(buildingIcon)
location.prepend(locationIcon)
dates.prepend(calendarIcon)

console.log(article)

experienceList.append(article)
});

console.log(experienceList);
console.log(data);
}

loadCV();