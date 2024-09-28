const express = require("express");
const connectDB = require("./connect/db");
const dotenv = require('dotenv').config();

const port = process.env.PORT || 4002;

// importation de la connection à la basse de données
connectDB()

const app = express()

// Middleware qui permet de traiter les données de la Request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Exporte nos routes 
app.use("/api", require("./routes/produit.routes"))

// Lancer le server 
app.listen(port, () => console.log("Le serveur a démarré au port " + port))