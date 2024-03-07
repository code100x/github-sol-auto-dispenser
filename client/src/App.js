import React from 'react';
import './App.css';

function App() {
  // Placeholder function for future fetch request to your server
  const fetchPRDetails = async () => {
    // This URL would be where your server endpoint is located.
    // const response = await fetch('http://localhost:3000/api/prs');
    // const data = await response.json();
    // console.log(data);
    alert("This would fetch PR details from the server.");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          GitHub PR and Solana Dispenser
        </p>
        <button onClick={fetchPRDetails}>
          Fetch PR Details
        </button>
      </header>
    </div>
  );
}

export default App;

