// =======================================================
// Name: lab8_exe_D.html
// Assignment: Lab 8
// Author(s): Martin Liu, Tahmeed Mahmud
// Submission: March 11, 2024
// Description: React.
// =======================================================
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const onProductSaved = (product) => {
    setProducts((currentProducts) => {
      const index = currentProducts.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        const newProducts = [...currentProducts];
        newProducts[index] = product;
        return newProducts;
      } else {
        const newProduct = product.id ? product : { ...product, id: Date.now() };
        return [...currentProducts, newProduct];
      }
    });
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, onProductSaved }}>
      {children}
    </ProductContext.Provider>
  );
};
