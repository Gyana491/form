const express = require('express');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose'); 
const app = express();
require('dotenv').config();
const formRoutes = require('./routes/formRoutes');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};


connectDB();

app.use(express.json());

// Add the API routes
app.use(formRoutes);

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/form', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formElements.html'));
});

app.get('/login', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Add the railway reservation route
app.get('/railway', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rail.html'));
});

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

