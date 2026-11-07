async function loadProjects() {
  const response = await fetch("https://api.github.com/users/BryanRanchber/repos")
  const data = await response.json()
  const projectsList = document.getElementById("projects-list")

  data.forEach((repo) => {
    const article = document.createElement("article")
    const title = document.createElement("h2")
    const cardDetails = document.createElement("div")
    const description = document.createElement("p")
    const projectLinks = document.createElement("div")
    const githubLink = document.createElement("a")
    const githubIcon = document.createElement("img")

    githubLink.href = repo.html_url

    title.textContent = repo.name;
    description.textContent = repo.description || "No description available."
    githubLink.textContent = "View Code"

    githubIcon.src = "../images/icons/github.svg"
    githubIcon.alt = ""

    article.classList.add("project-card")
    cardDetails.classList.add("card-details")
    description.classList.add("project-description")
    projectLinks.classList.add("project-links")

    article.append(cardDetails)
    cardDetails.append(title, description, projectLinks)
    projectLinks.append(githubLink)

    githubLink.prepend(githubIcon)
    projectsList.append(article)

    console.log(title)
  })

  console.log(projectsList)
  console.log(data)
}

loadProjects();