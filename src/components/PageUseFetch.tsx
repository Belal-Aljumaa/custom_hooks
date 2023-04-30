import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

const ordersUrl =
  'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';
const productsUrl =
  'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';

const PageUseFetch = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        setProducts((await axios.get(productsUrl)).data);
      })();
    }, Math.floor(Math.random() * 2000) + 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        setOrders((await axios.get(ordersUrl)).data);
      })();
    }, Math.floor(Math.random() * 2000) + 1000);
  }, []);

  return (
    <div className='pageUseFetch'>
      {products.length > 0 ? (
        <p>
          There are <span style={{ color: 'red' }}>{products.length}</span>{' '}
          products.
        </p>
      ) : (
        <p className="loading">
          <FaSpinner className="spinner" /> Loading products...
        </p>
      )}

      {orders.length > 0 ? (
        <p>
          There are <span style={{ color: 'red' }}>{orders.length}</span>{' '}
          orders.
        </p>
      ) : (
        <p className="loading">
          <FaSpinner className="spinner" /> Loading orders...
        </p>
      )}
    </div>
  );
};

export default PageUseFetch;
