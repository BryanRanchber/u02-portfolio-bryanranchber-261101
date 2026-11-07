async function loadProjects() {
  const response = await fetch(
    "https://api.github.com/users/BryanRanchber/repos",
  );
  const data = await response.json();
  const projectsList = document.getElementById("projects-list");

  for (const repo of data) {
    const article = document.createElement("article");
    const title = document.createElement("h2");
    const cardDetails = document.createElement("div");
    const description = document.createElement("p");
    const projectLinks = document.createElement("div");
    const githubLink = document.createElement("a");
    const githubIcon = document.createElement("img");
    const techStack = document.createElement("p");

    let languageNames = ["Not available"];
    try {
      const languageResponse = await fetch(repo.languages_url);
      if (!languageResponse.ok) {
      } else {
        const languages = await languageResponse.json();
        languageNames = Object.keys(languages);
      }
    } catch (error) {}

    githubLink.href = repo.html_url;
    if (repo.homepage) {
      const liveLink = document.createElement("a");
      const liveIcon = document.createElement("img");

      liveIcon.src = "../images/icons/link-45deg.svg";
      liveIcon.alt = "";

      liveLink.href = repo.homepage;
      liveLink.textContent = "Live preview";
      projectLinks.append(liveLink);
      liveLink.prepend(liveIcon);
    }

    title.textContent = repo.name;
    description.textContent = repo.description || "No description available.";
    githubLink.textContent = "View Code";
    techStack.textContent =
      "Tech Stack: " + (languageNames.join(", ") || "Not specified");

    githubIcon.src = "../images/icons/github.svg";
    githubIcon.alt = "";

    article.classList.add("project-card");
    cardDetails.classList.add("card-details");
    description.classList.add("project-description");
    projectLinks.classList.add("project-links");
    techStack.classList.add("project-tech");

    article.append(cardDetails);
    cardDetails.append(title, description, techStack, projectLinks);
    projectLinks.append(githubLink);

    githubLink.prepend(githubIcon);
    projectsList.append(article);
  }
}

loadProjects();
