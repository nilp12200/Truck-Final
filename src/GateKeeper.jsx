// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import truck from './assets/truck.jpg';

// function GateKeeper() {
//   const [formData, setFormData] = useState({
//     truckNo: '',
//     dispatchDate: new Date().toISOString().split('T')[0],
//     invoiceNo: '',
//     remarks: 'This is a system-generated remark.',
//     quantity: '',
//   });

//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlant, setSelectedPlant] = useState('');
//   const [truckNumbers, setTruckNumbers] = useState([]);
//   const [checkedInTrucks, setCheckedInTrucks] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/api/plants')
//       .then(res => setPlantList(res.data))
//       .catch(err => console.error('Error fetching plants:', err));
//   }, []);

//   useEffect(() => {
//     if (selectedPlant) {
//       axios.get(`http://localhost:3001/api/trucks?plantName=${selectedPlant}`)
//         .then(res => setTruckNumbers(res.data))
//         .catch(err => console.error('Error fetching trucks:', err));

//       axios.get(`http://localhost:3001/api/checked-in-trucks?plantName=${selectedPlant}`)
//         .then(res => setCheckedInTrucks(res.data))
//         .catch(err => console.error('Error fetching checked-in trucks:', err));
//     }
//   }, [selectedPlant]);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handlePlantChange = (e) => {
//     setSelectedPlant(e.target.value);
//     setCheckedInTrucks([]);
//     setFormData(prev => ({
//       ...prev,
//       truckNo: '',
//       dispatchDate: new Date().toISOString().split('T')[0],
//     }));
//   };

//   const handleTruckSelect = async (truckNo) => {
//     setFormData(prev => ({ ...prev, truckNo }));

//     try {
//       const resRemarks = await axios.get('http://localhost:3001/api/fetch-remarks', {
//         params: { plantName: selectedPlant, truckNo }
//       });

//       const resQty = await axios.get('http://localhost:3001/api/fetch-qty', {
//         params: { plantName: selectedPlant, truckNo }
//       });

//       setFormData(prev => ({
//         ...prev,
//         remarks: resRemarks.data.remarks || 'No remarks available.',
//         quantity: resQty.data.quantity || ''
//       }));
//     } catch (err) {
//       console.error('Error fetching remarks or quantity:', err);
//       setFormData(prev => ({
//         ...prev,
//         remarks: 'No remarks available or error fetching remarks.',
//         quantity: ''
//       }));
//     }
//   };

//   const handleCheckedInClick = (truckNo) => {
//     setFormData(prev => ({ ...prev, truckNo }));
//   };

 
//   const handleSubmit = async (type) => {
//     const { truckNo, dispatchDate, invoiceNo, quantity } = formData;

//     if (!selectedPlant) {
//       toast.warn('Please select a plant first.');
//       return;
//     }

//     if (!truckNo) {
//       toast.warn('🚛 Please select a truck number.');
//       return;
//     }

//     if (type === 'Check In' && checkedInTrucks.some(t => t.TruckNo === truckNo || t === truckNo)) {
//       toast.error('🚫 This truck is already checked in!');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3001/api/update-truck-status', {
//         truckNo,
//         plantName: selectedPlant,
//         type,
//         dispatchDate,
//         invoiceNo,
//         quantity,
//       });

//       if (response.data.message?.includes('✅')) {
//         setTruckNumbers(prev => prev.filter(t => t.TruckNo !== truckNo));

//         if (type === 'Check In') {
//           setCheckedInTrucks(prev => [...prev, { TruckNo: truckNo }]);
//         }

