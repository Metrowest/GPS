form.addEventListener('submit', e => {
  e.preventDefault()

//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "14074938534";

let Mes = document.querySelector("#Mes").value;
let Decontinuo = document.querySelector("#Decontinuo").value;
let Fecha = document.querySelector("#Fecha").value;
let Nombre = document.querySelector("#Nombre").value;
let Apellido = document.querySelector("#Apellido").value;
let resp = document.querySelector("#respuesta");

resp.classList.remove("fail");
resp.classList.remove("send");

let url = `https://api.whatsapp.com/send?phone=14074938534&text=
SOLICITUD PARA EL SERVICIO DE PRECURSOR AUXILIAR%0A

Mes%0A
${Mes}%0A
De continuo%0A
${Decontinuo}%0A
Fecha%0A
${Fecha}%0A
Nombre%0A
${Nombre}%0A
Apellido%0A
${Apellido}`;

if (Mes === "" || Nombre === "" || Apellido === "" ) {
resp.classList.add("fail");
resp.innerHTML = `Faltan algunos datos, ${Nombre}`;
return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = `${Nombre}, ¿confirmo en WhatsApp?`;

window.open(url);
});
