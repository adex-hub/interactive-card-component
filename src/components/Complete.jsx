import { Button } from "./Button";

export function Complete() {
  return (
    <div className="complete-container">
      <div className="thanks-display">
        <img src="images/icon-complete.svg" alt="complete-icon" />
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <Button>Continue</Button>
      </div>
    </div>
  );
}
