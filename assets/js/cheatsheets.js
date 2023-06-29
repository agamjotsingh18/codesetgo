const repodata = [
    {
      image: "assets/img/programming-language-images/c-logo.png",
      heading: "C",
      description: "C programming language cheatsheet",
      link: "/assets/cheatsheets/C.pdf",
    },
    {
      image: "assets/img/programming-language-images/java-logo.png",
      heading: "Java",
      description: "Java programming language cheatsheet",
      link: "https://introcs.cs.princeton.edu/java/11cheatsheet/",
    },
    {
        image: "assets/img/programming-language-images/html-logo.png",
        heading: "HTML",
        description: "HTML cheatsheet",
        link: "https://htmlcheatsheet.com/",
      },
      {
        image: "assets/img/programming-language-images/css-logo.png",
        heading: "CSS",
        description: "CSS cheatsheet",
        link: "https://htmlcheatsheet.com/css/",
      },
      {
        image: "assets/img/programming-language-images/javascript-logo.png",
        heading: "JavaScript",
        description: "JavaScript programming language cheatsheet",
        link: "https://htmlcheatsheet.com/js/",
      },
    {
      image: "assets/img/programming-language-images/c++-logo.png",
      heading: "C++",
      description: "C++ programming language cheatsheet",
      link: "./assets/cheatsheets/CPP.pdf",
    },
    {
      image: "assets/img/programming-language-images/python-logo.png",
      heading: "Python",
      description: "Python programming language cheatsheet",
      link: "./assets/cheatsheets/Python.pdf",
    },
  ];
  
  const optionsContainer = document.querySelector(".option-container");
  
  let allOptions;
  
  allOptions = repodata.map(
    (option) =>
      `<div class="option">
       <img class="option-image" 
       src="${option.image}">
        <h1 class="cheatsheet-heading">${option.heading}</h1>
        <p class="option-description">
          ${option.description}
        </p>
        <button class="option-btn" onclick="showCheatsheet('${option.link}')">View</button>
      </div>`
  );
  
  optionsContainer.innerHTML = allOptions.join("");
  
  function showCheatsheet(link) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    const iframeContainer = document.createElement("div");
    iframeContainer.classList.add("iframe-container");
  
    const iframe = document.createElement("iframe");
    iframe.src = link;
    iframe.frameborder = "0";
    iframe.allowfullscreen = true;
    iframe.style.width ="100%";
    iframe.style.height = "95vh";
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
    overlay.appendChild(closeBtn);
    iframeContainer.appendChild(iframe);
    overlay.appendChild(iframeContainer);
    document.body.appendChild(overlay);
  }
  