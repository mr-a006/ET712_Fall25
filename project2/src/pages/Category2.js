import React from 'react';
import Card from '../components/Card';

function Category2({ addToCart }) {
  const products = [
    { id: 10, title: 'Dell Computer Case', price: 129, image: '/img/dellcase.jpg', description: 'House and protect your computer with this reliable computer case.  The Dell computer case is durable, well-built, and secure.' },
    { id: 11, title: 'Intel i9 14th Generation CPU', price: 549, image: '/img/intelcpu.jpg', description: 'A powerful CPU will make daily tasks faster, easier, and simpler for you  Enjoy fast performance and smooth multitasking.' },
    { id: 12, title: 'Nvidia RTX 4080 GPU', price: 1199, image: '/img/rtx4080.jpg', description: 'A high-performance graphics card will enhance your gaming experience. Enjoy high frames and response times.' },
    { id: 13, title: 'Gigabyte Motherboard', price: 249, image: '/img/gigabyteboard.jpg', description: 'Repair or upgrade your computer with a brand new motherboard.  The motherboards meet industry standards and provide great performance.' },
    { id: 14, title: 'Corsair Power Supply', price: 179, image: '/img/corsairpower.jpg', description: 'Power your computer reliably with this long-lasting power supply. A high-quality power supply that provides long-time power.' },
    { id: 15, title: '16GB Memory Stick', price: 79, image: '/img/16gbmemory.jpg', description: 'Boost your computer with this 16GB memory stick. Your computer will run smoother and faster, having more room for a variety of tasks.' },
    { id: 16, title: 'Samsung 1TB SSD', price: 129, image: '/img/samsungssd.jpg', description: 'Expand the storage of your computer with this state of the art SSD, utilizing more performance, power, and features.' },
    { id: 17, title: 'Noctua Computer Fan', price: 39, image: '/img/noctuafan.jpg', description: 'Help keep your computer cool and operating smoothly with a computer fan. This fan can reliably balance everything in your computer.' },
  ];

  return (
    <div className="category-page">
      <h2>Computer Parts</h2>
      <div className="cards-container">
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Category2;
