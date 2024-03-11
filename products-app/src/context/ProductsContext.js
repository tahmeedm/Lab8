// =======================================================
// Name: lab8_exe_D.html
// Assignment: Lab 8
// Author(s): Martin Liu, Tahmeed Mahmud
// Submission: March 11, 2024
// Description: React.
// =======================================================
import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const saveProduct = (product) => {
    setProducts(currentProducts => {
     
      const index = currentProducts.findIndex(p => p.id === product.id);

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
    <ProductsContext.Provider value={{ products, setProducts, saveProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
