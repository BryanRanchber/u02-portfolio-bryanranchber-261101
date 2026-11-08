async function loadProjects() {
  const projectsList = document.getElementById("projects-list");
  projectsList.textContent = "Loading projects...";

  try {
    const response = await fetch(
      "https://api.github.com/users/BryanRanchber/repos",
    );

    if (!response.ok) {
      projectsList.textContent =
        "Unable to load projects. Please try again later.";
      return;
    }
    const data = await response.json();

    try {
      const groupResponse = await fetch(
        "https://api.github.com/repos/yoneshussain/u03-quiz-app",
      );

      if (groupResponse.ok) {
        const groupProject = await groupResponse.json();
        data.push(groupProject);
      }
    } catch (error) {
      console.warn("Unable to load U03 group project:", error);
    }

    if (data.length === 0) {
      projectsList.textContent = "No projects available.";
      return;
    }

    projectsList.textContent = "";

    const projectImages = {
      "u01-porfolio-bryanranchber-260929":
        "../images/project-img/project-1.png",
      "u02-portfolio-bryanranchber-261101":
        "../images/project-img/project-2.png",
      "u03-quiz-app": "../images/project-img/project-3.png",
    };

    for (const repo of data) {
      const article = document.createElement("article");
      const title = document.createElement("h2");
      const cardDetails = document.createElement("div");
      const description = document.createElement("p");
      const projectLinks = document.createElement("div");
      const githubLink = document.createElement("a");
      const githubIcon = document.createElement("img");
      const techStack = document.createElement("p");
      const projectImage = document.createElement("img");

      let languageNames = ["Not available"];
      try {
        const languageResponse = await fetch(repo.languages_url);

        if (languageResponse.ok) {
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

      projectImage.src =
        projectImages[repo.name] || "../images/project-img/project-4.png";
      projectImage.alt = `Preview of ${repo.name}`;

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

      article.append(projectImage, cardDetails);
      cardDetails.append(title, description, techStack, projectLinks);
      projectLinks.append(githubLink);

      githubLink.prepend(githubIcon);
      projectsList.append(article);
    }
  } catch (error) {
    projectsList.textContent =
      "Unable to load projects. Please try again later.";
  }
}

loadProjects();
