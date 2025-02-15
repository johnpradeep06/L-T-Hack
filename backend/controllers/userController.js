const bcrypt = require('bcrypt');
const users = require('../models/userModel');

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    
    res.json({ message: 'Login successful' });
};
