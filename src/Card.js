import "bootstrap/dist/css/bootstrap.css";
import React from 'react';

function Card()
{
  return (
    <div className="card" style={{ width: '18rem', marginRight: '10px' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

export default Card;