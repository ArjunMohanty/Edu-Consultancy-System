import React, { useState } from 'react';
import './UserAddress.css';

const UserAddress = () => {
    const [show, setShow] = useState(false);
    const [savedAddresses, setSavedAddresses] = useState([
       
    ]);

    const [newAddress, setNewAddress] = useState({
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveAddress = () => {
        if (newAddress.AddressLine1 && newAddress.AddressLine2 && newAddress.AddressLine3) {
            setSavedAddresses((prev) => [...prev, newAddress]);
            setNewAddress({
                AddressLine1: '',
                AddressLine2: '',
                AddressLine3: '',
            });
            setShow(false); // Close the form after saving
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleDeleteAddress = (index) => {
        const updatedAddresses = savedAddresses.filter((_, idx) => idx !== index);
        setSavedAddresses(updatedAddresses);
    };

    return (
        <div className="useraddress">
            {!show && <h1 className="mainhead1">Your Address</h1>}

            {!show && (
                <div className="addressin">
                    {savedAddresses.map((item, index) => (
                        <div className="address" key={index}>
                            <span>{item.AddressLine1}</span>,
                            <span>{item.AddressLine2}</span>,
                            <span>{item.AddressLine3}</span>
                            <div className="delbtn" onClick={() => handleDeleteAddress(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!show && (
               <div 
               className="addnewbtn" 
               onClick={() => setShow(true)} 
               style={{
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   width: '50px', 
                   height: '50px', 
                   backgroundColor: '#f0f0f0', 
                   borderRadius: '50%', 
                   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                   cursor: 'pointer',
                   margin: '20px auto',
               }}
           >
               <svg 
                   xmlns="http://www.w3.org/2000/svg" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   strokeWidth={1.5} 
                   stroke="currentColor" 
                   style={{
                       width: '24px', 
                       height: '24px', 
                       stroke: '#212EA0'
                   }}
               >
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
           </div>
           
            )}

            {show && (
                <div className="addnew">
                    <h1 className="mainhead1">Add New Address</h1>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="addressline1">Pincode</label>
                            <input
                                type="text"
                                name="AddressLine1"
                                value={newAddress.AddressLine1}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="addressline2">Address</label>
                            <input
                                type="text"
                                name="AddressLine2"
                                value={newAddress.AddressLine2}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="addressline3">State</label>
                            <input
                                type="text"
                                name="AddressLine3"
                                value={newAddress.AddressLine3}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <button className="mainbutton1" onClick={handleSaveAddress}>
                        Save
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserAddress;
