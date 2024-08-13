# car-servicing-backend
Here’s a `README.md` file outlining the setup and steps to run the project locally:

```markdown
# Car Wash Booking System

## Project Overview

The Car Wash Booking System is a backend service designed to handle user bookings for car wash services. It includes functionalities for managing users, services, slots, and bookings. The project is built using Express.js, Mongoose, Zod for validation, and Yarn as the package manager.

## Features

- **User Management**: Supports role-based access control (Admin, User).
- **Service Management**: Allows admins to create, update, and delete services.
- **Slot Management**: Admins can create slots, and users can view available slots.
- **Booking Management**: Users can book services and view their bookings. Admins can view all bookings.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (v1.22 or later)
- [MongoDB](https://docs.mongodb.com/manual/installation/) (v4.4 or later)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mdferdousalam/car-servicing-backend.git
cd car-wash-booking-system
```

### 2. Install Dependencies

Use Yarn to install the necessary dependencies:

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and configure the following environment variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/car-wash
JWT_SECRET=your_jwt_secret
```

### 4. Run MongoDB Locally

Ensure MongoDB is running locally. You can start MongoDB using the following command:

```bash
mongod
```

### 5. Start the Development Server

To start the server in development mode:

```bash
yarn dev
```

The server should now be running at `http://localhost:3000`.

### 6. Running the Project in Production

To run the project in production mode:

```bash
yarn build
yarn start
```

## API Endpoints

### User

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Authenticate a user.

### Services

- `POST /api/services`: Create a new service (Admin only).
- `GET /api/services`: Retrieve all services.
- `PATCH /api/services/:id`: Update a service (Admin only).
- `DELETE /api/services/:id`: Soft delete a service (Admin only).

### Slots

- `POST /api/services/slots`: Create slots for a service (Admin only).
- `GET /api/slots/availability`: Get available slots for a specific service.

### Bookings

- `POST /api/bookings`: Book a service (User only).
- `GET /api/bookings`: Get all bookings (Admin only).
- `GET /api/bookings/my-bookings`: Get bookings for the logged-in user.

## Testing

To run the tests, use:

```bash
yarn test
```

## Linting

To check for linting errors, use:

```bash
yarn lint
```

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` provides a comprehensive guide for setting up, running, and understanding the project.