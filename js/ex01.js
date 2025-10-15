function converter(){
    var dol, real, convert
    dol=document.getElementById("cotação").value
    real=document.getElementById("reais").value

    convert= parseFloat(real) / parseFloat(dol)
    document.getElementById("resultado").innerHTML = `Com a cotação você tem ${convert}`
}