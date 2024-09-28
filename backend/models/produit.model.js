const mongoose = require("mongoose")
const { type } = require("os")

// Création de notre Schema 
const produitSchema = mongoose.Schema(
    {
        produitName: {
            type: String,
            required: true,
        },
        categories: {
            type: [String],
            required: true,
        },
        produitAjouter: {
            type: [String],
        }
    },
    {
        Timestamp: true,
    }
)

module.exports = mongoose.model('post', produitSchema);

