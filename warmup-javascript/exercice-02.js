const temperatures = [-5, 10, 22, 34];

function celsiusVersFahrenheit(celsius){
    let  F = celsius * 9/5 + 32;
    return F;
}
function decrireTermperature(celsius){
    if(celsius < 10){
        return 'Froid';
    }else if(celsius > 10 && celsius < 25){
        return 'Doux';
    }else{
        return 'Chaud';
    }
}

console.log(decrireTermperature(temperatures[2]));