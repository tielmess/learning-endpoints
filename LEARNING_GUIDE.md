# 🚀 APIs Explained: Your First Journey into Web Development

*Welcome to the wonderful world of APIs! Don't worry if that sounds scary - by the end of this guide, you'll understand how websites talk to each other and how you can build your own digital messenger service.*

---

## 📖 Table of Contents

1. [TypeScript: Making JavaScript Safer (Why This Helps Beginners)](#typescript-benefits)
2. [What Even Is an API? (And Why Should I Care?)](#what-even-is-an-api)
3. [HTTP: The Language of the Internet](#http-the-language-of-the-internet)
4. [Meet Express.js: Your Friendly Web Server](#meet-expressjs)
5. [Breaking Down Our Learning Project](#breaking-down-our-project)
6. [The Anatomy of an API Endpoint](#anatomy-of-an-endpoint)
7. [Real-World Example: Weather API](#weather-api-example)
8. [Error Handling: When Things Go Wrong](#error-handling)
9. [Testing Your API Like a Pro](#testing-your-api)
10. [What's Next?](#whats-next)

---

## 🛡️ TypeScript: Making JavaScript Safer (Why This Helps Beginners) {#typescript-benefits}

**Before we dive into APIs, let's talk about TypeScript - and why it's actually BETTER for beginners than plain JavaScript!**

Think of TypeScript like having **training wheels** for programming. But instead of slowing you down, these training wheels make you go faster and crash less often.

### 🤔 Why Start Here? 

When you're learning, **seeing is understanding**. TypeScript shows you exactly what kind of data you're working with, which makes everything clearer!

**JavaScript (confusing for beginners):**
```javascript
function getWeather(city) {
  // What is city? A string? A number? An object? 🤷‍♀️
  // What does this function return? Nobody knows! 😵‍💫
  return someWeatherData;
}
```

**TypeScript (clear for everyone!):**
```typescript
function getWeather(city: string): WeatherData {
  // ✅ I can see city must be a string
  // ✅ I can see it returns WeatherData
  // ✅ My editor will help me with autocomplete!
  return someWeatherData;
}
```

### 🎯 Real Benefits for Learning:

1. **🔍 See What's Expected**: Types show you exactly what data looks like
2. **🚨 Catch Mistakes Early**: Errors show up immediately, not when your code runs
3. **📖 Built-in Documentation**: Code explains itself
4. **🧠 Learn Faster**: Your editor shows you what's possible as you type

### 📊 Example: Understanding API Responses

Look how clear this is compared to plain JavaScript:

```typescript
// You can SEE exactly what the weather API returns:
interface WeatherData {
  location: {
    name: string;        // ← City name (like "London")
    country: string;     // ← Country name (like "United Kingdom")
  };
  current: {
    temp_c: number;      // ← Temperature in Celsius (like 15.5)
    condition: {
      text: string;      // ← Weather description (like "Partly cloudy")
      icon: string;      // ← Weather icon URL
    };
  };
}
```

**Now when you see code like this:**
```typescript
const weather: WeatherData = await getWeatherByCity('London');
console.log(weather.current.temp_c); // You KNOW this is a number!
```

You immediately understand what `weather` contains and what you can do with it!

### 🎬 Want to Learn More?

Fireship is a great YouTuber who makes quick, informative programming videos. [Watch his TypeScript in 100 seconds video here](https://www.youtube.com/watch?v=zQnBQ4tB3ZA) 

### 💡 The Bottom Line

**TypeScript isn't "advanced JavaScript" - it's "JavaScript with helpful labels"**. As a beginner, those labels make everything easier to understand!

Throughout this guide, you'll see how TypeScript makes our API code clearer and easier to follow. Ready? Let's build something awesome! 🚀

---

## 🤔 What Even Is an API? (And Why Should I Care?) {#what-even-is-an-api}

Imagine you're at a restaurant. You don't go into the kitchen and cook your own food, right? Instead, you tell the waiter what you want, they go to the kitchen, get your food, and bring it back to you.

**An API (Application Programming Interface) is like that waiter!**

- **You** = a website or app that needs some information
- **The waiter** = the API
- **The kitchen** = another service with data (like weather info, user profiles, etc.)

### Real-Life API Examples You Use Every Day:

- 📱 **Weather apps** don't generate weather data - they ask a weather service API for it
- 🗺️ **Google Maps** in other apps - they're using Google's API to show maps
- 🔐 **"Login with Google"** buttons - using Google's authentication API
- 💰 **Shopping apps** showing prices - they ask store APIs for current prices

### Why APIs Are Awesome:

1. **Don't Reinvent the Wheel**: Why build your own weather database when someone else already did it perfectly?
2. **Real-Time Data**: Get fresh information without storing everything yourself
3. **Modularity**: Break big problems into smaller, manageable pieces
4. **Collaboration**: Different teams/companies can work together seamlessly

---

## 🌐 HTTP: The Language of the Internet {#http-the-language-of-the-internet}

HTTP (HyperText Transfer Protocol) is how computers talk to each other on the internet. Think of it like a very polite conversation with specific rules.

### The HTTP Conversation:

```
🧑 You: "Hey server, can I have the weather for London please?"
🖥️ Server: "Sure! Here's the weather data for London: sunny, 22°C"
```

### HTTP Methods (The Different Ways to Ask):

Think of these like different types of requests you might make:

- **GET** 📥 = "Can I have some information please?" (most common)
- **POST** 📤 = "Here's some new information to save"
- **PUT** ✏️ = "Please update this existing information"
- **DELETE** 🗑️ = "Please remove this information"

### HTTP Status Codes (The Server's Responses):

- **200** ✅ = "Everything's great! Here's what you asked for"
- **404** ❌ = "Sorry, I can't find what you're looking for"
- **500** 💥 = "Oops, something broke on my end"

### In Our Project:

```typescript
// This is a GET request to fetch weather data
app.get('/api/weather/:city', (req, res) => {
  // Get weather for the city and send it back
});
```

---

## 🚂 Meet Express.js: Your Friendly Web Server {#meet-expressjs}

Express.js is like having a super-efficient receptionist for your web service. It handles all the boring stuff (like parsing requests, routing, etc.) so you can focus on the fun parts.

### What Express Does for You:

1. **Listens** for incoming requests
2. **Routes** them to the right handler
3. **Processes** the request
4. **Sends back** a response

### The Basic Express Pattern:

```typescript
// 1. Import Express
import express from 'express';

// 2. Create an app
const app = express();

// 3. Define what happens when someone visits a URL
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// 4. Start listening for requests
app.listen(3000);
```

It's that simple! Express handles all the complex networking stuff behind the scenes.

---

## 🏗️ Breaking Down Our Learning Project {#breaking-down-our-project}

Our project is like a **digital information broker**. It knows how to talk to different services and brings all that information together in one place.

### Our Project Structure (Like a Well-Organized Office):

```
learning-endpoints/
├── src/
│   ├── app.ts          👈 The main office (Express server)
│   ├── routes/         👈 Different departments
│   │   ├── weather.ts  👈 Weather department
│   │   ├── quotes.ts   👈 Quotes department
│   │   ├── users.ts    👈 User data department
│   │   └── crypto.ts   👈 Cryptocurrency department
│   ├── services/       👈 The workers who do the actual work
│   └── types/          👈 The rule book (TypeScript types)
```

### What Each Endpoint Does:

1. **Weather API** (`/api/weather/london`) 🌤️
   - You ask: "What's the weather in London?"
   - We ask a weather service and give you the answer

2. **Quotes API** (`/api/quotes`) 💭
   - You ask: "Give me an inspiring quote"
   - We fetch one from a quotes database

3. **Users API** (`/api/users/1`) 👤
   - You ask: "Tell me about user #1"
   - We get their profile information

4. **Crypto API** (`/api/crypto/bitcoin`) 💰
   - You ask: "What's Bitcoin worth?"
   - We check current cryptocurrency prices

---

## 🔬 The Anatomy of an API Endpoint {#anatomy-of-an-endpoint}

Let's dissect one of our endpoints like a friendly biology class:

```typescript
app.get('/api/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    
    if (!city) {
      return res.status(400).json({
        success: false,
        error: 'City parameter is required'
      });
    }

    const result = await weatherService.getWeatherByCity(city);
    
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch weather data'
    });
  }
});
```

### Breaking It Down:

1. **`app.get`** - "Listen for GET requests"
   - This tells Express: "Hey, when someone makes a GET request, I want to handle it"
   - GET is like asking for information (vs POST which is giving information)

2. **`'/api/weather/:city'`** - "When someone visits this URL pattern"
   - This is called a **route pattern** - it's like a template for URLs
   - The `/api/weather/` part is fixed - it must match exactly
   - The `:city` part is flexible - it's a **parameter placeholder**

3. **`:city`** - "Capture whatever they put here as a variable"
   - The colon `:` makes this a **URL parameter** (also called a "route parameter")
   - Whatever the user types here gets captured and stored
   - Think of it like a fill-in-the-blank: `/api/weather/______`

### 🎯 URL Parameters Deep Dive

URL parameters are like **variables in your URL**. Here's how they work:

#### Single Parameter Examples:
```typescript
// Pattern: /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id; // Extract the ID
});
```

**Real URLs that match:**
- `http://localhost:9999/api/users/123` → `req.params.id = "123"`
- `http://localhost:9999/api/users/alice` → `req.params.id = "alice"`
- `http://localhost:9999/api/users/xyz789` → `req.params.id = "xyz789"`

#### Multiple Parameters Examples:
```typescript
// Pattern: /api/users/:userId/posts/:postId
app.get('/api/users/:userId/posts/:postId', (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  // Now you have both values!
});
```

**Real URLs that match:**
- `http://localhost:9999/api/users/123/posts/456`
  - `req.params.userId = "123"`
  - `req.params.postId = "456"`

#### Our Project's Parameters:
```typescript
// Weather endpoint
'/api/weather/:city'
// URL: /api/weather/tokyo → req.params.city = "tokyo"

// User endpoint  
'/api/users/:id'
// URL: /api/users/5 → req.params.id = "5"

// Crypto endpoint
'/api/crypto/:symbol'
// URL: /api/crypto/bitcoin → req.params.symbol = "bitcoin"
```

#### What Parameters Look Like in Code:
```typescript
// When someone visits: /api/weather/london
console.log(req.params); 
// Output: { city: "london" }

// When someone visits: /api/users/42/posts/7
console.log(req.params);
// Output: { userId: "42", postId: "7" }
```

4. **`async (req, res)`** - "Here's the function to handle it"
   - `req` = the **request** object (what the user sent)
   - `res` = the **response** object (how we send data back)
   - `async` = this function can wait for slow operations (like API calls)

5. **`req.params`** - "Extract the parameters from the URL"
   - This is an object containing all the `:parameter` values
   - Always comes as strings, even if they look like numbers

6. **Validation** - "Make sure they actually gave us a city"
   - Always check if required parameters exist
   - Users might visit `/api/weather/` (missing the city)

7. **`await weatherService`** - "Go get the weather data"
   - This calls our service to fetch data from external APIs
   - `await` pauses until we get a response

8. **`res.json()`** - "Send back the response"
   - Converts our data to JSON and sends it to the user

### The URL in Action:

When you visit: `http://localhost:9999/api/weather/london`

- **`london`** becomes `req.params.city`
- We use that to fetch London's weather
- We send back the weather data as JSON

---

## 🌤️ Real-World Example: Weather API {#weather-api-example}

Let's follow a request from start to finish, like tracking a package:

### 1. The Request Arrives
```
GET http://localhost:9999/api/weather/paris
```

### 2. Express Routes It
```typescript
// Express sees this matches our pattern and calls our handler
app.get('/api/weather/:city', weatherHandler)
```

### 3. We Extract the Data
```typescript
const { city } = req.params; // city = "paris"
```

### 4. We Call Our Service
```typescript
// This goes out to the real weather API
const result = await weatherService.getWeatherByCity("paris");
```

### 5. We Get Data Back
```typescript
{
  location: { name: "Paris", country: "France" },
  current: { temp_c: 18, condition: { text: "Cloudy" } }
}
```

### 6. We Send It to You
```json
{
  "success": true,
  "data": {
    "location": { "name": "Paris", "country": "France" },
    "current": { "temp_c": 18, "condition": { "text": "Cloudy" } }
  },
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

### The Magic Behind the Scenes:

Our weather service acts as a **middleman**:
- It knows how to talk to external weather APIs
- It handles errors gracefully
- It formats the data consistently
- It provides clear error messages when APIs are unavailable

---

## 🛡️ Error Handling: When Things Go Wrong {#error-handling}

In the real world, things break. Servers go down, networks fail, and users send weird data. Good APIs handle this gracefully!

### Our Error Handling Strategy:

1. **Validate Input** - Check if the user sent us what we need
2. **Try/Catch** - Wrap risky operations
3. **Return Clear Error Messages** - Tell users exactly what went wrong
4. **Consistent Responses** - Always respond in the same format

### Example: What If the Weather API Is Down?

```typescript
try {
  // Try to get real weather data
  const response = await axios.get(weatherApiUrl);
  return { success: true, data: response.data };
} catch (error) {
  // Return a clear error message with status code
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;
    
    return {
      success: false,
      error: `Weather API failed (${status}): ${message}`,
      timestamp: new Date().toISOString()
    };
  }
  
  return {
    success: false,
    error: `Weather API error: ${error.message}`,
    timestamp: new Date().toISOString()
  };
}
```

### Why This Is Great:

- **Transparency** - Users know exactly what went wrong
- **Debugging** - Status codes and messages help identify issues
- **Professional** - Real-world APIs handle errors this way

### Our Consistent Error Format:

```json
{
  "success": false,
  "error": "City parameter is required",
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

---

## � Axios vs Fetch: Why We Choose Axios {#axios-vs-fetch}

You might be wondering: "Why are we using this `axios` thing instead of JavaScript's built-in `fetch()` method?" Great question! Let's break it down.

### Meet the Contestants:

**🥊 In the Red Corner: fetch()** - JavaScript's built-in HTTP client
**🥊 In the Blue Corner: axios** - A popular third-party HTTP library

### The Built-in fetch() Method:

```typescript
// Using fetch (built into JavaScript)
try {
  const response = await fetch('https://api.weather.com/data');
  
  // fetch doesn't automatically parse JSON - you have to do it manually
  const data = await response.json();
  
  // fetch doesn't automatically throw errors for 404, 500, etc.
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return data;
} catch (error) {
  console.error('Fetch failed:', error);
}
```

### The Axios Way:

```typescript
// Using axios (what we use in our project)
try {
  const response = await axios.get('https://api.weather.com/data', {
    timeout: 5000 // Built-in timeout support
  });
  
  // axios automatically parses JSON and throws errors for bad status codes
  return response.data;
} catch (error) {
  console.error('Axios failed:', error);
}
```

### Why We Choose Axios (The Practical Reasons):

#### 1. **Less Boilerplate Code** 📝
```typescript
// With fetch - lots of manual work
const response = await fetch(url);
if (!response.ok) throw new Error('Bad response');
const data = await response.json();

// With axios - clean and simple
const response = await axios.get(url);
const data = response.data; // That's it!
```

#### 2. **Built-in Error Handling** ❌
- **fetch**: Status codes like 404 and 500 don't automatically throw errors (confusing!)
- **axios**: Automatically throws errors for bad status codes (what you'd expect!)

#### 3. **Automatic JSON Parsing** 🔧
- **fetch**: You have to manually call `.json()` on every response
- **axios**: Automatically detects and parses JSON responses

#### 4. **Better Timeout Support** ⏰
```typescript
// fetch - complex timeout setup
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);
fetch(url, { signal: controller.signal });

// axios - simple and clean
axios.get(url, { timeout: 5000 });
```

#### 5. **Request/Response Interceptors** 🔄
```typescript
// axios lets you modify all requests/responses automatically
axios.interceptors.request.use(config => {
  config.headers['Authorization'] = 'Bearer ' + token;
  return config;
});
```

#### 6. **Better Error Information** 🔍
```typescript
// axios errors give you more useful information
try {
  await axios.get('/api/data');
} catch (error) {
  console.log(error.response.status); // 404
  console.log(error.response.data);   // Error message from server
  console.log(error.config.url);      // The URL that failed
}
```

### Real Example from Our Project:

Here's how our weather service uses axios:

```typescript
// In our weatherService.ts
async getWeatherByCity(city: string) {
  try {
    const response = await axios.get(`${this.baseUrl}/current.json`, {
      params: { key: this.apiKey, q: city },
      timeout: 5000 // Automatically cancel if it takes too long
    });

    // axios automatically parsed the JSON for us
    const weatherData = response.data;
    return weatherData;
    
  } catch (error) {
    // axios automatically threw an error for 404, 500, etc.
    console.error('Weather API failed:', error.message);
    
    return {
      success: false,
      error: `Weather API error: ${error.message}`,
      timestamp: new Date().toISOString()
    };
  }
}
```

If we used fetch, this would be much longer and more error-prone!

### When You Might Use fetch Instead:

**fetch is great when:**
- You want to keep your bundle size tiny (no extra dependencies)
- You're doing very simple requests
- You're working in an environment where you can't add dependencies

**axios is better when:**
- You're building a real application (like our project!)
- You want consistent, predictable behavior
- You need advanced features like timeouts and interceptors
- You want cleaner, more readable code

### The Bottom Line:

Think of it like cooking:
- **fetch** is like basic ingredients - you can make anything, but you need to do more work
- **axios** is like a well-equipped kitchen - it has all the tools you need ready to go

For learning and building real applications, axios makes your life easier and your code cleaner. That's why we use it in our project!

---

## 🚀 What's Next? {#whats-next}

Congratulations! You now understand the fundamentals of APIs, HTTP, and Express.js. Here's your roadmap for continued learning:

### **Assignment 1: Experiment with the Code**

Try hitting the different API endpoints in this project with the tool(s) of your choice

#### Tools to use to hit this projects endpoints:
1. **cURL** - Command line tool (what we've been using)
2. **Postman** - Visual tool with a nice interface
3. **Your Browser** - For simple GET requests

#### Testing Our Endpoints:

```bash
# Test the main documentation
curl http://localhost:9999/

# Test weather endpoint
curl http://localhost:9999/api/weather/tokyo

# Test quotes endpoint
curl http://localhost:9999/api/quotes

# Test error handling
curl http://localhost:9999/api/weather/
```

#### Reading the Responses:

```json
// Good response (200 status)
{
  "success": true,
  "data": { /* your data here */ },
  "timestamp": "2023-12-01T10:30:00.000Z"
}

// Error response (400/500 status)
{
  "success": false,
  "error": "Something went wrong",
  "timestamp": "2023-12-01T10:30:00.000Z"
}
```

---

### **Assignment 2: Explore the Codebase Thoroughly**

- Programmers spend 70% of their time on average reading code, and only 30% writing code.
- Read, explore and breakdown the existing code. Just like in biology class, to understand something you must dissect it.
- Take notes. Make diagrams. Use Google to understand all the elements.
  
  
#### Paddy's Tips for Reading Code

- **Start at the top level and work down.** With all codebases I would always recommend starting at the top level and working down. IE: start by reading the `app.ts` and ctrl + click down into the elements there.
- **Follow the flow of the data** - Trace how data moves through the application from request to response
- **Take notes and draw diagrams** - Sketch out how the pieces connect. Even simple drawings help your brain understand the architecture.
- **Use your IDE's "Go to Definition" feature** - Ctrl+click (or Cmd+click on Mac) on functions, variables, and types to jump to where they're defined. This is like following breadcrumbs through the code.
- **Start with the "happy path"** - First understand what happens when everything works correctly, then look at error handling.
- **Look for patterns** - Once you understand one endpoint (like weather), the others (quotes, crypto, users) will follow similar patterns.
- **Don't get overwhelmed by dependencies** - You don't need to understand how Express or Axios work internally. Focus on how YOUR code uses them.
- **Keep in mind that "Reading code is hard!!!"** The good news is that you will only get better and better at it the more you do it. Every developer struggles with reading unfamiliar code - it's completely normal!
- **Review the whole codebase multiple times, each time increasing the level of your focus.** 


  Example:
    
  **Review level 1** :
    
    *"OK so there's an `app.ts` file that looks important... it's got a bunch of 'app.get' things that I'm guessing are like doorways? And there's middleware (which sounds very fancy and intimidating). Oh look, it listens on port 9999 - that's probably why we go to localhost:9999! There's folders called 'routes' and 'services' which sound organized."*


    **Review level 2** : 
      
    *"OK so the routes folder has files that match the services folder. The weather route calls the weather service. The services seem to make HTTP calls to external APIs."*

    **Review level 3** :
      
    *"The weather service uses axios to call weatherapi.com. If it fails, it returns an error object with a specific format. The route catches this and sends it back to the user."*
      
    **Review level 4** Now you're diving into the details: 

    *"The TypeScript interfaces define exactly what shape the data should be. The error handling follows a consistent pattern across all services."*


#### 💡 **Remember:**
- **It's OK to be confused at first** - Professional developers feel this way too when reading new code
- **Google everything you don't understand** - "What is Express middleware?" "How does async/await work?"
- **Run the code and see what happens** - Sometimes seeing the output helps more than reading the code
- **Ask questions** - "Why did they structure it this way?" "What would happen if I changed this?" 




---

### **Assignment 3: Try Adding a New Service and Endpoint to This Project**

- With your new knowledge, find a public API you can use and then add a new endpoint in this project to hit it
- Consider the response format and what you want it to look like

---

### **Assignment 4: Make Your Own Express Project from Scratch**

- Use this project as a template
- Avoid copying and pasting
- Use JS or TS. Your choice.


--- 


### 🤔 Key Concepts to Remember:

1. **APIs are everywhere** - Once you understand them, you'll see them in everything
2. **Start simple** - Build basic functionality before adding complexity
3. **Error handling matters** - Always think about what could go wrong
4. **Documentation is crucial** - Future you (and others) will thank you
5. **Practice makes perfect** - Build lots of small projects

---

## 🎉 Congratulations!

You've just learned the fundamentals that power most of the modern web! Every time you use an app on your phone, browse a website, or stream a video, you're interacting with APIs built on these same principles.

The beautiful thing about programming is that these concepts scale from simple projects like this one all the way up to massive systems that serve millions of users. The principles remain the same - you're just dealing with more complexity.

Now go forth and build amazing things! 🚀

---

*"The best way to learn programming is by doing. So fire up that code editor and start experimenting!"*

---

## 📋 Quick Reference

### Common HTTP Status Codes:

HTTP status codes are like different types of responses a server can give you. They're grouped into categories that tell you what happened:

#### **2xx Success** ✅
- `200` - **OK** - "Everything worked perfectly! Here's your data."
- `201` - **Created** - "I successfully created something new for you."
- `204` - **No Content** - "I did what you asked, but there's nothing to send back."

#### **4xx Client Errors** ❌ 
*"You (the client) made a mistake"*
- `400` - **Bad Request** - "Your request doesn't make sense to me."
- `401` - **Unauthorized** - "You need to log in first."
- `403` - **Forbidden** - "You're logged in, but you're not allowed to do that."
- `404` - **Not Found** - "I can't find what you're looking for."
- `422` - **Unprocessable Entity** - "Your data format is correct, but the content is invalid."
- `429` - **Too Many Requests** - "Slow down! You're making too many requests."

#### **5xx Server Errors** 💥
*"I (the server) messed up"*
- `500` - **Internal Server Error** - "Something broke on my end, but I don't know what."
- `502` - **Bad Gateway** - "I tried to get data from another server, but it gave me garbage."
- `503` - **Service Unavailable** - "I'm temporarily down for maintenance."
- `504` - **Gateway Timeout** - "I tried to get data from another server, but it took too long."

### **4xx vs 5xx: Who's to Blame?**

This is the **most important distinction** in API development:

**4xx = Client's Fault** 🙋‍♀️
- The user sent a bad request
- They forgot required data
- They're not authorized
- **Fix**: The client needs to change their request

**5xx = Server's Fault** 🙋‍♂️
- Something broke in your code
- Database is down
- External API failed
- **Fix**: The server needs to be fixed

### **Examples from Our Project:**

```typescript
// 400 - User forgot required parameter
app.get('/api/weather/:city', (req, res) => {
  if (!req.params.city) {
    return res.status(400).json({
      error: 'City parameter is required' // CLIENT error
    });
  }
});

// 500 - External API failed
try {
  const weather = await externalWeatherAPI.get(city);
} catch (error) {
  res.status(500).json({
    error: 'Weather service is down' // SERVER error
  });
}
```

### **Why This Matters:**

- **For debugging**: Quickly know where to look for the problem
- **For users**: They know if they need to fix their request or just try again later
- **For monitoring**: Track if your API is broken (5xx) vs users making mistakes (4xx)

### Basic Express Pattern:
```typescript
app.METHOD('/path', (req, res) => {
  // Handle request
  res.json({ data: 'response' });
});
```

### Testing Commands:

#### 🚀 Start the Server:
```bash
npm run dev
```

#### 🧪 Test Individual Endpoints:

**Basic Testing** (just see the data):
```bash
# Test the API overview
curl http://localhost:9999/

# Test weather for London
curl http://localhost:9999/api/weather/london

# Test random quote
curl http://localhost:9999/api/quotes

# Test user data
curl http://localhost:9999/api/users/1

# Test Bitcoin price
curl http://localhost:9999/api/crypto/btc
```

**Verbose Testing** (see headers, status codes, and more details):
```bash
# Always better to use -v to show "verbose" output
# Then you can see all the extra info like status codes, headers, etc.

# Test with full HTTP details
curl -v http://localhost:9999/api/weather/paris

# Test error handling (missing city)
curl -v http://localhost:9999/api/weather/

# Test invalid crypto symbol
curl -v http://localhost:9999/api/crypto/fakecoin
```


#### 💡 **Pro Tips:**
- **`-v` flag** shows you the full HTTP conversation (headers, status codes, etc.)
- **Replace the endpoint parts** (like `london`, `1`, `btc`) with your own values to test different data

#### 📱 Alternative Testing Tools:
- **Postman** - Visual interface for testing APIs
- **Your browser** - Just type the URL for GET requests