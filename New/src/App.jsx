import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';

export default function App() {
    return (
        <div className="bg-primary selection:bg-accent-amber/30 min-h-screen">
            <Navbar />
            <div className="pt-0">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/recipes" element={<Recipes />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
