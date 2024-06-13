import React from 'react';
import './Home.css';
import oraclesmp from '../images/oraclesmp.jpg';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home-container">
        <header className="App-header">
        <div className="header-content">
          <img src={oraclesmp} alt="Logo" className="logo" />
          <h1 className="website-name">Oracle Content Library</h1>
          <nav>
          <ul className="header">
            <li>
              <Link to="/about" style={{color: 'blue', textDecoration: 'none', padding: '10px', fontWeight: 'bold' }}>About</Link>
            </li>
            <li>
              <Link to="/contact" style={{color: 'blue', textDecoration: 'none', padding: '10px', fontWeight: 'bold' }}>Contact</Link>
            </li>
          </ul>
        </nav>
          
        </div>
        
      </header>
      <main className="home-main">
                <section className="home-section">
                    <h2>List of some books</h2>
                    <table  border="1">
                        <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Book Name</th>
                            <th>Reference by</th>
                            <th>Desc.</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1.</td>
                            <td>"Oracle Database 12c"</td>
                            <td>Bob Bryla and Kevin Loney</td>
                            <td>This comprehensive guide covers all aspects of Oracle Database 12c, 
                                including installation, administration, SQL, PL/SQL, and advanced features.</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>"Oracle PL/SQL Programming"</td>
                            <td>Steven Feuerstein</td>
                            <td>A definitive guide to Oracle's powerful procedural language, PL/SQL, 
                                covering programming techniques, 
                                best practices, and performance optimization.</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>"Effective Oracle by Design"</td>
                            <td>Tom Kyte</td>
                            <td>This book focuses on designing and building high-performance Oracle database applications. 
                                It covers architecture, optimization, and scalability strategies.</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>"Expert Oracle Database Architecture" </td>
                            <td> Thomas Kyte</td>
                            <td>Offers deep insights into Oracle database architecture, 
                                internals, and programming techniques, 
                                suitable for developers and DBAs.
                            </td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>"Oracle SQL"</td>
                            <td>Alice Rischert</td>
                            <td>A practical guide that teaches SQL programming with Oracle Database through examples and exercises, 
                                suitable for beginners and intermediate users.</td>
                        </tr>
                        </tbody>
                    </table>
                    
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy; 2024 oracle content library. All rights reserved.</p>
            </footer>
        </div>
  );
  
}

export default Home;