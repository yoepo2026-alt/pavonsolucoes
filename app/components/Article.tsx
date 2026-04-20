import React from 'react';
import './Article.css';

const Article = ({ imageSrc, title, content }: { imageSrc: string; title: string; content: string }) => (
  <div className="article">
    <div className="article-image">
      <img src={imageSrc} alt="Article Image" />
    </div>
    <div className="article-content">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </div>
);

export default Article;