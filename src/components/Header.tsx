import React from 'react';
import { Bell, Menu, Moon, Search, LogOut } from 'lucide-react';
import { useMobileMenuStore } from '../store/useMobileMenuStore';
import { useAuthStore } from '../store/useAuthStore';

export function Header() {
  const { toggle } = useMobileMenuStore();
  const { user, logout } = useAuthStore();

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={toggle}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="ml-2 text-xl font-bold text-gray-900">UniBoard</h1>
          </div>
          
          <div className="flex-1 max-w-xl px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search notices..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-500" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Moon className="h-6 w-6 text-gray-500" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-gray-900">{user?.name}</span>
                <span className="text-xs text-gray-500 capitalize">{user?.role}</span>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-md hover:bg-gray-100"
                title="Sign out"
              >
                <LogOut className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}