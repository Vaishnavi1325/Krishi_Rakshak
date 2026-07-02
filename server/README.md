<div align="center">

# 🌱 KrishiRakshak Backend

### Express.js REST API for AI-Powered Smart Pest Management

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Groq](https://img.shields.io/badge/Groq-AI-orange)
![JWT](https://img.shields.io/badge/JWT-Authentication-blue)

REST API powering the **KrishiRakshak** platform with AI services, authentication, weather integration, crop management, and community features.

</div>

---

# 📖 Overview

The KrishiRakshak backend provides secure REST APIs for smart agriculture applications.

It handles:

- User Authentication
- Crop Management
- AI Chat
- AI Pest Identification
- Weather Forecasting
- AI Alerts
- Spray Logs
- Community Posts
- MongoDB Database Operations

---

# 🚀 Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes

---

## AI Services

- Groq AI Chat Assistant
- AI Pest Identification
- AI Crop Recommendations
- Weather-based Farming Advice
- Smart Agricultural Alerts

---

## Crop Management

- Add Crops
- Update Crops
- Delete Crops
- User Crop Dashboard

---

## Weather

- OpenWeatherMap Integration
- Live Weather
- Forecast
- Pest Risk Prediction

---

## Community

- Create Posts
- Like Posts
- Comments
- Farmer Discussions

---

## Spray Logs

- Create Spray Records
- View History
- Update Records
- Delete Records

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- Groq AI
- OpenWeatherMap API
- Cloudinary
- Multer

---

# 📂 Folder Structure

```text
server
│
├── controllers
├── middleware
├── models
├── routes
├── scripts
├── services
├── uploads
├── utils
│
├── index.js
├── package.json
└── README.md
```

---

# 📦 Installation

Clone repository

```bash
git clone https://github.com/your-username/KrishiRakshak.git

cd server
```

Install dependencies

```bash
npm install
```

---

# ⚙ Environment Variables

Create a `.env` file inside the `server` folder.

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

# ▶ Run Development Server

```bash
npm run dev
```

Server

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |
| GET | `/api/auth/me` |

---

## AI

| Method | Endpoint |
|---------|----------|
| POST | `/api/ai/chat` |
| POST | `/api/ai/identify-image` |

---

## Alerts

| Method | Endpoint |
|---------|----------|
| GET | `/api/alerts` |
| GET | `/api/alerts/weather-forecast` |
| GET | `/api/alerts/ai-alerts` |

---

## Crops

| Method | Endpoint |
|---------|----------|
| GET | `/api/crops` |
| GET | `/api/user/crops` |
| POST | `/api/user/crops` |

---

## Community

| Method | Endpoint |
|---------|----------|
| GET | `/api/community` |
| POST | `/api/community` |

---

## Spray Logs

| Method | Endpoint |
|---------|----------|
| GET | `/api/spray-logs` |
| POST | `/api/spray-logs` |

---

# 🔐 Authentication

Protected APIs require a JWT token.

```http
Authorization: Bearer <token>
```

---

# 🧠 AI Models

- **Chat:** Llama 3.1 8B Instant (Groq)
- **Vision:** Llama 4 Scout
- **Weather Advisory:** Groq AI
- **Pest Recommendations:** Groq AI

---

# 🚀 Deployment

The backend can be deployed on:

- Render
- Railway
- Fly.io

Start command

```bash
npm start
```

---

# 📄 License

MIT License.

---

<div align="center">

### 🌱 KrishiRakshak Backend

Built with ❤️ using **Node.js**, **Express.js**, **MongoDB Atlas**, and **Groq AI**.

</div>