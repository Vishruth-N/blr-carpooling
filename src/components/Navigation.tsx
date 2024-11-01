import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, PlusCircle, MessageCircle, UserCircle } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around py-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }
          >
            <Search size={24} />
            <span className="text-xs mt-1">Search</span>
          </NavLink>
          <NavLink
            to="/add-trip"
            className={({ isActive }) =>
              `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }
          >
            <PlusCircle size={24} />
            <span className="text-xs mt-1">Add Trip</span>
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }
          >
            <MessageCircle size={24} />
            <span className="text-xs mt-1">Messages</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`
            }
          >
            <UserCircle size={24} />
            <span className="text-xs mt-1">Profile</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}