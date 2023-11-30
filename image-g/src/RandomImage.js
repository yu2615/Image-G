// RandomImage.js
import React, { useState } from 'react';
import axios from 'axios';

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
    generateRandomImage();
  };

  return (
    <div>
      <button onClick={generateRandomImage}>壁紙を生成</button>
      <button onClick={downloadImage}>壁紙をダウンロード</button>
      <button onClick={changeImage}>画像を変更</button>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="壁紙" style={{ maxWidth: '100%', marginTop: '20px' }} />
        </div>
      )}
    </div>
  );
};

export default RandomImage;
