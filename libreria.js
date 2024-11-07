let boton = document.getElementById('cambiar');

let conteo = 10;

boton.addEventListener("click", function () {
    let titulo = document.getElementById('tituloPrincipal');

    console.log("tamaño de letra ", titulo.style.fontSize + 1);

    console.log(titulo.textContent);
    console.log("cambiando titulo a uno nuevo");
    titulo.textContent = "Nuevo titulo de prueba";
    titulo.style.color = "green";
    titulo.style.fontSize = conteo + "px";
    console.log("van " + conteo + " clicks");
    conteo++;

    let h2conteo = document.getElementById('conteo');
    h2conteo.textContent = conteo + " veces pulsado";

});