'use strict';

const request = require('request-promise-native');

const SEARCH_ENDPOINT_URI = 'https://api.mercadolibre.com/sites/MLA/search';
const ITEM_ENDPOINT_URI = 'https://api.mercadolibre.com/items';
const CATEGORY_ENDPOINT_URI = 'https://api.mercadolibre.com/categories';

const MAX_RESULTS = 4;

module.exports = {
  search(query) {
    let options = {
      uri: SEARCH_ENDPOINT_URI,
      qs: {
        q: query,
        limit: MAX_RESULTS
      },
      json: true
    };
    return request(options);
  },
  getItem(id) {
    let options = {
      uri: `${ITEM_ENDPOINT_URI}/${id}`,
      json: true
    };
    return request(options);
  },
  getItemDescription(id) {
    let options = {
      uri: `${ITEM_ENDPOINT_URI}/${id}/description`,
      json: true
    };
    return request(options);
  },
  getCategory(id) {
    let options = {
      uri: `${CATEGORY_ENDPOINT_URI}/${id}`,
      json: true
    };
    return request(options);
  }
};
