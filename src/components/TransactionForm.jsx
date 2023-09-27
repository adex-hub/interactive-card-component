import { Button } from "./Button";

export function TransactionForm({
  name,
  onName,
  cardNo,
  onCardNo,
  month,
  onMonth,
  year,
  onYear,
  cvc,
  onCVC,
  handleSubmit,
}) {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Cardholder Name</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          id="name"
          value={name}
          pattern="^[A-Za-z]+ [A-Za-z]+$"
          onChange={(e) => onName(e.target.value)}
        />
        <span className="input-error">
          {!name ? "Can't be blank" : "Enter your full name"}
        </span>

        <label htmlFor="card-no">Card Number</label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          id="card-no"
          value={cardNo}
          pattern="^.{19}$"
          onChange={(e) => onCardNo(e.target.value)}
        />
        <span className="input-error">Enter 16 digits</span>

        <div className="side-by-side-inputs">
          <div className="vertically-aligned">
            <label htmlFor="expiry-date">Exp. Date (MM/YY)</label>
            <div className="date-inputs">
              <input
                type="number"
                placeholder="MM"
                value={month === 0 ? "" : month}
                pattern="^\d{1,2}$"
                onChange={(e) => onMonth(Number(e.target.value))}
                id="expiry-date"
              />
              <input
                type="number"
                placeholder="YY"
                id="expiry-date"
                value={year === 0 ? "" : year}
                pattern="^\d{1,2}$"
                onChange={(e) => onYear(Number(e.target.value))}
              />
              <span className="input-error">Can't be blank</span>
            </div>
          </div>

          <div className="vertically-aligned">
            <label htmlFor="cvc">Cvc</label>
            <input
              type="number"
              placeholder="e.g. 123"
              id="cvc"
              value={cvc === 0 ? "" : cvc}
              pattern="^\d{3}$"
              onChange={(e) => onCVC(Number(e.target.value))}
            />

            <span className="input-error">Can't be blank</span>
          </div>
        </div>
        <Button>Confirm</Button>
      </form>
    </div>
  );
}
