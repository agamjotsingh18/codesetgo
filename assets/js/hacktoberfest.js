var loader = document.getElementById("preloader");
  
function myFunction() {
  preloader.style.display = "none";
} 
const repodata = [
  {
    heading: "Poll it up",
    description:
      "Teachers, members of the government, and even concerned citizens can launch polls. Or, anyone can create polls just for fun!.",
    link: "https://github.com/agamjotsingh18/pollitup",
  },
  {
    heading: "Nodejs.dev",
    description:
      "A new Node.js resource built using Gatsby.js with React.js, TypeScript, and Remark. ",
    link: "https://github.com/nodejs/nodejs.dev",
  },
  {
    heading: "SnoopForm",
    description:
      "With snoopForms you can build complex multi-page forms in minutes using either our built-in No Code Builder or our React library.",
    link: "https://github.com/formbricks/snoopforms",
  },
  {
    heading: "Freecodecamp",
    description:
      "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free. ",
    link: "https://github.com/freeCodeCamp/freeCodeCamp",
  },
  {
    heading: "defaang",
    description:
      "A website that will curate recently-asked interview questions from FAANG+ to help people practice & prep! ",
    link: "https://github.com/ykdojo/defaang",
  },
  {
    heading: "Linkfree",
    description:
      "LinkFree connects audiences to all of your content with just one link. It is an open-source alternative to Linktree implemented in JavaScript.",
    link: "https://github.com/EddieHubCommunity/LinkFree",
  },
  {
    heading: "OpenTogetherTube",
    description:
      "Watch videos with your friends. The spiritual successor to TogetherTube, preserving the spirit of it's simple to use interface, while improving it's look, feel, and reliability. ",
    link: "https://github.com/dyc3/opentogethertube",
  },
]

const cardsContainer = document.querySelector(".cards-container")

let allCards

allCards = repodata.map(
  (card) =>
    `<div class="card  m-lg-3 ">
          <h2 class="card-heading">${card.heading}</h2>
          <p class="card-description ">
            ${card.description}
          </p>
          <a href="${card.link}" class="view-btn " rel="noreferrer" target="_blank">View Repository</a>
        </div>`
) 

cardsContainer.innerHTML = allCards.join("")
