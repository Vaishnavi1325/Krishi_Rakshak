<div align="center">

# 🌱 KrishiRakshak

### AI-Powered Smart Pest Management Platform for Indian Farmers

![License](https://img.shields.io/badge/License-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?logo=express)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Groq](https://img.shields.io/badge/Groq-AI-orange)

AI-powered crop protection, pest detection, weather alerts, and farmer community platform.

</div>

---

# 📖 About

KrishiRakshak is an AI-powered smart agriculture platform designed to help Indian farmers identify crop pests, receive intelligent farming recommendations, monitor weather conditions, and manage crop health.

The platform combines Artificial Intelligence, Weather Analytics, Image Recognition, and Community Collaboration to reduce crop losses and improve farming decisions.

---

# ✨ Features

## 🤖 AI Farming Assistant

- AI-powered chatbot
- Crop-specific recommendations
- Natural language conversations
- Context-aware responses
- Conversation history

---

## 🔍 AI Pest Identification

- Upload crop images
- AI-powered pest detection
- Disease identification
- Treatment recommendations
- Preventive measures

---

## 🌦 Weather Dashboard

- Real-time weather
- 7-day weather forecast
- Weather-based farming insights
- Live environmental conditions

---

## 🚨 Smart AI Alerts

- AI-generated pest alerts
- Weather alerts
- Disease outbreak warnings
- Personalized recommendations

---

## 🌾 Crop Management

- Add crops
- Manage crops
- Crop-wise recommendations
- Active crop tracking

---

## 🧪 Spray Log

- Spray history
- Pesticide tracking
- Application records
- Spray management

---

## 👥 Farmer Community

- Create posts
- Ask questions
- Share farming experiences
- Comments
- Like posts

---

## 🌐 Multi-language Support

- English
- Hindi

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
- Cloudinary API
- Groq API

---

# 📂 Project Structure

```text
AgriGuardiann
│
├── public
│
├── src
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── lib
│   ├── pages
│   ├── services
│   └── types
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

# 🚀 Getting Started

## Prerequisites

- Node.js 18+
- MongoDB Atlas
- Groq API Key
- OpenWeatherMap API Key
- Cloudinary Account

---

## Installation

### Clone Repository

```bash
git clone https://github.com/AnveshaSharma17/AgriGuardiann.git

cd AgriGuardiann
```

---

### Install Frontend

```bash
npm install
```

---

### Install Backend

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

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## Seed Database

```bash
cd server

node scripts/seedPestDatabase.js
```

---

## Run Backend

```bash
cd server

npm run dev
```

---

## Run Frontend

```bash
npm run dev
```

---

Open

```
http://localhost:5173
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| GET | /api/auth/me |

---

## AI

| Method | Endpoint |
|---------|----------|
| POST | /api/ai/chat |
| POST | /api/ai/identify-image |

---

## Alerts

| Method | Endpoint |
|---------|----------|
| GET | /api/alerts |
| GET | /api/alerts/weather-forecast |
| GET | /api/alerts/ai-alerts |

---

## Crops

| Method | Endpoint |
|---------|----------|
| GET | /api/crops |
| GET | /api/user/crops |
| POST | /api/user/crops |

---

## Community

| Method | Endpoint |
|---------|----------|
| GET | /api/community |
| POST | /api/community |
| POST | /api/community/:id/comment |

---

## Spray Logs

| Method | Endpoint |
|---------|----------|
| GET | /api/spray-logs |
| POST | /api/spray-logs |

---

# 🔐 Authentication

Protected endpoints require JWT authentication.

```
Authorization: Bearer <token>
```

---

# 📸 Application Modules

- Dashboard
- AI Chat Assistant
- AI Pest Identification
- Weather Dashboard
- Smart AI Alerts
- Crop Management
- Spray Log
- Community Forum
- User Profile

---

# 🚀 Future Enhancements

- Voice Assistant
- Offline Mode
- SMS Notifications
- Push Notifications
- IoT Sensor Integration
- Drone Monitoring
- Regional Language Expansion

---

# 🤝 Contributing

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 🙏 Acknowledgements

- Groq AI
- OpenWeatherMap
- MongoDB Atlas
- React
- Express.js
- Tailwind CSS
- Cloudinary
- Indian Farming Community

---

<div align="center">

## 🌱 Made with ❤️ for Indian Farmers

### Protecting Crops • Empowering Farmers • Smart Agriculture

</div>