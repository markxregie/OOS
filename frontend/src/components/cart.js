import React, { useCallback, useState } from 'react';
import qrImage from '../assets/qr.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cart.css';

const Cart = () => {
  const [receiptFile, setReceiptFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    landmark: '',
    contact: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Spanish Latte', price: 59, quantity: 1, orderType: 'Pick-Up' },
    { id: 2, name: 'Spanish Latte', price: 59, quantity: 1, orderType: 'Delivery' },
    { id: 3, name: 'Spanish Latte', price: 59, quantity: 1, orderType: 'Pick-Up' },
  ]);

  const handleIncrement = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += 1;
    setCartItems(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setCartItems(updatedItems);
    }
  };

  const handleRemove = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  const calculateTotal = (item) => item.price * item.quantity;
  const grandTotal = cartItems.reduce((acc, item) => acc + calculateTotal(item), 0);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setReceiptFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.landmark.trim()) newErrors.landmark = 'Landmark is required';
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else if (!/^\d{11}$/.test(formData.contact)) {
      newErrors.contact = 'Contact number must be 11 digits';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fill in all required fields correctly.');
    } else if (!receiptFile) {
      toast.error('Please upload a payment receipt.');
    } else {
      setErrors({});
      toast.success('Checkout successful!');
      // Optional: Clear form and cart
      setFormData({ name: '', address: '', landmark: '', contact: '', email: '' });
      setReceiptFile(null);
      setCartItems([]);
    }
    
  };



  return (
    <section className="container-fluid py-3 px-5 mt-5 pt-5" style={{ backgroundColor: '#eaf4f6', minHeight: '100vh' }}>
      <div className="row">
        {/* Cart Section */}
        <div className="col-lg-8 mb-4">
  <div className="bg-white p-4 shadow-sm" style={{ borderRadius: '20px' }}>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h3 className="fw-bold" style={{ color: '#4B929D' }}>Cart</h3>
      <span className="fw-semibold">{cartItems.length} Items</span>
    </div>
    <div className="table-responsive">
      <table className="table align-middle" style={{ tableLayout: 'fixed' }}>
        <colgroup>
          <col style={{ width: '25%' }} /> {/* Product */}
          <col style={{ width: '15%' }} /> {/* Quantity */}
          <col style={{ width: '15%' }} /> {/* Price */}
          <col style={{ width: '18%' }} /> {/* Total - increased width */}
          <col style={{ width: '17%' }} /> {/* Order Type - increased width */}
          <col style={{ width: '10%' }} /> {/* Actions - reduced width */}
        </colgroup>
        <thead>
          <tr style={{ color: '#4B929D', verticalAlign: 'middle' }}>
            <th style={{ verticalAlign: 'middle' }}>Product</th>
            <th style={{ verticalAlign: 'middle', textAlign: 'center' }}>Quantity</th>
            <th style={{ verticalAlign: 'middle', textAlign: 'right' }}>Price</th>
            <th style={{ verticalAlign: 'middle', textAlign: 'right', paddingRight: '63px' }}>Total</th>
            <th style={{ verticalAlign: 'middle', paddingLeft: '20px' }}>Order Type</th>
            <th style={{ verticalAlign: 'middle' }}></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, i) => (
            <tr key={i}>
              <td style={{ verticalAlign: 'middle' }}>
                <div className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="product"
                    className="img-fluid me-2 rounded"
                    style={{ height: '60px', width: '60px', objectFit: 'cover' }}
                  />
                  <div>
                    <div className="fw-semibold">Specialty Coffee</div>
                    <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                      {item.name}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: '#4B929D',
                      color: 'white',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      padding: '0',
                    }}
                    onClick={() => handleDecrement(i)}
                  >
                    -
                  </button>
                  <span className="mx-2" style={{ minWidth: '20px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button
                    className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: '#4B929D',
                      color: 'white',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      padding: '0',
                    }}
                    onClick={() => handleIncrement(i)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td style={{ verticalAlign: 'middle', textAlign: 'right' }}>₱{item.price.toFixed(2)}</td>
              <td style={{ verticalAlign: 'middle', textAlign: 'right', paddingRight: '50px' }}>₱{calculateTotal(item).toFixed(2)}</td>
              <td style={{ verticalAlign: 'middle', paddingLeft: '20px' }}>{item.orderType}</td>
              <td style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                <button
                  className="btn btn-link text-danger p-0"
                  onClick={() => handleRemove(i)}
                >
                  <i className="bi bi-trash" style={{ fontSize: '1.2rem' }}></i>
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-end fw-bold" style={{ verticalAlign: 'right',  }}>Grand Total:</td>
            <td className="fw-bold" style={{ verticalAlign: 'middle', textAlign: 'right', paddingRight: '50px' }}>₱{grandTotal.toFixed(2)}</td>
            <td colSpan="2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


        {/* Pay Online Section */}
        <div className="col-lg-4">
          <div className="bg-white p-4 shadow-sm" style={{ borderRadius: '20px' }}>
            <h5 className="fw-bold mb-3 text-center">Pay Online</h5>
            <div className="text-center mb-3">
              <img src={qrImage} alt="QR Code" className="img-fluid mb-2" style={{ maxHeight: '180px' }} />
              <div className="fw-semibold">Pay Via QR</div>
              <div className="text-muted small">09123445573 | Dynar Tubigan</div>
              <p className="small text-muted mt-1">
                When using phone you can Screenshot the QR Code provided in the system and upload it in your
                <a href="#" className="ms-1">GCash App</a>
              </p>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              {['name', 'address', 'landmark', 'contact', 'email'].map((field) => (
                <div className="mb-2" key={field}>
                  <label className="form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
                </div>
              ))}
              <div className="mb-3">
                <label className="form-label">Upload Payment Receipt<span style={{ color: 'red' }}> *</span></label>
                <input
                  type="file"
                  id="receipt-upload"
                  className="d-none"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <label
                  htmlFor="receipt-upload"
                  className={`border rounded p-4 text-center ${dragActive ? 'border-primary' : ''}`}
                  style={{
                    backgroundColor: dragActive ? '#f0f8ff' : '#f8f9fa',
                    display: 'block',
                    cursor: 'pointer'
                  }}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {receiptFile ? (
                    <div>
                      <i className="bi bi-file-earmark-check-fill text-success" style={{ fontSize: '2rem' }}></i>
                      <p className="mt-2 mb-1">{receiptFile.name}</p>
                      <small className="text-muted d-block mb-2">
                        {(receiptFile.size / 1024).toFixed(2)} KB
                      </small>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          setReceiptFile(null);
                        }}
                      >
                        <i className="bi bi-arrow-repeat me-1"></i> Change File
                      </button>
                    </div>
                  ) : (
                    <div>
                      <i className={`bi ${dragActive ? 'bi-cloud-arrow-up-fill text-primary' : 'bi-cloud-arrow-up'}`}
                        style={{ fontSize: '2rem' }}></i>
                      <p className="mt-2 mb-1">Drag & Drop or Click to Browse</p>
                      <small className="text-muted">
                        <i className="bi bi-file-image me-1"></i>
                        Supports JPG, PNG, etc.
                      </small>
                    </div>
                  )}
                </label>
              </div>
              <button type="submit" className="btn w-100" style={{ backgroundColor: '#4B929D', color: 'white' }}>
                <i className="bi bi-credit-card me-2"></i> Check Out
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />

    </section>
  );
};

export default Cart;
