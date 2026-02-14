import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-secondary px-6 md:px-12 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div>
                <h3 className="text-white text-xl mb-6 tracking-widest">Food Bridge</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                    Engineered flavor. Elevated craft. A culinary journey through precision and tradition.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h4 className="text-white/90 text-sm font-medium mb-6">Explore</h4>
                    <ul className="space-y-4 text-white/40 text-sm">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li className="hover:text-white transition-colors cursor-pointer">Location</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white/90 text-sm font-medium mb-6">Connect</h4>
                    <ul className="space-y-4 text-white/40 text-sm">
                        <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col justify-end md:items-end">
                <p className="text-white/20 text-xs">
                    © 2026 Food Bridge. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
