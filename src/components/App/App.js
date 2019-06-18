import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses : [],
      resulty : "",
    };
    this.findYelp = this.findYelp.bind(this);
  }

  findYelp(term,location,sortBy) {
    console.log(`Querying Yelp for ${term} in ${location} and results sorted by: ${sortBy}`);
    Yelp.search(term,location,sortBy).then(businesses => {
        this.setState({
          businesses:businesses,
          resulty:"Here's your yummy results!"
        });
        console.log(businesses);
      });
  }

  render() { 
    return (
        <div>
          <h1 className="lobstah text-white logo">Yalper | <span className="smontey witey">a delightful directory of noms</span></h1>
          <SearchBar findYelp={this.findYelp}/>
          <BusinessList 
            resulty={this.state.resulty}
            businesses={this.state.businesses} 
          /> 
        </div>
    );
  }  
}

export default App;
