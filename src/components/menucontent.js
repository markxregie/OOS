import React, { useState } from 'react';
import './menu.css';

const menuData = {
    Drinks: {
      'Barista Choice': ['Iced Americano', 'Hot Latte', 'Caramel Macchiato', 'Mocha Latte'],
      'Specialty Coffee': ['Espresso Tonic', 'Cold Brew', 'Nitro Cold Brew', 'Iced Coffee'],
      'Premium Coffee': ['Hazelnut Latte', 'Caramel Macchiato', 'Vanilla Latte', 'Cinnamon Dolce Latte'],
      'Non-Coffee': ['Hot Chocolate', 'Matcha Latte', 'Vanilla Bean Frappe', 'Strawberry Smoothie'],
      'Frappe': ['Mocha Frappe', 'Strawberry Frappe', 'Cookies & Cream Frappe', 'Choco Frappe'],
      'Sparkling Series': ['Lemon Sparkle', 'Berry Sparkle', 'Citrus Sparkle', 'Mango Sparkle'],
      'Milk Tea': ['Classic Milk Tea', 'Wintermelon Milk Tea', 'Taro Milk Tea', 'Brown Sugar Milk Tea'],
    },
    Food: {
      'Rice Meals': ['Tapsilog', 'Adobo Rice', 'Longsilog', 'Bacon Rice'],
      Pasta: ['Carbonara', 'Spaghetti', 'Penne Arrabbiata', 'Mac and Cheese'],
      Sandwich: ['Ham & Cheese', 'Chicken Sandwich', 'BLT', 'Club Sandwich'],
      Snacks: ['Fries', 'Nachos', 'Onion Rings', 'Spring Rolls'],
      Frappe: ['Choco Frappe', 'Cookies & Cream', 'Mango Frappe', 'Caramel Frappe'],
      'Sparkling Series': ['Food Sparkle 1', 'Food Sparkle 2', 'Food Sparkle 3', 'Food Sparkle 4'],
      'Milk Tea': ['Brown Sugar MT', 'Okinawa MT', 'Mango Milk Tea', 'Matcha MT'],
    },
  };


const MenuContent = () => {
  // Set default state to Drinks > Barista Choice
  const [selectedCategory, setSelectedCategory] = useState('Drinks');
  const [selectedSubcategory, setSelectedSubcategory] = useState('Barista Choice');
  const [selectedItem, setSelectedItem] = useState('');

  const handleCategoryClick = (category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setSelectedItem('');
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const currentItems =
    menuData[selectedCategory]?.[selectedSubcategory] || [];

  return (
    <section className="menu-content-section">
      <div className="menu-wrapper">
        {/* Left Sidebar */}
        <aside className="menu-sidebar">
          <h2 className="menu-title">Menu</h2>
          <div className="menu-category">
            <h3>Drinks</h3>
            <ul>
              {Object.keys(menuData.Drinks).map((subcat) => (
                <li
                  key={subcat}
                  onClick={() => handleCategoryClick('Drinks', subcat)}
                >
                  {subcat}
                </li>
              ))}
            </ul>
            <h3>Food</h3>
            <ul>
              {Object.keys(menuData.Food).map((subcat) => (
                <li
                  key={subcat}
                  onClick={() => handleCategoryClick('Food', subcat)}
                >
                  {subcat}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Side Content */}
        <div className="menu-items">
          {/* Search Bar */}
          <div className="search-container w-100">
            <div className="input-group" style={{ maxWidth: '500px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Our Coffee, Merch"
              />
              <button className="btn btn-primary" type="button">
                🔍
              </button>
            </div>
          </div>

          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mt-3 mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Menu</li>
              {selectedCategory && (
                <li className="breadcrumb-item">{selectedCategory}</li>
              )}
              {selectedSubcategory && (
                <li className="breadcrumb-item">{selectedSubcategory}</li>
              )}
              {selectedItem && (
                <li className="breadcrumb-item active" aria-current="page">
                  {selectedItem}
                </li>
              )}
            </ol>
          </nav>

          {/* Item Grid */}
          <div className="items-grid">
            {currentItems.map((item, index) => (
              <div
                className="item-card"
                key={index}
                onClick={() => handleItemClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <div className="item-image-placeholder">Image</div>
                <div className="item-name-placeholder">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuContent;
