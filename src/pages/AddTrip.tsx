import React from 'react';
import { useNavigate } from 'react-router-dom';
import TripForm from '../components/TripForm';
import type { Trip } from '../types';

export default function AddTrip() {
  const navigate = useNavigate();

  const handleSubmit = (formData: any) => {
    const newTrip: Trip = {
      id: Date.now().toString(), // Temporary ID generation
      userId: 'user1', // Temporary user ID
      ...formData,
      status: 'PENDING',
    };

    // Store the trip in localStorage until we have a backend
    const existingTrips = JSON.parse(localStorage.getItem('trips') || '[]');
    localStorage.setItem('trips', JSON.stringify([...existingTrips, newTrip]));

    navigate('/');
  };

  return (
    <div className="p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Add New Trip</h1>
        <p className="text-gray-600">Enter your trip details to find sharing partners</p>
      </header>

      <TripForm onSubmit={handleSubmit} />
    </div>
  );
}