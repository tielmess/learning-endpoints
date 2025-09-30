# Learning Endpoints

A simple TypeScript Express.js API application with 4 endpoints that fetch data from external APIs and handle responses with proper error handling and TypeScript types.

## � **New to APIs? Start Here!**

**👉 [Complete Beginner's Guide to APIs](./LEARNING_GUIDE.md)** - Learn the fundamentals of APIs, HTTP, Express.js, and more using this project as a hands-on example!

## �🚀 Features

- **Weather API**: Get current weather data for any city
- **Quotes API**: Fetch random inspirational quotes or quotes by author
- **Users API**: Retrieve user data and posts from JSONPlaceholder
- **Crypto API**: Get cryptocurrency prices (single or multiple)

## 🏗️ MERN Stack Foundation

This project represents the **E** (Express.js) and **N** (Node.js) components of the popular MERN stack!

### What is MERN?

**MERN** = **M**ongoDB + **E**xpress.js + **R**eact + **N**ode.js

### This Project's Role in MERN:

- **✅ Node.js (N)**: JavaScript runtime environment - check!
- **✅ Express.js (E)**: Web server framework - check!
- **⏳ React (R)**: Frontend UI framework - _that's your next step!_
- **⏳ MongoDB (M)**: Database - _coming later in your journey!_

### 🚀 Your Path to Full-Stack Development:

**Where You Are Now:**

```
Backend API (this project) ← You are here!
├── ✅ Node.js runtime
├── ✅ Express.js server
├── ✅ RESTful endpoints
├── ✅ External API integration
└── ✅ TypeScript for safety
```

**Next Steps to Complete MERN:**

1. **Add React Frontend** → Build a UI that calls your API endpoints
2. **Add MongoDB Database** → Store data persistently instead of fetching from external APIs
3. **Connect Everything** → React ↔ Express ↔ MongoDB

### 💡 Why This Matters:

- **Industry Standard**: MERN is used by companies like Facebook, Netflix, and Airbnb
- **Full Control**: Own every layer of your application stack
- **Career Ready**: These are the exact skills employers want
- **Scalable**: This architecture grows with your project needs

## 📁 Project Structure

```
learning-endpoints/
├── src/
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── services/
│   │   ├── weatherService.ts # Weather API service
│   │   ├── quotesService.ts  # Quotes API service
│   │   ├── usersService.ts   # Users API service
│   │   └── cryptoService.ts  # Crypto API service
│   ├── routes/
│   │   ├── weather.ts        # Weather endpoints
│   │   ├── quotes.ts         # Quotes endpoints
│   │   ├── users.ts          # Users endpoints
│   │   └── crypto.ts         # Crypto endpoints
│   └── app.ts                # Main application file
├── dist/                     # Compiled JavaScript files
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Installation & Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables (optional):**

   ```bash
   # Create a .env file for API keys (optional)
   echo "WEATHER_API_KEY=your_api_key_here" > .env
   ```

   **Note:** The weather endpoint requires an API key from [WeatherAPI.com](https://www.weatherapi.com/) for live data. Without it, you'll get a helpful error message. Other endpoints work without API keys.

3. **Development mode (with hot reload):**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Start production server:**

   ```bash
   npm start
   ```

6. **Clean build directory:**
   ```bash
   npm run clean
   ```

## 📚 API Endpoints

### Base URL

```
http://localhost:9999
```

### 1. Weather API 🌤️

**Get weather by city:**

```http
GET /api/weather/:city
```

Example:

```bash
curl http://localhost:9999/api/weather/london
```

Response:

```json
{
  "success": true,
  "data": {
    "location": {
      "name": "London",
      "country": "United Kingdom",
      "region": "City of London, Greater London"
    },
    "current": {
      "temp_c": 15.0,
      "temp_f": 59.0,
      "condition": {
        "text": "Partly cloudy",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
      },
      "humidity": 72,
      "wind_kph": 11.2,
      "feelslike_c": 14.3
    }
  },
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

### 2. Quotes API 💭

**Get a random quote:**

```http
GET /api/quotes
```

**Get quotes by author:**

```http
GET /api/quotes/author/:author
```

Examples:

```bash
curl http://localhost:9999/api/quotes
curl http://localhost:9999/api/quotes/author/einstein
```

Response:

```json
{
  "success": true,
  "data": {
    "text": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs",
    "category": "motivation"
  },
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

### 3. Users API 👥

**Get all users (with optional limit):**

```http
GET /api/users?limit=5
```

**Get user by ID:**

```http
GET /api/users/:id
```

**Get user's posts:**

```http
GET /api/users/:id/posts
```

Examples:

```bash
curl http://localhost:9999/api/users
curl http://localhost:9999/api/users/1
curl http://localhost:9999/api/users/1/posts
```

### 4. Cryptocurrency API 💰

**Get single crypto price:**

```http
GET /api/crypto/:symbol
```

**Get multiple crypto prices:**

```http
GET /api/crypto?symbols=BTC,ETH,ADA
```

Examples:

```bash
curl http://localhost:9999/api/crypto/bitcoin
curl http://localhost:9999/api/crypto?symbols=BTC,ETH,DOGE
```

Response:

```json
{
  "success": true,
  "data": {
    "symbol": "BTC",
    "name": "Bitcoin",
    "price": 45000.5,
    "change_24h": 1250.3,
    "change_percentage_24h": 2.85,
    "market_cap": 850000000000,
    "volume_24h": 25000000000,
    "last_updated": "2023-12-01T10:30:00.000Z"
  },
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

### 5. Dragonball API 💰

**Get single character by id:**

```http
GET /api/id
```

## 🔧 Technical Details

### Technologies Used

- **TypeScript**: Type-safe JavaScript
- **Express.js**: Web framework for Node.js
- **Axios**: HTTP client for API calls
- **ts-node-dev**: TypeScript development server with hot reload

### Error Handling

All endpoints include comprehensive error handling with:

- Input validation
- Timeout handling (5 seconds)
- Clear error messages with status codes
- Structured error responses
- Request logging

### API Response Format

All endpoints return a consistent response format:

```json
// Success response
{
  "success": true,
  "data": { /* your data here */ },
  "timestamp": "2023-12-01T10:30:00.000Z"
}

// Error response
{
  "success": false,
  "error": "Weather API failed (404): City not found",
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

### External APIs Used

- **Weather**: WeatherAPI (returns errors when API fails)
- **Quotes**: Quotable API (returns errors when API fails)
- **Users**: JSONPlaceholder API
- **Crypto**: Coinbase API (returns errors when API fails)

## 🧪 Testing the API

You can test all endpoints using curl, Postman, or your browser:

```bash
# Test the root endpoint
curl http://localhost:9999

# Test weather endpoint
curl http://localhost:9999/api/weather/paris

# Test quotes endpoint
curl http://localhost:9999/api/quotes

# Test users endpoint
curl http://localhost:9999/api/users/2

# Test crypto endpoint
curl http://localhost:9999/api/crypto/ethereum
```

## 🚀 Getting Started

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:9999` to see the API documentation

3. Try out the different endpoints using the examples above

## 📝 License

MIT License - feel free to use this project for learning purposes!
