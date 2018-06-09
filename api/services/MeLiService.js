'use strict';

const request = require('request-promise-native');

const SEARCH_ENDPOINT_URI = 'https://api.mercadolibre.com/sites/MLA/search'
const MAX_RESULTS = 4;

module.exports = {
  search(query) {
    console.log(`${SEARCH_ENDPOINT_URI}?q=​${query}`);
    
    let options = {
      uri: SEARCH_ENDPOINT_URI,
      qs: {
        q: query,
        limit: MAX_RESULTS
      },
      json: true // Automatically parses the JSON string in the response
    };
    return request(options);
  },
  getItem() {
    //TODO
  },
  getItemDescription() {
    //TODO
  }
};