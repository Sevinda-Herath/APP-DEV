// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/home'
import User from './pages/user'
import About from './pages/about'
import Rules from './pages/rules'


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserProfile" element={<User />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Rules" element={<Rules />} />


            {/* Add more routes here if needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
