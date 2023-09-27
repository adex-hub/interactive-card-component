export function CardSystem({ name, cardNo, month, year, cvc, mode }) {
  return (
    <div className="images">
      <img
        className="cards-bg"
        src={`images/bg-main-${mode ? "mobile" : "desktop"}.png`}
        alt="main-img"
      />

      <div className="cards">
        <div className="card-front">
          <img src="images/card-logo.svg" alt="card-logo" />
          <div className="card-number">
            {cardNo === "" ? "0000 0000 0000 0000" : cardNo}
          </div>
          <div className="last-details">
            <div className="name">{name === "" ? "Jane Appleseed" : name}</div>
            <div className="exp-date">
              {month === 0 ? "00" : month}/{year === 0 ? "00" : year}
            </div>
          </div>
        </div>
        <div className="card-back">
          <p className="value">{cvc === 0 ? "000" : cvc}</p>
        </div>
      </div>
    </div>
  );
}
