//carpeta src, es para la configuracion central 
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('MongoDB connected');
    } catch(error) {
        console.log(error.message);
        process.exit(1); //el 1 indica que hubo un error y el 0 indica que todo salio bien
    }
};

module.exports = connectDB;