import React from 'react';

const ImageDisplay = ({ imageUrl, downloadImage }) => {
  return (
    <div>
      <img src={imageUrl} alt="壁紙" style={{ maxWidth: '100%', marginTop: '20px' }} />
      <button onClick={downloadImage}>壁紙をダウンロード</button>
    </div>
  );
};

export default ImageDisplay;
