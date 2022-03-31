function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('res')


    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
      window.alert('[ERRO] Faltam dados')

    }else {
        resultado.innerHTML = 'Contando:'
        var ini = Number(inicio.value)
        var final = Number(fim.value)
      var p = Number(passo.value)


     for (var x = ini; x <= final; x += p){
        resultado.innerHTML += `${x} `

     }
    
    
    } 




}