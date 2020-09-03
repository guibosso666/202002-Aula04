function CALCULO(){
    var ALTURA = document.getElementById("ALTURA").value;
    var PESO = document.getElementById("PESO").value;
    var CALCULO = (PESO/(ALTURA * ALTURA));
    

    if(CALCULO<18.5){
        window.alert("Peso abaixo do normal: " + CALCULO);
    }
    else if(CALCULO>=18.5 && CALCULO<24.9){
        window.alert("Peso Ideal: " + CALCULO);
    }
    else if(CALCULO>=25 && CALCULO<29.9){
        window.alert("Acima do peso: " + CALCULO);
    }
    else if(CALCULO>=30 && CALCULO<34.9){
        window.alert("Obesidade Grau I" + CALCULO);
    }
    else if(CALCULO>=35 && CALCULO<40){
        window.alert("Obesidade Grau I" + CALCULO);
        }
    else if (CALCULO>40){
        window.alert("Obesidade Grau III" + CALCULO);
    }
    
}
