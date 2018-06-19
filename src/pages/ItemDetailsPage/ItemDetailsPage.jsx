import React from 'react';
import Helmet from 'react-helmet';
import Breadcrumb from '../../common/components/Breadcrumb/Breadcrumb';
import PriceBox from './PriceBox/PriceBox';
import { GetItemDetails } from '../../services/ItemsServices';
import './ItemDetailsPage.css';

class ItemDetailsPage extends React.Component {
  state = {
    categories: [],
    item: null
  }

  componentDidMount() {
    GetItemDetails(this.props.match.params.id).then(({ data }) => this.setState(data));
  }

  render () {
    const {categories, item} = this.state;
    return (
      <div className="itemDetailsPage">
        {item && 
          <Helmet>
            <title>{item.title} - TestML</title>
            <meta name="description" content={`TestML - ${item.title}`}/>
          </Helmet>
        }
        <div className="breadcrumbContainer">
          <Breadcrumb categories={categories} />
        </div>
        {item &&
          <div className="detailsContainer">
            <div className="imageContainer">
              <img src={item.picture} alt={item.title} />
            </div>
            <PriceBox
              condition={item.condition}
              itemsSold={item.sold_quantity}
              title={item.title}
              price={item.price}
              freeShipping={item.free_shipping} />
            <section className="descriptionContainer">
              <h2 className="title">Descripción del producto</h2>
              <div className="description">
                <p dangerouslySetInnerHTML={{__html: item.description}}></p>
              </div>
            </section>
          </div>
        }
      </div>
    );
  }
}

export default ItemDetailsPage;
