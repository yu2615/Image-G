import React, { useState } from 'react';
import axios from 'axios';
import ImageDisplay from './components/ImageDisplay';

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

  return (
    <div>
      <button onClick={generateRandomImage}>壁紙を生成</button>
      {imageUrl && <ImageDisplay imageUrl={imageUrl} downloadImage={downloadImage} />}
    </div>
  );
};

export default RandomImage;
