
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const result = await axios.get("https://farmdirectserver.vercel.app/getimage");
      setImages(result.data.data || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.length > 0 ? (
          images.map((data, index) => (
            data && data.image ? (
              <div key={index} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                <img
                  src={data.image}
                  alt={data.name}
                  style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                />
                <h3>{data.name}</h3>
                <p>Price: ${data.price}</p>
                <p>Weight: {data.grams}</p>
              </div>
            ) : null
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
