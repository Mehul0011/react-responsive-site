import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes> 
                <Route path='/' exact element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;