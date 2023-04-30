import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url: string): [any[], boolean, number] => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        setItems((await axios.get(url)).data);
      })();
    }, Math.floor(Math.random() * 2000) + 1000);
  }, []);

  const loadingItems = items.length === 0;

  const numberOfItems = items.length;

  return [items, loadingItems, numberOfItems];
};

export default useFetch;
