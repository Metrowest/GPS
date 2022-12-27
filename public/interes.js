


      form.addEventListener('submit', e => {
        e.preventDefault()

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "14074938534";

  let Nombre = document.querySelector("#Nombre").value;
  let Sexo = document.querySelector("#Sexo").value;
  let Direccion = document.querySelector("#Direccion").value;
  let Telefono = document.querySelector("#Telefono").value;
  let Idioma = document.querySelector("#Idioma").value;
  let Correo = document.querySelector("#Correo").value;
  let Mejor = document.querySelector("#Mejor").value;
  let Publicador = document.querySelector("#Publicador").value;
  let Observaciones = document.querySelector("#Observaciones").value;
  let resp = document.querySelector("#respuesta");
  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=14074938534&text=PERSONA QUE MOSTRÓ INTERÉS%0A


  Nombre%0A
  ${Nombre}%0A
  Sexo%0A
  ${Sexo}%0A
  Direccion%0A
  ${Direccion}%0A
  Telefono%0A
  ${Telefono}%0A
  Idioma%0A
  ${Idioma}%0A
  Correo electronico%0A
  ${Correo}%0A
  Mejor momento para contactar%0A
  ${Mejor}%0A
  Publicador%0A
  ${Publicador}%0A
  Observaciones%0A
  ${Observaciones}`;

  if (Nombre === "" || Idioma === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${Nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `${Nombre}, confirmo en WhatsApp`;

  window.open(url);
});
