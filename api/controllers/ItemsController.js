'use strict';
const Joi = require('joi');
const _ = require('lodash');
const MeLiService = require('../services/MeLiService');

const AUTHOR = {
  'name': 'Gastón',
  'lastname': 'Sas',       
}

const convertCurrencyToHTMLSymbol = (currency) => {
  let symbol;
  switch(currency) {
    case 'ARS':
      symbol = '$';
      break;
    default: 
      symbol = currency;
      break;
  };

  return symbol;
};

const parsePrice = (price) => {
  let intPart = Math.floor(price);
  return {
    'int': intPart,
    'decimals': price - intPart
  };
};

const formatCategories = (filtersData) => {
  let response = [];
  let categories = filtersData.find((filter) => filter.id === 'category');
  let rootPath = _.get(categories, 'values[0].path_from_root', []);
  rootPath.forEach((pathItem) => {
    response.push(pathItem.name);
  });

  return response;
};

const formatItems = (itemsData) => {
  let response = [];

  itemsData.forEach(item => {
    let parsedPrice = parsePrice(item.price);
    response.push({
      'id': item.id,
      'title': item.title,
      'price': {
        'currency': convertCurrencyToHTMLSymbol(item.currency_id),
        'amount': parsedPrice.int,
        'decimals': parsedPrice.decimals
      },
      'picture': item.thumbnail,
      'condition': item.condition,
      'free_shipping': item.shipping.free_shipping,
      'location': item.address.state_name
    });
  });

  return response;
};

const formatGetItemsResponse = (data) => {
  return {
    'author': AUTHOR,
    'categories': formatCategories(data.filters),
    'items': formatItems(data.results)
  };
};

module.exports = {
  getItems(req, res) {
    const getItemsSchema = Joi.object().keys({
      q: Joi.string().required()
    });

    Joi.validate(req.query, getItemsSchema)
      .then(() => {
        return MeLiService.search(req.query.q);
      })
      .then(results => {
        res.json(formatGetItemsResponse(results));
      })
      .catch((error) => {
        res.status(500).json({
          message: error.message
        });
      });
  },
  getItem(req, res) {
    res.send(req.params.id);
  }
};
