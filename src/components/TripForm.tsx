import React from 'react';
import { Plane, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface TripFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  direction: 'TO_AIRPORT' | 'FROM_AIRPORT';
  date: string;
  time: string;
  flightNumber: string;
  terminal: 'T1' | 'T2';
  location: string;
}

export default function TripForm({ onSubmit }: TripFormProps) {
  const [formData, setFormData] = React.useState<FormData>({
    direction: 'TO_AIRPORT',
    date: format(new Date(), 'yyyy-MM-dd'),
    time: format(new Date(), 'HH:mm'),
    flightNumber: '',
    terminal: 'T1',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Direction</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, direction: 'TO_AIRPORT' }))}
            className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 ${
              formData.direction === 'TO_AIRPORT'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Plane className="rotate-45" />
            <span className="text-sm font-medium">To Airport</span>
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, direction: 'FROM_AIRPORT' }))}
            className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 ${
              formData.direction === 'FROM_AIRPORT'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Plane className="-rotate-45" />
            <span className="text-sm font-medium">From Airport</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={format(new Date(), 'yyyy-MM-dd')}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="flightNumber" className="block text-sm font-medium text-gray-700">
          Flight Number (Optional)
        </label>
        <div className="relative">
          <input
            type="text"
            id="flightNumber"
            name="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            placeholder="e.g., 6E 123"
            className="w-full rounded-lg border-gray-300 pl-10 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="terminal" className="block text-sm font-medium text-gray-700">
          Terminal
        </label>
        <select
          id="terminal"
          name="terminal"
          value={formData.terminal}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="T1">Terminal 1</option>
          <option value="T2">Terminal 2</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          {formData.direction === 'TO_AIRPORT' ? 'Pickup Location' : 'Drop Location'}
        </label>
        <div className="relative">
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full rounded-lg border-gray-300 pl-10 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 py-3 px-4 rounded-lg text-white font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
      >
        Add Trip
      </button>
    </form>
  );
}