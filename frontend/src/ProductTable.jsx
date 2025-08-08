import React from 'react';

const ProductTable = ({ products }) => {
  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h2>1.2 – Tabla de Productos</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>${p.price}</td>
            </tr>
          ))}
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>${total}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
