import React from 'react';
import './Card.css';

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="content">{children}</div> {/* Wrap content in a div */}
    </div>
  );
}


export default Card;
