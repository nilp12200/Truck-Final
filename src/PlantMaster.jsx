import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PlantMaster() {
  const [formData, setFormData] = useState({
    plantId: null,
    plantName: '',
    plantAddress: '',
    contactPerson: '',
    mobileNo: '',
    remarks: ''
  });
  const [plantList, setPlantList] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState('');
  const [showEditButton, setShowEditButton] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/plants');
      setPlantList(res.data);
    } catch (err) {
      console.error('Error fetching plant list:', err);
    }
  };

  const handlePlantSelect = (e) => {
    const plantName = e.target.value;
    setSelectedPlant(plantName);
    setShowEditButton(!!plantName);
  };

  const handleEditClick = async () => {
    if (!selectedPlant) return;
    try {
      const res = await axios.get(`http://localhost:3001/api/plantmaster/${encodeURIComponent(selectedPlant)}`);
      if (res.data && (res.data.PlantID || res.data.PlantId)) {
        setFormData({
          plantId: res.data.PlantID || res.data.PlantId,
          plantName: res.data.PlantName,
          plantAddress: res.data.PlantAddress,
          contactPerson: res.data.ContactPerson,
          mobileNo: res.data.MobileNo,
          remarks: res.data.Remarks
        });
        setEditMode(true);
      } else {
        console.error('No valid plant data returned');
        alert('❌ Invalid plant selected or no data found');
      }
    } catch (err) {
      console.error('Error fetching plant:', err);
      alert('❌ Error fetching plant data');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    setFormData({
      plantId: null,
      plantName: '',
      plantAddress: '',
      contactPerson: '',
      mobileNo: '',
      remarks: ''
    });
    setEditMode(false);
    setSelectedPlant('');
    setShowEditButton(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.plantId) {
        await axios.put(`http://localhost:3001/api/plantmaster/update/${formData.plantId}`, formData);
        alert('✅ Plant updated successfully!');
      } else {
        await axios.post('http://localhost:3001/api/plantmaster', formData);
        alert('✅ Plant data saved successfully!');
      }
      fetchPlants();
      handleBack();
    } catch (err) {
      alert('❌ Error saving data');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl transform transition-all duration-300 hover:shadow-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Plant Master
        </h2>
        {!editMode ? (
          <div className="space-y-6">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Plant to Edit</label>
              <select 
                value={selectedPlant} 
                onChange={handlePlantSelect} 
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              >
                <option value="">-- Select --</option>
                {[...new Set(plantList.map((plant) => plant.PlantName))].map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
              </select>
            </div>
            {showEditButton && (
              <button
                onClick={handleEditClick}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Edit Selected Plant
              </button>
            )}
            <button
              onClick={() => setEditMode(true)}
              className="mt-2 w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              + Add New Plant
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Plant Name</label>
              <input
                type="text"
                name="plantName"
                value={formData.plantName}
                onChange={handleChange}
                placeholder="Enter Plant Name"
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                required
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Plant Address</label>
              <textarea
                name="plantAddress"
                value={formData.plantAddress}
                onChange={handleChange}
                placeholder="Enter Plant Address"
                rows="2"
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              ></textarea>
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person</label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="Enter Contact Person Name"
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile No</label>
              <input
                type="tel"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Remarks</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Enter Remarks"
                rows="2"
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 shadow-sm p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              ></textarea>
            </div>
            <div className="flex justify-between mt-8 gap-4">
              <button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                {formData.plantId ? 'Update' : 'Save'}
              </button>
              <button 
                type="button" 
                onClick={handleBack} 
                className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-500 hover:to-gray-600 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Back
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}