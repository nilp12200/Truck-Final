// // // import React, { useState, useEffect } from 'react';

// // // const Report = () => {
// // //   const [trucks, setTrucks] = useState([]);
// // //   const [selectedTruck, setSelectedTruck] = useState('');
// // //   const [reportData, setReportData] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   // Fetch truck numbers on mount
// // //   useEffect(() => {
// // //     // Replace with your actual API endpoint
// // //     fetch('/api/trucks')
// // //       .then((res) => res.json())
// // //       .then((data) => setTrucks(data))
// // //       .catch((err) => console.error('Error fetching trucks:', err));
// // //   }, []);

// // //   // Fetch report data when a truck is selected
// // //   useEffect(() => {
// // //     if (selectedTruck) {
// // //       setLoading(true);
// // //       fetch(`/api/report/${selectedTruck}`)
// // //         .then((res) => res.json())
// // //         .then((data) => setReportData(data))
// // //         .catch((err) => console.error('Error fetching report:', err))
// // //         .finally(() => setLoading(false));
// // //     } else {
// // //       setReportData(null);
// // //     }
// // //   }, [selectedTruck]);

// // //   // Inline styles for quick theming
// // //   const styles = {
// // //     page: {
// // //       maxWidth: '600px',
// // //       margin: '40px auto',
// // //       padding: '24px',
// // //       background: '#fff',
// // //       borderRadius: '12px',
// // //       boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
// // //       fontFamily: 'Segoe UI, Arial, sans-serif',
// // //     },
// // //     heading: {
// // //       textAlign: 'center',
// // //       color: '#2d3a4b',
// // //       marginBottom: '24px',
// // //     },
// // //     label: {
// // //       fontWeight: 'bold',
// // //       marginRight: '12px',
// // //     },
// // //     select: {
// // //       padding: '8px 12px',
// // //       borderRadius: '6px',
// // //       border: '1px solid #b0b0b0',
// // //       fontSize: '16px',
// // //       marginBottom: '24px',
// // //     },
// // //     table: {
// // //       width: '100%',
// // //       borderCollapse: 'collapse',
// // //       marginTop: '20px',
// // //     },
// // //     th: {
// // //       background: '#f4f6fa',
// // //       color: '#2d3a4b',
// // //       padding: '10px',
// // //       borderBottom: '2px solid #e0e0e0',
// // //     },
// // //     td: {
// // //       padding: '10px',
// // //       borderBottom: '1px solid #e0e0e0',
// // //       textAlign: 'center',
// // //     },
// // //     loading: {
// // //       textAlign: 'center',
// // //       color: '#888',
// // //       marginTop: '20px',
// // //     },
// // //     noData: {
// // //       textAlign: 'center',
// // //       color: '#c00',
// // //       marginTop: '20px',
// // //     },
// // //   };

// // //   return (
// // //     <div style={styles.page}>
// // //       <h2 style={styles.heading}>Truck Report</h2>
// // //       <div style={{ marginBottom: '16px', textAlign: 'center' }}>
// // //         <label htmlFor="truck-select" style={styles.label}>Select Truck No:</label>
// // //         <select
// // //           id="truck-select"
// // //           value={selectedTruck}
// // //           onChange={(e) => setSelectedTruck(e.target.value)}
// // //           style={styles.select}
// // //         >
// // //           <option value="">-- Select Truck --</option>
// // //           {trucks.map((truck) => (
// // //             <option key={truck.truckNo} value={truck.truckNo}>
// // //               {truck.truckNo}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       {loading && <div style={styles.loading}>Loading...</div>}

// // //       {selectedTruck && !loading && reportData && reportData.length > 0 && (
// // //         <div className="report-details">
// // //           <h3 style={{...styles.heading, fontSize: '20px'}}>Check-in and Check-out Details</h3>
// // //           <table style={styles.table}>
// // //             <thead>
// // //               <tr>
// // //                 <th style={styles.th}>Date</th>
// // //                 <th style={styles.th}>Check-in Time</th>
// // //                 <th style={styles.th}>Check-out Time</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {reportData.map((entry, idx) => (
// // //                 <tr key={idx}>
// // //                   <td style={styles.td}>{entry.date}</td>
// // //                   <td style={styles.td}>{entry.checkIn}</td>
// // //                   <td style={styles.td}>{entry.checkOut}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}

