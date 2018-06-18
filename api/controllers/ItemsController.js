'use strict';
const Joi = require('joi');
const _ = require('lodash');
const MeLiService = require('../services/MeLiService');

const AUTHOR = {
  'name': 'Gastón',
  'lastname': 'Sas',       
}

const translatedCondition = (condition) => {
  const translations = {
    'new': 'Nuevo',
    'used': 'Usado'
  };

  return translations[condition] || '';
};

const parsePrice = (price) => {
  let intPart = Math.floor(price);
  return {
    'int': intPart,
    'decimals': (price - intPart).toFixed(2) * 100
  };
};

const formatCategories = (rootPath) => {
  let response = [];
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
        'currency': item.currency_id,
        'amount': parsedPrice.int,
        'decimals': parsedPrice.decimals
      },
      'picture': item.thumbnail,
      'condition': translatedCondition(item.condition),
      'free_shipping': item.shipping.free_shipping,
      'location': item.address.state_name
    });
  });

  return response;
};

const formatGetItemsResponse = (data) => {
  let categories = data.filters.find((filter) => filter.id === 'category');
  let rootPath = _.get(categories, 'values[0].path_from_root', []);

  return {
    'author': AUTHOR,
    'categories': formatCategories(rootPath),
    'items': formatItems(data.results)
  };
};

const formatItem = (itemData) => {
  let item = itemData[0];
  let itemDescription = itemData[1];

  let parsedPrice = parsePrice(item.price);
  return {
    'id': item.id,
    'title': item.title,
    'price': {
      'currency': item.currency_id,
      'amount': parsedPrice.int,
      'decimals': parsedPrice.decimals
    },
    'picture': _.get(item, 'pictures[0].url', item.thumbnail),
    'condition': translatedCondition(item.condition),
    'free_shipping': item.shipping.free_shipping,
    'sold_quantity': item.sold_quantity,
    'description': itemDescription.plain_text
  };
};

const formatGetItemResponse = (itemData, categoryData) => {
  return {
    'author': AUTHOR,
    'categories': formatCategories(categoryData.path_from_root),
    'item': formatItem(itemData)
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
    const getItemSchema = Joi.object().keys({
      id: Joi.string().required()
    });

    let itemData;
    Joi.validate(req.params, getItemSchema)
      .then(() => {
        return Promise.all([
          MeLiService.getItem(req.params.id),
          MeLiService.getItemDescription(req.params.id)
        ]);
      })
      .then((data) => {
        itemData = data;
        let categoryId = _.get(itemData, '[0].category_id', '');
        if (!categoryId) {
          throw new Error('Could not find category for item');
        }

        return MeLiService.getCategory(categoryId);
      })
      .then((categoryData) => {
        res.json(formatGetItemResponse(itemData, categoryData));
      })
      .catch((error) => {
        console.log('GetItem error:', error.message|| error);
        res.sendStatus(404);
      });
  }
};
