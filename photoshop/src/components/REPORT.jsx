import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  List, 
  UserCircle2, 
  MoreHorizontal, 
  Download 
} from 'lucide-react';

const ReportPage = () => {
  const [paymentDetails] = useState([
    { 
      name: 'Aadhavan', 
      address: 'Coimbatore', 
      date: '12.Jun.2024', 
      amount: 2500 
    },
    { 
      name: 'Ajay', 
      address: 'Tirupur', 
      date: '21.Jan.2024', 
      amount: 4000 
    },
    { 
      name: 'Oviya', 
      address: 'Chennai', 
      date: '13.Aug.2024', 
      amount: 800 
    },
    { 
      name: 'Intiyan', 
      address: 'Tirunelveli', 
      date: '24.Aug.2024', 
      amount: 1500 
    },
    { 
      name: 'Jeevan', 
      address: 'Karur', 
      date: '14.Sep.2024', 
      amount: 4500 
    },
    { 
      name: 'Sanjana', 
      address: 'Coimbatore', 
      date: '21.Sep.2024', 
      amount: 2455 
    },
    { 
      name: 'Vijay', 
      address: 'Pollachi', 
      date: '15.Oct.2024', 
      amount: 1800 
    },
    { 
      name: 'Pranav', 
      address: 'Namakal', 
      date: '28.Oct.2024', 
      amount: 1000 
    },
    { 
      name: 'Aleya', 
      address: 'Erode', 
      date: '02.Nov.2024', 
      amount: 2600 
    },
    { 
      name: 'Meera', 
      address: 'Kanyakumari', 
      date: '08.Nov.2024', 
      amount: 3200 
    },
    { 
      name: 'Dhev', 
      address: 'Viluppuram', 
      date: '05.Dec.2024', 
      amount: 1800 
    }
  ]);

  // Weekly payments data (simulated to match graph in image)
  const weeklyPayments = [
    { week: 17, amount: 60 },
    { week: 18, amount: 80 },
    { week: 19, amount: 40 },
    { week: 20, amount: 90 },
    { week: 21, amount: 50 },
    { week: 22, amount: 70 },
    { week: 23, amount: 60 },
    { week: 24, amount: 75 },
    { week: 25, amount: 65 }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b flex items-center space-x-2">
          <span className="text-xl font-bold text-purple-600">NAME</span>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded">
              <LayoutDashboard className="mr-2" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded">
              <List className="mr-2" />
              <span>Price List</span>
            </li>
            <li className="flex items-center text-purple-600 bg-purple-100 p-2 rounded">
              <FileText className="mr-2" />
              <span>Report</span>
            </li>
            <li className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded">
              <UserCircle2 className="mr-2" />
              <span>Profile</span>
            </li>
          </ul>
        </nav>
        
        <button className="absolute bottom-4 left-4 text-red-500 hover:bg-red-50 p-2 rounded">
          Logout
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Report</h1>
            <p className="text-gray-500">Pollachi Branch</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
              </svg>
            </div>
            <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-sm text-gray-600">👤</span>
            </div>
          </div>
        </div>

        {/* Payment Details Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Payment Details</h2>
            <MoreHorizontal className="text-gray-500" />
          </div>
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paymentDetails.map((payment, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rs. {payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded flex items-center ml-auto">
                      <Download size={16} className="mr-1" /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Weekly Payments Graph */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Weekly Payments</h2>
          </div>
          <div className="p-6 flex items-end space-x-2 h-48">
            {weeklyPayments.map((payment, index) => (
              <div key={index} className="flex-1 flex flex-col justify-end">
                <div className="w-full bg-blue-100 rounded-t-lg" style={{height: `${payment.amount}%`}}>
                  <div className="w-full bg-blue-500 rounded-t-lg" style={{height: '40%'}}></div>
                </div>
                <span className="text-xs text-gray-500 text-center mt-1">{payment.week}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;