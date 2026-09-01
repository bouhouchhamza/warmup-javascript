const produit = {
 nom: "Clavier mecanique",
 prix: 450,
 stock: 12,
 categorie: "Informatique",
 enPromotion: false
};

console.log(produit.nom +' - '+produit.prix+' DH -'+produit.stock + 'en stock  '+'('+produit.categorie+')');
// let nouveau_prix = produit.prix + produit.prix * 0.1;
produit.prix == produit.prix + produit.prix *0.1;
console.log('Nouveau prix : '+ produit.prix );

for(const[key, value] of Object.entries(produit)){
    console.log(`${key}: ${value}`);
}
function estDisponible(produit){
    if(produit.stock > 0){
        return true
    }else {
        return false
    }
};
console.log(estDisponible(produit));