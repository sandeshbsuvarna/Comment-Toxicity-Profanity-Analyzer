var request = require("request");

const BASE_URL = 'https://commentanalyzer.googleapis.com/v1alpha1';

class GoogleConnector {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  analyzeComments(param) {
    const requestOptions = {
      url: `${BASE_URL}/comments:analyze/?key=${this.accessToken}`,
      body: param,
      json: true,
      headers: {
          'content-type': 'application/json',
      }
    };
    return new Promise(((resolve, reject) => {
      request.post(requestOptions, (error, response, body) => {
        try {
          if (body) {
            resolve(body);
          } else {
            reject(body);
          }
        } catch (e) {
          reject(body);
        }
      });
    }));
  }
}

module.exports=GoogleConnector;