// // //       {selectedTruck && !loading && (!reportData || reportData.length === 0) && (
// // //         <div style={styles.noData}>No check-in/check-out data found for this truck.</div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Report; 



// // // import React, { useState, useEffect } from 'react';

// // // const Report = () => {
// // //   const [trucks, setTrucks] = useState([]);
// // //   const [selectedTruck, setSelectedTruck] = useState('');
// // //   const [reportData, setReportData] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   // Fetch truck numbers on component mount
// // //   useEffect(() => {
// // //     fetch('http://localhost:3001/api/trucksNo')
// // //       .then((res) => res.json())
// // //       .then((data) => setTrucks(data))
// // //       .catch((err) => console.error('Error fetching truck numbers:', err));
// // //   }, []);
  

// // //   // Fetch report data when a truck is selected
// // //   useEffect(() => {
// // //     if (selectedTruck) {
// // //       setLoading(true);
// // //       fetch(`http://localhost:3001/api/report/${selectedTruck}`)
// // //         .then((res) => res.json())
// // //         .then((data) => setReportData(data))
// // //         .catch((err) => console.error('Error fetching report:', err))
// // //         .finally(() => setLoading(false));
// // //     } else {
// // //       setReportData(null);
// // //     }
// // //   }, [selectedTruck]);

// // //   const styles = {
// // //     page: {
// // //       maxWidth: '600px',
// // //       margin: '40px auto',
// // //       padding: '24px',
// // //       background: '#fff',
// // //       borderRadius: '12px',
// // //       boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
// // //       fontFamily: 'Segoe UI, Arial, sans-serif',
// // //     },
// // //     heading: {
// // //       textAlign: 'center',
// // //       color: '#2d3a4b',
// // //       marginBottom: '24px',
// // //     },
// // //     label: {
// // //       fontWeight: 'bold',
// // //       marginRight: '12px',
// // //     },
// // //     select: {
// // //       padding: '8px 12px',
// // //       borderRadius: '6px',
// // //       border: '1px solid #b0b0b0',
// // //       fontSize: '16px',
// // //       marginBottom: '24px',
// // //     },
// // //     table: {
// // //       width: '100%',
// // //       borderCollapse: 'collapse',
// // //       marginTop: '20px',
// // //     },
// // //     th: {
// // //       background: '#f4f6fa',
// // //       color: '#2d3a4b',
// // //       padding: '10px',
// // //       borderBottom: '2px solid #e0e0e0',
// // //     },
// // //     td: {
// // //       padding: '10px',
// // //       borderBottom: '1px solid #e0e0e0',
// // //       textAlign: 'center',
// // //     },
// // //     loading: {
// // //       textAlign: 'center',
// // //       color: '#888',
// // //       marginTop: '20px',
// // //     },
// // //     noData: {
// // //       textAlign: 'center',
// // //       color: '#c00',
// // //       marginTop: '20px',
// // //     },
// // //   };

// // //   return (
// // //     <div style={styles.page}>
// // //       <h2 style={styles.heading}>Truck Report</h2>

// // //       <div style={{ marginBottom: '16px', textAlign: 'center' }}>
// // //         <label htmlFor="truck-select" style={styles.label}>
// // //           Select Truck No:
// // //         </label>
// // //         <select
// // //           id="truck-select"
// // //           value={selectedTruck}
// // //           onChange={(e) => setSelectedTruck(e.target.value)}
// // //           style={styles.select}
// // //         >
// // //           <option value="">-- Select Truck --</option>
// // //           {trucks.map((truck, index) => (
// // //             <option key={index} value={truck.truckNo}>
// // //               {truck.truckNo}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       {loading && <div style={styles.loading}>Loading...</div>}

