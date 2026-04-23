const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'QuickCare API is running 🚀' });
});

// TODO: Import and use routes here
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/providers', require('./routes/providers'));
// app.use('/api/triage', require('./routes/triage'));
// app.use('/api/pharmacies', require('./routes/pharmacies'));
// app.use('/api/appointments', require('./routes/appointments'));
// app.use('/api/teleconsult', require('./routes/teleconsult'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
