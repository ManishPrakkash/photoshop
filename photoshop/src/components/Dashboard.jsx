import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const MainDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  // Sample data for the line chart
  const [chartData, setChartData] = useState([
    { name: 'SEP', value: 150000, value2: 100000 },
    { name: 'OCT', value: 120000, value2: 90000 },
    { name: 'NOV', value: 180000, value2: 130000 },
    { name: 'DEC', value: 100000, value2: 80000 },
    { name: 'JAN', value: 160000, value2: 110000 },
    { name: 'FEB', value: 190000, value2: 140000 },
  ]);

  // Sample data for the pie chart
  const [pieData, setPieData] = useState([
    { name: 'Payments Done', value: 63, color: '#4842F5' },
    { name: 'Payments Pending', value: 37, color: '#5BD2F4' },
  ]);

  // Recent payments data
  const [recentPayments, setRecentPayments] = useState([
    { id: 1, name: 'Mohan', amount: 3000, time: '30s ago', avatar: '/api/placeholder/40/40' },
    { id: 2, name: 'Suron Maharjan', amount: 800, time: '58s ago', avatar: '/api/placeholder/40/40' },
    { id: 3, name: 'Sandesh', amount: 5500, time: '1m ago', avatar: '/api/placeholder/40/40' },
    { id: 4, name: 'Subin', amount: 2000, time: '1m ago', avatar: '/api/placeholder/40/40' },
  ]);

  // Dashboard stats
  const [stats, setStats] = useState({
    orders: 45,
    totalPayments: 200000,
    pending: 22,
    paymentsPercentage: 63
  });

  // Simulate updating the dashboard data
  useEffect(() => {
    const interval = setInterval(() => {
      // Update line chart data with random variations
      setChartData(prevData => 
        prevData.map(item => ({
          ...item,
          value: item.value + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 10000,
          value2: item.value2 + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 8000,
        }))
      );

      // Update pie chart data
      const newPercentage = Math.floor(60 + Math.random() * 10);
      setPieData([
        { name: 'Payments Done', value: newPercentage, color: '#4842F5' },
        { name: 'Payments Pending', value: 100 - newPercentage, color: '#5BD2F4' },
      ]);
      
      // Update stats
      setStats(prev => ({
        ...prev,
        orders: Math.floor(40 + Math.random() * 10),
        totalPayments: Math.floor(190000 + Math.random() * 20000),
        pending: Math.floor(20 + Math.random() * 5),
        paymentsPercentage: newPercentage
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const RADIAN = Math.PI / 180;
  const CustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/');
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
            <li className="relative">
              <a 
                href="#" 
                className="flex items-center pl-6 py-3 text-blue-600 bg-blue-50 border-l-4 border-blue-600"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  navigate('/pricelist'); // Navigate to the Price List page
                }} 
                className="flex items-center pl-6 py-3 text-gray-500 hover:bg-gray-100"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
                Price List
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center pl-6 py-3 text-gray-500 hover:bg-gray-100"
                onClick={() => navigate('/report')} // Update to use navigate
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path>
                </svg>
                Report
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center pl-6 py-3 text-gray-500 hover:bg-gray-100"
                onClick={() => navigate('/profile')} // Update to use navigate
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto p-6">
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            onClick={handleLogout} // Add onClick handler
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <div className="text-gray-500 text-sm">Pages / Dashboard</div>
            <h1 className="text-2xl font-bold text-blue-900">Main Dashboard</h1>
            <div className="text-green-500 text-sm mt-1">Pollachi Branch</div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </button>
            <img className="h-10 w-10 rounded-full" src="/api/placeholder/40/40" alt="User avatar" />
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Orders card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Orders</div>
                  <div className="text-2xl font-bold">{stats.orders}</div>
                </div>
              </div>
            </div>

            {/* Payments card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Total Payments</div>
                  <div className="text-2xl font-bold">Rs. {stats.totalPayments.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Pending card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Pending</div>
                  <div className="text-2xl font-bold">{stats.pending}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts section */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Line chart */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-blue-900">Rs. {stats.totalPayments.toLocaleString()}</div>
                  <div className="text-gray-500 text-sm">Total Payments</div>
                  <div className="flex items-center mt-2 text-green-500 text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                    On track of this area
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-md flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                    This month
                  </div>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis hide={true} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#4842F5" 
                      strokeWidth={3} 
                      dot={{ r: 0 }} 
                      activeDot={{ r: 6, fill: '#4842F5', stroke: '#fff', strokeWidth: 2 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value2" 
                      stroke="#5BD2F4" 
                      strokeWidth={3} 
                      dot={{ r: 0 }} 
                      activeDot={{ r: 6, fill: '#5BD2F4', stroke: '#fff', strokeWidth: 2 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="text-blue-900 font-semibold">Payment Analysis</div>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">Monthly</div>
              </div>
              <div className="h-64 flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
                  <div className="text-sm">Payments Done</div>
                </div>
                <div className="text-lg font-bold ml-2">{stats.paymentsPercentage}%</div>
              </div>
            </div>
          </div>

          {/* Recent payments */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="text-blue-900 font-semibold">Recent Payments</div>
              <a href="#" className="text-blue-600 text-sm">See all</a>
            </div>
            <table className="w-full">
              <tbody>
                {recentPayments.map(payment => (
                  <tr key={payment.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img 
                          className="h-10 w-10 rounded-md mr-3" 
                          src={payment.avatar} 
                          alt={`${payment.name} avatar`} 
                        />
                        <span className="font-medium">{payment.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-right font-medium">Rs. {payment.amount}</td>
                    <td className="py-4 text-center">
                      <div className="inline-flex p-1 bg-blue-50 rounded-full">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 text-right text-gray-500 text-sm">{payment.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;