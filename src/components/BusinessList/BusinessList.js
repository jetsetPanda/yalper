import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className= "row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8">
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