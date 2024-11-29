import React from 'react';
import { BookOpen, Calendar, FileText, Home, Settings, Star, Archive, X } from 'lucide-react';
import { useMobileMenuStore } from '../store/useMobileMenuStore';

const navigation = [
  { name: 'Dashboard', icon: Home },
  { name: 'Academic', icon: BookOpen },
  { name: 'Events', icon: Calendar },
  { name: 'General', icon: FileText },
  { name: 'Important', icon: Star },
  { name: 'Archive', icon: Archive },
  { name: 'Settings', icon: Settings },
];

export function Sidebar() {
  const { isOpen, close } = useMobileMenuStore();

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static
      `}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <span className="text-xl font-bold text-gray-900">Menu</span>
          <button
            onClick={close}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-6 px-3 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => close()}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}