const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  }
});

dotenv.config();
app.use(express.json());

// Entry route — redirect to login if not authenticated
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


app.use(express.static(path.join(__dirname, '/public')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error", err));

// Routes
app.use('/api', require('./routes/auth'));

// Socket auth middleware (optional)
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error("Authentication error"));
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = user;
    next();
  } catch (err) {
    next(new Error("Authentication error"));
  }
});

// Socket logic here...
io.on("connection", function(socket){
  // your sender-join, receiver-join, etc...
   socket.on("sender-join",function(data){
        socket.join(data.uid)

    });
    socket.on("receiver-join", function(data){
        socket.join(data.uid);
        socket.in(data.sender_uid).emit("init",data.uid);
        
    });
    socket.on("file-meta" ,function(data){
        socket.in(data.uid).emit("fs-meta",data.metadata);
    });
    socket.on("fs-start", function(data){
        socket.in(data.uid).emit("fs-share",{});
    });
    socket.on("file-raw", function(data){
        socket.in(data.uid).emit("fs-share",data.buffer);
    })
});

server.listen(5000, () => {
  console.log("Server started at port 5000");
});
