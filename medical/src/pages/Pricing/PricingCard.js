import React from "react";

const PricingCard = () => {
  return (
    <div className="price-card">
      <div className="card-container">
        <div className="card-container-box">
          <div className="card-header">
            <h1>Simple</h1>
            <h2>$39</h2>
            <p>/Month</p>
            <hr />
          </div>
          <div className="card-details">
            <div className="card-details-list">
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
            </div>
            <button>Buy New</button>
          </div>
        </div>
        <div className="card-container-box">
          <div className="card-header-active">
            <div className="card-classic">
              <h1>Classic</h1>
            </div>
          </div>
          <hr className="hr-active" />
          <div className="card-details-active">
            <div className="card-details-list">
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
            </div>
            <button className="card-buton-active">Buy New</button>
          </div>
        </div>
        <div className="card-container-box">
          <div className="card-header">
            <h1>Premium</h1>
            <h2>$69</h2>
            <p>/Month</p>
            <hr />
          </div>
          <div className="card-details">
            <div className="card-details-list">
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
            </div>
            <button>Buy New</button>
          </div>
        </div>
        <div className="card-container-box">
          <div className="card-header">
            <h1>Luxury</h1>
            <h2>$119</h2>
            <p>/Month</p>
            <hr />
          </div>
          <div className="card-details">
            <div className="card-details-list">
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
              <p>Super package feature 1</p>
            </div>
            <button>Buy New</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
