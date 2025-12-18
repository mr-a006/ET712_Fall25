import React from 'react';
import Card from '../components/Card';

function Category2({ addToCart }) {
  const products = [
    { id: 10, title: 'Dell Computer Case', price: 25, image: 'https://via.placeholder.com/150', description: 'Protect your PC safe with this reliable computer case.  The Dell computer case is durable, well-built, and secure.' },
    { id: 11, title: 'Intel i9 14th Generation CPU', price: 30, image: 'https://via.placeholder.com/150', description: 'A powerful CPU will make daily tasks faster, easier, and simpler for you  Enjoy fast performance and smooth multitasking.' },
    { id: 12, title: 'Nvidia RTX 4080 GPU', price: 28, image: 'https://via.placeholder.com/150', description: 'Placeholder' },
    { id: 13, title: 'Gigabyte Motherboard', price: 35, image: 'https://via.placeholder.com/150', description: 'Placeholder' },
    { id: 14, title: 'Corsair Power Supply', price: 40, image: 'https://via.placeholder.com/150', description: 'Placeholder' },
    { id: 15, title: '16GB Memory Stick', price: 32, image: 'https://via.placeholder.com/150', description: 'Placeholder' },
    { id: 16, title: 'Samsung 1TB SSD', price: 38, image: 'https://via.placeholder.com/150', description: 'Placeholder' },
    { id: 17, title: 'Noctua Computer Fan', price: 38, image: 'https://via.placeholder.com/150', description: 'Placeholder' },
  ];

  return (
    <div className="category-page">
      <h2>Category 2</h2>
      <div className="cards-container">
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Category2;
