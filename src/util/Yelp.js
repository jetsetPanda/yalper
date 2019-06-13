// import {keyz} from './config';
const keyz = "Wk34P-PKvC9unfoRMGrdOVwyMaKsTB3iP-h3MtKzA1EOm5hwvWIlt4s0C2J2HYRCd4vbiis4XPhZefX_R5entiQOkrhAlUlCLfTG4IK7TK9xtzxOSpo7eeNmfZr5XHYx";
const Yelp = {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${keyz}`
            }
        }).then(response => {
            console.log("Here's something!");
            console.log(response);
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;