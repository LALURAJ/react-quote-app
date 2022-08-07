import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const changeQuote = () => {
    fetchAdvice();
  };

  const fetchAdvice = () => {
    axios
      .get("https://favqs.com/api/qotd")
      .then((res) => {
        let quote = res.data.quote.body;
        setAdvice(quote);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="card">
      <h1 className="heading">{advice}</h1>
          <button className="button" onClick={changeQuote}>
            <span>quote</span>
            </button>
      </div>
    </div>
  );
}

export default App;
