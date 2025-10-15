   
function somar()
{
    var v1, v2, r
    v1=document.getElementById("primeiro_valor").value
    v2=document.getElementById("segundo_valor").value

    if(v1=="" || v2=="")
    {
    alert("Você tem que digitar valores para fazer a conta")
    }

    else
    {
    r =parseFloat(v1) + parseFloat(v2)
    document.getElementById("resultado_soma").innerHTML = `O resultado da soma é ${r}`
    }


}

function diminuir()
{
    var v1, v2, r
    v1=document.getElementById("primeiro_valor").value
    v2=document.getElementById("segundo_valor").value

    if(v1=="" || v2=="")
        {
        alert("Você tem que digitar valores para fazer a conta")
        }   

    else
    {
    r =parseFloat(v1) - parseFloat(v2)
    document.getElementById("resultado_diminuir").innerHTML = `O resultado da subritação é ${r}`
    }
}

function multiplicar()
{
    var v1, v2, r
    v1=document.getElementById("primeiro_valor").value
    v2=document.getElementById("segundo_valor").value

    if(v1=="" || v2=="")
        {
        alert("Você tem que digitar valores para fazer a conta")
        }   

    else
    {
    r =parseFloat(v1) * parseFloat(v2)
    document.getElementById("resultado_multiplicar").innerHTML = `O resultado da multiplicação é ${r}`
    }
}


function dividir()
{
    var v1, v2, r
    v1=document.getElementById("primeiro_valor").value
    v2=document.getElementById("segundo_valor").value

    if(v1=="" || v2=="")
        {
        alert("Você tem que digitar valores para fazer a conta")
        }   

    else
    {
        if(v2==0){
            alert("Não posso dividir um número por zero")}

    else{
    r =parseFloat(v1) / parseFloat(v2)
    document.getElementById("resultado_dividir").innerHTML = `O resultado da divisão é ${r}`
    }
}
}