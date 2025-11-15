Visitor Pass Management System (MERN)

A simple MERN-based project to manage visitor entries.
Users can register/login, add visitors, view visitor list, and verify visitor passes.
Live Demo

Frontend (Netlify): https://extraordinary-croquembouche-58050d.netlify.app/

Backend API (Render): https://visitor-pass-management-0puz.onrender.com

Demo Video (Loom): https://www.loom.com/share/d682384685f94bd29d617410b2d7b1ad
Features
🔐 Authentication

User registration

User login (JWT-based)

📝 Visitor Management

Add new visitor

View all visitors added by the user

Update visitor status (Pending / Approved / Rejected)

Verify visitor details using visitor ID

📡 Backend API

Node.js + Express REST APIs

MongoDB Atlas database

🛠️ Tech Stack
Frontend

React

React Router

Axios

Backend

Node.js

Express.js

Mongoose

JWT Authentication

Deployment

Frontend: Netlify

Backend: Render

▶️ Run Locally
1️⃣ Clone the repository
git clone https://github.com/manishginti92/visitor-pass-management.git
cd visitor-pass-management

2️⃣ Install backend dependencies
cd server
npm install

3️⃣ Add a .env file
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

4️⃣ Start backend
npm start

5️⃣ Install frontend dependencies
cd ../client
npm install
npm start

📷 Screenshots

(Add 2–3 screenshots of your project UI here)
