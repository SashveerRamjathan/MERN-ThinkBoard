# 🧠 MERN ThinkBoard

Welcome to **MERN ThinkBoard** — your interactive, collaborative board for brainstorming, planning, and sharing ideas in real-time! 🚀✨ Built with the powerful MERN stack (MongoDB, Express.js, React, Node.js), this app brings teamwork to the next level with a modern UI and lightning-fast updates.

## 📚 Table of Contents

- [✨ Features](#features)
- [🌐 Live Demo](#live-demo)
- [⚡ Getting Started](#getting-started)
- [🛠️ Tech Stack](#tech-stack)
- [📁 Project Structure](#project-structure)
- [🤓 Usage](#usage)
- [👥 Contributing](#contributing)
- [🙏 Acknowledgements](#acknowledgements)
- [📄 License](#license)

## ✨ Features

- 📝 Create, update, and delete boards
- ⚡ Real-time updates for board changes
- 🤝 Share notes, tasks, or ideas with collaborators
- 📱 Responsive UI for desktop and mobile
- 🔗 RESTful API for board management
- 💾 Persistent storage with MongoDB

## 🌐 Live Demo

Try it out now: [https://mern-thinkboard-tyc2.onrender.com](https://mern-thinkboard-tyc2.onrender.com)

## ⚡ Getting Started

Get your own ThinkBoard running in minutes:

### 🧰 Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- MongoDB instance (local or cloud)
- Git

### 🏗️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SashveerRamjathan/MERN-ThinkBoard.git
   cd MERN-ThinkBoard
   ```

2. **Install back-end dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install front-end dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file in the `server` directory based on `.env.example`
   - Set up your MongoDB URI

5. **Start the application:**
   - **Back-end:**
     ```bash
     cd backend
     npm start
     ```
   - **Front-end:**
     ```bash
     cd frontend
     npm start
     ```

6. **Access the app:**
   - Visit [`http://localhost:5173`](http://localhost:5173) in your browser 🎉

## 🛠️ Tech Stack

- **Front-End:** React ⚛️
- **Back-End:** Node.js, Express.js 🟩
- **Database:** MongoDB 🍃 (Mongoose ODM)
- **Other:** dotenv, CORS, nodemon (dev)

## 📁 Project Structure

```
MERN-ThinkBoard/
├── client/           # React front-end
│   ├── src/
│   ├── public/
│   └── package.json
├── server/           # Node/Express back-end
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── package.json
├── README.md
└── .gitignore
```

## 🤓 Usage

- 🧩 Create a new ThinkBoard
- ✏️ Add notes, tasks, or ideas
- 🫂 Collaborate in real time with other users

## 👥 Contributing

Contributions are always welcome! 💡  
Open issues for suggestions or bugs, and submit pull requests for improvements.

## 🙏 Acknowledgements

This project was inspired and built with the help of:

- [Build and Deploy a MERN Stack App by Codesistency](https://youtu.be/F9gB5b4jgOI?si=zKlyLRy6Mr-A1jl7) ([YouTube channel](https://www.youtube.com/@codesistency))

A huge thank you to Codesistency for their guidance and awesome tutorial! 🙌

## 📄 License

This project is licensed under the MIT License.
