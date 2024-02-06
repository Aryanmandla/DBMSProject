import React from 'react'
import '../Css/CardButton.css';
function CardButton({ text, onClick }) {
  return (
    <button className='card-button' onClick={onClick}>
      {text}
    </button>
  )
}

export default CardButton