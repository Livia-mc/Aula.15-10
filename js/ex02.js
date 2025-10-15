function calcular()
{
    var altura, peso, resultado
    altura=document.getElementById("altura").value
    peso=document.getElementById("peso").value

    resultado=parseFloat(peso) / parseFloat(altura)

    if(resultado>=18.49)
    document.getElementById("resultado").innerHTML = `Você está abaixo do peso`

    if...
    document.getElementById("resultado").innerHTML = `Você está com peso normal`
    document.getElementById("resultado").innerHTML = `Você está em sobrepeso`
    document.getElementById("resultado").innerHTML = `Você está com obesidade mórbida`

}