import React, { useState } from 'react';

const Profile = () => {
  // Initial profile data
  const [profileData, setProfileData] = useState({
    adminId: '110A',
    name: 'Adela Parkson',
    address: 'Pollachi',
    contactNo: '984123XXXX',
    email: 'abc123@gmail.com',
    password: '*******'
  });

  // State for edit mode
  const [isEditing, setIsEditing] = useState(false);
  
  // State for form data during editing
  const [formData, setFormData] = useState({...profileData});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData({...formData});
    setIsEditing(false);
  };

  // Toggle edit mode
  const toggleEdit = () => {
    if (isEditing) {
      // Cancel edit - reset form data to current profile data
      setFormData({...profileData});
    } else {
      // Enter edit mode
      setFormData({...profileData});
    }
    setIsEditing(!isEditing);
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
            <li>
              <a 
                href="#" 
                className="flex items-center pl-6 py-3 text-gray-500 hover:bg-gray-100"
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
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path>
                </svg>
                Report
              </a>
            </li>
            <li className="relative">
              <a 
                href="#" 
                className="flex items-center pl-6 py-3 text-blue-600 bg-blue-50 border-l-4 border-blue-600"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-8 left-8 right-8">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <div className="text-gray-500 text-sm">Pages / Profile</div>
            <h1 className="text-2xl font-bold text-blue-900">Profile</h1>
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

        {/* Profile content */}
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Profile header with gradient */}
            <div className="bg-blue-500 p-6 text-white">
              <h2 className="text-xl font-semibold">Your Profile</h2>
            </div>

            {/* Profile information */}
            <div className="p-6 relative">
              {isEditing ? (
                // Edit form
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-3xl">
                  <div className="col-span-1">
                    <div className="mb-4">
                      <label className="block text-gray-500 mb-2">Admin Id:</label>
                      <input 
                        type="text"
                        name="adminId"
                        value={formData.adminId}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-500 mb-2">Name:</label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-500 mb-2">Address:</label>
                      <input 
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-500 mb-2">Contact No.:</label>
                      <input 
                        type="text"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-500 mb-2">Email:</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-500 mb-2">Password:</label>
                      <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mt-6">
                      <button 
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
                      >
                        Save
                      </button>
                      <button 
                        type="button"
                        onClick={toggleEdit}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <div className="mt-8">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src="/api/placeholder/128/128" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button 
                        type="button"
                        className="mt-4 text-blue-600 text-sm block mx-auto"
                      >
                        Change photo
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                // Profile view
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-3xl">
                  <div className="col-span-1">
                    <div className="mb-4">
                      <div className="text-gray-500">Admin Id:</div>
                      <div className="font-medium">{profileData.adminId}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-gray-500">Name:</div>
                      <div className="font-medium">{profileData.name}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-gray-500">Address:</div>
                      <div className="font-medium">{profileData.address}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-gray-500">Contact No.:</div>
                      <div className="font-medium">{profileData.contactNo}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-gray-500">Email:</div>
                      <div className="font-medium">{profileData.email}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-gray-500">Password:</div>
                      <div className="font-medium">{profileData.password}</div>
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <div className="mt-8">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src="/api/placeholder/128/128" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Edit button */}
              {!isEditing && (
                <button 
                  onClick={toggleEdit}
                  className="absolute top-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
