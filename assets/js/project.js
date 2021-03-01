/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : " Open Domain Question Answering on US Legal Text ",
        organization : "LexisNexis",
        projectDuration : "Jul 2019 - Present",
        projectDetails : "i) Worked on developing models and various fine-tuning approaches using BERT Language model trained on US Caselaw and secondary sources to implement Question Answering for legal domain, which was rolled out as a feature on our company’s new product Lexis+.<br/>ii) Developed approaches for BERT based model compression to save costs on embeddings usage and reduce inference time in production, which led to savings of about 100k dollars in operational costs.<br/>iii) Worked on development of query reformulation approaches to improve answers relevance for questions asked to legal domain Question answering system.",
        image : "assets/images/project-page/qa_system.jpeg",
        tools: "Tensorflow,Python,BERT",
        projectURL:"#0",
        gitFlag: "false"
    },

    {
        title : "  NER approaches for identifying Query Intent and Target Term ",
        organization : "LexisNexis",
        projectDuration : " Jun 2018 - Jan 2019 ",
        projectDetails : "Worked on developing machine learning and deep learning models for NER(Named-Entity Recognition) domain to identify the search query intent and target terms for the definition intent queries to deliver Lexis Answers factoids into LexisNexis Advance Application. Specifically worked on :<br/>i) Developed Deep learning model of Bidirectional LSTM-CRF with F1-Score of 96.2 for identifying definition intent queries and associated target terms.<br/>ii) Also developed a CRF(Conditional Random Fields) algorithm model with F1-Score of 95.5 for identifying definition intent queries and associated target terms",
        image : "assets/images/project-page/search_intent.jpg",
        tools: "Tensorflow,Python,CRF,Bi-LSTM-CRF",
        projectURL:"#0",
        gitFlag: "false"
    },

     {
        title : "  Finding Sister Cities with Natural Language Processing  ",
        organization : "Academic Project at NCSU",
        projectDuration : "  Mar 2018 - Apr 2018  ",
        projectDetails : "A Natural language processing based approach to find sister cities or cities are similar in user- specified criteria by using a combination of categories based weighted approach and newspapers articles based relevancy of cities to user's criteria.Activities done as part of the project:<br/>i) Gathering of data for 16000 US cities, from various structured and unstructured sources involving web scraping for certain unstructured sources.<br/>ii) Training of word2vec model using newspaper articles corpus to generate word2vec embeddings.<br/>iii) Visualise embeddings using t-SNE algorithm.<br/>iv) Scraping google news for url's , for scraping the data from respective url's corresponding to the searches made in real time of search terms for cities to measure up relevance of respective cities.<br/>v) Implementing dual embeddings space model to rank the newspaper articles relevance for measuring up search query relevance to respective cities.<br/>",
        image : "assets/images/project-page/sister_cities.jpg",
        tools: "Tensorflow,Python,Scrapy,Word2vec",
        projectURL:"https://github.com/techsachinkr/Finding-Sister-City-with-NLP-approach",
        gitFlag: "true"
    },

    {
        title : " ForeCasting US Monthly Retail Trade and Food Services Sales Revenue ",
        organization : "Personal Project",
        projectDuration : "  Dec 2017 - Jan 2018 ",
        projectDetails : "Developed ARIMA model for time-series forecasting of monthly trade revenue projections using time series data of United States Monthly retail trade and food services data provided by United States Census Bureau.Activities done are: <br/>i) Cleaning Data - Removed missing revenue entries and aggregated different retail categories revenue for a particular data to make cumulative projections on particular data<br/>ii) Data exploration - Explored data to check stationarity and make data stationary by differencing and decomposition.<br/>iii) Data Modeling - Explored data to find optimal order parameters for autocorrelation and then used that value to build ARIMA model and compare actual and forecasted projections. ",
        image : "assets/images/project-page/forecasting.jpeg",
        tools: "Python,ARIMA",
        projectURL: "https://github.com/techsachinkr/ForeCasting-US-Monthly-Retail-Trade-and-Food-Services",
        gitFlag: "true"
    },
     {
        title : " Churn Prediction on KKBox Music Dataset",
        organization : "Academic Project at NCSU",
        projectDuration : "Oct 2017 - Nov 2017 ",
        projectDetails : "In this project,worked on predicting whether a user will churn after their subscription expires, basically doing following activities:<br/>i) Exploratory Data Analysis to explore the current trends and eliminate highly correlated features.<br/>ii)Feature Engineering to engineer new features highly correlated with target variable.<br/>iii) Modelled the explanatory variables using Random Forest Classifier, with test accuracy of 94.2% and logloss of 0.10",
        image : "assets/images/project-page/churn_prediction.png",
        tools: "Python,Random Forest",
        projectURL: "https://github.com/techsachinkr/Customers-Churn-Prediction-for-KKBox-Music",
        gitFlag: "true"
    },
    {
        title : " Facebook-Movies-Data-Miner-and-Analyzer ",
        organization : "Personal Project",
        projectDuration : " Aug 2017 - Oct 2017  ",
        projectDetails : "Mined Facebook's Official movies pages data using Facebook's Graph API and then analyse it to generate following insights:<br/>i) Generated plots for top ten movies with total likes received,comparative to each other<br/>ii) Plotted comparative reactions to each movie last 6 facebook posts in terms of likes,shares and comments on last 6 posts.<br/>iii) Plotting engagement of each movie facebook fanbase to last 6 posts in terms of relative likes,rellative shares and relative comments to last 6 posts.<br/>iv)Finding average engagement of top 10 movies in terms of average comments,likes and shares per fan. ",
        image : "assets/images/project-page/facebook_data_mining.png",
        tools: "Python,Facebook Graph API",
        projectURL: "https://github.com/techsachinkr/Facebook-Movies-Data-Miner-and-Analyzer",
        gitFlag: "true"
    },
    {
        title : " Intelligent-Chatbot-with-NLP-Capability ",
        organization : "Personal Project",
        projectDuration : "  Oct 2017 - Oct 2017 ",
        projectDetails : "Implemented chat bot as a part of Hackathon Competition which serves as online help desk for LexisNexis <br/>i)This chat bot can successfully identify the intent of the user, retrieves relevant information from the knowledge base answering queries related to LexisNexis Online Help System<br/>ii) Implemented Natural Language Processing's Bag of Words model and Stanford's NLTK API for lemmatization and other categorization related tasks.<br/>iii) Used Python for Data Processing and Flask for Web interface ",
        image : "assets/images/project-page/chatbot.jpg",
        tools: "Python,NLTK",
        projectURL: "https://github.com/techsachinkr/Intelligent-Chatbot-with-NLP-Capability",
        gitFlag: "true"
    },
    
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, organization, projectDuration,projectDetails,tools,projectURL,gitFlag}) =>
        (output +=`
            <tr> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${projectURL}" target="_blank" class="paperTitle"> ${title} </a> 
                    <div class="rConferences"> ${organization} 
                        <div class="researchY">${projectDuration}<br/> ${projectDetails}</div>
                        <p> Tools/Technologies: ${tools}</p>
                    </div>                 
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

