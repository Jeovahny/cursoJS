var agora = new Date()
var hora = agora.getHours()
if (hora < 12 && hora > 5) {
console.log(`Agora são exatamente ${hora} horas. Bom dia!!`)
}else if (hora <= 18 && hora > 12){
    console.log (`Agora são exatamente ${hora}  horas. Boa tarde!`)
}else if ( hora > 18 && hora < 12){
    console.log (`Boa noite!`)
}else if (hora > 0 && hora < 5) {
    console.log (`Agora são exatamente ${hora} horas. Boa madrugada!!`)
}