//         toast.success(response.data.message);
//         setFormData(prev => ({ ...prev, truckNo: '' }));
//       } else {
//         toast.error(response.data.message || 'Failed to update status');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       toast.error(err.response?.data?.message || 'Something went wrong.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-300 hover:shadow-3xl">
//         {/* Left Panel */}
//         <div className="col-span-1 space-y-6">
//           <select
//             value={selectedPlant}
//             onChange={handlePlantChange}
//             className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700 font-medium"
//           >
//             <option value="">Select Plant</option>
//             {plantList.map((plant, i) => (
//               <option key={i} value={plant.PlantName}>{plant.PlantName}</option>
//             ))}
//           </select>

//           <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 h-[300px] overflow-y-auto shadow-inner">
//             <h3 className="text-lg font-bold text-blue-800 mb-4 border-b border-blue-200 pb-2">Truck List</h3>
//             <ul className="space-y-2 text-sm text-gray-700">
//               {truckNumbers.map((truck, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleTruckSelect(truck.TruckNo)}
//                   className="hover:text-blue-600 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center"
//                 >
//                   <span className="mr-2">🚛</span>
//                   {truck.TruckNo}
//                 </li>
//               ))}
//               {truckNumbers.length === 0 && (
//                 <li className="text-gray-400 italic p-2">No trucks available</li>
//               )}
//             </ul>
//           </div>
//         </div>

//         {/* Center Panel */}
//         <div className="col-span-1 space-y-6">
//           <div className="relative w-full transform transition-all duration-300 hover:scale-[1.02]">
//             <img
//               src={truck}
//               alt="Truck"
//               className="w-full object-contain rounded-2xl shadow-lg"
//             />
//             {formData.quantity && (
//               <div className="absolute top-4 right-4">
//                 <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg text-sm min-w-[80px] text-center transform transition-all duration-300 hover:scale-105">
//                   Qty: {formData.quantity}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="transform transition-all duration-300 hover:scale-[1.01]">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Truck No.</label>
//             <input
//               name="truckNo"
//               value={formData.truckNo}
//               onChange={handleChange}
//               className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//               placeholder="Enter Truck No"
//             />
//           </div>

//           <div className="transform transition-all duration-300 hover:scale-[1.01]">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Dispatch Date</label>
//             <input
//               name="dispatchDate"
//               value={formData.dispatchDate}
//               onChange={handleChange}
//               type="date"
//               className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//             />
//           </div>

//           <div className="transform transition-all duration-300 hover:scale-[1.01]">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Invoice Number</label>
//             <input
//               name="invoiceNo"
//               value={formData.invoiceNo}
//               onChange={handleChange}
//               className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//               placeholder="Invoice No"
//             />
//           </div>

//           <div className="transform transition-all duration-300 hover:scale-[1.01]">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Remarks</label>
//             <textarea
//               name="remarks"
//               value={formData.remarks}
//               readOnly
//               className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm bg-gray-50 text-gray-700 resize-none h-24 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//             />
//           </div>

//           <div className="transform transition-all duration-300 hover:scale-[1.01]">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
//             <input
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//               className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//               placeholder="Quantity"
//             />
//           </div>

//           <div className="flex justify-between mt-6 space-x-4">
//             <button
//               className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
//               onClick={() => handleSubmit('Check In')}
//             >
//               Check In
//             </button>
//             <button
//               className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
//               onClick={() => handleSubmit('Check Out')}
//             >
//               Check Out
//             </button>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="col-span-1">
//           <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 h-full overflow-y-auto shadow-inner">
//             <h3 className="text-lg font-bold text-green-800 mb-4 border-b border-green-200 pb-2">Checked In Trucks</h3>
//             <ul className="space-y-2 text-sm text-gray-700">
//               {checkedInTrucks.map((truck, idx) => (
//                 <li
//                   key={idx}
//                   className="hover:text-green-600 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-all duration-200 flex items-center"
//                   onClick={() => handleCheckedInClick(truck.TruckNo)}
//                 >
//                   <span className="mr-2">✓</span>
//                   {truck.TruckNo}
//                 </li>
//               ))}
//               {checkedInTrucks.length === 0 && (
//                 <li className="text-gray-400 italic p-2">No checked-in trucks</li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <ToastContainer 
//         position="top-center" 
//         autoClose={3000} 
//         hideProgressBar 
//         className="mt-4"
//         toastClassName="bg-white rounded-xl shadow-lg"
//         bodyClassName="text-gray-800 font-medium"
//       />
//     </div>
//   );
// }

