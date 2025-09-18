# Assignment Contract Dashboard

A full-stack MERN contract dashboard project with authentication, contract management, file uploads, and AI insights. The backend is deployed on [Render](https://render.com/) and the frontend is live at [https://assignment.devsurya.space/](https://assignment.devsurya.space/).

---

## Live Demo

- **Frontend:** [https://assignment-fullstack-ucke.vercel.app/](https://assignment-fullstack-ucke.vercel.app/)
- **Backend API:** [https://assignment-fullstack-5.onrender.com/](https://assignment-fullstack-5.onrender.com/)

---

## Features

- **Authentication:** Signup, login, logout, and profile management.
- **Contracts Dashboard:** View, search, filter, and paginate contracts.
- **Contract Details:** See metadata, clauses, AI insights, and evidence for each contract.
- **File Uploads:** Upload and preview files (images supported).
- **Responsive UI:** Built with Tailwind CSS and custom components.
- **Sidebar Navigation:** Quick access to dashboard sections.
- **Toast Notifications:** Feedback for login and errors.

---

## Tech Stack

- **Frontend:** React, Redux Toolkit, React Router DOM, Tailwind CSS, Vite, Radix UI, Lucide Icons, Axios, React Toastify
- **Backend:** Express, PostgreSQL, Supabase, JWT, bcrypt, multer, textract, dotenv, cookie-parser
- **Deployment:** 
  - Backend: [Render](https://render.com/)
  - Frontend: [Vercel](https://vercel.com/)

---

## Project Structure

```
Assignment-full/
├── backend/
│   ├── controllers/
│   ├── Database/
│   ├── Middleware/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   ├── jsconfig.json
│   └── README.md
└── README.md
```

---

## Backend Overview

- **API Base URL:** [https://assignment-fullstack-5.onrender.com/](https://assignment-fullstack-5.onrender.com/)
- **Endpoints:**
  - `/auth/signup` — Signup user
  - `/auth/login` — Login user
  - `/auth/logout` — Logout user
  - `/auth/profile` — Get user profile (JWT required)
  - `/contracts/` — List contracts for logged-in user
  - `/contracts/:id` — Get contract details
  - `/upload/` — Upload contract file (JWT required)
- **Database:** PostgreSQL (schema in `backend/Database/Structure.sql`)
- **Authentication:** JWT stored in HTTP-only cookies

---

## Frontend Overview

- **Live Site:** [https://assignment.devsurya.space/](https://assignment.devsurya.space/)
- **Main Routes:**
  - `/` — Landing page
  - `/login` — Login page
  - `/signup` — Signup page
  - `/contractsDashboard` — Dashboard with contracts list
  - `/contracts/:id` — Contract details
  - `/profile` — User profile
  - `/UploadPage` — File uploads
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS, custom theme in `src/App.css`
- **Components:** Sidebar, Topbar, Table, Filter, Pagination, Dialog, Button, etc.
- **Demo Data:** Contracts loaded from `public/contracts.json` for demo purposes

---

## Getting Started

### Backend

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```
2. **Configure environment variables:**  
   Edit `.env` with your PostgreSQL credentials and JWT secret.
3. **Run locally:**
   ```sh
   npm start
   ```
   The API will be available at `http://localhost:5000/`.

### Frontend

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```
2. **Run locally:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## Deployment

- **Backend:** Deployed on Render at [https://assignment-fullstack-5.onrender.com/](https://assignment-fullstack-5.onrender.com/)
- **Frontend:** Deployed on Vercel at [https://assignment.devsurya.space/](https://assignment.devsurya.space/)

---

## API Usage

- All authentication endpoints require cookies for JWT.
- File uploads require authentication and use `multipart/form-data`.
- Contract endpoints require authentication.

---

## Author

Suryakant Dwivedi

---

## License

This project is for educational/demo purposes.

---

## Notes

- All contract data in the demo is mock and loaded from JSON.
- For demo login, use any username and password `test123`.
- Feedback and suggestions are welcome!