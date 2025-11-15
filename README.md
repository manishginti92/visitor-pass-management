# Visitor Pass Management System (MERN)
A full-stack MERN application to manage visitor entries digitally.  
It allows admins, security staff, and employees to manage visitors, appointments, and digital visitor passes with QR codes.

##  Live Demo

Frontend (Netlify): [https://your-frontend-link.netlify.app]( https://app.netlify.com/projects/extraordinary-croquembouche-58050d/)  
Backend (Render): [https://your-backend-link.onrender.com](https://visitor-pass-management-0puz.onrender.com/)  
Demo Video (Loom): [https://www.loom.com/share/your-video-link](https://www.loom.com/share/d682384685f94bd29d617410b2d7b1ad)

---

## Features

### User Roles
Admin: Manages system, staff, and analytics  
Security / Frontdesk:Issues passes, scans visitors in/out  
Employee / Host:Can invite or approve visitors  
Visitor: Can pre-register and view digital pass  

###  Core Functionalities
1. Authentication & Authorization (JWT-based)  
2. Visitor Registration (details + photo)  
3. Appointments / Pre-Registration  
4. Pass Issuance (QR code + PDF badge)  
5. Check-In / Check-Out (QR scanning)  
6. Email / SMS Notifications (optional)  
7. Dashboard & Reports (search, filter, export)


##  Tech Stack

Frontend: React, React Router, Axios, TailwindCSS  
Backend: Node.js, Express.js, Mongoose, JWT  
Database: MongoDB (Cloud via MongoDB Atlas)  
Deployment: Netlify (frontend), Render (backend)


## Installation & Setup

Follow the steps below to run the project locally.

### 1️ Clone the Repository
git clone https://github.com/manishginti92/visitor-pass-management.git
cd visitor-pass-management
