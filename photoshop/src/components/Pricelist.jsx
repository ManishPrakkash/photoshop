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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full border-2 border-blue-600"></div>
            <span className="font-bold text-xl text-blue-900">NAME</span>
          </div>
        </div>
        <div className="mt-6">
          <ul>
            <li 
              onClick={() => navigate('/dashboard')} 
              className="flex items-center pl-6 py-3 text-gray-500 hover:bg-gray-100 cursor-pointer"
            >
              <LayoutDashboard className="w-6 h-6 mr-3 text-gray-500" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center pl-6 py-3 text-blue-600 bg-blue-50 border-l-4 border-blue-600">
              <List className="w-6 h-6 mr-3 text-blue-600" />
              <span>Price List</span>
            </li>
            <li 
              onClick={() => navigate('/report')} 
              className="flex items-center pl-6 py-3 text-gray-500 hover:bg-gray-100 cursor-pointer"
            >
              <FileText className="w-6 h-6 mr-3 text-gray-500" />
              <span>Report</span>
            </li>
            <li 
              onClick={() => navigate('/profile')} 
              className="flex items-center pl-6 py-3 text-gray-500 hover:bg-gray-100 cursor-pointer"
            >
              <UserCircle2 className="w-6 h-6 mr-3 text-gray-500" />
              <span>Profile</span>
            </li>
          </ul>
        </div>
        <div className="mt-auto p-6">
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            onClick={() => navigate('/logout')}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <div className="text-gray-500 text-sm">Pages / Price List</div>
            <h1 className="text-2xl font-bold text-blue-900">Price List</h1>
            <div className="text-green-500 text-sm mt-1">Pollachi Branch</div>
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

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-sm overflow-hidden flex"
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
                    <h3 className="text-lg font-semibold text-blue-900">{item.category}</h3>
                    <p className="text-sm text-gray-600">{item.size}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Material: {item.material}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xl font-bold text-blue-600">
                      Rs. {item.price}
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-blue-50 text-blue-600 p-1 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-blue-50 text-blue-600 p-1 rounded"
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
            <div className="text-lg font-semibold text-blue-900 mb-4">
              Total Price: Rs. {calculateTotalPrice()}
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Generate Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceListPage;