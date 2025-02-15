const bcrypt = require('bcrypt');
const users = require('../models/userModel');

exports.signup = async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        console.log('Username and password are required');
        return res.status(400).json({ message: 'Username and password are required' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    console.log(`User Registered: ${username}`);
    res.status(201).json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(user => user.username === username);
    if (!user) {
        console.log(`User not found: ${username}`);
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log(`Invalid password for user: ${username}`);
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    console.log(`User logged in: ${username}`);
    res.json({ message: 'Login successful' });
};
