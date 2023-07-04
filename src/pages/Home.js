import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div>
        <header className="hero">
          <h1>
            EXPERT PICKS. <br></br> PROVEN RESULTS.
          </h1>
          <p>
            Welcome to Lock It In Picks, your go-to platform for sports betting
            picks!
          </p>
        </header>
      </div>

      <div className="benefits">
        <div className="benefit">
          <h3>Expert Analysis</h3>
          <p>Our picks are backed by thorough research and expert analysis. </p>
        </div>
        <div className="benefit">
          <h3>Time-saving</h3>
          <p>
            {" "}
            Our team does the hard work for you, providing you with
            well-researched picks that you can trust.{" "}
          </p>
        </div>
        <div className="benefit">
          <h3>Increased Winning Potential</h3>
          <p>
            {" "}
            With our picks, you have access to carefully selected bets that
            offer favorable odds and higher chances of success.{" "}
          </p>
        </div>
      </div>

      <div className="consistency-matters">
        <div>
          <h1>CONSISTENCY MATTERS.</h1>
        </div>
        <div className="img-text">
          <div>
            <img
              className="winner"
              src="https://images.pexels.com/photos/5920859/pexels-photo-5920859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="winner"
            />
          </div>
          <div className="text-button">
            <h2>Win & Win Often</h2>
            <p>
              At LIN Picks, we excel in delivering exceptional results with our
              impressive 63% win rate. Week after week, day after day, we
              consistently achieve profitability, making us a trusted choice for
              sports bettors seeking reliable and lucrative outcomes.
            </p>
            <button className="get-picks">Get Picks Now</button>
          </div>
        </div>
      </div>

      <div>
        <h1>Subscription Plans</h1>
      </div>
    </div>
  );
};

export default Home;
