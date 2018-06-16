import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListItemsPage.css';

const products = [
  {
      "id": "MLA666799963",
      "title": "Ipod Classic",
      "price": {
          "currency": "$",
          "amount": 1300,
          "decimals": 0
      },
      "picture": "http://mla-s2-p.mlstatic.com/928485-MLA25600636874_052017-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "location": "Capital Federal"
  },
  {
      "id": "MLA717988441",
      "title": "Ipod 7ma Generación 16 Gb",
      "price": {
          "currency": "$",
          "amount": 850,
          "decimals": 0
      },
      "picture": "http://mla-s2-p.mlstatic.com/601625-MLA26587913799_012018-I.jpg",
      "condition": "used",
      "free_shipping": false,
      "location": "Capital Federal"
  },
  {
      "id": "MLA697459513",
      "title": "Ipod Touch 4ta Generacion 32 Gb",
      "price": {
          "currency": "$",
          "amount": 680,
          "decimals": 0
      },
      "picture": "http://mla-s2-p.mlstatic.com/738532-MLA25881108346_082017-I.jpg",
      "condition": "used",
      "free_shipping": false,
      "location": "Capital Federal"
  },
  {
      "id": "MLA711127459",
      "title": "Ipod Touch 6 Último Modelo Gold 32gb Permuto",
      "price": {
          "currency": "$",
          "amount": 7900,
          "decimals": 0
      },
      "picture": "http://mla-s2-p.mlstatic.com/977352-MLA26953209493_032018-I.jpg",
      "condition": "used",
      "free_shipping": false,
      "location": "Buenos Aires"
  }
];

const ListItemsPage = () => (
  <div className="listItemsPage">
    <div className="breadcrumbContainer">
      Lorem > Ipsum > ... > IPod
    </div>
    <div className="resultsContainer">
      { products.map(product => (
          <div className="resultContainer">
            <ListItem product={product} />
            <div className="itemSeparator" />
          </div>
        )) }
    </div>
  </div>
);

export default ListItemsPage;