// // //       {selectedTruck && !loading && reportData && reportData.length > 0 && (
// // //         <div className="report-details">
// // //           <h3 style={{ ...styles.heading, fontSize: '20px' }}>
// // //             Check-in and Check-out Details
// // //           </h3>
// // //           <table style={styles.table}>
// // //             <thead>
// // //               <tr>
// // //                 <th style={styles.th}>Date</th>
// // //                 <th style={styles.th}>Check-in Time</th>
// // //                 <th style={styles.th}>Check-out Time</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {reportData.map((entry, idx) => (
// // //                 <tr key={idx}>
// // //                   <td style={styles.td}>{entry.date}</td>
// // //                   <td style={styles.td}>{entry.checkIn}</td>
// // //                   <td style={styles.td}>{entry.checkOut}</td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}

// // //       {selectedTruck && !loading && (!reportData || reportData.length === 0) && (
// // //         <div style={styles.noData}>
// // //           No check-in/check-out data found for this truck.
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Report;
// // import React, { useState, useEffect } from 'react';

// // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// // const Report = () => {
// //   const [trucks, setTrucks] = useState([]);
// //   const [selectedTruck, setSelectedTruck] = useState('');
// //   const [reportData, setReportData] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   // Fetch truck numbers on component mount
// //   useEffect(() => {
// //     fetch("http://localhost:3001/api/trucksNo")
// //       .then((res) => res.json())
// //       .then((data) => setTruckNumbers(data))
// //       .catch((err) => console.error(err));
// //   }, []);

// //   // Fetch report data when a truck is selected
// //   useEffect(() => {
// //     if (selectedTruck) {
// //       setLoading(true);
// //       fetch(`${API_URL}/api/report/${selectedTruck}`)
// //         .then((res) => {
// //           if (!res.ok) throw new Error('Failed to fetch report');
// //           return res.json();
// //         })
// //         .then((data) => setReportData(data))
// //         .catch((err) => console.error('Error fetching report:', err))
// //         .finally(() => setLoading(false));
// //     } else {
// //       setReportData([]);
// //     }
// //   }, [selectedTruck]);

// //   const styles = {
// //     page: {
// //       maxWidth: '700px',
// //       margin: '40px auto',
// //       padding: '24px',
// //       background: '#fff',
// //       borderRadius: '12px',
// //       boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
// //       fontFamily: 'Segoe UI, Arial, sans-serif',
// //     },
// //     heading: {
// //       textAlign: 'center',
// //       color: '#2d3a4b',
// //       marginBottom: '24px',
// //     },
// //     label: {
// //       fontWeight: 'bold',
// //       marginRight: '12px',
// //     },
// //     select: {
// //       padding: '8px 12px',
// //       borderRadius: '6px',
// //       border: '1px solid #b0b0b0',
// //       fontSize: '16px',
// //       marginBottom: '24px',
// //     },
// //     table: {
// //       width: '100%',
// //       borderCollapse: 'collapse',
// //       marginTop: '20px',
// //     },
// //     th: {
// //       background: '#f4f6fa',
// //       color: '#2d3a4b',
// //       padding: '10px',
// //       borderBottom: '2px solid #e0e0e0',
// //     },
// //     td: {
// //       padding: '10px',
// //       borderBottom: '1px solid #e0e0e0',
// //       textAlign: 'center',
// //     },
// //     loading: {
// //       textAlign: 'center',
// //       color: '#888',
// //       marginTop: '20px',
// //     },
// //     noData: {
// //       textAlign: 'center',
// //       color: '#c00',
// //       marginTop: '20px',
// //     },
// //   };

// //   return (
// //     <div style={styles.page}>
// //       <h2 style={styles.heading}>Truck Report</h2>

// //       <div style={{ marginBottom: '16px', textAlign: 'center' }}>
// //         <label htmlFor="truck-select" style={styles.label}>
// //           Select Truck No:
// //         </label>
// //         <select
// //           id="truck-select"
// //           value={selectedTruck}
// //           onChange={(e) => setSelectedTruck(e.target.value)}
// //           style={styles.select}
// //         >
// //           <option value="">-- Select Truck --</option>
// //           {trucks.map((truck, index) => (
// //             <option key={index} value={truck.truckNo}>
// //               {truck.truckNo}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {loading && <div style={styles.loading}>Loading...</div>}

