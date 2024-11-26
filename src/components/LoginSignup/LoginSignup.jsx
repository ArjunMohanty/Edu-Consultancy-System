<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import './LoginSignup.css';
import cross_icon from '/src/assets/cross_icon.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../UserContext.jsx" // Import UserContext

const LoginSignUp = ({ setShowLogin }) => {
=======
import React, { useState } from 'react';
import './LoginSignup.css';
import cross_icon from '/src/assets/cross_icon.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = ({ setShowLogin, setUsername }) => {
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8
    const [currState, setCurrState] = useState("Sign Up");
    const [username, setUsernameLocal] = useState(""); // Local state for signup
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
<<<<<<< HEAD
    const { setUser } = useContext(UserContext); // Access setUser from context
=======
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8085/api/v1/user/save", {
                username: username,
                email: email,
                password: password,
            });
<<<<<<< HEAD
    
            // Update UserContext after signup
            setUser({ username, email, password });
    
            alert("User Registration Successful");
            setShowLogin(false);
=======
            alert("User Registration Successful");
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8
        } catch (err) {
            alert("Error occurred: " + err.message);
        }
    }
<<<<<<< HEAD
    
    async function login(event) {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:8085/api/v1/user/login", {
                email: email,
                password: password,
            });
    
            if (res.data.message === "Email not exists") {
                alert("Email not exists");
            } else if (res.data.message === "Login Success") {
                const userData = { 
                    username: res.data.username, 
                    email: email, 
                    userId: res.data.userId // Assuming `userId` is returned from your backend
                };
                localStorage.setItem("user", JSON.stringify(userData)); // Save user data including userId
                setUser(userData); // Update context with the new user data
                setShowLogin(false); // Close login modal
            }
        } catch (err) {
            alert("Error occurred: " + err.message);
        }
    }
    
    const logout = () => {
        // Clear user data from UserContext and localStorage
        setUser(null); // Reset user in context
        localStorage.removeItem("user"); // Remove user data from localStorage
        navigate('/'); // Optionally, navigate to a different page (e.g., home)
    };
    
=======

    async function login(event) {
      event.preventDefault(); // Prevent default form submission behavior
      try {
          const res = await axios.post("http://localhost:8085/api/v1/user/login", {
              email: email,
              password: password,
          });
          if (res.data.message === "Email not exists") {
              alert("Email not exists");
          } else if (res.data.message === "Login Success") {
              setUsername(res.data.username); // Store username in global state
              setShowLogin(false); // Hide login popup
              navigate("/dashboard", { state: { username: res.data.username } });  // Navigate to dashboard with username
          }
      } catch (err) {
          alert("Error occurred: " + err.message);
      }
  }
  
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8

    return (
        <div className='login-popup'>
            <form className='login-popup-container' onSubmit={currState === "Sign Up" ? save : login}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={cross_icon} alt='' />
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Sign Up" && (
                        <input type='text' placeholder='Name'
                            value={username}
                            onChange={(event) => setUsernameLocal(event.target.value)}
                            required
                        />
                    )}
                    <input type='email' placeholder='E-mail'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <input type='password' placeholder='Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
                }
<<<<<<< HEAD
                     <p>
                     Login as Admin?{" "}
                      <span className='adminlogin'>
                               <Link 
                                   to="/admin" 
                                    onClick={() => setShowLogin(false)}    >
                                              Click Here
        </Link>
    </span>
</p>


=======
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8
            </form>
        </div>
    );
}

export default LoginSignUp;
