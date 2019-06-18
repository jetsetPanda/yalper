import React from 'react';
// import './Business.css';

// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

class Business extends React.Component {
  render() {
    return ( 
      <div className="card">
        <img className="card-img-top" src={this.props.business.imageSrc} alt='' />
        <div className="card-body">
          <h2 className="card-title lobstah">{this.props.business.name}</h2>
          <div>
            <p>{this.props.business.address}</p>
            <p>{`${this.props.business.city}, ${this.props.business.state} ${this.props.business.zipCode}`}</p>
            <p className="text-warning font-italic"> {this.props.business.category.toUpperCase()}</p>
            <p><span className="pinky lobstah font-weight-bold">{`${this.props.business.rating}`}</span> stars</p>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

// class Business extends React.Component {
//   render() {
//     return (
//       <div className="Business">
//         <div className="image-container">
//           <img src={this.props.business.imageSrc} alt=''/>
//         </div>
//         <h2 className="lobstah">{this.props.business.name}</h2>
//         <div className="Business-information">
//           <div className="Business-address">
//             <p>{this.props.business.address}</p>
//             <p>{this.props.business.city}</p>
//             <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
//           </div>
//           <div className="Business-reviews">
//             <h3>{this.props.business.category.toUpperCase()}</h3>
//             <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
//             <p>{`${this.props.business.reviewCount} reviews`}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Business;