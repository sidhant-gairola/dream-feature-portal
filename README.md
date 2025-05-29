# Dream Feature Portal

This project is a full-stack web application built with React and Vite for the frontend, and Node.js with Express and MongoDB for the backend. It allows users to submit ideas, contact messages, and interact with the idea wall.

## Prerequisites

- Node.js (version 16 or higher recommended)
- npm (comes with Node.js)
- MongoDB instance (local or cloud)

## Dependencies

### Frontend and Backend Dependencies (from package.json)

- @tailwindcss/vite
- axios
- cors
- dotenv
- express
- mongoose
- nodemon
- react
- react-dom
- react-icons
- react-router-dom
- tailwindcss
- timeago.js

### Development Dependencies

- @eslint/js
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- vite

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/sidhant-gairola/dream-feature-portal
cd dream_feature_portal
```

### Install Dependencies

Install all dependencies for both frontend and backend (all are in the root package.json):

```bash
npm install
```

### Environment Variables Setup

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

- `PORT` is the port number for the backend server (default is 5000).
- `MONGO_URI` is the connection string for your MongoDB database.

### Running the Backend Server

To start the backend server with automatic reload on changes (recommended):

```bash
npx nodemon backend/Server.js
```

Or to run without automatic reload:

```bash
node backend/Server.js
```

The backend server will start on the port specified in `.env` or default to 5000.

### Running the Frontend

In a separate terminal, start the frontend development server:

```bash
npm run dev
```

This will start the Vite development server, usually on port 5173. Open your browser and navigate to the URL shown in the terminal (e.g., http://localhost:5173).

### Building for Production

To build the frontend for production:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Additional Notes

- Ensure MongoDB is running and accessible via the connection string provided in `.env`.
- The backend API endpoints are prefixed with `/api` (e.g., `/api/ideas`, `/api/contact`).
- CORS is enabled on the backend to allow frontend requests.
- The frontend uses React Router for client-side routing.
- Tailwind CSS is used for styling.

## Troubleshooting

- If you encounter issues connecting to MongoDB, verify your `MONGO_URI` and network access.
- If ports are in use, change the `PORT` in `.env` or the frontend port in `vite.config.js`.
- Use `npm run lint` to check for linting errors.

---

This README provides all necessary details to set up, run, and develop the Dream Feature Portal project on your local machine.