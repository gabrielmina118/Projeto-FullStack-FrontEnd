import axios from 'axios';
import { useEffect, useState } from 'react';

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  const getData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
      });
      setData(response.data);
    } catch (erro) {
      console.log('erro', erro.response.data.message);
    }
  };
  useEffect(() => {
    
    getData();
  }, []);

  return [data, getData];
};
export default useRequestData;