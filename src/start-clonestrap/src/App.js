import React from 'react';
import './App.css';
import logo from './navbar-logo.svg'
import cart from './service.png'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isMobileMenuOpen: false,
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    })
  }

  render() {
    return (
      <div className="site">
        <nav className="site-nav">
          <div className="site-nav-contain">
            <div className="nav-section">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="nav-section">
              <button className="hamburguesa" onClick={this.toggleMobileMenu}>Menu &#9776;</button>
              <ul className={`nav-list ${
                  this.state.isMobileMenuOpen ? 'nav-list-open' : null 
                }`}>
                <li className="nav-list-item"><a className="nav-list-link" href="http://example.com">Services</a></li>
                <li className="nav-list-item"><a className="nav-list-link" href="http://example.com">Portfolio</a></li>
                <li className="nav-list-item"><a className="nav-list-link" href="http://example.com">About</a></li>
                <li className="nav-list-item"><a className="nav-list-link" href="http://example.com">Team</a></li>
                <li className="nav-list-item"><a className="nav-list-link" href="http://example.com">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="site-header">
          <p className="kicker">Welcome to our studio!</p> 
          <h2 className="lead">It's nice to meet you</h2>
          <a className="cta" href="http://example.com">Tell me more</a>
        </header>

        <section class="services">
          <h2 className="services-heading">Services</h2>
          <p className="services-sub">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="services-group">
            <div className="service">
              <img src={cart} alt="E-Commerce Shopping Cart" />
              <h3>E-Commerce</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="service">
              <img src={cart} alt="E-Commerce Shopping Cart" />
              <h3>E-Commerce</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="service">
              <img src={cart} alt="E-Commerce Shopping Cart" />
              <h3>E-Commerce</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