// //       {!loading && selectedTruck && reportData.length > 0 && (
// //         <div className="report-details">
// //           <h3 style={{ ...styles.heading, fontSize: '20px' }}>
// //             Check-in and Check-out Details
// //           </h3>
// //           <table style={styles.table}>
// //             <thead>
// //               <tr>
// //                 <th style={styles.th}>Date</th>
// //                 <th style={styles.th}>Check-in Time</th>
// //                 <th style={styles.th}>Check-out Time</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {reportData.map((entry, idx) => (
// //                 <tr key={idx}>
// //                   <td style={styles.td}>{entry.date}</td>
// //                   <td style={styles.td}>{entry.checkIn}</td>
// //                   <td style={styles.td}>{entry.checkOut}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       {!loading && selectedTruck && reportData.length === 0 && (
// //         <div style={styles.noData}>
// //           No check-in/check-out data found for this truck.
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Report;
// // import React, { useState, useEffect } from 'react';

// // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// // const Report = () => {
// //   const [trucks, setTrucks] = useState([]);
// //   const [selectedTruck, setSelectedTruck] = useState('');
// //   const [reportData, setReportData] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   // Fetch truck numbers on component mount
// //   useEffect(() => {
// //     fetch("http://localhost:3001/api/trucksNo")
// //       .then((res) => res.json())
// //       .then((data) => setTrucks(data))
// //       .catch((err) => console.error(err));
// //   }, []);

// //   // Fetch report data when a truck is selected
// //   useEffect(() => {
// //     if (selectedTruck) {
// //       setLoading(true);
// //       fetch(`${API_URL}/api/report/${selectedTruck}`)
// //         .then((res) => {
// //           if (!res.ok) throw new Error('Failed to fetch report');
// //           return res.json();
// //         })
// //         .then((data) => setReportData(data))
// //         .catch((err) => console.error('Error fetching report:', err))
// //         .finally(() => setLoading(false));
// //     } else {
// //       setReportData([]);
// //     }
// //   }, [selectedTruck]);

// //   const styles = {
// //     page: {
// //       maxWidth: '700px',
// //       margin: '40px auto',
// //       padding: '24px',
// //       background: '#fff',
// //       borderRadius: '12px',
// //       boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
// //       fontFamily: 'Segoe UI, Arial, sans-serif',
// //     },
// //     heading: {
// //       textAlign: 'center',
// //       color: '#2d3a4b',
// //       marginBottom: '24px',
// //     },
// //     label: {
// //       fontWeight: 'bold',
// //       marginRight: '12px',
// //     },
// //     select: {
// //       padding: '8px 12px',
// //       borderRadius: '6px',
// //       border: '1px solid #b0b0b0',
// //       fontSize: '16px',
// //       marginBottom: '24px',
// //     },
// //     table: {
// //       width: '100%',
// //       borderCollapse: 'collapse',
// //       marginTop: '20px',
// //     },
// //     th: {
// //       background: '#f4f6fa',
// //       color: '#2d3a4b',
// //       padding: '10px',
// //       borderBottom: '2px solid #e0e0e0',
// //     },
// //     td: {
// //       padding: '10px',
// //       borderBottom: '1px solid #e0e0e0',
// //       textAlign: 'center',
// //     },
// //     loading: {
// //       textAlign: 'center',
// //       color: '#888',
// //       marginTop: '20px',
// //     },
// //     noData: {
// //       textAlign: 'center',
// //       color: '#c00',
// //       marginTop: '20px',
// //     },
// //   };

// //   return (
// //     <div style={styles.page}>
// //       <h2 style={styles.heading}>Truck Report</h2>

// //       <div style={{ marginBottom: '16px', textAlign: 'center' }}>
// //         <label htmlFor="truck-select" style={styles.label}>
// //           Select Truck No:
// //         </label>
// //         <select
// //           id="truck-select"
// //           value={selectedTruck}
// //           onChange={(e) => setSelectedTruck(e.target.value)}
// //           style={styles.select}
// //         >
// //           <option value="">-- Select Truck --</option>
// //           {trucks.map((truck, index) => (
// //             <option key={index} value={truck.TruckNo}>
// //               {truck.TruckNo}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {loading && <div style={styles.loading}>Loading...</div>}

