import React from 'react';
import './MembershipCard.css';
import barcodeImage from './barcode.png'; // Replace with your barcode image

function MembershipCard() {
  return (
    <div className="membership-card">
      <div className="card-header">
        <h2>Patronus Rewards</h2>
      </div>
      <div className="customer-info">
        <div className="info-item">
          <span className="info-label">Name:</span> John Doe
        </div>
        <div className="info-item">
          <span className="info-label">Member Level:</span> Gold
        </div>
        <div className="info-item">
          <span className="info-label">Expiration:</span> 12/2023
        </div>
      </div>
      <div className="barcode-container">
        <div className="barcode">
          {/* Replace with your barcode image */}
          <img src={barcodeImage} alt="Barcode" />
        </div>
      </div>
    </div>
  );
}

export default MembershipCard;
