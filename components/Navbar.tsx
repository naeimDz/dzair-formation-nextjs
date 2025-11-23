import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Calendar, Wrench } from 'lucide-react';
import logo from '../assets/images/fiinale-finale.png';

interface NavbarProps {
    onNavigate: (view: string) => void;
    currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'الرئيسية', icon: Home },
        { id: 'schedule', label: 'برنامج الدورات', icon: Calendar },
        { id: 'machines', label: 'الآلات', icon: Wrench },
    ];

    const handleNavClick = (view: string) => {
        onNavigate(view);
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-64 bg-industrial-dark border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xl font-bold text-white">القائمة</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = currentView === link.id;
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-industrial-yellow/10 text-industrial-yellow border-r-4 border-industrial-yellow'
                                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">{link.label}</span>
                                </button>
                            );
                        })}

                        <div className="my-4 border-t border-white/10" />

                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                    handleNavClick('home');
                                    setTimeout(() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }
                            }}
                            className="bg-industrial-yellow text-industrial-dark px-4 py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-colors"
                        >
                            سجل الآن
                        </button>
                    </div>

                    <div className="mt-auto text-center text-gray-500 text-sm">
                        <p>© 2025 Dzair Formation</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