// export default GateKeeper;



























// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import truck from './assets/truck.jpg';

// // function GateKeeper() {
// //   const [formData, setFormData] = useState({
// //     truckNo: '',
// //     dispatchDate: new Date().toISOString().split('T')[0],
// //     invoiceNo: '',
// //     remarks: 'This is a system-generated remark.',
// //     quantity: '',
// //   });

// //   const [plantList, setPlantList] = useState([]);
// //   const [selectedPlant, setSelectedPlant] = useState('');
// //   const [truckNumbers, setTruckNumbers] = useState([]);
// //   const [checkedInTrucks, setCheckedInTrucks] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:3001/api/plants')
// //       .then(res => setPlantList(res.data))
// //       .catch(err => {
// //         console.error('Error fetching plants:', err);
// //         toast.error('Failed to fetch plant list');
// //       });
// //   }, []);

// //   useEffect(() => {
// //     if (!selectedPlant) return;

// //     axios.get(`http://localhost:3001/api/trucks?plantName=${selectedPlant}`)
// //       .then(res => setTruckNumbers(res.data))
// //       .catch(err => console.error('Error fetching trucks:', err));

// //     axios.get(`http://localhost:3001/api/checked-in-trucks?plantName=${selectedPlant}`)
// //       .then(res => setCheckedInTrucks(res.data))
// //       .catch(err => console.error('Error fetching checked-in trucks:', err));
// //   }, [selectedPlant]);

// //   const handleChange = (e) => {
// //     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   const handlePlantChange = (e) => {
// //     setSelectedPlant(e.target.value);
// //     setTruckNumbers([]);
// //     setCheckedInTrucks([]);
// //     setFormData({
// //       truckNo: '',
// //       dispatchDate: new Date().toISOString().split('T')[0],
// //       invoiceNo: '',
// //       remarks: 'This is a system-generated remark.',
// //       quantity: '',
// //     });
// //   };

// //   const handleTruckSelect = async (truckNo) => {
// //     setFormData(prev => ({ ...prev, truckNo }));

// //     try {
// //       const [remarksRes, qtyRes] = await Promise.all([
// //         axios.get('http://localhost:3001/api/fetch-remarks', {
// //           params: { plantName: selectedPlant, truckNo },
// //         }),
// //         axios.get('http://localhost:3001/api/fetch-qty', {
// //           params: { plantName: selectedPlant, truckNo },
// //         }),
// //       ]);

// //       setFormData(prev => ({
// //         ...prev,
// //         remarks: remarksRes.data.remarks || 'No remarks available.',
// //         quantity: qtyRes.data.quantity || '',
// //       }));
// //     } catch (err) {
// //       console.error('Error fetching remarks/quantity:', err);
// //       toast.error('Error fetching truck data.');
// //       setFormData(prev => ({
// //         ...prev,
// //         remarks: 'No remarks available or error occurred.',
// //         quantity: '',
// //       }));
// //     }
// //   };

// //   const handleCheckedInClick = (truckNo) => {
// //     setFormData(prev => ({ ...prev, truckNo }));
// //   };

// //   const handleSubmit = async (type) => {
// //     const { truckNo, dispatchDate, invoiceNo, quantity } = formData;

// //     if (!selectedPlant) {
// //       toast.warn('Please select a plant first.');
// //       return;
// //     }

// //     if (!truckNo) {
// //       toast.warn('🚛 Please select a truck number.');
// //       return;
// //     }