// //       {!loading && selectedTruck && reportData.length > 0 && (
// //         <div className="report-details">
// //           <h3 style={{ ...styles.heading, fontSize: '20px' }}>
// //             Check-in and Check-out Details
// //           </h3>
// //           <table style={styles.table}>
// //             <thead>
// //               <tr>
// //                 <th style={styles.th}>Date</th>
// //                 <th style={styles.th}>Check-in Time</th>
// //                 <th style={styles.th}>Check-out Time</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {reportData.map((entry, idx) => (
// //                 <tr key={idx}>
// //                   <td style={styles.td}>{entry.date}</td>
// //                   <td style={styles.td}>{entry.checkIn}</td>
// //                   <td style={styles.td}>{entry.checkOut}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       {!loading && selectedTruck && reportData.length === 0 && (
// //         <div style={styles.noData}>
// //           No check-in/check-out data found for this truck.
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Report;













// // import React, { useState, useEffect } from 'react';

// // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// // const Report = () => {
// //   const [trucks, setTrucks] = useState([]);
// //   const [selectedTruck, setSelectedTruck] = useState('');
// //   const [reportData, setReportData] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   // Fetch all available truck numbers on mount
// //   useEffect(() => {
// //     fetch(`${API_URL}/api/trucksNo`)
// //       .then((res) => res.json())
// //       .then((data) => setTrucks(data))
// //       .catch((err) => console.error('Error fetching trucks:', err));
// //   }, []);

// //   // Fetch check-in/check-out report when a truck is selected
// //   useEffect(() => {
// //     if (selectedTruck) {
// //       setLoading(true);
// //       fetch(`${API_URL}/api/report/${selectedTruck}`)
// //         .then((res) => {
// //           if (!res.ok) throw new Error('Failed to fetch report');
// //           return res.json();
// //         })
// //         .then((data) => setReportData(data))
// //         .catch((err) => console.error('Error fetching report:', err))
// //         .finally(() => setLoading(false));
// //     } else {
// //       setReportData([]);
// //     }
// //   }, [selectedTruck]);

// //   const styles = {
// //     page: {
// //       maxWidth: '700px',
// //       margin: '40px auto',
// //       padding: '24px',
// //       background: '#fff',
// //       borderRadius: '12px',
// //       boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
// //       fontFamily: 'Segoe UI, Arial, sans-serif',
// //     },
// //     heading: {
// //       textAlign: 'center',
// //       color: '#2d3a4b',
// //       marginBottom: '24px',
// //     },
// //     label: {
// //       fontWeight: 'bold',
// //       marginRight: '12px',
// //     },
// //     select: {
// //       padding: '8px 12px',
// //       borderRadius: '6px',
// //       border: '1px solid #b0b0b0',
// //       fontSize: '16px',
// //       marginBottom: '24px',
// //     },
// //     table: {
// //       width: '100%',
// //       borderCollapse: 'collapse',
// //       marginTop: '20px',
// //     },
// //     th: {
// //       background: '#f4f6fa',
// //       color: '#2d3a4b',
// //       padding: '10px',
// //       borderBottom: '2px solid #e0e0e0',
// //     },
// //     td: {
// //       padding: '10px',
// //       borderBottom: '1px solid #e0e0e0',
// //       textAlign: 'center',
// //     },
// //     loading: {
// //       textAlign: 'center',
// //       color: '#888',
// //       marginTop: '20px',
// //     },
// //     noData: {
// //       textAlign: 'center',
// //       color: '#c00',
// //       marginTop: '20px',
// //     },
// //   };

// //   return (
// //     <div style={styles.page}>
// //       <h2 style={styles.heading}>Truck Report</h2>

