# 🛡️ User Authentication & Authorization API with Bearer Token

This application implements secure user authentication and authorization using Bearer tokens (JWT). Built with Express.js and MongoDB (Mongoose), it follows the MVC architecture and provides clean code, tested via Postman.

## ✅ Features

- 🔐 Secure user signup with password hashing  
- 🔑 User login with JWT-based authentication  
- 🛡️ Protected routes using JWT middleware  
- 🧱 Follows MVC architecture for clean code separation  
- 🧾 Validates inputs and handles errors gracefully  
- 📭 Postman collection with sample requests and responses  

## 🚀 Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB** with **Mongoose**  
- **JWT** for authentication  
- **bcryptjs** for password hashing  
- **Postman** for API testing  

## 🔐 API Endpoints

- `POST /register` – Register a new user  
  `http://localhost:3000/register`
- `POST /login` – Authenticate and receive token  
  `http://localhost:3000/login`
- `GET /user` – Get user info  
  `http://localhost:3000/user`

To access the user route, include the token obtained from login in the headers section of Postman:
Authorization: Bearer <your-token>


## These endpoints can all be tested in Postman.