// //     if (type === 'Check In' && checkedInTrucks.some(t => t.TruckNo === truckNo || t === truckNo)) {
// //       toast.error('🚫 This truck is already checked in!');
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://localhost:3001/api/update-truck-status', {
// //         truckNo,
// //         plantName: selectedPlant,
// //         type,
// //         dispatchDate,
// //         invoiceNo,
// //         quantity,
// //       });

// //       if (response.data.message?.includes('✅')) {
// //         setTruckNumbers(prev => prev.filter(t => t.TruckNo !== truckNo));

// //         if (type === 'Check In') {
// //           setCheckedInTrucks(prev => [...prev, { TruckNo: truckNo }]);
// //         }

// //         toast.success(response.data.message);
// //         setFormData(prev => ({ ...prev, truckNo: '' }));
// //       } else {
// //         toast.error(response.data.message || 'Failed to update status');
// //       }
// //     } catch (err) {
// //       console.error('Error:', err);
// //       toast.error(err.response?.data?.message || 'Something went wrong.');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 p-6">
// //       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {/* Left Panel */}
// //         <div className="space-y-6">
// //           <select
// //             value={selectedPlant}
// //             onChange={handlePlantChange}
// //             className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl shadow-sm focus:border-blue-500"
// //           >
// //             <option value="">Select Plant</option>
// //             {plantList.map((plant, i) => (
// //               <option key={i} value={plant.PlantName}>{plant.PlantName}</option>
// //             ))}
// //           </select>

// //           <div className="bg-blue-100 rounded-2xl p-6 h-[300px] overflow-y-auto">
// //             <h3 className="text-lg font-bold text-blue-800 mb-4">Truck List</h3>
// //             <ul className="space-y-2">
// //               {truckNumbers.map((truck, i) => (
// //                 <li
// //                   key={i}
// //                   onClick={() => handleTruckSelect(truck.TruckNo)}
// //                   className="cursor-pointer hover:bg-blue-50 p-2 rounded-md"
// //                 >
// //                   🚛 {truck.TruckNo}
// //                 </li>
// //               ))}
// //               {truckNumbers.length === 0 && (
// //                 <li className="text-gray-400 italic">No trucks available</li>
// //               )}
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Center Panel */}
// //         <div className="space-y-6">
// //           <div className="relative">
// //             <img src={truck} alt="Truck" className="w-full object-contain rounded-2xl" />
// //             {formData.quantity && (
// //               <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-xl font-bold shadow-md">
// //                 Qty: {formData.quantity}
// //               </div>
// //             )}
// //           </div>

// //           <input
// //             name="truckNo"
// //             value={formData.truckNo}
// //             onChange={handleChange}
// //             placeholder="Enter Truck No"
// //             className="w-full border-2 rounded-xl px-4 py-3"
// //           />

// //           <input
// //             type="date"
// //             name="dispatchDate"
// //             value={formData.dispatchDate}
// //             onChange={handleChange}
// //             className="w-full border-2 rounded-xl px-4 py-3"
// //           />

// //           <input
// //             name="invoiceNo"
// //             value={formData.invoiceNo}
// //             onChange={handleChange}
// //             placeholder="Invoice No"
// //             className="w-full border-2 rounded-xl px-4 py-3"
// //           />

// //           <textarea
// //             name="remarks"
// //             value={formData.remarks}
// //             readOnly
// //             className="w-full border-2 bg-gray-50 px-4 py-3 rounded-xl h-24"
// //           />

// //           <input
// //             name="quantity"
// //             value={formData.quantity}
// //             onChange={handleChange}
// //             placeholder="Quantity"
// //             className="w-full border-2 rounded-xl px-4 py-3"
// //           />

