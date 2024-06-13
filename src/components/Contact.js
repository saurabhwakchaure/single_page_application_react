import React from 'react';
import './Home.css';
import './Contact.css';
import oraclesmp from '../images/oraclesmp.jpg';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
function Contact() {
    return(
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
              <Link to="/about" style={{color: 'blue', textDecoration: 'none', padding: '10px', fontWeight: 'bold' }}>About</Link>
            </li>
          </ul>
        </nav>
          
        </div>
        
      </header>
      <main className="home-main">
                <section className="home-section">
                    <h2>Contact Us</h2>
                    <div class="form-container">
            
                    <div class="form-content">
                        
                    <form>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required></input>

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required></input>

                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
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

export default Contact;