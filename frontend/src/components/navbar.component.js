import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor:'#5DBA34'}}>
        <Link to="/" className="navbar-brand" style={{color:'white',fontSize:30}}><em>CalPal</em></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link" style={{color:'white', fontSize:20}}><b>Calorie Count</b></Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link" style={{color:'white', fontSize:20}}><b>Add Food Item</b></Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link" style={{color:'white', fontSize:20}}><b>Create User</b></Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}