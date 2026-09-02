const commandes = [
  { montant: 150,  statut: "standard" },
  { montant: 620,  statut: "standard" },
  { montant: 1200, statut: "premium" }
];

function calculerCommande(donner){
    let percentageRemise;
    let livraison;
    if(donner.montant < 200){
        percentageRemise = 0;
    }else if(donner.montant >= 200 && donner.montant < 500){
        percentageRemise = 5;
    }else if(donner.montant >= 500 && donner.montant < 1000){
        percentageRemise = 10;
    }else{
        percentageRemise = 15;
    }
    if(donner.statut === 'premium'){
        percentageRemise += 5;
    }
    if(percentageRemise > 20){
        percentageRemise = 20;
    }
    let remise = donner.montant * percentageRemise / 100;
    let totalApresRemise = donner.montant - remise;
    if(totalApresRemise >= 300){
         livraison = 0;
    }else{
        livraison = 30;
    }
    let totalAPayer = totalApresRemise + livraison;

    return {
        percentageRemise,
        remise,
        totalApresRemise,
        livraison,
        totalAPayer
    }
}
console.log(calculerCommande(commandes[2]))