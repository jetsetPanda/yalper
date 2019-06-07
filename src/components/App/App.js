import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses : []
    };
    this.findYelp = this.findYelp.bind(this);
  }

  findYelp(term,location,sortBy) {
    // console.log(`Querying Yelp for ${term} in ${location} and results sorted by: ${sortBy}`);
    Yelp.search(term,location,sortBy).then(businesses => {
        this.setState({businesses:businesses});
      });
  }

  render() {
    return (
        <div className="App">
          <h1 className="lobstah">Yalper | <span className="smontey witey">by: jetsetEats</span></h1>
          <SearchBar findYelp={this.findYelp}/>
          <BusinessList businesses={this.state.businesses} /> 
        </div>
    );
  }  
}

export default App;
