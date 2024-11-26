import React, { useState } from 'react';
import './Users.css'; // Ensure this contains the necessary CSS styles
import AdminSidebar from './AdminSidebar'; // Import the sidebar component
import AdminNavbar from './AdminNavbar';

const Users = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingUser, setEditingUser] = useState(null); // Keep track of the user being edited
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
    });
    const [users, setUsers] = useState([
        { id: 1, name: 'Praveena', email: 'praveena@gmail.com' },
        { id: 2, name: 'Jinu', email: 'jinu@gmail.com' },
        // You can add more users here
    ]);

    // Handle the form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission for new user or edited user
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUser) {
            // Handle user update logic (e.g., API call to update user)
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === editingUser.id
                        ? { ...user, name: newUser.name, email: newUser.email }
                        : user
                )
            );
            console.log('User Updated: ', newUser);
        } else {
            // Logic to add a new user (e.g., push to list or send to API)
            const newUserWithId = { ...newUser, id: users.length + 1 }; // Generate a new user ID
            setUsers((prevUsers) => [...prevUsers, newUserWithId]);
            console.log('New User Added: ', newUserWithId);
        }
        // After submitting, hide the form
        setShowForm(false);
        setEditingUser(null); // Reset editing user state
        setNewUser({
            name: '',
            email: '',
        });
    };

    // Handle edit button click
    const handleEditClick = (user) => {
        setEditingUser(user); // Set the user to be edited
        setNewUser({ name: user.name, email: user.email }); // Populate form with user data
        setShowForm(true); // Show the form
    };

    // Handle delete button click
    const handleDeleteClick = (userId) => {
        // Remove the user from the state
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        console.log('User Deleted with ID:', userId);
    };

    return (
        <div><AdminNavbar/>
        <div className="admin-container-user-list">
            {/* Sidebar in the 1st column */}
            <AdminSidebar />

            {/* Content section in the remaining columns */}
            <div className="content-container">
                <div className="user-list-heading">
                    <h1 className="text-3xl font-bold" style={{ marginTop: '80px' }}>
                        User List
                    </h1>
                    <button
                        style={{ marginTop: '84px', marginRight: '250px' }}
                        onClick={() => setShowForm(!showForm)} // Toggle form visibility
                    >
                        Add User
                    </button>
                </div>

                {/* Conditional rendering of the form card */}
                {showForm && (
                    <div className="user-form-card">
                        <h2 className="card-heading">{editingUser ? 'Edit User' : 'Add New User'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <div className="form-buttons">
                                <button type="submit">{editingUser ? 'Update' : 'Submit'}</button>
                                <button type="button" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="user-list-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(user)}>Edit</button>
                                        <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
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

export default Users;
