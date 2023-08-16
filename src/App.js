import React from 'react';
import './App.css';
import MembershipCard from './MembershipCard'; // Import the MembershipCard component
import MembershipCardHorizon from './MembershipCardHorizon'; // Import the MembershipCard component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Patronus Loyalty Program</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Rewards</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="content">
        <h2>About Our Program</h2>
        <p>Our loyalty program rewards you for being a valued customer. Earn points for every purchase and redeem them for exciting rewards!</p>
      </section>

      {/* Include the MembershipCard component */}
      <MembershipCard /> <MembershipCardHorizon />

      <footer>
        <p>&copy; 2023 WeDev Team. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
