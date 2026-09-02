const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

function genererSlug(titre){
    let titreSansEspaces = titre.trim();
    let titreInLower = titreSansEspaces.toLowerCase();
    let titreSplit = titreInLower.split(' ');
    let titreClean = titreSplit.filter(el => el !== "");
    let titrejoin = titreClean.join('-');
    return titrejoin;
}
console.log(genererSlug(titre))
function compterMots(phrase){
    let phraseSpliter = phrase.split(' ');
    let PhraseFilter = phraseSpliter.filter(el => el !== '');
    let phraseCalculateur = PhraseFilter.reduce((acc,element)=>{
        acc ++
        return acc
    },0)
    return phraseCalculateur
}
console.log(compterMots(phrase))

function initiales(nomComplete){
    let nomSpliter = nomComplete.split(' ');
    let nomMapper = nomSpliter.map(el => el[0]);
    let nomJointure = nomMapper.join('.');
    let nomInUpper = nomJointure.toUpperCase()+".";
    return nomInUpper;
}

console.log(initiales(nomComplet));