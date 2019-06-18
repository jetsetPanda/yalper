import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term : 'pizza',
      location : 'Manhattan',
      sortBy : 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(event) {
    this.setState({
      term : event.target.value
    })
  }

  handleLocationChange(event) {
    this.setState({
      location : event.target.value
    })
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.findYelp(this.state.term, this.state.location, this.state.sortBy);
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <h5 className="lobstah searchlogo">Search our directory of noms below!</h5>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search: 'crepes', 'pho', 'tacos', 'bubble tea'" /><br/>
          <input onChange={this.handleLocationChange} placeholder="Location: 'New York', 'Paris, France'" />
        </div><br/><br/>
        <div className="SearchBar-submit" >
          <a className="lobstah" onClick={this.handleSearch}>Yalp it!</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;