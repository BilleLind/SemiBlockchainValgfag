require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true, useUnifiedTopology:true,
        });

        console.log('mongo connection succes')
    } catch (error) {
        console.error('Mongoose connection failed: ' + error);
        process.exit(1);
    }
}