// //           <div className="flex space-x-4 mt-4">
// //             <button
// //               className="flex-1 bg-green-600 text-white py-3 rounded-xl"
// //               onClick={() => handleSubmit('Check In')}
// //             >
// //               Check In
// //             </button>
// //             <button
// //               className="flex-1 bg-red-600 text-white py-3 rounded-xl"
// //               onClick={() => handleSubmit('Check Out')}
// //             >
// //               Check Out
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Panel */}
// //         <div>
// //           <div className="bg-green-100 rounded-2xl p-6 h-full overflow-y-auto">
// //             <h3 className="text-lg font-bold text-green-800 mb-4">Checked In Trucks</h3>
// //             <ul className="space-y-2">
// //               {checkedInTrucks.map((truck, i) => (
// //                 <li
// //                   key={i}
// //                   onClick={() => handleCheckedInClick(truck.TruckNo)}
// //                   className="cursor-pointer hover:bg-green-50 p-2 rounded-md"
// //                 >
// //                   ✓ {truck.TruckNo}
// //                 </li>
// //               ))}
// //               {checkedInTrucks.length === 0 && (
// //                 <li className="text-gray-400 italic">No checked-in trucks</li>
// //               )}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
// //     </div>
// //   );
// // }

// // export default GateKeeper;


// final 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import truck from './assets/truck.jpg';

