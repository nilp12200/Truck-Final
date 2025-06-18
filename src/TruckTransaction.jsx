import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TruckTransaction() {
  const [formData, setFormData] = useState({
    truckNo: '',
    transactionDate: '',
    cityName: '',
    transporter: '',
    amountPerTon: '',
    truckWeight: '',
    deliverPoint: '',
    remarks: ''
  });

  const [plantList, setPlantList] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [newRow, setNewRow] = useState({
    plantName: '',
    loadingSlipNo: '',
    qty: '',
    priority: '',
    remarks: '',
    freight: 'To Pay'
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/plants')
      .then(res => setPlantList(res.data))
      .catch(err => console.error('Error fetching plants:', err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewRowChange = (e) => {
    setNewRow({ ...newRow, [e.target.name]: e.target.value });
  };

  const addRow = () => {
    if (newRow.plantName && newRow.loadingSlipNo && newRow.qty) {
      setTableData([...tableData, newRow]);
      setNewRow({
        plantName: '',
        loadingSlipNo: '',
        qty: '',
        priority: '',
        remarks: '',
        freight: 'To Pay'
      });
    }
  };

  const handleSubmit = async () => {
    let finalTableData = [...tableData];

    if (newRow.plantName && newRow.loadingSlipNo && newRow.qty) {
      finalTableData.push(newRow);
    }

    try {
      const response = await axios.post('http://localhost:3001/api/truck-transaction', {
        formData,
        tableData: finalTableData
      });

      if (response.data.success) {
        setMessage('✅ Transaction saved successfully!');
        setFormData({
          truckNo: '',
          transactionDate: '',
          cityName: '',
          transporter: '',
          amountPerTon: '',
          truckWeight: '',
          deliverPoint: '',
          remarks: ''
        });
        setTableData([]);
        setNewRow({
          plantName: '',
          loadingSlipNo: '',
          qty: '',
          priority: '',
          remarks: '',
          freight: 'To Pay'
        });
      } else {
        setMessage('❌ Error saving transaction.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setMessage('❌ Server error while submitting data.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 md:p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8 transform transition-all duration-300 hover:shadow-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Truck Transaction
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Truck No</label>
            <input 
              name="truckNo" 
              value={formData.truckNo} 
              onChange={handleChange} 
              className="w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
            />
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Transaction Date</label>
            <input 
              type="date" 
              name="transactionDate" 
              value={formData.transactionDate} 
              onChange={handleChange} 
              className="w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
            />
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">City Name</label>
            <input 
              name="cityName" 
              value={formData.cityName} 
              onChange={handleChange} 
              className="w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
            />
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Transporter</label>
            <input 
              name="transporter" 
              value={formData.transporter} 
              onChange={handleChange} 
              className="w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
            />
          </div>
        </div>

        {/* Loading Details Table */}
        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Loading Details</h3>
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full text-sm text-left">
            <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white">
              <tr>
                <th className="px-4 py-3 rounded-tl-xl">Plant</th>
                <th className="px-4 py-3">Slip No</th>
                <th className="px-4 py-3">Qty</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3">Remarks</th>
                <th className="px-4 py-3 rounded-tr-xl">Freight</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tableData.map((row, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-3">{row.plantName}</td>
                  <td className="px-4 py-3">{row.loadingSlipNo}</td>
                  <td className="px-4 py-3">{row.qty}</td>
                  <td className="px-4 py-3">{row.priority}</td>
                  <td className="px-4 py-3">{row.remarks}</td>
                  <td className="px-4 py-3">{row.freight}</td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="px-4 py-3">
                  <select 
                    name="plantName" 
                    value={newRow.plantName} 
                    onChange={handleNewRowChange} 
                    className="w-full rounded-lg border-2 border-gray-200 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  >
                    <option value="">Select</option>
                    {plantList.map((p, i) => (
                      <option key={i} value={p.PlantName}>{p.PlantName}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <input 
                    name="loadingSlipNo" 
                    value={newRow.loadingSlipNo} 
                    onChange={handleNewRowChange} 
                    className="w-full rounded-lg border-2 border-gray-200 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
                  />
                </td>
                <td className="px-4 py-3">
                  <input 
                    name="qty" 
                    value={newRow.qty} 
                    onChange={handleNewRowChange} 
                    className="w-full rounded-lg border-2 border-gray-200 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
                  />
                </td>
                <td className="px-4 py-3">
                  <input 
                    name="priority" 
                    value={newRow.priority} 
                    onChange={handleNewRowChange} 
                    className="w-full rounded-lg border-2 border-gray-200 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
                  />
                </td>
                <td className="px-4 py-3">
                  <input 
                    name="remarks" 
                    value={newRow.remarks} 
                    onChange={handleNewRowChange} 
                    className="w-full rounded-lg border-2 border-gray-200 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
                  />
                </td>
                <td className="px-4 py-3">
                  <select 
                    name="freight" 
                    value={newRow.freight} 
                    onChange={handleNewRowChange} 
                    className="w-full rounded-lg border-2 border-gray-200 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  >
                    <option value="To Pay">To Pay</option>
                    <option value="Paid">Paid</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={addRow}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            Add Row
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Amount Per Ton</label>
            <input 
              name="amountPerTon" 
              value={formData.amountPerTon} 
              onChange={handleChange} 
              className="w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
            />
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Deliver Point</label>
            <input 
              name="deliverPoint" 
              value={formData.deliverPoint} 
              onChange={handleChange} 
              className="w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
            />
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Truck Weight (In Ton)</label>
            <input 
              name="truckWeight" 
              value={formData.truckWeight} 
              onChange={handleChange} 
              className="w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
            />
          </div>
        </div>

        <div className="mt-6 transform transition-all duration-300 hover:scale-[1.01]">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Remarks</label>
          <textarea 
            name="remarks" 
            value={formData.remarks} 
            onChange={handleChange} 
            className="w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
            rows="4"
          ></textarea>
        </div>

        <div className="text-center mt-8">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            Submit
          </button>
        </div>

        {message && (
          <p className="mt-6 text-center text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default TruckTransaction;