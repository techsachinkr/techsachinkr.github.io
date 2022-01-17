/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Question Answering Systems for Legal Domain",
        authors : "Sachin Kumar",
        conferences : "Talk at Symposium on Artificial Intelligence and Law 2021",
        researchYr : 2021,
        paperURL : "http://cse.iitkgp.ac.in/~saptarshi/sail2021/sail2021-sachin-kumar.mp4",
        citebox : "popup1",
        citation: {
            vancouver: "Sachin Kumar. Talk at Symposium on Artificial Intelligence and Law 2021"
        },
        abstract: "Question Answering has been a challenging problem to solve in the legal domain due to the complex nature of the legal text. To effectively solve the problem of question answering in legal domain, the answers presented need to be relevant to the question asked, but also present diverse answers so that it can guide the legal researchers with the ill-formed queries. While some approaches have been proposed and implemented to solve this problem like factoid-based question answering and BM25 based retrieval systems, these approaches have suffered in the areas of either relevance or novelty or both.In this presentation, I will be presenting the approaches implemented at LexisNexis for answering the factoid questions for a limited number of legal question types like statute of limitations, doctrines, etc. Furthermore, I will be discussing a high-level overview of our Neural Information Retrieval based Open Legal domain Question Answering which expands on the coverage of various legal domain Question types which not only address factoid questions but also answers complex procedural questions.",
        absbox: "absPopup1"
    },
    {
        title : " SYSTEMS AND METHODS FOR PROVIDING ANSWERS TO A QUERYSYSTEMS AND METHODS FOR PROVIDING ANSWERS TO A QUERY ",
        authors : "Sachin Kumar,Dhruv Sakalley,Kishore Raj,Soha Khazaeli,Sunny Chiy Webster,Syjee Mathai,Sanjay Sharma,Bert Staub",
        conferences : "U.S. Patent filed as US 17/148905 ",
        researchYr : " Filed Jan 14, 2021",
        paperURL : "https://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=/netahtml/PTO/srchnum.html&r=1&f=G&l=50&s1=20210216576.PGNR.&OS=DN/20210216576&RS=DN/20210216576",
        citebox : "popup1",
        citation: {
            vancouver: "Sachin Kumar,Dhruv Sakalley,Kishore Raj,Soha Khazaeli,Sunny Chiy Webster,Syjee Mathai,Sanjay Sharma,Bert Staub.  SYSTEMS AND METHODS FOR PROVIDING ANSWERS TO A QUERYSYSTEMS AND METHODS FOR PROVIDING ANSWERS TO A QUERY. US Patent "
        },
        abstract: "Systems and methods for open domain question-answering are disclosed. In one embodiment, a method of providing answers to a question includes retrieving, by a computing device, a plurality of passages relevant to a search query generating a plurality of question-passage pairs, wherein each question-passage pair includes the search query and an individual passage of the plurality of passages, and determining, using a computer model, a probability that a passage of each question-passage pair of at least some of the plurality of question-passage pairs is an answer to a question posed by the search query. The method also includes displaying, on an electronic display, a selected passage of a question-passage pair having a highest probability that the passage is the answer to the question posed by the search query.",
        absbox: "absPopup1"
    },
    {
        title : "Language Model Compression and implications to Search ",
        authors : "Sachin Kumar,Kishore Ethiraj,Sanjay Sharma,Soha Khazaeli,Urvi Luhana,Ashay Khandelwal",
        conferences : "4th Annual RELX Search Summit 2020",
        researchYr : 2020,
        paperURL : "https://ssrn.com/abstract=3775654",
        citebox : "popup1",
        citation: {
            vancouver: "Sachin Kumar,Kishore Ethiraj,Sanjay Sharma,Soha Khazaeli,Urvi Luhana,Ashay Khandelwal. Language Model Compression and implications to Search. 4th Annual RELX Search Summit 2020."
        },
        abstract: "BERT like transformer language models are getting complex and large. Industry and research are training large general-purpose models that can do a multitude of natural language tasks such as mapping text in a semantic similarity space or doing query intent recognition etc. These models are then later fine-tuned to specific uses, which means the need to operationalize several versions of these models. As things grow and spiral out of proportion with respect to compute and cost, there is a direct impact on operationalization. As beneficiaries of this research and the models thus produced, there is a need for reliable model compression techniques to effectively use these models in downstream tasks. Current research proposes methods such as tree pruning, knowledge distillation, quantization, parameter size reduction that have different uses and downstream implications. We would like to propose an analytical framework for measuring the quality of model compression, especially with respect to application to downstream tasks and share the cost implications of some of these techniques as applied to Lexis Answers DCG. ",
        absbox: "absPopup1"
    },

 {
        title : "Understanding User Query Intent and Target Terms in Legal Domain",
        authors : "Sachin Kumar,Regina Politi",
        conferences : " 24th International Conference on Applications of Natural Language to Information Systems,NLDB 2019",
        researchYr : 2019,
        paperURL : "https://link.springer.com/chapter/10.1007/978-3-030-23281-8_4",
        citebox : "popup2",
        citation: {
            vancouver: "Kumar S., Politi R. (2019) Understanding User Query Intent and Target Terms in Legal Domain. In: Métais E., Meziane F., Vadera S., Sugumaran V., Saraee M. (eds) Natural Language Processing and Information Systems. NLDB 2019. Lecture Notes in Computer Science, vol 11608. Springer, Cham. https://doi.org/10.1007/978-3-030-23281-8_4"
        },
        abstract: "Lexis Advance is a legal research service provided by LexisNexis that can respond to natural language queries. It includes a module called Lexis Answers which implements advanced Natural Language Processing (NLP) capabilities to improve understanding of the intent of the user’s queries. Lexis Answers can respond to natural language questions concerning legal question types such as statute of limitations, elements of a claim, definition of legal terms, and others. Herein, we report on the successful use of advanced NLP approaches for detecting not only named entities, but entire legal phrases, a skill previously requiring domain knowledge and human expertise. We have utilized the Conditional Random Fields (CRFs) approach that employs hand-engineered features combined with word2vec embeddings trained on legal corpus. Furthermore, to reduce our dependency on hand-engineered features, we have also implemented deep learning architecture comprising of bidirectional Long Short-Term Memory (BiLSTM) and linear chain CRF. Both approaches were benchmarked against a rule-based approach for different types of legal questions. We find that both CRF and BiLSTM-CRF can identify query intents and legal concepts with comparable precision but much higher recall and F-score than the baseline. The resulting models have been employed in Lexis Answers as critical improvement in our natural language query understanding. ",
        absbox: "absPopup2"
    },

      {
        title : "Transparent Iterative Multi-Concept Semantic Search",
        authors : "Sachin Kumar,Dhruv Sakalley,Kate Farmer,Michael Etgen,Sanket Shukl,Ankur Oberai",
        conferences : "U.S. Patent filed as US 17/028,382",
        researchYr : "Filed Sep 24, 2019",
        paperURL : "http://appft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=/netahtml/PTO/srchnum.html&r=1&f=G&l=50&s1=20210089719.PGNR.&OS=DN/20210089719&RS=DN/20210089719",
        citebox : "popup3",
        citation: {
            vancouver: "Sachin Kumar,Dhruv Sakalley,Kate Farmer,Michael Etgen,Sanket Shukl,Ankur Oberai. Transparent Iterative Multi-Concept Semantic Search. US Patent"
        },
        abstract: "An Iterative multi-concept search methodology with continuous feedback by users engaging with legal concepts presented.",
        absbox: "absPopup3"
    },
   

    
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({ title, authors, conferences, researchYr,paperURL, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr> 
                
                <td class = "researchTitleName">
                    <a href="${paperURL}" target="_blank" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            BIBTEX
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

