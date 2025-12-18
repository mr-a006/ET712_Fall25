import React from 'react';
import Card from '../components/Card';

function Category1({ addToCart }) {
  const products = [
    { id: 1, title: 'Sony Wireless Headphones', price: 89, image: '/img/sonywireless.jpg', description: 'Featuring excellent sound quality and extra bass without the hassle of wires, these headphones are perfect for everyday use.' },
    { id: 2, title: 'Sony Wired Headphones', price: 49, image: '/img/sonywired.jpg', description: 'For a more classic style of headphones, offering the same great sound quality and bass that has made Sony well respected.' },
    { id: 3, title: 'Logitech Web Camera', price: 79, image: '/img/logitechcamera.jpg', description: 'Utilize your meetings with the Logitech Web Camera. Featuring clear video and sound, this surely adds new life to network meetings.' },
    { id: 4, title: 'HyperX Microphone', price: 99, image: '/img/hyperxmicrophone.jpg', description: 'The HyperX Microphone delivers extremely clear sound quality, and the best part is that it has very little static or background noise.' },
    { id: 5, title: 'Logitech Keyboard', price: 69, image: '/img/logitechkeyboard.jpg', description: 'Whether you are sending a quick e-mail or working on a college research paper, the quiet Logitech Keyboard helps you get the task done right.' },
    { id: 6, title: 'Dell Monitor', price: 199, image: '/img/dellmonitor.jpg', description: 'To see the picture, you need a monitor that delivers sharp pixels and smooth performance, and the Dell Monitor does exactly that.' },
    { id: 7, title: 'Logitech Wireless Mouse', price: 59, image: '/img/logitechwireless.jpg', description: 'Almost everyone else rely on the comfort and performance of the Logitech Wireless Mouse, being able to plug and play without the hassle of wires.' },
    { id: 8, title: 'Logitech Wired Mouse', price: 39, image: '/img/logitechwired.jpg', description: 'The classic Logitech Wired Mouse remains timeless, offering the same comfort and performance that has made Logitech well respected.' },
  ];

  return (
    <div className="category-page">
      <h2>Computer Accessories</h2>
      <div className="cards-container">
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Category1;
