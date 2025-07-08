//server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 


//App initialization
const app = express();
const PORT = process.env.PORT

//Middleware
app.use(cors());
app.use(express.json());

//Connecting MongoDB 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDb connected'))
.catch((err) => console.error('DB Connection Error:', err));

//Routes
app.get('/', (req,res) => {
    res.send('Backend is running!')
})



//Order route will come here
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);



//start server
app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`)
})