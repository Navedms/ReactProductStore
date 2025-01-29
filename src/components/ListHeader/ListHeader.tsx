import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setFilters,
  SortBy,
  SortType,
} from "../../store/products/productsSlice";
import "./style.css";
import { RootState } from "../../store/store";

interface Props {
  addNewProduct: () => void;
  onSort: (sortType: SortType, sortBy: SortBy) => void;
  onSearch: (search: string) => void;
}

function ListHeader(props: Props) {
  const { addNewProduct, onSort, onSearch } = props;
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.product.filters);

  const handleSortBy = (text: SortBy) => {
    dispatch(setFilters({ ...filters, sortBy: text }));
    onSort(filters.sortType, text);
  };

  const handleSortType = (text: SortType) => {
    dispatch(setFilters({ ...filters, sortType: text }));
    onSort(text, filters.sortBy);
  };

  const handleOnSearch = (text: string) => {
    dispatch(setFilters({ ...filters, search: text }));
    onSearch(text);
  };

  return (
    <div className="list-header">
      <button onClick={addNewProduct} className="btn add-btn">
        Add
      </button>
      <div className="sort">
        <p>Sort By:</p>
        <select
          name="SortBy"
          onChange={(e) => handleSortBy(e.target.value)}
          defaultValue={filters.sortBy}
        >
          <option>Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="date">Date</option>
        </select>
        <select
          name="SortType"
          onChange={(e) => handleSortType(e.target.value)}
          defaultValue={filters.sortType}
        >
          <option>Sort Type</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="search">
        <p>Search:</p>
        <input
          type="text"
          value={filters.search}
          onChange={(e) => handleOnSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ListHeader;
