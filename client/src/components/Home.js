import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/product_actions";
import ProductBox from "./Products_Box";
import CircularIndeterminate from "./Spinner";
import UI from "./UI/UI";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const dispatch = useDispatch();

  //takes the reducer state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(productList);

  return (
    <div>
      <UI>
        <h2>Products</h2>
        {loading ? (
          <h2>
            <CircularIndeterminate />
          </h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div style={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <ProductBox
                    style={{ flexGrow: 1, margin: "5px" }}
                    productName={product.name}
                    productImage={product.image}
                    productPrice={product.price}
                    productDescription={product.description}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </UI>
    </div>
  );
};

export default Home;
