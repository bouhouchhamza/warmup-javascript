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

const chifferDaffairre = ventes.reduce((acc,vente)=>{
    acc += vente.montant;
    return acc
},0)
console.log("=== RAPPORT DES VENTES ===");
console.log("Chiffre d'affaires total : "+chifferDaffairre);

const meilleureVente = ventes.reduce((plusGrande,vente)=>{
    if(vente.montant > plusGrande.montant){
      plusGrande = vente
    }else{
      plusGrande = plusGrande;
    }
    return plusGrande   
});
const mielleurnom = meilleureVente.produit;
const mielleurvendeur = meilleureVente.vendeur;
const mielleurprix = meilleureVente.montant;
console.log("Meilleure vente : "+ mielleurnom + ' (' + mielleurvendeur + ')' +' - ' +mielleurprix+ ' DH' );
const caParVendeur = ventes.reduce((acc,vente)=>{
    if(acc[vente.vendeur] === undefined){
      acc[vente.vendeur] = 0
    }
    acc[vente.vendeur]+=vente.montant;
    return acc
},{})
const caParVendeurArray = Object.entries(caParVendeur).map((el)=>el[0]+' : '+el[1]);
console.log('CA par vendeur : \n'+caParVendeurArray.join('\n'));
const moyennePerVendeur =  chifferDaffairre / caParVendeurArray.length;
console.log('Moyenne par vendeur :  '+moyennePerVendeur + 'DH');
const au_dessus_de_moyenne = Object.entries(caParVendeur).filter((el)=>el[1] > moyennePerVendeur).map((el)=>el[0]);
console.log('Au-dessus de la moyenne : '+au_dessus_de_moyenne.toString());



















































