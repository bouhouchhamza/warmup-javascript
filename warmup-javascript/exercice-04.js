const courses = ["pain", "lait", "riz", "cafe"];

courses.push("sucre");
// console.log(courses)
console.log(courses.indexOf('lait'));
courses.splice(1, 1);
console.log("Nomber d'article :" + courses.length);
for (let i = 0; i < courses.length; i++) {
    console.log(i+1 +'.' + courses[i]);
}
    if(courses.indexOf('cafe') !== -1){
        console.log('Le cafe est bien dans la liste.')
    }else{
        console.log("Le cafe n'est dans la liste.");
    }
