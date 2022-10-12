function validarTextos () {
    // Validar que los campos no estén vacíos
    const campos = document.getElementsByClassName("texto");
    const etiquetas = document.getElementsByClassName("etiqueta");
    let mensaje = "";
    let etiqueta = "";
    let campoid = "";
    for (let i=0; i < campos.length; i++) {
        if (campos[i].value == "") {
            etiqueta = etiquetas[i].textContent;
            etiqueta = etiqueta.substring(0,etiqueta.length - 1);
            mensaje = mensaje + ((mensaje == "") ? "" : ",") + etiqueta;
            campoid = (campoid == "") ? campos[i].id : campoid;
        }
    }
    if (mensaje != "") {
        alert("Debe completar los siguientes campos: " + mensaje);
        document.getElementById(campoid).focus();
        return 0;
    }
    else {
        alert("Muchas Gracias por su consulta. En breve nos comunicaremos con Ud.");
        document.formConsulta.submit();
    }
}

