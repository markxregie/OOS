import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [selectedCategory, setSelectedCategory] = useState('Drinks');
    const [selectedSubcategory, setSelectedSubcategory] = useState('Barista Choice');
    const [selectedItem, setSelectedItem] = useState('');
    const [showModal, setShowModal] = useState(false);
  
    const handleCategoryClick = (category, subcategory) => {
      setSelectedCategory(category);
      setSelectedSubcategory(subcategory);
      setSelectedItem('');
    };
  
    const handleItemClick = (itemName) => {
      setSelectedItem(itemName);
      setShowModal(true);
    };
    const handleAddToCart = () => {
      toast.success(`${selectedItem} added to cart!`);
    };
    
    const handleBuyNow = () => {
      toast.info(`Buying ${selectedItem} now!`);
    };
    
  
    const handleClose = () => setShowModal(false);
  
    const currentItems = menuData[selectedCategory]?.[selectedSubcategory] || [];

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
{/* Modal for Item Details */}
<Modal show={showModal} onHide={handleClose} centered size="lg">
  <Modal.Header closeButton>
    <Modal.Title>{selectedItem}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="modal-image-placeholder">
            <div className="d-flex align-items-center justify-content-center h-100 bg-light">
              <span className="text-muted">Item Image</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4 style={{ color: '#4b929d' }}>{selectedItem}</h4>
          <p className="text-muted">
            A Coffee Drink Made With Espresso And Steamed Milk, Sweetened With Condensed Milk
            For A Creamy And Slightly Sweet Flavor.
          </p>
          <p className="h5">₱59</p>
          
          {/* Horizontal Group for Size and Type */}
          <div className="row mt-4">
            {/* Size Selection */}
            <div className="col-md-6">
              <h6>Size:</h6>
              <div className="btn-group w-100" role="group">
                <input
                  type="radio"
                  className="btn-check"
                  name="size"
                  id="size-12oz"
                  autoComplete="off"
                  defaultChecked
                />
                <label className="btn btn-outline-secondary" htmlFor="size-12oz">
                  12oz
                </label>
                
                <input
                  type="radio"
                  className="btn-check"
                  name="size"
                  id="size-16oz"
                  autoComplete="off"
                />
                <label className="btn btn-outline-secondary" htmlFor="size-16oz">
                  16oz
                </label>
              </div>
            </div>
            
            {/* Type Selection */}
            <div className="col-md-6">
              <h6>Type:</h6>
              <div className="btn-group w-100" role="group">
                <input
                  type="radio"
                  className="btn-check"
                  name="type"
                  id="type-hot"
                  autoComplete="off"
                  defaultChecked
                />
                <label className="btn btn-outline-secondary" htmlFor="type-hot">
                  Hot
                </label>
                
                <input
                  type="radio"
                  className="btn-check"
                  name="type"
                  id="type-cold"
                  autoComplete="off"
                />
                <label className="btn btn-outline-secondary" htmlFor="type-cold">
                  Cold
                </label>
              </div>
            </div>
          </div>
          
          {/* Sugar Level */}
          <div className="mt-3">
            <h6>Sugar Level:</h6>
            <div className="btn-group w-100" role="group">
              <input
                type="radio"
                className="btn-check"
                name="sugar-level"
                id="sugar-none"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="sugar-none">
                No sugar
              </label>
              
              <input
                type="radio"
                className="btn-check"
                name="sugar-level"
                id="sugar-low"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="sugar-low">
                5%
              </label>
              
              <input
                type="radio"
                className="btn-check"
                name="sugar-level"
                id="sugar-medium"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-outline-secondary" htmlFor="sugar-medium">
                50%
              </label>
              
              <input
                type="radio"
                className="btn-check"
                name="sugar-level"
                id="sugar-high"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="sugar-high">
                100%
              </label>
            </div>
          </div>
          
          {/* Add-ons */}
          <div className="mt-3">
            <h6>Adds on:</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="espresso-shot" />
              <label className="form-check-label" htmlFor="espresso-shot">
                Espresso Shot ₱50
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="seasalt-cream" />
              <label className="form-check-label" htmlFor="seasalt-cream">
                Seasalt cream ₱30
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="syrup-sauces" />
              <label className="form-check-label" htmlFor="syrup-sauces">
                Syrup/Sauces ₱50
              </label>
            </div>
          </div>
          
          {/* Order Method */}
          <div className="mt-4">
            <h6>Order method:</h6>
            <div className="btn-group w-100" role="group">
              <input
                type="radio"
                className="btn-check"
                name="order-method"
                id="method-pickup"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-outline-secondary" htmlFor="method-pickup">
                Pickup
              </label>
              
              <input
                type="radio"
                className="btn-check"
                name="order-method"
                id="method-delivery"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="method-delivery">
                Delivery
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer className="justify-content-between">
    <Button variant="outline-secondary" onClick={handleClose}>
      Close
    </Button>
    <div>
    <Button variant="outline-primary" className="me-2" onClick={handleAddToCart}>
      Add to cart
    </Button>
    <Button variant="primary" onClick={handleBuyNow}>
      Buy Now
    </Button>
    </div>
  </Modal.Footer>
</Modal>
<ToastContainer position="top-center" autoClose={2000} hideProgressBar />
      </div>
    </section>
  );
};

export default MenuContent;
