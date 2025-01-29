import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="menu-container">
        <h1 className="menu-title">MENU</h1>
        <h4 className="menu-description">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to<br/> place an order, use the "Order Online" button located below the menu.
        </h4>
      </div>
    </div>
  )
}

export default Home;
