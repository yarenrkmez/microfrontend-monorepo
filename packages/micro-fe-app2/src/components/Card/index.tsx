import React from 'react'
import "./card.css";

const Card = () => {
  React.useEffect(() => {
    window.addEventListener('navbarToCard', (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div className="card2">
      <h3>Card From App2</h3>
    </div>
  );
}

export default Card;