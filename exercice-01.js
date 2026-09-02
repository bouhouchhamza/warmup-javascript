const prenom = "Amina";
const ville = "Casablanca";
let age = 22;
let estEnFormation = true;
let statut;

if(age >= 18){
    statut = 'majeur';
}else{
    statut = 'mineur';
}

console.log( prenom + ', '+ age +' ans, habite a Casablanca.\n'+ 'Status : ' + statut +'.\n'+'Formation en cours : '+ estEnFormation );