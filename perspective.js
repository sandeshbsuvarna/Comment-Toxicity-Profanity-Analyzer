var GoogleConnector=require('./googleConnector.js');

require('dotenv').config();

googleConnector = new GoogleConnector(process.env.GOOGLE_ACCESS_TOKEN);
param={
    'comment': {'text': "what kind of idiot name is foo?"},
    'languages': ["en"],
    'requestedAttributes': {'TOXICITY':{},'PROFANITY':{}} 
};

googleConnector.analyzeComments(param).then(response => {
    console.log("TOXICITY:"+response.attributeScores.TOXICITY.summaryScore.value);
    console.log("PROFANITY:"+response.attributeScores.PROFANITY.summaryScore.value);
});