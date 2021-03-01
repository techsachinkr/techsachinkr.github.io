//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Scientist",
    cardImage: "assets/images/experience-page/lexisnexis-logo.svg",
    place: "LexisNexis",
    time: "(June, 2018 - present)",
    desp: "<li> Worked on development of Machine learning and Deep learning models for legal domain Question Answering,which was rolled out as feature in our company's new product,Lexis+ </li> <li> Developed sequence tagging models for identifying search queries intent and target terms in Lexis Answers feature of LexisAdvance product.</li>",
  },
  {
    title: "Data Scientist Intern",
    cardImage: "assets/images/experience-page/nsf.png",
    place: "NSF Center for Integrated Pest Management",
    time: "(Mar - Aug, 2018)",
    desp: "<li>Worked on projects for U.S. Department of Agriculture (USDA),APHIS,PPQ</li> <li>Developed machine learning models which helped analyze the pest transmission data</li><li>Worked on approaches for Knowledge representation using knowledge graphs</li>",
  },
  {
    title: "IT Analyst",
    cardImage: "assets/images/experience-page/TCS-logo.jpg",
    place: "TCS",
    time: "(Dec, 2011 - Jul, 2017)",
    desp: "<li>Developed and designed NLP solutions for IVR, IVR’s (Interactive Voice Response) Core code and Speech recognition-based Analytics Solutions for Walgreens Co.</li> <li>Developed Web-based Contact Center Apps using Java/J2EE for Walgreens Co.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

