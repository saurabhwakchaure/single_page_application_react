import React from 'react';
import './Home.css';
import './About.css';
import oracleabout from '../images/oracle.jpg';
import oraclesmp from '../images/oraclesmp.jpg';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="home-container">
        <header className="App-header">
        <div className="header-content">
          <img src={oraclesmp} alt="Logo" className="logo" />
          <h1 className="website-name">Oracle Content Library</h1>
          <nav>
          <ul className="header">
            <li>
              <Link to="/" style={{color: 'blue', textDecoration: 'none', padding: '10px', fontWeight: 'bold' }}>Home</Link>
            </li>
            <li>
              <Link to="/contact" style={{color: 'blue', textDecoration: 'none', padding: '10px', fontWeight: 'bold' }}>Contact</Link>
            </li>
          </ul>
        </nav>
          
        </div>
        
      </header>
      <main className="home-main">  
                <section class="about-us">
                     <div class="container">
                        <h1>About Us</h1>
                        <div class="content">
                        <div class="text">
                            <p>Welcome to Our Company!</p>
                            <p>Your ultimate resource for comprehensive Oracle documentation, tutorials, and community support. Our mission is to empower developers and IT professionals with the knowledge and tools needed to harness the full potential of Oracle technologies. Whether you're a beginner or an expert, our extensive library offers something for everyone. Join us and explore the world of Oracle today!</p>
                            <p>Oracle Corporation was founded on June 16, 1977. It was originally named Software Development Laboratories (SDL) by its founders Larry Ellison, Bob Miner, and Ed Oates.</p>
                        </div>
                        <div class="image">
                        <img src={oracleabout} alt="Logo1" className="logo1" />
                        </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy; 2024 oracle content library. All rights reserved.</p>
            </footer>
        </div>
  );
  
}

export default About;