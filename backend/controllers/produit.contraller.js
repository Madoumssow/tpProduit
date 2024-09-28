const ProduitModel = require("../models/produit.model")

// créations des controlleurs
// afficher les données aux clients 
// creation d'un module global
module.exports.getProduits = async (req, res) => {
    const posts = await ProduitModel.find()
    res.status(200).json(posts)
}

module.exports.setProduits = async (req, res) => {
    if (!req.body.produitName && !req.body.categories) {
        res.status(400).json({ message: "Merci d'ajouter un produit et une categorie" })
    }

    const post = await ProduitModel.create({
        produitName: req.body.produitName,
        categories: req.body.categories,
    })
    res.status(200).json(post)
}

// Elle contient (3) parties
module.exports.editProduit = async (req, res) => {
    // partie A 
    const post = await ProduitModel.findById(req.params.id)

    // partie B
    if (!post) {
        res.status(400).json({ message: "Ce post n'exist pas" })
    }

    // partie c
    const updatedProduit = await ProduitModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedProduit)
}

module.exports.deleteProduit = async (req, res) => {
    const post = await ProduitModel.findById(req.params.id)

    if (!post) {
        res.status(400).json({ message: "Ce post n'exist pas" })
    }

    await post.deleteOne({ _id: req.params.id });
    res.status(200).json("Message supprimé" + req.params.id)
}

module.exports.addProduit = async (req, res) => {
    try {
        await ProduitModel.findByIdAndUpdate(
            req.params.id,
            {$addToSet: { produitAjouter: req.body.produitID }},
            {new: true}
        ).then((data) => res.status(200).send(data))
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports.suppProduit = async (req, res) => {
    try {
        const updatedProduit = await ProduitModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { produitAjouter: req.body.produitID } },
            { new: true }
        );
        res.status(200).send(updatedProduit);
    } catch (err) {
        res.status(400).json(err);
    }
};
