const inscription = {
 nom: "",
 email: "aminaexample.com",
 motDePasse: "123",
 age: 17
};
function validerInscription(donnees){
    const error = [];
     const calculenomeLegth = donnees.nom.length;
     const emailValidateurdot = donnees.email.indexOf('.');
     const emailValidateurat = donnees.email.indexOf('@');
     const passwordValidateur = donnees.motDePasse.length;
    if(calculenomeLegth < 2){
        error.push('Le nom doit contenir au moins 2 caracteres.')
    }
    if(emailValidateurat === -1 || emailValidateurdot === -1){
        error.push("L'email n'est pas valide.")
    }
    if(passwordValidateur < 8){
        error.push("Le mot de passe doit contenir au moins 8 caracteres.")
    }
    if(donnees.age < 18){
        error.push("Vous devez avoir au moins 18 ans.")
    }
    if(error.length > 0){
        return {
            valide : false,
            error
        }
    }else{
        return {
            valide :true,
            error
        }
    }
}
console.log(validerInscription(inscription));