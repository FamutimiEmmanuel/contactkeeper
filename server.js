const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// connect database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the contactkeeper API....'}));

// define routes
app.use(require('./routes/users'))
app.use(require('./routes/contacts'))
app.use(require('./routes/auth'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
