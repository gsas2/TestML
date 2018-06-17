import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../common/components/Breadcrumb/Breadcrumb';
import ListItem from './ListItem/ListItem';
import { GetItems } from '../../services/ItemsServices';
import './ListItemsPage.css';

class ListItemsPage extends React.Component {
  state = {
    categories: [],
    items: []
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const search = params.get('search');
    GetItems(search).then(({ data }) => this.setState(data));
  }

  render() {
    const { categories, items} = this.state;
    return (
      <div className="listItemsPage">
        <div className="breadcrumbContainer">
          <Breadcrumb categories={categories} />
        </div>
        <div className="resultsContainer">
          { items.map((item, index) => (
              <div key={index} className="resultContainer">
                <Link to={`/items/${item.id}`}>
                  <ListItem item={item} />
                </Link>
                {index+1 < items.length ? <div className="itemSeparator" /> : null}
              </div>
            )) }
        </div>
      </div>
    );
  }
}

export default ListItemsPage;
