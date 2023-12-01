// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/Image-g/public/Image-rogo.png" alt="App Logo" />
        <div className="title">
          <h1 className="app-title">ランダム壁紙アプリ</h1>
          <p className="app-description">
            このアプリでは、美しいランダムな壁紙を生成してダウンロードできます。<br />
            保存した画像は一覧で簡単に閲覧できます。
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
