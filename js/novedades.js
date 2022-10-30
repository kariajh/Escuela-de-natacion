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
      //Valido el email
      let mail = campos[3].value
      if (validarMail(mail)) {

        // Valido el teléfono
        let telefono = campos[2].value
        telefono = (telefono.length < 12) ? ('54' + telefono) : telefono;
  //       let valido = validarTelefono(telefono)
  //       if (valido) {
  //         alert("Muchas Gracias por su consulta. En breve nos comunicaremos con Ud.");
  //         document.formConsulta.submit();
  //       }
  //       else
  //       {
  //         alert("Debe ingresar un número de teléfono válido que incluya el código de área");
  //         document.getElementById(campos[2].id).focus();
  //         return 0;
  //       }
  //     }
  // }

  // function validarTelefono(telefono){
        const pUrl = 'https://api.apilayer.com/number_verification/validate?number='
        let valido = false;
        let myHeaders = new Headers();
        myHeaders.append("apikey", "YngdbKeQj4y7xZ6f5r75lxZQhr6LRLFk");
        
        let requestOptions = {
          method: 'GET',
          redirect: 'manual',
          headers: myHeaders
        };
        
        fetch(pUrl + telefono, requestOptions)
        .then(response => response.text())
        .then(result => {
              console.log(result);
              valido=JSON.parse(result).valid;
              if (valido) {
                alert("Muchas Gracias por su consulta. En breve nos comunicaremos con Ud.");
                const form = document.querySelector('#formConsulta')
                
                // document.formConsulta.submit();
                return 1
              }
              else
              {
                alert("Debe ingresar un número de teléfono válido que incluya el código de área");
                document.getElementById(campos[2].id).focus();
                return 0;
              }
            })
        .catch(error => console.log('error', error));
      // return valido;
      }
      else {
        return 0
      }
    }
  }


function validarMail(mail){
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail)){
    return 1;
   } else {
    alert("La dirección de mail es incorrecta.");
    return 0;
   }
}

