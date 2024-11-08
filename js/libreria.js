
$(document).ready(function(){
    //$("#inputName").val("Hola Mundo");
    //$("#parrafoCabecera").text("Hola Mundo");
    //$("#mensaje").html("<h2>Hola Mundo</h2>");

    $("#mensajeName").hide();

    $("#inputAddress").on("blur", function(){
        if ($("#inputAddress").val().length > 10){
            console.log("Dirección correcta");
        }else{
            console.log("Dirección incorrecta");
        }
    });

    $("#inputEmail").on("blur", function(){
        if ($("#inputEmail").val().indexOf("@") == -1){
            console.log("Email INcorrecto");
        }else{
            console.log("Email correcto");
        }
    });

    $("#enviar").click(function(){
        let nombre = $("#inputName").val();
        if (nombre.length > 3) {
            console.log("Nombre: " + nombre + " es correcto.");
            $("#mensajeName").hide();
        } else {
            $("#mensajeName").show();
        }
    });

});
