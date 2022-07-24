const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MondgoDB Connected: ${conn.connection.host}`.cyan.underline.bold); //shows host and underlines it in cyan

};


module.exports = connectDB;