// //       <div style={{ marginBottom: '16px', textAlign: 'center' }}>
// //         <label htmlFor="truck-select" style={styles.label}>
// //           Select Truck No:
// //         </label>
// //         <select
// //           id="truck-select"
// //           value={selectedTruck}
// //           onChange={(e) => setSelectedTruck(e.target.value)}
// //           style={styles.select}
// //         >
// //           <option value="">-- Select Truck --</option>
// //           {trucks.map((truck, index) => (
// //             <option key={index} value={truck.TruckNo}>
// //               {truck.TruckNo}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {loading && <div style={styles.loading}>Loading...</div>}

// //       {!loading && selectedTruck && reportData.length > 0 && (
// //         <div className="report-details">
// //           <h3 style={{ ...styles.heading, fontSize: '20px' }}>
// //             Check-in and Check-out Details
// //           </h3>
// //           <table style={styles.table}>
// //             <thead>
// //               <tr>
// //                 <th style={styles.th}>Transaction ID</th>
// //                 <th style={styles.th}>Check-in Time</th>
// //                 <th style={styles.th}>Check-out Time</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {reportData.map((entry, idx) => (
// //                 <tr key={idx}>
// //                   <td style={styles.td}>{entry.transactionId}</td>
// //                   <td style={styles.td}>{entry.checkIn || 'N/A'}</td>
// //                   <td style={styles.td}>{entry.checkOut || 'N/A'}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       {!loading && selectedTruck && reportData.length === 0 && (
// //         <div style={styles.noData}>
// //           No check-in/check-out data found for this truck.
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Report;










// import React, { useState, useEffect } from 'react';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// const Report = () => {
//   const [trucks, setTrucks] = useState([]);
//   const [selectedTruck, setSelectedTruck] = useState('');
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch all available truck numbers on mount
//   useEffect(() => {
//     fetch(`${API_URL}/api/trucksNo`)
//       .then((res) => res.json())
//       .then((data) => setTrucks(data))
//       .catch((err) => console.error('Error fetching trucks:', err));
//   }, []);

//   // Fetch report data when a truck is selected
//   useEffect(() => {
//     if (selectedTruck) {
//       setLoading(true);
//       fetch(`${API_URL}/api/report/${selectedTruck}`)
//         .then((res) => {
//           if (!res.ok) throw new Error('Failed to fetch report');
//           return res.json();
//         })
//         .then((data) => setReportData(data))
//         .catch((err) => console.error('Error fetching report:', err))
//         .finally(() => setLoading(false));
//     } else {
//       setReportData([]);
//     }
//   }, [selectedTruck]);

//   const styles = {
//     page: {
//       maxWidth: '800px',
//       margin: '40px auto',
//       padding: '24px',
//       background: '#fff',
//       borderRadius: '12px',
//       boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
//       fontFamily: 'Segoe UI, Arial, sans-serif',
//     },
//     heading: {
//       textAlign: 'center',
//       color: '#2d3a4b',
//       marginBottom: '24px',
//     },
//     label: {
//       fontWeight: 'bold',
//       marginRight: '12px',
//     },
//     select: {
//       padding: '8px 12px',
//       borderRadius: '6px',
//       border: '1px solid #b0b0b0',
//       fontSize: '16px',
//       marginBottom: '24px',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       marginTop: '20px',
//     },
//     th: {
//       background: '#f4f6fa',
//       color: '#2d3a4b',
//       padding: '10px',
//       borderBottom: '2px solid #e0e0e0',
//     },
//     td: {
//       padding: '10px',
//       borderBottom: '1px solid #e0e0e0',
//       textAlign: 'center',
//     },
//     loading: {
//       textAlign: 'center',
//       color: '#888',
//       marginTop: '20px',
//     },
//     noData: {
//       textAlign: 'center',
//       color: '#c00',
//       marginTop: '20px',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <h2 style={styles.heading}>Truck Report</h2>

//       <div style={{ marginBottom: '16px', textAlign: 'center' }}>
//         <label htmlFor="truck-select" style={styles.label}>
//           Select Truck No:
//         </label>
//         <select
//           id="truck-select"
//           value={selectedTruck}
//           onChange={(e) => setSelectedTruck(e.target.value)}
//           style={styles.select}
//         >
//           <option value="">-- Select Truck --</option>
//           {trucks.map((truck, index) => (
//             <option key={index} value={truck.TruckNo}>
//               {truck.TruckNo}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && <div style={styles.loading}>Loading...</div>}

