import React from 'react'
import "./card.css";

const Card = (props) => {

  React.useEffect(() => {
    window.addEventListener('navbarToCard', (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div className="card2">
      <h3>Card From App2</h3>
      {typeof props.title !== 'undefined' && <span>{props.title}</span>}
    </div>
  );
}

export default Card;