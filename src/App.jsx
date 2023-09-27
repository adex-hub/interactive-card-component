import { useState } from "react";
import "./App.scss";
import { Complete } from "./components/Complete";
import { CardSystem } from "./components/CardSystem";
import { TransactionForm } from "./components/TransactionForm";

export default function App() {
  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvc, setCVC] = useState(0);

  const [isCompleted, setIsCompleted] = useState(false);

  function handleCardNo(num) {
    // Remove all non-digit characters from the input
    const trimmedInput = num.replace(/\D/g, "");

    let formattedNumber = "";

    for (let i = 0; i < trimmedInput.length; i++) {
      // Add a space every 4 digits
      if (i > 0 && i % 4 === 0) {
        formattedNumber += " ";
      }
      formattedNumber += trimmedInput[i];
    }

    setCardNo(formattedNumber);
  }

  const isMobile = window.innerWidth <= 824 ? true : false;

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    if (!cardNo) return;
    if (!month) return;
    if (!year) return;
    if (!cvc) return;

    setIsCompleted(true);
  }

  return (
    <div className="app">
      <CardSystem
        name={name}
        cardNo={cardNo}
        month={month}
        year={year}
        cvc={cvc}
        mode={isMobile}
      />
      {!isCompleted && (
        <TransactionForm
          name={name}
          onName={setName}
          cardNo={cardNo}
          onCardNo={handleCardNo}
          month={month}
          onMonth={setMonth}
          year={year}
          onYear={setYear}
          cvc={cvc}
          onCVC={setCVC}
          handleSubmit={handleSubmit}
        />
      )}
      {isCompleted && <Complete />}
    </div>
  );
}
