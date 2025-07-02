# 🛡️ User Authentication & Authorization API with Bearer token

This application implements secure user authentication and authorization using Bearer tokens (JWT). Built with Express.js and MongoDB (Mongoose), it follows the MVC architecture and provides clean, tested via Postman.

## ✅ Features

- 🔐 Secure user signup with password hashing
- 🔑 User login with JWT-based authentication
- 🛡️ Protected routes using JWT middleware
- 🧱 Follows MVC architecture for clean code separation
- 🧾 Validates inputs and handles errors gracefull
- 📭 Postman collection with sample requests and response

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Postman** for API testing

## 🔐 API Endpoints

POST/register - Register a new user
POST/login - Authenticate & recieve token
GET/user - Get user info
