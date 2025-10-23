import { useState } from "react";
import Rate from "./components/Rate";
import Done from "./components/Done";
import "./App.css";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  function handleRateSubmit(num) {
    setRating(num);
    setSubmitted(true);
  }

  return (
    <div className="app-container">
      {submitted ? (
        <Done rating={rating} />
      ) : (
        <Rate onRateSubmit={handleRateSubmit} />
      )}
      <footer class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Donnish</a>.
      </footer>
    </div>
  );
}
