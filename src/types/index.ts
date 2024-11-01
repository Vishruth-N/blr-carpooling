export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  rating: number;
  tripsCompleted: number;
}

export interface Trip {
  id: string;
  userId: string;
  direction: 'TO_AIRPORT' | 'FROM_AIRPORT';
  date: string;
  time: string;
  flightNumber?: string;
  terminal: 'T1' | 'T2';
  location: string;
  status: 'PENDING' | 'MATCHED' | 'COMPLETED' | 'CANCELLED';
}

export interface Match {
  tripId: string;
  userId: string;
  matchScore: number;
  timeOverlap: number;
  locationDistance: number;
}