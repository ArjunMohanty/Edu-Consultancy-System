import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { UserProvider } from './components/UserContext.jsx'
import { CourseProvider } from './components/CourseContext.jsx'

=======
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>   

<<<<<<< HEAD
    <CourseProvider>
    <UserProvider>
    <App />
  </UserProvider>
  </CourseProvider>
=======
    
      <App />
    
>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8
    </BrowserRouter>
 


  </React.StrictMode>,
)
