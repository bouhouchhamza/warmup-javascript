const panier = [
  { nom: "Souris", prix: 150, quantite: 2 },
  { nom: "Casque", prix: 400, quantite: 1 },
  { nom: "Tapis", prix: 60, quantite: 3 },
  { nom: "Webcam", prix: 520, quantite: 1 },
];
const names = panier.map((produit) => produit.nom);

const content = panier.map((produit) => {
  return {
    nom: produit.nom,
    total: produit.prix * produit.quantite,
  };
});
// console.log(content);
const unitaire = panier.filter((produit) => produit.prix > 100);
// console.log(unitaire)

const montantTotal = panier.reduce((acc,produit)=>{
    acc = acc + ( produit.prix * produit.quantite)
    return acc;
},0)

// console.log(montantTotal)
const quantité = panier.reduce((acc,produit)=>{
    acc = acc + produit.quantite;
    return acc
},0);
console.log(quantité);