function GateKeeper() {
  const [formData, setFormData] = useState({
    truckNo: '',
    dispatchDate: new Date().toISOString().split('T')[0],
    invoiceNo: '',
    remarks: 'This is a system-generated remark.',
    quantity: '',
  });

  const [plantList, setPlantList] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState('');
  const [truckNumbers, setTruckNumbers] = useState([]);
  const [checkedInTrucks, setCheckedInTrucks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/plants')
      .then(res => setPlantList(res.data))
      .catch(err => console.error('Error fetching plants:', err));
  }, []);

  useEffect(() => {
    if (selectedPlant) {
      axios.get(`http://localhost:3001/api/trucks?plantName=${selectedPlant}`)
        .then(res => setTruckNumbers(res.data))
        .catch(err => console.error('Error fetching trucks:', err));

      axios.get(`http://localhost:3001/api/checked-in-trucks?plantName=${selectedPlant}`)
        .then(res => setCheckedInTrucks(res.data))
        .catch(err => console.error('Error fetching checked-in trucks:', err));
    }
  }, [selectedPlant]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlantChange = (e) => {
    setSelectedPlant(e.target.value);
    setCheckedInTrucks([]);
    setFormData(prev => ({
      ...prev,
      truckNo: '',
      dispatchDate: new Date().toISOString().split('T')[0],
    }));
  };

  const handleTruckSelect = async (truckNo) => {
    setFormData(prev => ({ ...prev, truckNo }));

    try {
      const resRemarks = await axios.get('http://localhost:3001/api/fetch-remarks', {
        params: { plantName: selectedPlant, truckNo }
      });

      const resQty = await axios.get('http://localhost:3001/api/fetch-qty', {
        params: { plantName: selectedPlant, truckNo }
      });

      setFormData(prev => ({
        ...prev,
        remarks: resRemarks.data.remarks || 'No remarks available.',
        quantity: resQty.data.quantity || ''
      }));
    } catch (err) {
      console.error('Error fetching remarks or quantity:', err);
      setFormData(prev => ({
        ...prev,
        remarks: 'No remarks available or error fetching remarks.',
        quantity: ''
      }));
    }
  };

  const handleCheckedInClick = async (truckNo) => {
    await handleTruckSelect(truckNo); // Fix applied here
  };

  const handleSubmit = async (type) => {
    const { truckNo, dispatchDate, invoiceNo, quantity } = formData;

    if (!selectedPlant) {
      toast.warn('Please select a plant first.');
      return;
    }

    if (!truckNo) {
      toast.warn('🚛 Please select a truck number.');
      return;
    }

    if (type === 'Check In' && checkedInTrucks.some(t => t.TruckNo === truckNo || t === truckNo)) {
      toast.error('🚫 This truck is already checked in!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/update-truck-status', {
        truckNo,
        plantName: selectedPlant,
        type,
        dispatchDate,
        invoiceNo,
        quantity,
      });

      if (response.data.message?.includes('✅')) {
        setTruckNumbers(prev => prev.filter(t => t.TruckNo !== truckNo));

        if (type === 'Check In') {
          setCheckedInTrucks(prev => [...prev, { TruckNo: truckNo }]);
        }

        toast.success(response.data.message);
        setFormData(prev => ({ ...prev, truckNo: '' }));
      } else {
        toast.error(response.data.message || 'Failed to update status');
      }
    } catch (err) {
      console.error('Error:', err);
      toast.error(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-300 hover:shadow-3xl">
        
        {/* Left Panel - Truck List */}
        <div className="col-span-1 space-y-6">
          <select
            value={selectedPlant}
            onChange={handlePlantChange}
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700 font-medium"
          >
            <option value="">Select Plant</option>
            {plantList.map((plant, i) => (
              <option key={i} value={plant.PlantName}>{plant.PlantName}</option>
            ))}
          </select>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 h-[300px] overflow-y-auto shadow-inner">
            <h3 className="text-lg font-bold text-blue-800 mb-4 border-b border-blue-200 pb-2">Truck List</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {truckNumbers.map((truck, index) => (
                <li
                  key={index}
                  onClick={() => handleTruckSelect(truck.TruckNo)}
                  className="hover:text-blue-600 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center"
                >
                  <span className="mr-2">🚛</span>
                  {truck.TruckNo}
                </li>
              ))}
              {truckNumbers.length === 0 && (
                <li className="text-gray-400 italic p-2">No trucks available</li>
              )}
            </ul>
          </div>
        </div>

        {/* Center Panel - Form */}
        <div className="col-span-1 space-y-6">
          <div className="relative w-full transform transition-all duration-300 hover:scale-[1.02]">
            <img
              src={truck}
              alt="Truck"
              className="w-full object-contain rounded-2xl shadow-lg"
            />
            {formData.quantity && (
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg text-sm min-w-[80px] text-center transform transition-all duration-300 hover:scale-105">
                  Qty: {formData.quantity}
                </div>
              </div>
            )}
          </div>

          <input
            name="truckNo"
            value={formData.truckNo}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            placeholder="Enter Truck No"
          />

          <input
            name="dispatchDate"
            value={formData.dispatchDate}
            onChange={handleChange}
            type="date"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />

          <input
            name="invoiceNo"
            value={formData.invoiceNo}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            placeholder="Invoice No"
          />

          <textarea
            name="remarks"
            value={formData.remarks}
            readOnly
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm bg-gray-50 text-gray-700 resize-none h-24 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />

          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            placeholder="Quantity"
          />

          <div className="flex justify-between mt-6 space-x-4">
            <button
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              onClick={() => handleSubmit('Check In')}
            >
              Check In
            </button>
            <button
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              onClick={() => handleSubmit('Check Out')}
            >
              Check Out
            </button>
          </div>
        </div>

        {/* Right Panel - Checked In */}
        <div className="col-span-1">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 h-full overflow-y-auto shadow-inner">
            <h3 className="text-lg font-bold text-green-800 mb-4 border-b border-green-200 pb-2">Checked In Trucks</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {checkedInTrucks.map((truck, idx) => (
                <li
                  key={idx}
                  className="hover:text-green-600 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-all duration-200 flex items-center"
                  onClick={() => handleCheckedInClick(truck.TruckNo)}
                >
                  <span className="mr-2">✓</span>
                  {truck.TruckNo}
                </li>
              ))}
              {checkedInTrucks.length === 0 && (
                <li className="text-gray-400 italic p-2">No checked-in trucks</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar 
        className="mt-4"
        toastClassName="bg-white rounded-xl shadow-lg"
        bodyClassName="text-gray-800 font-medium"
      />
    </div>
  );
}

export default GateKeeper;
