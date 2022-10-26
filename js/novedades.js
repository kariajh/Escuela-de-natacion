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
    else
    {
      // Valido el teléfono
      let telefono = campos[2].value
      telefono = (telefono.length < 12) ? ('54' + telefono) : telefono;
      if (validarTelefono(telefono)) {
        alert("Muchas Gracias por su consulta. En breve nos comunicaremos con Ud.");
        document.formConsulta.submit();
      }
      else
      {
        alert("Debe ingresar un número de teléfono válido que incluya el código de área");
        document.getElementById(campos[2].id).focus();
        return 0;
      }
    }
}

function validarTelefono(telefono){
    const pUrl = 'https://api.apilayer.com/number_verification/validate?number='
    let valido = false;
    let myHeaders = new Headers();
    myHeaders.append("apikey", "YngdbKeQj4y7xZ6f5r75lxZQhr6LRLFk");
    
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch(pUrl + telefono, requestOptions)
      .then(res => res.json())
      .then(resultado => {
        valido = resultado.valid;
      })
      .catch(error => console.log('error', error));
    return valido;
}
