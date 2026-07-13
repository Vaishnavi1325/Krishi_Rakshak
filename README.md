<div align="center">

# 🌱 KrishiRakshak

### AI-Powered Smart Pest Management Platform for Indian Farmers

![License](https://img.shields.io/badge/License-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?logo=express)
![Groq](https://img.shields.io/badge/Groq-AI-orange)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite)

### Intelligent Crop Protection Through Artificial Intelligence

AI-powered pest identification, weather intelligence, smart farming recommendations, crop management, and farmer community platform built specifically for Indian agriculture.

</div>

---

# 📖 About

KrishiRakshak is a modern full-stack agriculture platform that helps farmers identify pests, monitor crop health, receive AI-powered farming recommendations, and stay informed through weather-driven alerts.

The application combines Artificial Intelligence, Computer Vision, Weather Analytics, and Community Collaboration to provide a complete smart farming experience.

The platform aims to reduce crop losses by providing instant pest diagnosis, personalized recommendations, and proactive disease prevention.

---

# ✨ Features

## 🤖 AI Farming Assistant

- Groq-powered agricultural chatbot
- Context-aware farming conversations
- Crop-specific recommendations
- Personalized farming guidance
- Conversation history
- Fast streaming responses

---

## 🔍 AI Pest Identification

- Upload crop images
- AI-powered pest detection
- Disease identification
- Treatment recommendations
- Preventive farming measures
- Confidence-based analysis

---

## 🌦 Smart Weather Dashboard

- Real-time weather conditions
- 7-Day weather forecast
- Temperature monitoring
- Humidity tracking
- Wind speed analysis
- Weather-based crop insights

---

## 🚨 AI Smart Alerts

- Weather alerts
- Pest outbreak prediction
- Disease risk alerts
- Crop-specific recommendations
- AI-generated advisories
- Personalized notifications

---

## 🌾 Crop Management

- Add crops
- Manage active crops
- Crop monitoring
- Personalized recommendations
- Crop dashboard

---

## 🧪 Spray Log

- Maintain spray history
- Track pesticide applications
- View previous treatments
- Organize application records

---

## 👥 Farmer Community

- Share farming experiences
- Ask agricultural questions
- Community discussions
- Comments
- Like posts
- Knowledge sharing

---

## 🔐 Authentication

- JWT Authentication
- Secure Login
- User Registration
- Protected Routes
- Profile Management

---

## 🌐 Multi-language Support

- English
- Hindi

---

# 🚀 Key Highlights

- AI Chat Assistant
- AI Image Analysis
- Smart Weather Alerts
- Pest Identification
- Community Platform
- Crop Dashboard
- Spray Log Management
- JWT Authentication
- MongoDB Atlas Integration
- Cloud Image Storage
- Responsive UI
- Modern REST API

---

# 🛠 Tech Stack

## Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Query
- Axios
- Framer Motion
- shadcn/ui
- Lucide Icons

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

---

## AI Services

- Groq AI
- Llama 3.1 8B Instant
- Llama 4 Scout Vision

---

## APIs

- OpenWeatherMap API
- Groq API
- Cloudinary API

---

# 🧠 AI Features

### AI Chat Assistant

- Crop recommendations
- Farming advice
- Pest solutions
- Disease prevention
- Fertilizer guidance

### AI Image Detection

- Crop image analysis
- Pest identification
- Disease detection
- Preventive suggestions

### AI Weather Analysis

- Weather-based alerts
- Pest prediction
- Disease forecasting
- Farming recommendations

---

# 🎯 Project Objectives

- Reduce crop losses
- Improve pest identification accuracy
- Provide instant agricultural assistance
- Support sustainable farming
- Enable data-driven farming decisions
- Build a collaborative farmer community

---

# 🚀 Getting Started

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js 18+
- npm
- MongoDB Atlas Account
- Groq API Key
- OpenWeatherMap API Key
- Cloudinary Account (Optional)

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/AnveshaSharma17/AgriGuardiann.git

cd AgriGuardiann
```

---

## 2. Install Frontend Dependencies

```bash
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd server

npm install
```

---

# ⚙ Environment Variables

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

---

## Backend (server/.env)

```env
PORT=5000

NODE_ENV=development

CLIENT_URL=http://localhost:5173

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRE=30d

GROQ_API_KEY=your_groq_api_key

OPENWEATHERMAP_API_KEY=your_openweathermap_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

# 🗄 Database Setup

The project uses **MongoDB Atlas**.

1. Create a MongoDB Atlas Cluster.

2. Create a Database User.

3. Add your IP Address under Network Access.

4. Copy the MongoDB connection string.

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/KrishiRakshak
```

---

# 🤖 Groq AI Setup

1. Visit

```
https://console.groq.com/
```

2. Generate an API Key.

3. Add it to

```env
GROQ_API_KEY=your_api_key
```

---

# 🌦 Weather API Setup

1. Create an account at OpenWeatherMap.

2. Generate an API Key.

3. Add

```env
OPENWEATHERMAP_API_KEY=your_api_key
```

---

# ☁ Cloudinary Setup

Create a Cloudinary account and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

Cloudinary is used for image uploads before AI analysis.

---

# 🌱 Seed Database

Populate the pest database before starting the application.

```bash
cd server

node scripts/seedPestDatabase.js
```

---

# ▶ Running the Backend

```bash
cd server

npm run dev
```

Server runs on

```
http://localhost:5000
```

---

# ▶ Running the Frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🌍 Application Workflow

```
Farmer
   │
   ▼
Frontend (React + Vite)
   │
REST APIs
   │
Express.js Backend
   │
 ├───────────────┐
 │               │
 ▼               ▼
MongoDB       Groq AI
 │               │
 ▼               ▼
Crop Data    AI Responses
 │               │
 └──────┬────────┘
        ▼
 Weather API
        │
        ▼
 Personalized Alerts
```

---

# 📁 Project Structure

```text
AgriGuardiann
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── lib
│   ├── pages
│   ├── services
│   ├── types
│   └── utils
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── scripts
│   ├── services
│   ├── uploads
│   └── utils
│
├── package.json
├── vite.config.ts
└── README.md
```

---

# 🔒 Authentication

The application uses **JWT Authentication**.

Every protected API requires

```http
Authorization: Bearer <JWT_TOKEN>
```

JWT is generated during login and must be sent with authenticated requests.

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

---

## AI Services

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/ai/chat` | Chat with AI Assistant |
| POST | `/api/ai/identify-image` | AI Pest Identification |

---

## Crop Management

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/crops` | Get all crops |
| GET | `/api/user/crops` | Get user crops |
| POST | `/api/user/crops` | Add crop |
| PATCH | `/api/user/crops/:id` | Update crop |
| DELETE | `/api/user/crops/:id` | Delete crop |

---

## Weather & Alerts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/alerts` | Get alerts |
| GET | `/api/alerts/weather-forecast` | Weather Forecast |
| GET | `/api/alerts/ai-alerts` | AI Generated Alerts |

---

## Community

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/community` | Get Posts |
| POST | `/api/community` | Create Post |
| POST | `/api/community/:id/comment` | Comment on Post |
| PATCH | `/api/community/:id/like` | Like a Post |

---

## Spray Logs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/spray-logs` | View Spray Logs |
| POST | `/api/spray-logs` | Add Spray Log |
| PATCH | `/api/spray-logs/:id` | Update Spray Log |
| DELETE | `/api/spray-logs/:id` | Delete Spray Log |

---

# 📸 Screenshots

The app screenshots are available in `public/screenshots/`.

## Dashboard

![Dashboard](public/screenshots/dashboard.png)

## Home Screen

![Home Screen](public/screenshots/home.png)

## AI Chat Assistant

![AI Chat Assistant](public/screenshots/chat.png)

## AI Pest Identification

![Pest Identification](public/screenshots/pest-identification.png)

## Weather Dashboard

![Weather Dashboard](public/screenshots/weather.png)

## Community

![Community](public/screenshots/community.png)

## Spray Log

![Spray Log](public/screenshots/spraylog.png)

> Tip: Replace these images with updated screenshots if you refresh the UI.

---

# 🚀 Deployment

## Frontend

Deploy the React application to any static frontend platform.

- Vercel
- Netlify
- Cloudflare Pages

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

Frontend environment variable:

```env
VITE_API_URL=https://your-backend-domain.com
```

## Backend

Deploy the Express API server to a Node.js host.

- Render
- Railway
- Fly.io
- Heroku

Install dependencies:

```bash
cd server
npm install
```

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Backend environment variables:

```env
PORT=5000
NODE_ENV=production
CLIENT_URL=https://your-frontend-domain.com
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
GROQ_API_KEY=your_groq_api_key
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

# 📈 Future Enhancements

- Voice-enabled AI Assistant
- Push Notifications
- SMS Weather Alerts
- Offline Support
- Multi-language Expansion
- IoT Sensor Integration
- Drone Crop Monitoring
- Soil Health Analysis
- Fertilizer Recommendation Engine
- Marketplace for Farmers
- Government Scheme Integration

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/feature-name
```

3. Commit your changes.

```bash
git commit -m "feat: add new feature"
```

4. Push the branch.

```bash
git push origin feature/feature-name
```

5. Open a Pull Request.

---

# 🧪 Testing

Run the frontend

```bash
npm run dev
```

Run the backend

```bash
cd server

npm run dev
```

Verify

- User Authentication
- AI Chat
- Pest Identification
- Weather Dashboard
- AI Alerts
- Community
- Spray Logs

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 🙏 Acknowledgements

- Groq AI
- MongoDB Atlas
- OpenWeatherMap
- Cloudinary
- React
- Express.js
- Tailwind CSS
- Vite
- shadcn/ui

---

<div align="center">

# 🌱 KrishiRakshak

### AI-Powered Smart Pest Management Platform

**Protecting Crops • Empowering Farmers • Smart Agriculture**

Built with ❤️ using **React, Node.js, Express, MongoDB Atlas, and Groq AI**

</div>

