import { useEffect, useState } from "react";
import "./App.css";
import CardThank from "./components/CardThank";

// import CardThank from "./components/CardThank";

function App() {
  //*Aqui se obtienen los datos de las estrellas
  const [ratings, setRatings] = useState("");

  //! ----------------------------------------------

  //* cambio de la tarjeta principal a la tarjeta Thank
  const [change, setChange] = useState(true);

  const handleChange = () => {
    setChange(change == false);
  };

  //! ----------------------------------------------

  //*cambio de la tarjeta Thank a la tarjet principal


  //*validacion de que se ah selecionado un valor sean 1 o 2 o 3 estrellas
  const hadleEvent = () => {
    if (ratings == 1) {
      handleChange();
    } else if (ratings == 2) {
      handleChange();
    } else if (ratings == 3) {
      handleChange();
    } else if (ratings == 4) {
      handleChange();
    } else if (ratings == 5) {
      handleChange();
    } else {
      alert("Por favor Elije una calificacion");
    }
  };

  //! ----------------------------------------------

  //* codigo
  return (
    <>
      {change ? (
        <div className="main_container">
          <div className="card_container">
            <div className="container_star">
              <img src="./src/assets/icon-star.svg" alt="" />
            </div>
            <div className="container_text">
              <h1> How did we do?</h1>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="numbers">
              <button onClick={() => setRatings("1")}>1</button>
              <button onClick={() => setRatings("2")}>2</button>
              <button onClick={() => setRatings("3")}>3</button>
              <button onClick={() => setRatings("4")}>4</button>
              <button onClick={() => setRatings("5")}>5</button>
            </div>
            <div className="card__button_submit">
              <button className="submit" onClick={hadleEvent}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CardThank ratings={ratings} />
      )}

      
    </>
  );
}

export default App;
