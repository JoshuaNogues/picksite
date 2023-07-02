import React from 'react';

const Home = () => {
  return (
    <div className='home'>
      <div>
        <header className="hero">
          <h1>Lock It In Picks</h1>
          <p>Welcome to Lock It In Picks, your go-to platform for sports betting picks!</p>
        </header>
      </div>

      <div className='benefits'>

        <div>
          <h3>Expert Analysis</h3>
          <p>Our picks are backed by thorough research and expert analysis. </p>
        </div>
        <div>
        <h3>Time-saving</h3>
          <p> Our team does the hard work for you, providing you with well-researched picks that you can trust. </p>
        </div>
        <div>
        <h3>Increased Winning Potential</h3>
          <p> With our picks, you have access to carefully selected bets that offer favorable odds and higher chances of success. </p>
        </div>

      </div>

    </div>
  );
};

export default Home;
