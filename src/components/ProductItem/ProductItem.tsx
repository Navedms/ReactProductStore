import React from "react";

import { Product } from "../../store/products/productsSlice";

// Styles
import "./style.css";

interface Props {
  product: Product;
  selectedProductId: number;
  OnDelete: (id: number) => void;
  OnDetailes: (id: number) => void;
}

function ProductItem(props: Props) {
  const { product, selectedProductId, OnDelete, OnDetailes } = props;

  return (
    <div
      onClick={(event) => OnDetailes(product.id)}
      key={product.id}
      className={`product ${
        product.id === selectedProductId ? "product-focus" : ""
      }`}
    >
      <img src={product.image} width={200} alt={product.name} />
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        {product?.description && (
          <div className="product-description">{product.description}</div>
        )}
        <div className="product-delete">
          <button
            onClick={(event) => {
              event.stopPropagation();
              OnDelete(product.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
