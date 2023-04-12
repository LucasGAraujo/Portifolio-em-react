import { useState, useEffect } from "react";
import axios from "axios";

function Motivacional() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="citacao">
      <h3>Fique com essa frase motivacional!</h3>
      <p>{quote}</p>
      <button onClick={getQuote}>Nova Citação</button>
      <h4>Texto consumido pela api 'https://api.quotable.io'</h4>
    </div>
  );
}

export default Motivacional;