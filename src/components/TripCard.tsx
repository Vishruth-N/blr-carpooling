import React from 'react';
import { Plane, Clock, MapPin, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import type { Trip } from '../types';

interface TripCardProps {
  trip: Trip;
  onDelete?: (id: string) => void;
}

export default function TripCard({ trip, onDelete }: TripCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-full ${trip.direction === 'TO_AIRPORT' ? 'bg-blue-50' : 'bg-green-50'}`}>
            <Plane 
              className={`h-5 w-5 ${trip.direction === 'TO_AIRPORT' ? 'rotate-45 text-blue-600' : '-rotate-45 text-green-600'}`}
            />
          </div>
          <span className="font-medium text-gray-900">
            {trip.direction === 'TO_AIRPORT' ? 'To Airport' : 'From Airport'}
          </span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          trip.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
          trip.status === 'MATCHED' ? 'bg-green-100 text-green-800' :
          trip.status === 'COMPLETED' ? 'bg-gray-100 text-gray-800' :
          'bg-red-100 text-red-800'
        }`}>
          {trip.status.charAt(0) + trip.status.slice(1).toLowerCase()}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">
            {format(new Date(trip.date + 'T' + trip.time), 'MMM d, yyyy - h:mm a')}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{trip.location}</span>
        </div>

        {trip.flightNumber && (
          <div className="flex items-center text-gray-600">
            <Plane className="h-4 w-4 mr-2" />
            <span className="text-sm">Flight: {trip.flightNumber}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">
          Terminal {trip.terminal}
        </span>
        {onDelete && (
          <button
            onClick={() => onDelete(trip.id)}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Cancel Trip
          </button>
        )}
      </div>
    </div>
  );
}