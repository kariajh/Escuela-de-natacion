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

function validarTelefono(){
    const url = 'https://api.apilayer.com/number_verification/validate?number='
    let valido=false;
    let myHeaders = new Headers();
    myHeaders.append("apikey", "YngdbKeQj4y7xZ6f5r75lxZQhr6LRLFk");
    
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch(url + "number", requestOptions)
      .then(response => response.text())
      .then(data => {
        valido = data.valid;
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
    
  
}
