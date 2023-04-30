import { FaSpinner } from 'react-icons/fa';
import useFetch from '../hooks/useFetch';

const ordersUrl =
  'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/orders.json';
const productsUrl =
  'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/products.json';

const PageUseFetch = () => {
  const [products, loadingProducts, numberOfProducts] = useFetch(productsUrl);
  const [orders, loadingOrders, numberOfOrders] = useFetch(ordersUrl);

  return (
    <div className="pageUseFetch">
      {!loadingProducts ? (
        <>
          <p>
            There are <span style={{ color: 'red' }}>{numberOfProducts}</span>{' '}
            products.
          </p>
          {products.map((product, i) => {
            return (
              <span key={product.productID}>
                {product.productID}
                {numberOfProducts - 1 !== i && <span>,</span>}{' '}
              </span>
            );
          })}
        </>
      ) : (
        <p className="loading">
          <FaSpinner className="spinner" /> Loading products...
        </p>
      )}

      {!loadingOrders ? (
        <>
          <p>
            There are <span style={{ color: 'red' }}>{numberOfOrders}</span>{' '}
            orders.
          </p>
          {orders.map((order, i) => {
            return (
              <span key={order.orderID}>
                {order.orderID}
                {numberOfOrders - 1 !== i && <span>,</span>}{' '}
              </span>
            );
          })}
        </>
      ) : (
        <p className="loading">
          <FaSpinner className="spinner" /> Loading orders...
        </p>
      )}
    </div>
  );
};

export default PageUseFetch;
