import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


function App() {
  return (
      <div className="App">
        <h1 className="montey">YALPER | by: jetsetEats</h1>
        <SearchBar />
        <BusinessList businesses={paradeOfBiz} /> 
      </div>
    )
}

const business = {
  imageSrc: 'https://source.unsplash.com/1SPu0KT-Ejg/1280x720',
  name: 'Rebellion Cafe',
  address: '200 Roosevelt Ave',
  city: 'Woodside',
  state: 'NY',
  zipCode: '11377',
  category: 'Organic Deli',
  rating: 5.5,
  reviewCount: 93
};

const paradeOfBiz = [
  business, 
  business,
  business,
  business,
  business,
  business
];

export default App;
