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
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${r}`
    }


}