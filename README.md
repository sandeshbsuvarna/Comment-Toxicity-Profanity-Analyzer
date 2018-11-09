# Comment Toxicity/Profanity Analyzer | Nodejs, Google Perspective API

[![npm version](https://img.shields.io/badge/npm-v6.4.1-blue.svg?style=flat)](https://opensource.org/licenses/MIT) [![node version](https://img.shields.io/badge/node-v8.12.0-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

**Comment Toxicity/Profanity Analyzer**, will help help increase empathy, participation and quality in online conversation at scale. #ConversationAI #GooglePerspectiveAPI

## Quick Start

1.  **Get whitelisted to use perspective api** To use the API, your you need to have your email
    address whitelisted. [Apply here](https://www.perspectiveapi.com/). 

2.  **Create a Google Cloud project.** Go to the [Google Cloud
    console](https://console.developers.google.com/) to create a new project.
    You can also use an existing project, if you have one.

3.  **Enable the API.** Once you've been whitelisted, you'll be able to enable
    the API in for your project. Go to the [Perspective API's overview
    page](https://console.developers.google.com/apis/api/commentanalyzer.googleapis.com/overview)
    and click **_Enable_**. 
    
4.  **Generate an API key.** To authenticate your requests, you'll need to
    generate credentials for your project. Using an API key is the simplest
    option. Go to the [API credentials
    page](https://console.developers.google.com/apis/credentials), click
    **_Create credentials_**, and choose "API Key".

5.  **Make an AnalyzeComment request using above node.js codebase**

    update your `.env` with API Key & run `node perspective.js`   

    Note: 0.1 is a lower score, where as 1.0 higher score.
    
There are quite a few
[experimental models](https://github.com/conversationai/perspectiveapi/blob/master/api_reference.md#models),
such as "obscene", "attack on a commenter", "spam", etc, that you may find
interesting.

## License

The source code of Iconic Narada boilerplate is licensed under [MIT](https://opensource.org/licenses/MIT). 