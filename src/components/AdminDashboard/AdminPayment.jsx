import React, { useState } from 'react';
import './AdminPayment.css'; // Ensure this contains the necessary CSS styles
import AdminSidebar from './AdminSidebar'; // Import the sidebar component
import AdminNavbar from './AdminNavbar';

const AdminPayment = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingPayment, setEditingPayment] = useState(null); // Keep track of the payment being edited
    const [newPayment, setNewPayment] = useState({
        userName: '',
        amount: '',
        date: '',
        method: '',
        status: 'Completed', // Default status
    });

    // Initial payments data
    const [payments, setPayments] = useState([
        { id: 1, userName: 'John Doe', amount: '500', date: '2024-11-20', method: 'Credit Card', status: 'Completed' },
        { id: 2, userName: 'Jane Smith', amount: '200', date: '2024-11-21', method: 'Debit Card', status: 'Pending' },
        // Add more payments here
    ]);

    // Handle the form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPayment((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission for adding or editing payment
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPayment) {
            // Update existing payment
            setPayments((prevPayments) =>
                prevPayments.map((payment) =>
                    payment.id === editingPayment.id
                        ? { ...payment, ...newPayment }
                        : payment
                )
            );
            console.log("Payment Updated: ", newPayment);
        } else {
            // Add new payment
            const newPaymentWithId = { ...newPayment, id: payments.length + 1 }; // Generate a new payment ID
            setPayments((prevPayments) => [...prevPayments, newPaymentWithId]);
            console.log("New Payment Added: ", newPaymentWithId);
        }

        // After submitting, hide the form and reset the states
        setShowForm(false);
        setEditingPayment(null);
        setNewPayment({
            userName: '',
            amount: '',
            date: '',
            method: '',
            status: 'Completed',
        });
    };

    // Handle edit button click
    const handleEditClick = (payment) => {
        setEditingPayment(payment); // Set the payment to be edited
        setNewPayment({ ...payment }); // Populate form with payment data
        setShowForm(true); // Show the form
    };

    // Handle delete button click
    const handleDeleteClick = (paymentId) => {
        // Remove the payment from the state
        setPayments((prevPayments) => prevPayments.filter((payment) => payment.id !== paymentId));
        console.log('Payment Deleted with ID:', paymentId);
    };

    return (
        <div><AdminNavbar/>
        <div className="admin-container-payment-list">
            {/* Sidebar in the 1st column */}
            <AdminSidebar />

            {/* Content section in the remaining columns */}
            <div className="content-container">
                <div className="payment-list-heading">
                    <h1 className="text-3xl font-bold" style={{ marginTop: '80px' }}>
                        Payment List
                    </h1>
                </div>

                {/* Conditional rendering of the form card for adding or editing payment */}
                {showForm && (
                    <div className="payment-form-card">
                        <h2 className="card-heading">{editingPayment ? 'Edit Payment' : 'Add New Payment'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={newPayment.userName}
                                    onChange={handleInputChange}
                                    placeholder="Enter User Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={newPayment.amount}
                                    onChange={handleInputChange}
                                    placeholder="Enter Amount"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={newPayment.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="method"
                                    name="method"
                                    value={newPayment.method}
                                    onChange={handleInputChange}
                                    placeholder="Enter Payment Method"
                                    required
                                />
                            </div>
                            <div>
                                <select
                                    name="status"
                                    value={newPayment.status}
                                    onChange={handleInputChange}
                                >
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </div>
                            <div className="form-buttons">
                                <button type="submit">{editingPayment ? 'Update' : 'Submit'}</button>
                                <button type="button" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Table displaying the list of payments */}
                <div className="payment-list-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th>User Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Method</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <tr key={payment.id}>
                                    <td>{payment.id}</td>
                                    <td>{payment.userName}</td>
                                    <td>{payment.amount}</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.method}</td>
                                    <td>{payment.status}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(payment)}>Edit</button>
                                        <button onClick={() => handleDeleteClick(payment.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AdminPayment;
