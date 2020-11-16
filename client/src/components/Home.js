import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/product_actions";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(productList);

  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <h2>loading ..</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product._id}>{product.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
