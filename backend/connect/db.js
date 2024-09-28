const mongoose = require("mongoose");

// Pour se connecter avec mongoose
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        // Utilisation de await pour attendre que la connexion soit établie
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connecté avec succès');
    } catch (err) {
        console.error('Erreur lors de la connexion à MongoDB :', err.message);
        process.exit(1); // Arrête le processus en cas d'erreur
    }
};

module.exports = connectDB;
