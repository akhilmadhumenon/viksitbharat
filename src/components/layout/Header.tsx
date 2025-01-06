import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, LogIn, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { NotificationBell } from '../notifications/NotificationBell';

export function Header() {
  const { user, logout } = useAuthStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const NavLinks = () => (
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
    <>
      {user?.role === 'club_owner' && (
        <>
          <Link 
            to="/fund-request" 
            className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Funds
          </Link>
          <Link 
            to="/my-requests" 
            className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Requests
          </Link>
        </>
      )}
      {user?.role === 'government' && (
        <>
          <Link 
            to="/requests" 
            className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            View Requests
          </Link>
          <Link 
            to="/escalation-matrix" 
            className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Escalation Matrix
          </Link>
        </>
      )}
      {user?.role !== 'government' && user?.role !== 'club_owner' && (
      <>  
        <Link 
        to="/about" 
        className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About Us
      </Link>
        <Link
          to="/feedback"
          className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Submit Feedback
        </Link>
      </>
      )}
    </>
    </div>
  );

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="p-2 rounded-md hover:bg-indigo-700"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/" className="text-xl font-bold hover:text-indigo-100 ml-4">
              Viksit Bharat Sports
            </Link>
          </div>

          {/* Right Section (Notifications and User) */}
          <div className="flex items-center space-x-4">
            <NotificationBell />
            {user ? (
              <div className="relative">
                <div onClick={toggleDropdown} className="flex items-center space-x-3 cursor-pointer">
                  <span className="text-sm hidden sm:inline">{user.name}</span>
                  <User className="h-6 w-6 hover:text-indigo-100" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                    <button 
                      onClick={handleLogout} 
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}
          </div>
        </div>

        {/* Navigation Menu (Universal) */}
        {isMobileMenuOpen && (
          <div className="py-4 space-y-2">
            <NavLinks />
          </div>
        )}
      </div>
    </header>
  );
}
