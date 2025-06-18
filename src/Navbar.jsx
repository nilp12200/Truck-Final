import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [dispatcherOpen, setDispatcherOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="text-white font-bold text-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Lemon Software Gate Pass
          </div>

          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none text-2xl transform transition-all duration-300 hover:scale-110"
            >
              ☰
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-white">
            {/* Admin Dropdown (on click) */}
            <div className="relative">
              <button
                onClick={() => {
                  setAdminOpen((prev) => {
                    if (!prev) setDispatcherOpen(false);
                    return !prev;
                  });
                }}
                className="hover:text-yellow-400 flex items-center focus:outline-none transition-all duration-300 transform hover:scale-105"
              >
                Admin <span className="ml-1 text-sm">▼</span>
              </button>
              {adminOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 py-2 transform transition-all duration-300 border border-gray-700">
                  <Link 
                    to="/plantmaster" 
                    className="block px-6 py-3 text-white hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center"
                  >
                    <span className="mr-2">🏭</span> Plant Master
                  </Link>
                </div>
              )}
            </div>

            {/* Dispatcher Dropdown (on click) */}
            <div className="relative">
              <button
                onClick={() => {
                  setDispatcherOpen((prev) => {
                    if (!prev) setAdminOpen(false);
                    return !prev;
                  });
                }}
                className="hover:text-yellow-400 flex items-center focus:outline-none transition-all duration-300 transform hover:scale-105"
              >
                Dispatcher <span className="ml-1 text-sm">▼</span>
              </button>
              {dispatcherOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 py-2 transform transition-all duration-300 border border-gray-700">
                  <Link 
                    to="/truck" 
                    className="block px-6 py-3 text-white hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center"
                  >
                    <span className="mr-2">🚛</span> Truck Transaction
                  </Link>
                </div>
              )}
            </div>

            {/* Static Links */}
            <Link 
              to="/gate" 
              className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <span className="mr-2">🚪</span> Gate Keeper
            </Link>
            <Link 
              to="/loader" 
              className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <span className="mr-2">📦</span> Loader
            </Link>
            <Link 
              to="/reports" 
              className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <span className="mr-2">📊</span> Reports
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-gray-800 p-6 rounded-xl shadow-2xl text-white font-medium z-50 border border-gray-700 transform transition-all duration-300">
            {/* Admin mobile */}
            <div>
              <button
                onClick={() => {
                  setAdminOpen((prev) => {
                    if (!prev) setDispatcherOpen(false);
                    return !prev;
                  });
                }}
                className="w-full text-left hover:text-yellow-400 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">👨‍💼</span> Admin <span className="ml-1 text-sm">▼</span>
              </button>
              {adminOpen && (
                <div className="pl-8 space-y-2 mt-2 border-l-2 border-gray-700">
                  <Link 
                    to="/plantmaster" 
                    className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
                  >
                    <span className="mr-2">🏭</span> Plant Master
                  </Link>
                </div>
              )}
            </div>

            {/* Dispatcher mobile */}
            <div>
              <button
                onClick={() => {
                  setDispatcherOpen((prev) => {
                    if (!prev) setAdminOpen(false);
                    return !prev;
                  });
                }}
                className="w-full text-left hover:text-yellow-400 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">🚛</span> Dispatcher <span className="ml-1 text-sm">▼</span>
              </button>
              {dispatcherOpen && (
                <div className="pl-8 space-y-2 mt-2 border-l-2 border-gray-700">
                  <Link 
                    to="/truck-transaction" 
                    className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
                  >
                    <span className="mr-2">📝</span> Truck Transaction
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/gate" 
              className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
            >
              <span className="mr-2">🚪</span> Gate Keeper
            </Link>
            <Link 
              to="/loader" 
              className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
            >
              <span className="mr-2">📦</span> Loader
            </Link>
            <Link 
              to="/reports" 
              className="block hover:text-yellow-400 transition-all duration-300 flex items-center"
            >
              <span className="mr-2">📊</span> Reports
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;










// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [dispatcherOpen, setDispatcherOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="text-white font-bold text-xl">Asian Gate Pass</div>

//           {/* Hamburger */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-white text-2xl focus:outline-none"
//             >
//               ☰
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center font-medium text-white">
//             {/* Admin Dropdown (on click) */}
//             <div className="relative">
//               <button
//                 onClick={() => setAdminOpen(!adminOpen)}
//                 className="hover:text-yellow-400 flex items-center focus:outline-none"
//               >
//                 Admin <span className="ml-1">▼</span>
//               </button>
//               {adminOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-50 py-2">
//                   <Link to="/division-master" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black">Division Master</Link>
//                   <Link to="/zone-master" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black">Zone Master</Link>
//                   <Link to="/user-master" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black">User Master</Link>
//                 </div>
//               )}
//             </div>

//             {/* Dispatcher Dropdown (on click) */}
//             <div className="relative">
//               <button
//                 onClick={() => setDispatcherOpen(!dispatcherOpen)}
//                 className="hover:text-yellow-400 flex items-center focus:outline-none"
//               >
//                 Dispatcher <span className="ml-1">▼</span>
//               </button>
//               {dispatcherOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-50 py-2">
//                   <Link to="/truck-transaction" className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black">Truck Transaction</Link>
//                 </div>
//               )}
//             </div>

//             {/* Static Links */}
//             <Link to="/gate" className="hover:text-yellow-400">Gate Keeper</Link>
//             <Link to="/loader" className="hover:text-yellow-400">Loader</Link>
//             <Link to="/reports" className="hover:text-yellow-400">Reports</Link>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-2 space-y-2 bg-gray-900 p-4 rounded shadow-md text-white font-medium z-50">
//             {/* Admin mobile */}
//             <div>
//               <button
//                 onClick={() => setAdminOpen(!adminOpen)}
//                 className="w-full text-left hover:text-yellow-400"
//               >
//                 Admin ▼
//               </button>
//               {adminOpen && (
//                 <div className="pl-4 space-y-1 mt-1">
//                   <Link to="/division-master" className="block hover:text-yellow-400">Division Master</Link>
//                   <Link to="/zone-master" className="block hover:text-yellow-400">Zone Master</Link>
//                   <Link to="/user-master" className="block hover:text-yellow-400">User Master</Link>
//                 </div>
//               )}
//             </div>

//             {/* Dispatcher mobile */}
//             <div>
//               <button
//                 onClick={() => setDispatcherOpen(!dispatcherOpen)}
//                 className="w-full text-left hover:text-yellow-400"
//               >
//                 Dispatcher ▼
//               </button>
//               {dispatcherOpen && (
//                 <div className="pl-4 space-y-1 mt-1">
//                   <Link to="/truck-transaction" className="block hover:text-yellow-400">Truck Transaction</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/gate" className="block hover:text-yellow-400">Gate Keeper</Link>
//             <Link to="/loader" className="block hover:text-yellow-400">Loader</Link>
//             <Link to="/reports" className="block hover:text-yellow-400">Reports</Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
