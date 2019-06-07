// Client ID
// RhIHfvab5GQMdKxmMISE7w

//  API Key
//  Wk34P-PKvC9unfoRMGrdOVwyMaKsTB3iP-h3MtKzA1EOm5hwvWIlt4s0C2J2HYRCd4vbiis4XPhZefX_R5entiQOkrhAlUlCLfTG4IK7TK9xtzxOSpo7eeNmfZr5XHYx


const apiKey = "Wk34P-PKvC9unfoRMGrdOVwyMaKsTB3iP-h3MtKzA1EOm5hwvWIlt4s0C2J2HYRCd4vbiis4XPhZefX_R5entiQOkrhAlUlCLfTG4IK7TK9xtzxOSpo7eeNmfZr5XHYx";


const Yelp = {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    // id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.address,
                    city: business.city,
                    state: business.state,
                    zipCode: business.zipCode,
                    category: business.category,
                    rating: business.rating,
                    reviewCount: business.reviewCount
                });
            }
        });
    }
};

export default Yelp;