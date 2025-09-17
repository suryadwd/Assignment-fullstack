# Assignment Contract Dashboard

## Live Demo -- You can view the live site here: [https://assignment.devsurya.space](https://assignment.devsurya.space)

This is a frontend Assignment built with React, Redux, Tailwind CSS, and Vite. It allows users to view, filter, and manage contracts, see AI-generated insights, upload files, and handle authentication. The project demonstrates modern frontend engineering practices and UI component design.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Routing](#routing)
- [Authentication](#authentication)
- [Contracts Dashboard](#contracts-dashboard)
- [Contract Details](#contract-details)
- [File Uploads](#file-uploads)
- [Components Overview](#components-overview)
- [Styling](#styling)
- [Configuration](#configuration)
- [License](#license)

---

## Features

- **Authentication**: Simple login/logout flow using Redux.
- **Contracts Dashboard**: View, search, filter, and paginate contracts.
- **Contract Details**: See metadata, clauses, AI insights, and evidence for each contract.
- **File Uploads**: Upload and preview files (images supported).
- **Responsive UI**: Built with Tailwind CSS and custom components.
- **Sidebar Navigation**: Quick access to dashboard sections.
- **Toast Notifications**: Feedback for login and errors.

---

## Tech Stack

- **React** (v19)
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**
- **Vite** (build tool)
- **Radix UI** (Dialog, Slot)
- **Lucide Icons**
- **Axios** (for HTTP requests)
- **React Toastify** (notifications)
- **Class Variance Authority, clsx, tailwind-merge** (utility libraries)

---

## Project Structure

```
frontend/
├── public/
│   ├── contracts.json         # Mock contract data
│   └── vite.svg               # Favicon
├── src/
│   ├── App.jsx                # Main app component
│   ├── App.css                # Tailwind and custom styles
│   ├── main.jsx               # Entry point
│   ├── Redux/
│   │   ├── store.js           # Redux store setup
│   │   └── authSlice.js       # Auth reducer/actions
│   ├── components/
│   │   ├── Sidebar.jsx        # Sidebar navigation
│   │   ├── Topbar.jsx         # Topbar with profile/logout
│   │   ├── Table.jsx          # Contracts table
│   │   ├── Filter.jsx         # Filters for dashboard
│   │   ├── SetPages.jsx       # Pagination
│   │   ├── ClauseCard.jsx     # Clause display
│   │   ├── ContractMetadata.jsx # Contract metadata
│   │   ├── InsightsList.jsx   # AI insights
│   │   ├── EvidenceDrawer.jsx # Drawer for evidence
│   │   └── ui/
│   │       ├── button.jsx     # Custom button
│   │       └── dialog.jsx     # Custom dialog
│   ├── hooks/
│   │   └── getAllContracts.js # Custom hook for contract data
│   ├── lib/
│   │   └── utils.js           # Utility functions
│   ├── pages/
│   │   ├── LandingPage.jsx    # Landing page
│   │   ├── LoginPage.jsx      # Login page
│   │   ├── ContractsDashboard.jsx # Dashboard
│   │   ├── ContractDetail.jsx # Contract details
│   │   ├── Profile.jsx        # User profile
│   │   └── UploadPage.jsx     # File uploads
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite config
├── jsconfig.json              # Path aliases
├── components.json            # UI config
├── .gitignore
└── README.md                  # Project documentation
```

---

## Getting Started

# How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

3. **Build for production:**
   ```sh
   npm run build
   ```

---

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## Routing

Routing is handled by React Router. Main routes:

- `/` — Landing page
- `/login` — Login page
- `/contractsDashboard` — Dashboard with contracts list
- `/contracts/:id` — Contract details
- `/profile` — User profile
- `/UploadPage` — File uploads

See [`src/App.jsx`](src/App.jsx) for route definitions.

---

## Authentication

- **Login:** Enter any username and use password `test123` to log in.
- **Redux:** Auth state is managed in [`src/Redux/authSlice.js`](src/Redux/authSlice.js).
- **Profile:** Shows current logged-in user.
- **Logout:** Available in the topbar dropdown.

---

## Contracts Dashboard

- **Data Source:** Loads contracts from [`public/contracts.json`](public/contracts.json).
- **Features:** Search by name/parties, filter by status/risk, pagination.
- **Table:** Click a contract row to view details.

See [`src/pages/ContractsDashboard.jsx`](src/pages/ContractsDashboard.jsx).

---

## Contract Details

- **Metadata:** Name, parties, dates, status, risk.
- **Clauses:** List of contract clauses.
- **AI Insights:** Risk and recommendations.
- **Evidence:** Drawer with supporting evidence.

See [`src/pages/ContractDetail.jsx`](src/pages/ContractDetail.jsx).

---

## File Uploads

- **UploadPage:** Accessible from sidebar.
- **Features:** Upload multiple files, preview images, show status.
- **Dialog:** Uses custom dialog component for upload modal.

See [`src/pages/UploadPage.jsx`](src/pages/UploadPage.jsx).

---

## Components Overview

- **Sidebar:** Navigation links.
- **Topbar:** Profile and logout.
- **Table:** Contract list.
- **Filter:** Search and filter controls.
- **Pagination:** Page navigation.
- **Dialog/Button:** Custom UI primitives in [`src/components/ui/`](src/components/ui/).

---

## Styling

- **Tailwind CSS:** Utility-first styling.
- **Custom Theme:** Defined in [`src/App.css`](src/App.css).
- **Dark Mode:** Supported via `.dark` class.

---

## Configuration

- **Vite:** Fast build and HMR.
- **Aliases:** Use `@/` for `src/` imports (see [`jsconfig.json`](jsconfig.json)).
- **ESLint:** Configured for React and hooks (see [`eslint.config.js`](eslint.config.js)).

---

## License

This project is for educational/demo purposes.

---

## Author

Suryakant Dwivedi



## Notes

- All contract data is mock and loaded from JSON.
- No backend server is required.
- For demo login, use any username and password `test123`.

---

## Feedback

Feel free to open issues or suggest improvements!
