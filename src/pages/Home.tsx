import React from 'react';
import { Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import TripCard from '../components/TripCard';
import type { Trip } from '../types';

// Mock data - will be replaced with real data from backend
const mockTrips: Trip[] = [
  {
    id: '1',
    userId: 'user1',
    direction: 'TO_AIRPORT',
    date: '2024-03-20',
    time: '14:30',
    flightNumber: '6E 123',
    terminal: 'T1',
    location: 'IIT Campus',
    status: 'PENDING',
  },
  {
    id: '2',
    userId: 'user1',
    direction: 'FROM_AIRPORT',
    date: '2024-03-25',
    time: '10:15',
    terminal: 'T2',
    location: 'Koramangala',
    status: 'MATCHED',
  },
];

export default function Home() {
  const [upcomingTrips, setUpcomingTrips] = React.useState<Trip[]>(mockTrips);

  const handleDeleteTrip = (tripId: string) => {
    setUpcomingTrips(trips => trips.filter(trip => trip.id !== tripId));
  };

  return (
    <div className="p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-600">Find your next cab sharing partner</p>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <Link
          to="/add-trip"
          className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg border-2 border-blue-100 hover:bg-blue-100 transition-colors"
        >
          <Plus className="w-8 h-8 text-blue-600 mb-2" />
          <span className="text-sm font-medium text-blue-900">Add New Trip</span>
        </Link>
        <Link
          to="/search"
          className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg border-2 border-purple-100 hover:bg-purple-100 transition-colors"
        >
          <Search className="w-8 h-8 text-purple-600 mb-2" />
          <span className="text-sm font-medium text-purple-900">Find Matches</span>
        </Link>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Trips</h2>
        {upcomingTrips.length > 0 ? (
          <div className="space-y-4">
            {upcomingTrips.map(trip => (
              <TripCard
                key={trip.id}
                trip={trip}
                onDelete={handleDeleteTrip}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No upcoming trips</p>
            <Link to="/add-trip" className="text-blue-600 font-medium mt-2 inline-block">
              Add your first trip
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}