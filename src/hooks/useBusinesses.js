import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    setBusinesses([{
      'id': '1',
      'name': 'Restaurant 1',
      'address': 'avenue 1',
      'price': '$',
      'rating': '4.5',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '2',
      'name': 'Restaurant 2',
      'address': 'avenue 2',
      'price': '$$',
      'rating': '4',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '3',
      'name': 'Restaurant 3',
      'address': 'avenue 3',
      'price': '$$$',
      'rating': '5',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '4',
      'name': 'Restaurant 1',
      'address': 'avenue 1',
      'price': '$',
      'rating': '4.5',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '5',
      'name': 'Restaurant 2',
      'address': 'avenue 2',
      'price': '$$',
      'rating': '4',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '6',
      'name': 'Restaurant 3',
      'address': 'avenue 3',
      'price': '$$$',
      'rating': '5',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '7',
      'name': 'Restaurant 1',
      'address': 'avenue 1',
      'price': '$',
      'rating': '4.5',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '8',
      'name': 'Restaurant 2',
      'address': 'avenue 2',
      'price': '$$',
      'rating': '4',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '9',
      'name': 'Restaurant 3',
      'address': 'avenue 3',
      'price': '$$$',
      'rating': '5',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '10',
      'name': 'Restaurant 1',
      'address': 'avenue 1',
      'price': '$',
      'rating': '4.5',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '11',
      'name': 'Restaurant 2',
      'address': 'avenue 2',
      'price': '$$',
      'rating': '4',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
    {
      'id': '12',
      'name': 'Restaurant 3',
      'address': 'avenue 3',
      'price': '$$$',
      'rating': '5',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/XpMWYjMPdWPJ65A1pZiIFw/o.jpg'
    },
  ])
    // try {
    //   const response = await yelp.get('/search', {
    //     params: {
    //       limit: 50,
    //       term,
    //       location: 'san jose',
    //     },
    //   });
    //   console.log(response);
    //   setBusinesses(response.data.businesses);
    // } catch (err) {
    //   console.log(err);
    //   setErrorMessage('Something wen wrong');
    // }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, businesses, errorMessage]
};
