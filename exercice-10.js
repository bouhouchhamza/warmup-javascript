const ventes = [
  {
    vendeur: "Amina",
    produit: "Ordinateur portable",
    montant: 8500,
    mois: "janvier",
  },
  { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
  { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
  { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
  { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
  { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" },
];

const chiffreTotal = ventes.reduce((acc,vente)=> acc += vente.montant ,0 );
console.log("=== RAPPORT DES VENTES ===");
console.log("chiffre d'affaire total : "+chiffreTotal);
const meilleureVente = ventes.reduce((plusGrande,vente)=>{
    if(vente.montant > plusGrande.montant){
        plusGrande = vente.montant
    }else{
        plusGrande = plusGrande
    }
    return plusGrande
})
// const meilleureVenteString = Object.entries(meilleureVente).
console.log(meilleureVente);
























// let montantTotal = ventes.reduce((acc, vente) => {
//   acc += vente.montant;
//   return acc
// },0);
// let ventePlusEleve = ventes.reduce((plusGrande,vente)=>{
//     if(vente.montant > plusGrande.montant){
//         plusGrande = vente 
//     }else{
//         plusGrande = plusGrande;
//     }
//     return plusGrande;
// });
// let  caParVendeur =ventes.reduce((moyen,vente)=>{
//     if(moyen[vente.vendeur] === undefined){
//         moyen[vente.vendeur] = 0;
//     }
//     moyen[vente.vendeur] = moyen[vente.vendeur] +   vente.montant;
    
//     return moyen
// },{})
// // console.log(caParVendeur);
// let arrVenderCa = Object.entries(caParVendeur);
// // console.log(arrVenderCa)
// let moyenne = montantTotal / arrVenderCa.length;
// let au_dessus_de_moyenne = arrVenderCa.filter((el)=> el[1]> moyenne)
// // console.log(moyenne)
// // let au_dessus_de_moyenne = ventes.filter((el)=> el[1] > moyen);
// console.log(au_dessus_de_moyenne)



