
---


# 🔐 File Transfer Application using Socket.IO

A secure and seamless real-time **file transfer** system with **user authentication**, developed using **Node.js**, **Socket.IO**, **MongoDB**, and **Bootstrap**. This web-based application allows users to **register**, **log in**, and **send/receive or download files** instantly with live progress indicators.

![App Interface Screenshot](./public/assets/screenshot.png) <!-- Replace with your actual screenshot path -->

---

## 📌 Features

### ✅ User Authentication
- User **Signup & Login** using **email and password**
- **Password hashing** using SHA256 and salt
- **JWT token-based** authentication
- **Email verification** using [Mailtrap.io](https://mailtrap.io/)
- Prevents unverified users from accessing file transfer feature

### 🔁 Real-time File Transfer
- **Socket.IO** used to create bi-directional communication
- Share small files instantly across devices using **Room ID**
- Implements **Sender** and **Receiver** logic
- **Real-time progress indicator** shown during upload/download

### 📦 File Handling
- Upload files via `input[type="file"]`
- Transfer files in **buffered chunks**
- Automatically download received files to local storage

### 🔒 Security
- Passwords are encrypted (not stored in plain text)
- Secure socket communication
- Verifies and authenticates users before enabling file transfer

### 🖥️ Responsive UI
- Built with **Bootstrap 5**
- Simple and clean interface for sender and receiver
- Mobile-friendly layout

---

## 🧩 Project Structure

```

file-transfer-app/
├── server.js
├── .env
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── utils/
│   └── sendMail.js
├── public/
│   ├── index.html
│   ├── receiver.html
│   ├── login.html
│   ├── signup.html
│   ├── style.css
│   ├── code.js
│   ├── receiver.js
│   └── assets/
│       └── screenshot.png
└── package.json

````

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/file-transfer-app.git
cd file-transfer-app
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_mailtrap_user
SMTP_PASS=your_mailtrap_pass
```

### 4️⃣ Run the server

```bash
npm start
```

### 5️⃣ Open in browser

```
http://localhost:5000/
```

---

## 🔍 How it Works

1. **User signs up**

   * Email sent for verification.
2. **User logs in**

   * JWT stored in `localStorage`
3. **Sender clicks "Create Room"**

   * Generates Room ID and displays it
4. **Receiver enters Room ID and connects**

   * Server links receiver to sender via socket room
5. **Sender uploads a file**

   * File is chunked and sent in real-time
6. **Receiver gets the file**

   * Progress shown and file downloaded

---

## 📸 Screenshots

### 🔐 Signup & Email Verification

![Signup](./public/assets/signup.png)

### 📤 File Sharing Room

![Room](./public/assets/room.png)

### 📥 File Receiving Interface

![Receive](./public/assets/receive.png)

> *(Replace with actual screenshot paths as needed)*

---

## 🤝 Contributors

* 👨‍💻 **Dharmendra Sah** – Full Stack Developer
  [GitHub](https://github.com/yourusername)

---

## 📄 License

This project is licensed under the MIT License.
Feel free to use and modify it for your own projects.

---

## 🌐 Tech Stack

* Node.js
* Express.js
* Socket.IO
* MongoDB + Mongoose
* JWT Authentication
* Mailtrap.io
* Bootstrap 5
* HTML, CSS, JavaScript (Vanilla)

---

## ✉️ Contact

For any inquiries or contributions:
📧 [dharmendra@example.com](mailto:deardharmendra.2567@gmail.com)
```



