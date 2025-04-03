# Artist Booking App

This is a minimalistic web application for booking artists such as comedians, musicians, and local artists. The application has a UI inspired by CRED/Urban Company.

## Features

- User registration and authentication
- Artist profiles with details
- Booking system for hiring artists
- Chat functionality between users and artists
- Payment integration for bookings
- Admin panel for managing artists and bookings

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/artist-booking-app.git
   cd artist-booking-app
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Start MongoDB server:

   ```bash
   mongod --dbpath /path/to/your/mongodb/data
   ```

4. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

5. Start the frontend server:

   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
artist-booking-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
├── package.json
├── README.md
```

## License

This project is licensed under the MIT License.