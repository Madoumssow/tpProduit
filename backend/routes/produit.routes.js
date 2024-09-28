// Créations des variables de routes 
const express = require("express")
const { setProduits, getProduits, editProduit, deleteProduit, addProduit, suppProduit } = require("../controllers/produit.contraller")
const router = express.Router()

// *********CRUD********
// Créations des routes 
router.get("/", getProduits)

router.post("/produits", setProduits)

router.put("/editId/:id", editProduit)

router.delete("/supprimeId/:id", deleteProduit)

router.patch("/ajoutProduitsId/:id", addProduit)
router.patch("/suppProduitsId/:id", suppProduit)

module.exports = router