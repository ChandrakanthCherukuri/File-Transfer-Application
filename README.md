⚡ SwiftShare – Real-Time File Transfer Web App
SwiftShare is a blazing-fast, secure, and responsive file transfer application built by Chandrakanth Cherukuri. Using Node.js, Socket.IO, and MongoDB, this platform enables real-time, room-based file sharing with end-to-end user authentication and email verification.

🚀 Key Highlights
🎯 Instant File Sharing
Share files instantly with anyone using a unique room ID. No external uploads. No waiting.

🔒 End-to-End Security
Password hashing, JWT sessions, email verification, and real-time socket validation for protected file exchange.

🧑‍💻 User Management

Registration & Login with validation
Email verification via Mailtrap
JWT-based access control
Secure password encryption
📁 File Streaming Over Sockets

Files are streamed in chunks to prevent size limitations
Real-time progress feedback for sender and receiver
Receiver-side auto-download mechanism
📱 Cross-Device Compatible UI
Built using Bootstrap 5, the app runs smoothly on mobile, tablet, and desktop browsers.

🧪 How It Works – Step by Step
New User?
→ Register using email and password
→ Receive verification mail via Mailtrap
→ Confirm to activate the account

Start Sharing
→ Log in and click “Create Room”
→ Share the generated Room ID with receiver

Receiver Joins
→ Enters the Room ID
→ Socket joins the same room

Upload & Send
→ Sender uploads a file
→ File is chunked and streamed in real-time

Download & Done
→ Receiver gets live progress and auto-download

⚙️ Installation Guide
🛒 Prerequisites
Node.js & npm
MongoDB Atlas URI
Mailtrap credentials
📦 Setup Steps
🔐 Configure Environment Create a .env file and add:

env Copy Edit PORT=5000 MONGO_URI=your_mongodb_uri JWT_SECRET=your_jwt_secret SMTP_HOST=smtp.mailtrap.io SMTP_PORT=2525 SMTP_USER=your_mailtrap_user SMTP_PASS=your_mailtrap_pass 🚀 Start the Server bash Copy Edit npm start Open http://localhost:5000

📷 Interface Previews Add real screenshots to /public/assets/screenshots

🔑 Login & Register

📤 Sender Dashboard

📥 Receiver View with Progress Bar

👤 About the Developer Chandrakanth Cherukuri 📍 India 🎓 B.Tech CSE – Full Stack & Software Dev 🏫 Lovely Professional University (2022–2026) 🌐 GitHub Profile

💡 Built With Node.js + Express

Socket.IO for real-time communication

MongoDB + Mongoose for database

JWT for user sessions

Mailtrap.io for dev email testing

Bootstrap 5 for responsive UI

HTML/CSS + Vanilla JavaScript

📄 License Licensed under the MIT License. Feel free to use, adapt, or contribute to the project.

📬 Contact For questions, feedback, or collaboration opportunities: 📧 chandrakanthcherukuri@example.com
