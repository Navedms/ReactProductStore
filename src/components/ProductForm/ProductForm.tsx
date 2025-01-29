import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  addProduct,
  editProduct,
  Product,
} from "../../store/products/productsSlice";

import "./style.css";
import { RootState } from "../../store/store";

const schema = yup
  .object({
    name: yup.string().required().max(30),
    description: yup.string().max(200),
    price: yup.number().required().min(0.01),
  })
  .required();

interface Props {
  product: Product;
}

export default function ProductForm(props: Props) {
  const { product } = props;

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.product.data);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [formData, setFormData] = useState({
    name: product.name || "",
    description: product.description || "",
    price: product.price || "",
  });

  const handleOnChange = (event: any) => {
    let name = event.target.name;
    let updatedValue = {};
    updatedValue[name] = event.target.value;
    setFormData((formData) => ({
      ...formData,
      ...updatedValue,
    }));
  };

  const makeNewProductId = () => {
    if (data.length > 0) {
      const sortedData = [...data].sort((a, b) => a.id - b.id);
      return sortedData[sortedData.length - 1].id + 1;
    }
    return 1;
  };

  const onSubmit = (editData: Product) => {
    const newProduct: Product = { ...editData };
    newProduct.image = `https://fakeimg.pl/350x200/?text=${editData.name}`;
    newProduct.date = product.date || new Date();
    newProduct.id = product.id || makeNewProductId();

    dispatch(product.id ? editProduct(newProduct) : addProduct(newProduct));
  };

  useEffect(() => {
    reset();
    setFormData({
      name: product.name || "",
      description: product.description || "",
      price: product.price || "",
    });
  }, [product]);

  return (
    <div className="form-container">
      <img
        src={`https://fakeimg.pl/350x200/?text=${formData.name}`}
        alt={formData.name}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label>Procuct Name</label>
          <input
            type="text"
            placeholder="Enter your Procuct Name"
            value={formData.name}
            {...register("name")}
            onChange={handleOnChange}
          />
          <p className="error-msg">{errors.name?.message}</p>
        </div>
        <div className="form-element">
          <label>Price</label>
          <input
            type="text"
            placeholder="How match it cost?"
            value={formData.price}
            {...register("price")}
            onChange={handleOnChange}
          />
          <p className="error-msg">{errors.price?.message}</p>
        </div>
        <div className="form-element">
          <label>Description - optional</label>
          <input
            type="text"
            placeholder="Enter product description"
            value={formData.description}
            {...register("description")}
            onChange={handleOnChange}
          />
          <p className="error-msg">{errors.description?.message}</p>
        </div>
        <button type="submit" className="btn submit-form-btn">
          Save
        </button>
      </form>
    </div>
  );
}
