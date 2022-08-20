var sec =0; //var dos segundos
var min =0;//var dos minutos
var zerar //var para zerar o cronometro
 function segundos(){
    tempo = setInterval(function()  
    {
        var cronometro = document.getElementById("segundos").innerHTML;
        var sec = parseInt(cronometro) +1;
        if(sec ==60){ //condição para exibir os minutos na tela
             min++
            sec=00;
        }


        document.getElementById("segundos").innerHTML =
        (sec < 10? "0"+sec: sec); //condição para o 0 ficar na frente dos segundos enquanto não for 10.
        document.getElementById("minutos").innerHTML = 
        (min< 10? "0"+min: min); // mesmo que o de cima


    },1000); 
   } // setInterval para usar o cronometro


function pausar(){
    clearInterval(tempo);
 } //função para pausar o cronometro

 function zerar(){
    clearInterval(tempo)
    sec=0;
    min=0;
    document.getElementById("segundos", "minutos").innerHTML = '00'
    
 }//função para zerar o cronometro

        