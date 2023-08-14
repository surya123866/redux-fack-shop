import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import Product from "../Product/Product";
import { setProuducts } from "../../redux/actions/productsAction";

function ProductListing() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Error fetching data", error);
      });
      dispatch(setProuducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div className="ui grid column">
      <Product />
    </div>
  );
}

export default ProductListing;
