const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ message: "User created ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    
    const token = jwt.sign(
      { id: user._id, email: user.email },   // payload
      process.env.JWT_SECRET || "mysecretkey", // secret key
      { expiresIn: "1h" }  // token expiry
    );

    res.json({
      message: "Login successful ✅",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
