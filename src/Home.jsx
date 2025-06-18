// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [adminOpen, setAdminOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="flex items-center px-6 py-3">
//         <h1 className="text-xl font-bold text-indigo-600">Truck_Tracking</h1>

//         <ul className="flex ml-10 space-x-8 text-gray-700 font-medium">
//           <li
//             className="relative cursor-pointer"
//             onMouseEnter={() => setAdminOpen(true)}
//             onMouseLeave={() => setAdminOpen(false)}
//           >
//             Admin
//             {adminOpen && (
//               <ul className="absolute top-8 left-0 bg-white border rounded shadow-md z-10 w-40">
//                 <li className="hover:bg-indigo-100 px-4 py-2">
//                   <Link to="/division">Division Master</Link>
//                 </li>
//                 <li className="hover:bg-indigo-100 px-4 py-2">
//                   <Link to="/zone">Zone Master</Link>
//                 </li>
//                 <li className="hover:bg-indigo-100 px-4 py-2">
//                   <Link to="/user">User Master</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li><Link to="/dispatcher">Dispatcher</Link></li>
//           <li><Link to="/gatekeeper">Gate Keeper</Link></li>
//           <li><Link to="/loader">Loader</Link></li>
//           <li><Link to="/reports">Reports</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;








///////////////////////////////////////////////////////////////////////////  division master code/////////////////////////////////////////////////////////////////////////////////



// import React, { useState } from 'react';

// function DivisionMaster() {
//   const [divisionName, setDivisionName] = useState('');
//   const [description, setDescription] = useState('');

//   return (
//     <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-50 to-blue-100">
//       <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-center text-xl font-bold text-indigo-700 mb-6">Division Master</h2>
        
//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-700">Division Name</label>
//           <input
//             type="text"
//             value={divisionName}
//             onChange={(e) => setDivisionName(e.target.value)}
//             className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-300"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-semibold text-gray-700">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             rows={3}
//             className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-300"
//           ></textarea>
//         </div>

//         <div className="flex justify-end space-x-2">
//           <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
//             Cancel
//           </button>
//           <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DivisionMaster;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////  gate keeper page ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';

// function GateKeeper() {
//   const [formData, setFormData] = useState({
//     truckNo: '',
//     dispatchDate: '',
//     dispatcher: '',
//     contact: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (type) => {
//     alert(`${type} done for Truck: ${formData.truckNo}`);
//   };

//   return (
//     <div className="bg-gradient-to-br from-indigo-50 to-blue-100 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         {/* Truck Number Dropdown & Truck Image */}
//         <div className="col-span-1 space-y-4">
//           <select className="w-full border px-4 py-2 rounded-md shadow-sm">
//             <option>TN-09-F-9633</option>
//             <option>GJ-9-Z-2809</option>
//           </select>
//           <img
//             src="https://pngimg.com/uploads/truck/truck_PNG16234.png"
//             alt="Truck"
//             className="w-full object-contain"
//           />
//         </div>

//         {/* Center Form Inputs */}
//         <div className="col-span-1 space-y-4">
//           <div>
//             <label className="block font-semibold text-gray-700">Truck No.</label>
//             <input
//               name="truckNo"
//               value={formData.truckNo}
//               onChange={handleChange}
//               className="w-full border rounded px-4 py-2 shadow-sm"
//               placeholder="Enter Truck No"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-gray-700">Dispatch Date</label>
//             <input
//               name="dispatchDate"
//               value={formData.dispatchDate}
//               onChange={handleChange}
//               className="w-full border rounded px-4 py-2 shadow-sm"
//               placeholder="YYYY-MM-DD"
//               type="date"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-gray-700">Dispatcher</label>
//             <input
//               name="dispatcher"
//               value={formData.dispatcher}
//               onChange={handleChange}
//               className="w-full border rounded px-4 py-2 shadow-sm"
//               placeholder="Dispatcher Name"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-gray-700">Contact No.</label>
//             <input
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full border rounded px-4 py-2 shadow-sm"
//               placeholder="Phone Number"
//             />
//           </div>

//           <div className="flex justify-between mt-4">
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               onClick={() => handleSubmit('Check In')}
//             >
//               Check In
//             </button>
//             <button
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               onClick={() => handleSubmit('Check Out')}
//             >
//               Check Out
//             </button>
//           </div>
//           <div className="text-right">
//             <button className="bg-indigo-600 text-white px-4 py-2 mt-2 rounded hover:bg-indigo-700">
//               Print Chit
//             </button>
//           </div>
//         </div>

//         {/* Truck List */}
//         <div className="col-span-1">
//           <div className="bg-blue-200 rounded p-4 h-full overflow-y-auto">
//             <h3 className="text-lg font-bold text-blue-800 mb-2">Truck List</h3>
//             <ul className="space-y-1 text-sm text-gray-700">
//               <li>GJ-12-Y-6913</li>
//               <li>CG-04-E-8117</li>
//               <li>RJ-07-GA-4452</li>
//               <li>RJ-14-GB-477</li>
//               <li>GJ-1-BY-6277</li>
//               <li>MH-09-Q-687</li>
//               <li>RJ-32-GA-312</li>
//               <li>RJ-14-GC-8182</li>
//               <li>KA-01-B-2997</li>
//               <li>GJ-6V-5428</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="max-w-6xl mx-auto mt-8">
//         <table className="w-full table-auto border shadow">
//           <thead className="bg-orange-400 text-white">
//             <tr>
//               <th className="px-4 py-2 text-left">Division Name</th>
//               <th className="px-4 py-2 text-left">Check In Time</th>
//               <th className="px-4 py-2 text-left">Check Out Time</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white text-gray-700">
//             <tr>
//               <td className="px-4 py-2">North Zone</td>
//               <td className="px-4 py-2">10:00 AM</td>
//               <td className="px-4 py-2">--</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default GateKeeper;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent"></div>
        <div className="relative z-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Emoji_u1f34b.svg"
            alt="Lemon Logo"
            className="w-24 h-24 mx-auto mb-6 transform transition-all duration-300 hover:scale-110"
          />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-6">
            Welcome to Lemon Software Solution
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            We develop modern, scalable ERP solutions designed to streamline operations,
            enhance productivity, and drive growth for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* ERP Features */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-b from-white to-yellow-50">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Inventory Management</h3>
            <p className="text-gray-600 leading-relaxed">Track, control, and manage your stock levels with ease.</p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-b from-white to-yellow-50">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Billing & Invoicing</h3>
            <p className="text-gray-600 leading-relaxed">Create automated invoices and manage customer payments smoothly.</p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-b from-white to-yellow-50">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Reports & Analytics</h3>
            <p className="text-gray-600 leading-relaxed">Make data-driven decisions using real-time reports and dashboards.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gradient-to-br from-yellow-100 to-yellow-50 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-50/30 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-gray-700 text-xl mb-8 leading-relaxed">
            Join hundreds of businesses who trust Lemon Software Solution for their ERP needs.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700"
          >
            Get a Free Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-base">
            © {new Date().getFullYear()} Lemon Software Solution — Building Smart ERP for Smart Businesses.
          </p>
        </div>
      </footer>
    </div>
  );
}
