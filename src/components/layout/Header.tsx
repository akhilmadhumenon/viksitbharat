import React, { useState } from 'react';
import { Bell, User, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

export function Header() {
  const { user, logout } = useAuthStore(); // Assuming logout is a method in your authStore
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    logout(); // Call the logout function from authStore
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold hover:text-indigo-100">
            Viksit Bharat Sports
          </Link>

          {/* Right-side controls */}
          <div className="flex items-center space-x-4">
            {/* Bell Icon */}
            <Bell className="h-6 w-6 cursor-pointer hover:text-indigo-100" />

            {/* Links for specific roles */}
            {user?.role === 'club_owner' && (
              <Link
                to="/fund-request"
                className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
              >
                Request Funds
              </Link>
            )}
            {user?.role === 'government' && (
              <Link
                to="/requests"
                className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
              >
                View Requests
              </Link>
            )}
            {user?.role !== 'government' && user?.role !== 'club_owner' && (
              <Link
                to="/feedback"
                className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors text-sm font-medium"
              >
                Submit Feedback
              </Link>
            )}

            {/* User Info or Login */}
            {user ? (
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <span className="text-sm">{user.name}</span>
                  <User className="h-6 w-6 hover:text-indigo-100" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
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
                className="inline-flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
