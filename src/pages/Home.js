import React from "react";
import Logo from '../images/logo.png'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home">
      <div>
        <header className="hero">
          <h1>
            EXPERT PICKS. <br></br> PROVEN RESULTS. <br></br> "LOCK IT IN."
          </h1>
          <p>
            Welcome to Lock It In Picks, your go-to platform for sports betting
            picks!
          </p>
          <Link className='get-picks-hero' to="plans" smooth={true} duration={500}>Get Picks</Link>
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
            Our team does the hard work for you, providing you with well-researched picks that you can trust.
          </p>
        </div>
        <div className="benefit">
          <h3>Increased Winning Potential</h3>
          <p>
            With our picks, you have access to carefully selected bets that offer favorable odds and higher chances of success.
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
            <h2>Win with LIN.</h2>
            <p>
              At (Lock It In) <b>LIN Picks</b>, we excel in delivering
              exceptional results with our impressive <b>67% win rate</b>. Week
              after week, day after day, we consistently achieve profitability,
              making us a <b>trusted choice</b> for sports bettors seeking
              reliable and lucrative outcomes.
            </p>
            <Link className='get-picks' to="plans" smooth={true} duration={500}>Get Picks</Link>
          </div>
        </div>
      </div>

      <div className="testimonials">
  <h1>Testimonials</h1>
  <p>See What Our Clients Are Saying</p>
  <div className="testimonials-container">
    <div className="test">
      <img src="https://thevegasparlay.com/wp-content/uploads/2013/11/parlay-ticket-Bears.jpg" />
      <h2>"I WON $500 only with $10!"</h2>
      <p>- Jimmy </p>
    </div>
    <div className="test">
      <img src="https://images.actionnetwork.com/blog/2019/04/betting-ticket-1.jpg" />
      <h2>"I went from about to giving up to winning!"</h2>
      <p>- Matthew </p>
    </div>
    <div className="test">
      <img src="https://www.reviewjournal.com/wp-content/uploads/2020/12/14615182_web1_Parlaytix.jpg?crop=1" />
      <h2>"LIN DOES IT AGAIN"</h2>
      <p>- Andrew </p>
    </div>
  </div>
</div>

      <div className="plans">
        <h1>Subscription Plans</h1>
        <p>Sign Up To Start Winning Today</p>
        <div className="plans-container">
          <div className="day">
            <h2>Day</h2>
            <ul>
              <li>Get Access To All LIN Picks For a Day</li>
            </ul>
            <h3>Price: $10</h3>
            <button>Sign Up Now</button>
          </div>
          <div className="week">
            <h2>Week</h2>
            <ul>
              <li>Get Access To All LIN Picks For a Week</li>
            </ul>
            <h3>Price: $20</h3>
            <button>Sign Up Now</button>
          </div>
          <div className="month">
            <h2>Month</h2>
            <ul>
              <li>Get Access To All LIN Picks For a Month</li>
            </ul>
            <h3>Price: $30</h3>
            <button>Sign Up Now</button>
          </div>
        </div>
      </div>
      <div className="footer-above">
        <img src={Logo} />

      </div>
      <footer class="footer">
  <div class="footer-content">
    <p>&copy; 2023 Lock It In Picks. All rights reserved.</p>
    <p className="small-footer">LockItIn.com is not responsible for any decisions made, financial or otherwise, based on information or links provided by on LockItIn.com. LockItIn.com does not guarantee winnings and cannot be held liable for losses resulting from the use of information obtained from here. LockItIn.com does not offer bookmaking services or gambling capabilities on its website. LockItIn.com is a sports information website and LockItIn.com is not responsible in any way regarding picks and predictions. If you encounter gambling problems please contact gambling help authorities in your area.</p>
    <ul class="footer-links">
      <li><a href="#">Terms of Service</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</footer>
    </div>
  );
};

export default Home;
