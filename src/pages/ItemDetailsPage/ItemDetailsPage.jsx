import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PriceBox from './PriceBox/PriceBox';
import './ItemDetailsPage.css';

const categories = [
  "Electrónica, Audio y Video",
  "Audio",
  "Audio Portátil  y Radios",
  "iPod",
  "Reproductores",
  "iPod classic",
  "160 GB"
];

const item =  {
  "id": "MLA666799963",
  "title": "Ipod Classic",
  "price": {
      "currency": "ARS",
      "amount": 1300,
      "decimals": 99
  },
  "picture": "http://mla-s2-p.mlstatic.com/928485-MLA25600636874_052017-O.jpg",
  "condition": "new",
  "free_shipping": false,
  "sold_quantity": 7,
  "description": "Pantalla interior está rota. \n\nFunciona bien. Estado general 8/10. Pantalla exterior bien.\n\nNo hago envíos.\nSe retira por Recoleta."
};

const ItemDetailsPage = (props) => (
  <div className="itemDetailsPage">
    
    {/* props.match.params.id */}
    <div className="breadcrumbContainer">
      <Breadcrumb categories={categories} />
    </div>
    <div className="detailsContainer">
      <div className="imageContainer">
        <img src={item.picture} alt="product" />
      </div>
      <PriceBox
        condition={item.condition}
        itemsSold={item.sold_quantity}
        title={item.title}
        price={item.price}
        freeShipping={item.free_shipping} />
      <div className="descriptionContainer">
        <h1>Descripción del Producto</h1>
        <div className="description">
          <p>{item.description}</p>
         </div>
      </div>
    </div>
  </div>
);

export default ItemDetailsPage;
