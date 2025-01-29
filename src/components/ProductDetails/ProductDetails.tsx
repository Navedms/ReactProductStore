import React from "react";

import { Product } from "../../store/products/productsSlice";

// Components
import ProdactForm from "../../components/ProductForm/ProductForm";

// Styles
import "./style.css";

interface Props {
  product: Product;
}

function ProductDetails(props: Props) {
  const { product } = props;

  return (
    <div
      className={`product-details-wrapper ${
        !product.id ? "add-new-product" : ""
      }`}
    >
      <div className="product-details-title">
        {product.id ? `${product.name} Details` : "Add New Product"}
      </div>
      <ProdactForm product={product} />
    </div>
  );
}

export default ProductDetails;
