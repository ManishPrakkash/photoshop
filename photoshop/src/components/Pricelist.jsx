import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  List, 
  UserCircle2, 
  Search, 
  Minus, 
  Plus 
} from 'lucide-react'; // Ensure lucide-react is installed and imported correctly
import { useNavigate } from 'react-router-dom'; // Add navigation

const PriceListPage = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [items, setItems] = useState([
    {
      id: 1,
      category: 'Portrait Frames',
      size: 'A4 Size - 8" x 12"',
      material: 'High-Quality Wood Finish',
      price: 1000,
      image: '/stay-fit-poster.jpg',
      quantity: 1
    },
    {
      id: 2,
      category: 'Landscape Frames',
      size: '20" x 24"',
      material: 'Premium Aluminum Alloy',
      price: 2200,
      image: '/web-banner-1.jpg',
      quantity: 1
    },
    {
      id: 3,
      category: 'Portrait Frames',
      size: '16" x 20"',
      material: 'Premium Polycarbonate',
      price: 1900,
      image: '/tagline-poster.jpg',
      quantity: 1
    },
    {
      id: 4,
      category: 'Landscape Frames',
      size: '4" x 6"',
      material: 'Durable Acrylic Frame',
      price: 500,
      image: '/banner-design.jpg',
      quantity: 1
    }
  ]);

  const updateQuantity = (id, change) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ));
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b flex items-center space-x-2">
          <span className="text-xl font-bold text-purple-600">NAME</span>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li 
              onClick={() => navigate('/dashboard')} // Add navigation to Dashboard
              className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer"
            >
              <LayoutDashboard className="mr-2" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center text-purple-600 bg-purple-100 p-2 rounded">
              <List className="mr-2" />
              <span>Price List</span>
            </li>
            <li 
              onClick={() => navigate('/report')} // Placeholder for Report navigation
              className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer"
            >
              <FileText className="mr-2" />
              <span>Report</span>
            </li>
            <li 
              onClick={() => navigate('/profile')} // Add navigation to Profile
              className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer"
            >
              <UserCircle2 className="mr-2" />
              <span>Profile</span>
            </li>
          </ul>
        </nav>
        
        <button 
          onClick={() => navigate('/logout')} // Add navigation to Logout
          className="absolute bottom-4 left-4 text-red-500 hover:bg-red-50 p-2 rounded"
        >
          Logout
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Price List</h1>
            <p className="text-gray-500">Pollachi Branch</p>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="pl-8 pr-4 py-2 border rounded-full w-64"
            />
            <Search className="absolute left-2 top-3 text-gray-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden flex"
            >
              <div className="w-1/2">
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.category}</h3>
                  <p className="text-sm text-gray-600">{item.size}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Material: {item.material}
                  </p>
                </div>
                
                <div className="mt-4">
                  <p className="text-xl font-bold text-purple-600">
                    Rs. {item.price}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-purple-100 text-purple-600 p-1 rounded"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-purple-100 text-purple-600 p-1 rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-right">
          <div className="text-lg font-semibold text-gray-800 mb-4">
            Total Price: Rs. {calculateTotalPrice()}
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
            Generate Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceListPage;