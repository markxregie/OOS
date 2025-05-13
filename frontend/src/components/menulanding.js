import React from 'react';
import './menulanding.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import menu1 from '../menus/americano.png';
import menu2 from '../menus/Blueberry Lychee Lemonade.png';
import menu3 from '../menus/Cucumber lemonade.png';
import menu4 from '../menus/greenapple Lemonade.png';
import menu5 from '../menus/Hazelnut frappe.png';
import menu6 from '../menus/java chips frappe.png';
import menu7 from '../menus/oreo cream frappe.png';
import menu8 from '../menus/salted caramel frappe.png';
import menu9 from '../menus/seasalt latte.png';
import menu10 from '../menus/spanishlatte.png';
import menu11 from '../menus/white mocha.png';
import menu12 from '../menus/Whitemocha.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const coffeeItems = [
    { name: 'Americano', type: 'Coffee', temp: 'Hot/Ice', image: menu1 },
    { name: 'Blueberry Lychee Lemonade', type: 'Lemonade', temp: 'Ice', image: menu2 },
    { name: 'Cucumber Lemonade', type: 'Lemonade', temp: 'Ice', image: menu3 },
    { name: 'Green Apple Lemonade', type: 'Lemonade', temp: 'Ice', image: menu4 },
    { name: 'Hazelnut Frappe', type: 'Frappe', temp: 'Ice', image: menu5 },
    { name: 'Java Chips Frappe', type: 'Frappe', temp: 'Ice', image: menu6 },
    { name: 'Oreo Cream Frappe', type: 'Frappe', temp: 'Ice', image: menu7 },
    { name: 'Salted Caramel Frappe', type: 'Frappe', temp: 'Ice', image: menu8 },
    { name: 'Sea Salt Latte', type: 'Latte', temp: 'Hot/Ice', image: menu9 },
    { name: 'Spanish Latte', type: 'Latte', temp: 'Hot/Ice', image: menu10 },
    { name: 'White Mocha', type: 'Latte', temp: 'Hot/Ice', image: menu11 },
    { name: 'White Mocha (Alt)', type: 'Latte', temp: 'Hot/Ice', image: menu12 },
  ];
  

const Menu = () => {
  return (
    <section className="menu-section">
      <h2 className="menu-title">Featured Drinks</h2>
      <p className="menu-description">
      Not sure what to order? Start with our best sellers the tried and true favorites that have earned their spot through countless happy sips and smiles
      </p>
      <div className="carousel-wrapper">
      <Carousel
        autoPlay
        interval={2000}           
        transitionTime={700}      
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        centerMode
        centerSlidePercentage={25}
        swipeable
        emulateTouch
        >
    {coffeeItems.map((item, index) => (
      <div className="card" key={index}>
        <div className="card-img-wrapper">
          <img
            src={item.image}
            alt={item.name}
            className="card-img"
          />
        </div>
        <div className="card-body">
          <h3>{item.name}</h3>
          <hr />
          <div className="card-info">
            <span>{item.type}</span>
            <span>{item.temp}</span>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
</div>

<button className="discover-button">Discover More</button>


    </section>
  );
};

export default Menu;