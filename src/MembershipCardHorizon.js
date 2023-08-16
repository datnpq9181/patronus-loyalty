import React from 'react';
import './MembershipCardHorizon.css';
import barcodeImage from './barcode.png'; // Replace with your barcode image

function MembershipCardHorizon() {
  return (
    <div className="membership-card-horizon">
      <div className="card-content-horizon">
        <div className="card-header-horizon">
          <h2>Patronus Rewards</h2>
        </div>
        <div className="customer-info-horizon">
          <div className="info-item-horizon">
            <span className="info-label-horizon">Name:</span> John Doe
          </div>
          <div className="info-item-horizon">
            <span className="info-label-horizon">Member Level:</span> Gold
          </div>
          <div className="info-item-horizon">
            <span className="info-label-horizon">Expiration:</span> 12/2023
          </div>
        </div>
      </div>
      <div className="barcode-container">
        <div className="barcode-horizon">
          {/* Replace with your barcode image */}
          <img src={barcodeImage} alt="Barcode" />
        </div>
      </div>
    </div>
  );
}

export default MembershipCardHorizon;
