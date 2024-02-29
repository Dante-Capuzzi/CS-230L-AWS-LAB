import "bootstrap/dist/css/bootstrap.css";
import React from 'react';

function Card({ title, color })
{
  return (
    <div className="card" style={{ width: '18rem', marginRight: '15px', backgroundColor: color }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white', borderBottom: '1px solid white', paddingBottom: '15px', marginBottom: '15px' }}>{title}</h5>
        <p className="card-text" style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

export default Card;