//       {!loading && selectedTruck && reportData.length > 0 && (
//         <div className="report-details">
//           <h3 style={{ ...styles.heading, fontSize: '20px' }}>
//             Check-in and Check-out Details
//           </h3>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th style={styles.th}>Transaction ID</th>
//                 <th style={styles.th}>Plant Name</th>
//                 <th style={styles.th}>Check-in Time</th>
//                 <th style={styles.th}>Check-out Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reportData.map((entry, idx) => (
//                 <tr key={idx}>
//                   <td style={styles.td}>{entry.transactionId}</td>
//                   <td style={styles.td}>{entry.plantName}</td>
//                   <td style={styles.td}>{entry.checkIn || 'N/A'}</td>
//                   <td style={styles.td}>{entry.checkOut || 'N/A'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {!loading && selectedTruck && reportData.length === 0 && (
//         <div style={styles.noData}>
//           No check-in/check-out data found for this truck.
//         </div>
//       )}
//     </div>
//   );
// };

// export default Report;



// import React, { useState, useEffect } from 'react';

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// const Report = () => {
//   const [trucks, setTrucks] = useState([]);
//   const [selectedTruck, setSelectedTruck] = useState('');
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch truck numbers on mount
//   useEffect(() => {
//     fetch(`${API_URL}/api/trucksNo`)
//       .then((res) => res.json())
//       .then((data) => setTrucks(data))
//       .catch((err) => console.error('Error fetching trucks:', err));
//   }, []);

//   // Fetch report for selected truck
//   useEffect(() => {
//     if (selectedTruck) {
//       setLoading(true);
//       fetch(`${API_URL}/api/report/${selectedTruck}`)
//         .then((res) => {
//           if (!res.ok) throw new Error('Failed to fetch report');
//           return res.json();
//         })
//         .then((data) => setReportData(data))
//         .catch((err) => console.error('Error fetching report:', err))
//         .finally(() => setLoading(false));
//     } else {
//       setReportData([]);
//     }
//   }, [selectedTruck]);

//   const styles = {
//     container: {
//       maxWidth: '800px',
//       margin: '40px auto',
//       padding: '24px',
//       background: '#fff',
//       borderRadius: '12px',
//       boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
//       fontFamily: 'Segoe UI, Arial, sans-serif',
//     },
//     heading: {
//       textAlign: 'center',
//       color: '#2d3a4b',
//       marginBottom: '24px',
//     },
//     label: {
//       fontWeight: 'bold',
//       marginRight: '12px',
//     },
//     select: {
//       padding: '8px 12px',
//       borderRadius: '6px',
//       border: '1px solid #b0b0b0',
//       fontSize: '16px',
//       marginBottom: '24px',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       marginTop: '20px',
//     },
//     th: {
//       background: '#f4f6fa',
//       color: '#2d3a4b',
//       padding: '10px',
//       borderBottom: '2px solid #e0e0e0',
//     },
//     td: {
//       padding: '10px',
//       borderBottom: '1px solid #e0e0e0',
//       textAlign: 'center',
//     },
//     loading: {
//       textAlign: 'center',
//       color: '#888',
//       marginTop: '20px',
//     },
//     noData: {
//       textAlign: 'center',
//       color: '#c00',
//       marginTop: '20px',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Truck Report</h2>

//       <div style={{ textAlign: 'center', marginBottom: '16px' }}>
//         <label htmlFor="truck-select" style={styles.label}>Select Truck No:</label>
//         <select
//           id="truck-select"
//           value={selectedTruck}
//           onChange={(e) => setSelectedTruck(e.target.value)}
//           style={styles.select}
//         >
//           <option value="">-- Select Truck --</option>
//           {trucks.map((truck, idx) => (
//             <option key={idx} value={truck.TruckNo}>{truck.TruckNo}</option>
//           ))}
//         </select>
//       </div>

//       {loading && <div style={styles.loading}>Loading report...</div>}

