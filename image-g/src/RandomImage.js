// RandomImage.js
import React, { useState } from 'react';
import axios from 'axios';
import './RandomImage.css';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  const generateRandomImage = async () => {
    try {
      const response = await axios.get('https://source.unsplash.com/random/1920x1080');
      setImageUrl(response.request.responseURL);
    } catch (error) {
      console.error('画像の取得中にエラーが発生しました:', error);
    }
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'wallpaper.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const changeImage = () => {
    setImageUrl('');
    generateRandomImage();
  };

  return (
    <div className="random-image-container">
      <div className="button-container">
        <button className="button" onClick={generateRandomImage}>生成</button>
        <button className="button" onClick={changeImage}>チェンジ</button>
        {imageUrl && (
          <button className="button" onClick={downloadImage}>ダウンロード</button>
        )}
      </div>
      {imageUrl && (
        <div>
          <img className="wallpaper-image" src={imageUrl} alt="壁紙" />
        </div>
      )}
    </div>
  );
};

export default RandomImage;
