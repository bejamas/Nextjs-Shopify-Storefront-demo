import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Header/Header";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { getProduct } from "../../utils/shopify";

export default function Product({ product }) {
  return (
    <>
      <Header />
      <ProductDetails product={product} />;
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { productid } = context.query;
  const product = await getProduct(productid);
  return {
    props: {
      product,
    },
  };
};
