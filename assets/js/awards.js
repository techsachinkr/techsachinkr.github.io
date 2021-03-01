//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: " 2020 LexisNexis Inclusion and diversity hackathon ",
    cardImage: "assets/images/experience-page/lexisnexis-logo.svg",
    place: "1st Place",
    time: "Dec 2020",
    desp: "<li>Won 1st place at 2020 LexisNexis Inclusion and diversity hackathon.</li><li>As part of our winning solution we built an API with integrations in Outlook,Confluence and Teams to identify non-inclusive terms and suggest possible inclusive terms replacements.</li><li>Another great outcome of the hackathon was our 1st prize of $5000 will be going to our team's chosen charity of blackgirlscode.</li> "
  },
  {
    title: "2019 LexisNexis Global Hackathon ",
    cardImage: "assets/images/experience-page/lexisnexis-logo.svg",
    place: "2nd Place",
    time: "Nov 2019",
    desp: "<li>Won 2nd Place at LexisNexis Global Hackathon where presented our hackathon solution front of the LexisNexis Executive team including our CEO Michael Walsh, where we did compete against teams from other geographies.</li><li> Our solution was for improving legal queries search relevance by predicting query intent using an ensemble of deep learning and machine learning models.</li>"
  },
  {
    title: "2019 LexisNexis Query Intent Hackathon ",
    cardImage: "assets/images/experience-page/lexisnexis-logo.svg",
    place: "1st Place",
    time: "Nov 2019",
    desp: "<li>Winner of Query Intent Hackathon organized at LexisNexis,where our deep learning and machine learning models for classification and further sub-classification of legal search queries which not only gave the best f1 scores but was also production ready with lightweight models being less compute intensive and fast on prediction time. </li>"
  },
  {
    title: " 2019 LexisNexis Cybersecurity Hackathon  ",
    cardImage: "assets/images/experience-page/lexisnexis-logo.svg",
    place: "3rd Place",
    time: "May 2019",
    desp: "<li>Won 3rd place at 2019 LexisNexis Cybersecurity Hackathon organised on the theme of Capture The Flag event, with objective of capturing the flag key by accomplishing various security challenges which involved nuances of cryptography and web application security. </li>"
  },
  {
    title: " 2018 LexisNexis Rise to Code Hackathon",
    cardImage: "assets/images/experience-page/lexisnexis-logo.svg",
    place: "1st Place",
    time: "Oct 2018",
    desp: "<li>Won 2018 LexisNexis Rise to Code Hackathon with my team for development of a working prototype of semantic search using NLP,Machine learning and ElasticSearch. </li>"
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

