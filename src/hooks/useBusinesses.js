import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });
      console.log(response);
      setBusinesses(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something wen wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, businesses, errorMessage]
};
