**Product Requirements Document (PRD)**

---

**Product Name**: IIT Bangalore Cab Pooling App

**Introduction**

The IIT Bangalore Cab Pooling App is a responsive web application designed to facilitate cab sharing among IIT students traveling to and from Bangalore Airport. The app simplifies coordination by allowing users to input their flight details, destination, and time of landing or departure, making it easy to find and contact potential cab-sharing partners.

---

### **Objectives**

- **Simplify Cab Pooling**: Provide a user-friendly platform for IIT students to coordinate cab sharing efficiently.
- **Enhance Communication**: Allow users to easily find and communicate with others who have similar travel plans.
- **Privacy and Security**: Ensure user data is protected, and privacy is maintained.
- **Accessibility**: Make the app responsive and accessible across all devices.

---

### **Target Audience**

- IIT students traveling to or from Bangalore Airport who are interested in sharing cabs to save costs and reduce environmental impact.

---

### **User Experience (UX) Overview**

1. **Onboarding**

   - **Registration/Login**: Simple sign-up using IIT email verification or social logins (Google/Facebook).
   - **Profile Setup**: Minimal information required—name, contact preferences, and optional profile picture.

2. **Home Dashboard**

   - **Upcoming Trips**: Display user's scheduled trips.
   - **Quick Actions**: Buttons to add a new trip or search for matches.

3. **Add Trip Details**

   - **Form Fields**:
     - Direction: To Airport or From Airport
     - Date and Time of Flight
     - Flight Number (optional) -> fetch time of landing directly if provided
     - Terminal (T1/T2)
     - Destination or Pickup Location (select from popular areas or enter manually)
   - **Submission**: Validations for date/time and required fields.

4. **Matchmaking**

   - **Automatic Matching**: Display list of users with overlapping travel plans (e.g., within ±1 hour and similar locations).
   - **Filters**: Adjust time range, terminal, and location preferences.
   - **Map View**: Option to view matches on a map for geographical proximity.

5. **Communication**

   - **In-App Messaging**: Secure messaging system without revealing personal contact details.
   - **Notifications**: Alerts for new messages or when new matching trips are added.

6. **User Profiles**

   - **View Profiles**: Limited view of other users' profiles (name, rating, shared trips).
   - **Ratings and Reviews**: Post-trip feedback to build trust within the community.

7. **Settings**

   - **Privacy Controls**: Options to control visibility and contact preferences.
   - **Account Management**: Update personal information, change password, or deactivate account.

---

### **Functional Requirements**

#### **1. User Registration and Authentication**

- **Email Verification**: Any email domain is allowed.
- **Social Logins**: Option to register/login via Google or Facebook.
- **Password Recovery**: Secure process to reset forgotten passwords.

#### **2. Trip Management**

- **Add Trip**: Users can add multiple upcoming trips.
- **Edit/Delete Trip**: Modify or remove trips as plans change.
- **Trip Visibility**: Trips are visible to other users for matching purposes.

#### **3. Matchmaking Algorithm**

- **Time Proximity**: Match users with flights within a configurable time window (default ±1 hour).
- **Location Proximity**: Match based on similar destinations or pickup locations.
- **Terminal Matching**: Option to filter matches by terminal (T1 or T2).

#### **4. Messaging System**

- **Secure Chat**: In-app messaging without sharing personal contact information.
- **Group Chats**: Create group conversations when more than two users are sharing a cab.
- **Message Notifications**: Real-time alerts for new messages.

#### **5. Notifications**

- **Push Notifications**: For new matches, messages, and trip updates (browser notifications).
- **Email Alerts**: Optional email notifications for important updates.

#### **6. User Feedback and Ratings**

- **Post-Trip Reviews**: Users can rate and review their cab-sharing experience.
- **Trust Score**: Aggregate rating displayed on user profiles.

#### **7. Administrative Functions**

- **User Management**: Admins can manage user accounts and handle reported issues.
- **Content Moderation**: Monitor and remove inappropriate content or users.

---

### **Technical Architecture**

#### **Front-End**

- **Framework**: React.js for a dynamic and responsive user interface.
- **UI Library**: Material-UI or Ant Design for consistent and modern components.
- **Routing**: React Router for client-side navigation.
- **State Management**: Redux or Context API for managing application state.

#### **Back-End**

- **Server Environment**: Node.js with Express.js for handling API requests.
- **Authentication**: Firebase Authentication for secure login and user management.
- **Real-Time Features**: Firebase Realtime Database or WebSockets for live updates and messaging.

#### **Database**

- **Database Choice**: Firebase Firestore for a scalable NoSQL cloud database.
- **Data Structure**:
  - **Users Collection**: Stores user profiles and preferences.
  - **Trips Collection**: Stores trip details and associated user IDs.
  - **Messages Collection**: Stores conversations between users.

#### **Hosting and Deployment**

- **Front-End Hosting**: Netlify or Vercel for continuous deployment and hosting.
- **Back-End Hosting**: Firebase Functions or Heroku for server-side logic.
- **Content Delivery Network (CDN)**: Use CDN services for faster content delivery globally.

#### **APIs and Integrations**

- **Maps Integration**: Google Maps API for location selection and map views.
- **Email Service**: SendGrid or Firebase for sending email notifications.
- **Push Notifications**: Firebase Cloud Messaging for real-time alerts.

---

### **Data Flow Diagram**

1. **User Interaction**: User interacts with the front-end application.
2. **API Requests**: Front-end makes API calls to the back-end server.
3. **Authentication**: Back-end authenticates user via Firebase Authentication.
4. **Database Operations**: Back-end reads/writes data to Firebase Firestore.
5. **Real-Time Updates**: Changes in the database trigger real-time updates on the front-end via Firebase.
6. **Messaging**: Messages are sent and received through real-time listeners.

---
