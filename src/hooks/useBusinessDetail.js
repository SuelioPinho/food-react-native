import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default (id) => {
  const [business, setBusiness] = useState(null);

  const getBusinessById = async () => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
    console.log('getBusinessById', JSON.stringify(response.data, 0, 4));
  };

  useEffect(() => {
    getBusinessById();
  }, []);

  return { business };
};
