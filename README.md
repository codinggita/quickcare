<div align="center">

# 🏥 QuickCare

### *Trusted Healthcare for Travelers, Anywhere, Anytime*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()
[![Figma Design](https://img.shields.io/badge/Figma-Design%20Available-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/design/rh9bS5tmUnP1eSDasYl0HQ/quickcare)

<br/>

> **"How can travelers quickly access trusted, affordable healthcare in unfamiliar locations during urgent situations?"**

<br/>

QuickCare is a smart, traveler-focused healthcare platform that connects users with verified doctors, clinics, and pharmacies near their current location — in minutes. It eliminates the confusion, cost uncertainty, and language barriers that travelers face when seeking urgent medical attention in unfamiliar cities or countries.

</div>

---

## 📌 Table of Contents

- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Core Features](#-core-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Overview](#-api-overview)
- [Design](#-design)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚨 The Problem

Traveling to a new city or country is exciting — but falling ill during a trip is a nightmare. Travelers regularly face:

- 🔍 **No trusted recommendations** — Not knowing which hospitals or clinics are reputable and safe.
- 💬 **Language barriers** — Unable to communicate symptoms effectively with local healthcare providers.
- 💸 **Hidden costs** — No transparency on consultation fees or treatment costs before visiting.
- ⏱️ **Time loss** — Wasting precious hours searching for the right type of specialist.
- 😰 **High stress** — Making medical decisions in an unfamiliar environment during an emergency.

These challenges are especially severe for international travelers, elderly tourists, and solo adventurers who are navigating a healthcare system entirely foreign to them.

---

## 💡 The Solution

QuickCare is a centralized, intelligent medical assistance platform that:

- Pinpoints **verified healthcare providers** based on a traveler's real-time location.
- Provides **full transparency** — fees, specialties, available languages, and live availability.
- Guides users through a **symptom-based triage system** to the most suitable type of doctor.
- Offers **teleconsultation** when in-person care is not immediately accessible.
- Extends support to **pharmacy discovery and medicine comparison** to complete the care loop.

---

## ✨ Core Features

### 🗺️ Location-Based Provider Discovery
- Detect the user's current GPS location automatically.
- Display a map view and list view of nearby verified hospitals, clinics, and independent doctors.
- Real-time availability status for each provider.

### ✅ Verified & Trusted Providers
- All healthcare providers are vetted and badge-verified on the platform.
- Patient ratings and reviews are displayed for transparency and trust.
- Clear indication of specialties supported at each facility.

### 💬 Transparent Information
- Upfront consultation fee ranges — no hidden charges.
- Languages spoken by the doctor, so patients can communicate comfortably.
- Estimated waiting times and appointment slots.

### 🩺 Quick Help — Symptom-to-Specialist Triage
- Users describe their symptoms in plain language or select from common health concerns.
- AI-assisted logic recommends the most appropriate type of specialist.
- Reduces decision fatigue in high-stress urgent situations.

### 🔎 Smart Filters
- **Distance** — Show providers within a selected radius.
- **Cost Range** — Filter by consultation fee budget.
- **Language** — Find doctors who speak the user's language.
- **Urgency** — Prioritize emergency/walk-in services vs. scheduled appointments.
- **Specialty** — Filter by medical specialty (e.g., general physician, dermatology, pediatrics).

### 🖥️ Teleconsultation
- When no suitable in-person care is nearby, connect users to verified remote specialists via video.
- Secure, private, and available around the clock.

### 💊 Pharmacy & Medicine Support
- Locate nearby pharmacies post-consultation.
- Compare medicine availability and pricing across multiple pharmacies.
- Ensures travelers can complete their prescribed treatment affordably.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) |
| **Authentication** | JWT (JSON Web Tokens) |
| **Maps & Location** | Google Maps API / Mapbox |
| **Real-time** | Socket.IO |
| **Teleconsultation** | WebRTC / Twilio Video |
| **Design** | Figma |
| **Version Control** | Git & GitHub |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT (React)                        │
│   Landing Page → Symptom Triage → Search Results → Profile  │
└──────────────────────────┬──────────────────────────────────┘
                           │ REST API / WebSocket
┌──────────────────────────▼──────────────────────────────────┐
│                   BACKEND (Node + Express)                    │
│                                                              │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐  │
│  │   Auth API  │  │  Search API  │  │  Teleconsult API   │  │
│  └─────────────┘  └──────────────┘  └────────────────────┘  │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐  │
│  │ Symptom API │  │ Pharmacy API │  │  Notification API  │  │
│  └─────────────┘  └──────────────┘  └────────────────────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    DATA LAYER (MongoDB)                       │
│   Users │ Providers │ Clinics │ Pharmacies │ Appointments    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas connection)
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/daksh006v/Quickcare.git
cd Quickcare

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `/backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
MAPS_API_KEY=your_google_maps_api_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
```

### Running the Application

```bash
# Start the backend server
cd backend
npm run dev

# In a new terminal, start the frontend
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173` (frontend) and `http://localhost:5000` (backend API).

---

## 📁 Project Structure

```
Quickcare/
├── backend/
│   ├── controllers/        # Route handler logic
│   ├── models/             # Mongoose data models
│   ├── routes/             # Express API routes
│   ├── services/           # Business logic & external services
│   ├── middleware/         # Auth, error handling middleware
│   ├── utils/              # Helper utilities
│   └── server.js           # Entry point
│
├── frontend/
│   ├── public/             # Static assets
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Application pages/routes
│       ├── hooks/          # Custom React hooks
│       ├── context/        # Global state (Context API)
│       ├── services/       # API call functions
│       ├── utils/          # Frontend utilities
│       └── App.jsx         # Root component
│
└── README.md
```

---

## 📡 API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT |
| `GET` | `/api/providers/nearby` | Get nearby doctors/clinics |
| `GET` | `/api/providers/:id` | Get provider details |
| `POST` | `/api/triage/symptom` | Submit symptoms for specialist recommendation |
| `GET` | `/api/pharmacies/nearby` | Get nearby pharmacies |
| `POST` | `/api/appointments/book` | Book an appointment |
| `GET` | `/api/teleconsult/available` | Get available remote doctors |
| `POST` | `/api/teleconsult/session` | Initiate a teleconsultation session |

> Full API documentation will be available via Postman collection (coming soon).

---

## 🎨 Design

The complete UI/UX design for QuickCare is available on Figma:

🔗 **[View Figma Design](https://www.figma.com/design/rh9bS5tmUnP1eSDasYl0HQ/quickcare)**

The design follows a clean, trust-focused aesthetic with:
- High contrast, accessible color palette
- Intuitive card-based provider listings
- Map-first layout for location discovery
- Mobile-first responsive design
- Calm, reassuring UI tones suited for medical contexts

---

## 🗓️ Roadmap

- [x] Project ideation & problem definition
- [x] UI/UX Design (Figma)
- [ ] Backend API development (Auth, Providers, Triage)
- [ ] Frontend development (Core pages)
- [ ] Maps & location integration
- [ ] Symptom triage AI logic
- [ ] Pharmacy search module
- [ ] Teleconsultation integration (WebRTC)
- [ ] Testing & QA
- [ ] Production deployment

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'feat: add some feature'`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

Please follow conventional commit messages and ensure code is properly formatted before submitting a PR.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ to make healthcare accessible for every traveler.**

*QuickCare — Find the Right Care, Right Now.*

</div>