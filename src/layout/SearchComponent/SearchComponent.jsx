import React from 'react';
import { withRouter } from 'react-router-dom';
import searchIcon from './ic_Search.png';
import searchIcon2X from './ic_Search@2x.png.png';
import './SearchComponent.css';

class SearchComponent extends React.Component {
  state = {
    searchValue: ''
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/items?search=${this.state.searchValue}`);
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  render() {
    return (
      <div className="SearchComponent">
        <form>
          <input
            type="text"
            name="search"
            placeholder="Nunca dejes de buscar"
            value={this.state.searchValue}
            onChange={this.handleChange.bind(this)}
            />
          <button type="submit" onClick={this.handleSubmit.bind(this)}>
            <img
              src={searchIcon}
              srcSet={[`${searchIcon} 1x`, `${searchIcon2X} 2x`]}
              alt="search icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchComponent);
