import React from 'react';

function Avatar({ name, image, motto, onButtonClick}) {

  return (
    <li>
      <div className="card-2">
        <img className="card-img-top"
             src={image}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{motto}</p>
          <button onClick={ onButtonClick } >Switch on/off!</button>
        </div>
      </div>
    </li>
  )
}

export default Avatar;