//       {!loading && selectedTruck && reportData.length > 0 && (
//         <div className="report-section">
//           <h3 style={{ ...styles.heading, fontSize: '20px' }}>
//             Check-In / Check-Out Details
//           </h3>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th style={styles.th}>Transaction ID</th>
//                 <th style={styles.th}>Plant Name</th>
//                 <th style={styles.th}>Check-In Time</th>
//                 <th style={styles.th}>Check-Out Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reportData.map((row, idx) => (
//                 <tr key={idx}>
//                   <td style={styles.td}>{row.transactionId}</td>
//                   <td style={styles.td}>{row.plantName || 'N/A'}</td>
//                   <td style={styles.td}>{row.checkIn || 'N/A'}</td>
//                   <td style={styles.td}>{row.checkOut || 'N/A'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {!loading && selectedTruck && reportData.length === 0 && (
//         <div style={styles.noData}>No check-in/check-out data found for this truck.</div>
//       )}
//     </div>
//   );
// };

// export default Report;













import React, { useState, useEffect } from 'react';
import Select from 'react-select'; // ✅ Import react-select

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Report = () => {
  const [trucks, setTrucks] = useState([]);
  const [selectedTruck, setSelectedTruck] = useState('');
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch truck numbers on mount
  useEffect(() => {
    fetch(`${API_URL}/api/trucksNo`)
      .then((res) => res.json())
      .then((data) => setTrucks(data))
      .catch((err) => console.error('Error fetching trucks:', err));
  }, []);

  // Fetch report for selected truck
  useEffect(() => {
    if (selectedTruck) {
      setLoading(true);
      fetch(`${API_URL}/api/report/${selectedTruck}`)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch report');
          return res.json();
        })
        .then((data) => setReportData(data))
        .catch((err) => console.error('Error fetching report:', err))
        .finally(() => setLoading(false));
    } else {
      setReportData([]);
    }
  }, [selectedTruck]);

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '24px',
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      fontFamily: 'Segoe UI, Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#2d3a4b',
      marginBottom: '24px',
    },
    label: {
      fontWeight: 'bold',
      marginRight: '12px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      background: '#f4f6fa',
      color: '#2d3a4b',
      padding: '10px',
      borderBottom: '2px solid #e0e0e0',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #e0e0e0',
      textAlign: 'center',
    },
    loading: {
      textAlign: 'center',
      color: '#888',
      marginTop: '20px',
    },
    noData: {
      textAlign: 'center',
      color: '#c00',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Truck Report</h2>

      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <label htmlFor="truck-select" style={styles.label}>Select Truck No:</label>

        {/* ✅ react-select dropdown */}
        <Select
          id="truck-select"
          options={trucks.map(truck => ({
            value: truck.TruckNo,
            label: truck.TruckNo
          }))}
          value={selectedTruck ? { value: selectedTruck, label: selectedTruck } : null}
          onChange={(option) => setSelectedTruck(option?.value || '')}
          placeholder="Search or select truck..."
          isClearable
          isSearchable
          styles={{
            container: base => ({ ...base, display: 'inline-block', width: '300px' }),
            control: base => ({ ...base, fontSize: '16px' }),
          }}
        />
      </div>

      {loading && <div style={styles.loading}>Loading report...</div>}

      {!loading && selectedTruck && reportData.length > 0 && (
        <div className="report-section">
          <h3 style={{ ...styles.heading, fontSize: '20px' }}>
            Check-In / Check-Out Details
          </h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Transaction ID</th>
                <th style={styles.th}>Plant Name</th>
                <th style={styles.th}>Check-In Time</th>
                <th style={styles.th}>Check-Out Time</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((row, idx) => (
                <tr key={idx}>
                  <td style={styles.td}>{row.transactionId}</td>
                  <td style={styles.td}>{row.plantName || 'N/A'}</td>
                  <td style={styles.td}>{row.checkIn || 'N/A'}</td>
                  <td style={styles.td}>{row.checkOut || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && selectedTruck && reportData.length === 0 && (
        <div style={styles.noData}>No check-in/check-out data found for this truck.</div>
      )}
    </div>
  );
};

export default Report;
