import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
// import ResultsHeading from '../SearchBar/SearchBar';

class BusinessList extends React.Component {
  render() {
    return (
        <div className= "row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h2 className="lobstah">Heres your yummy results!</h2>
            <div className="card-columns">
              {
                this.props.businesses.map(business => {
                  return <Business business={business} key={business.id} />
                })
              }
            </div>        
          </div>
          <div className="col-md-2"></div>
        </div>
    );
  }
}

export default BusinessList;