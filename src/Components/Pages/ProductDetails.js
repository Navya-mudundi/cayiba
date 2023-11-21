import React, { useState } from 'react';
import '../Pages/ProductDetails.css';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const product = {
    title: 'Sample Product',
    sizes: ['Small', 'Medium', 'Large'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 19.99,
  };

  const images = [
    'https://www.cayiba.com/uploads/listings/ea46d9cd43df23752d0b048dc3fc1cb0.png',
    'https://www.cayiba.com/uploads/listings/12c29c768be874a31401a3a5f1fc13d0.png',
    'https://www.cayiba.com/uploads/listings/ea46d9cd43df23752d0b048dc3fc1cb0.png',
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevImage = () => {
    setSelectedImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-details-container">
      <div className="product-images-container">
        <div className="main-image">
          <img src={images[selectedImage]} alt="Main" />
          <button className="arrow-btn left" onClick={handlePrevImage}>
            &lt;
          </button>
          <button className="arrow-btn right" onClick={handleNextImage}>
            &gt;
          </button>
        </div>
        <div className="thumbnail-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(index)}
              className={index === selectedImage ? 'selected' : ''}
            />
          ))}
        </div>
      </div>
      <div className="product-info-container">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Available Sizes:</p>
        <div className="size-options">
          {product.sizes.map((size, index) => (
            <span
              key={index}
              onClick={() => handleSizeSelect(size)}
              className={size === selectedSize ? 'selected' : ''}
            >
              {size}
            </span>
          ))}
        </div>
        <p>
          Quantity: <input type="number" min="1" defaultValue="1" />
        </p>
        <p>Price: ${product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
