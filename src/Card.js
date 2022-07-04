import "./Card.css";
import imageIlustration from "./illustration-hero.svg";
import iconMusic from "./icon-music.svg";

function Card() {
  return (
    <div className="card">
      <header className="card__header">
        <img className="card__image" src={imageIlustration} alt="" />
      </header>
      <div className="card__content">
        <h1 className="card__title">Order Summary</h1>
        <p className="card__text">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <PlanContainer />
        <ProceedButton />
        <CancelOrderText />
      </div>
    </div>
  );
}

const PlanContainer = () => {
  return (
    <div className="card__plan-container">
      <img className="card__plan-icon" src={iconMusic} alt="" />
      <PlanDescription />
      <a className="card__plan-change card__plan-change--hover" href="?">
        Change
      </a>
    </div>
  );
};

const PlanDescription = () => {
  return (
    <div className="card__plan-description">
      <p className="card__plan-title">Annual Plan</p>
      <p className="card__plan-text">$59.99/year</p>
    </div>
  );
};

const ProceedButton = () => {
  return (
    <button type="submit" className="card__btn-proceed card__btn-proceed--hover">
      Proceed to Payment
    </button>
  );
};

const CancelOrderText = () => {
  return <p className="card__cancel-order card__cancel-order--hover">Cancel Order</p>;
};

export default Card;
