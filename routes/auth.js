const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { sendEmail } = require('../utils/sendMail');

const generateToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const exist = await User.findOne({ email });

  if (exist) return res.status(400).json({ error: 'Email already exists' });

  const user = new User({ username, email, password });
  await user.save();

  const token = generateToken({ id: user._id });
  const verifyLink = `${process.env.CLIENT_URL}/api/verify/${token}`;

  await sendEmail({
    from: '"FileShare App" <noreply@fileshare.com>',
    to: email,
    subject: 'Verify your account',
    html: `<h2>Hello ${username}</h2>
      <p>Click here to verify your account: <a href="${verifyLink}">Verify</a></p>`
  });

  res.json({ message: 'Check your email to verify your account' });
});

// Email Verification Route

router.get('/verify/:token', async (req, res) => {
    try {
        const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) return res.status(400).send("Invalid token");

        user.isVerified = true;
        await user.save();

        // Redirect to homepage or success message page
        res.redirect('/index.html');
    } catch (err) {
        return res.status(400).send("Link expired or invalid");
    }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.authenticate(password)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  if (!user.isVerified) {
    return res.status(401).json({ error: 'Please verify your email first' });
  }

  const token = generateToken({ id: user._id, username: user.username, email: user.email });
  res.json({ token });
});

module.exports = router;
