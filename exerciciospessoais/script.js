var turnOn = document.getElementById ( 'turnOn' );
var turnOff = document.getElementById ( 'turnOff' );
var lamp = document.getElementById ( 'lamp' );

function lampOn () {
lamp.src ='modelos/acesa.png'
}


turnOn.addEventListener ( 'click', lampOn );



function lampOff() {
    lamp.src = 'modelos/desligada.png'

}

    turnOff.addEventListener ('click', lampOff)
 



