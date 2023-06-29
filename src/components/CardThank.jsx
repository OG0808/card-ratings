import React, { useCallback, useState } from "react";
import App from "../App";



const CardThank = ({ratings }) => {


  const [change, setChange] = useState(true)
  
  const handleChange = () => {
    setChange(change == false);
  };

  return (
  <>
  {
    change ?   <div className="cardThank__main">
    <div className="cardThank">
      <div className="cardThank__rating">
        <img src="/illustration-thank-you.svg" alt="" />
        <p>you selected {ratings} out of 5</p>
      </div>
      <div className="cardTank__thankyou">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
      <button onClick={handleChange}>Volver al inicio</button>
    </div>
    </div> : <App/>
  }
  </>
  );
};

export default CardThank;
