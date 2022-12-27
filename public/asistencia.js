form.addEventListener('submit', e => {
  e.preventDefault()

//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "14074938534";

let Fecha = document.querySelector("#Fecha").value;
let Acomodador = document.querySelector("#Acomodador").value;
let Reunion = document.querySelector("#Reunion").value;
let Asistencia = document.querySelector("#Asistencia").value;
let Zoom = document.querySelector("#Zoom").value;
let resp = document.querySelector("#respuesta");

resp.classList.remove("fail");
resp.classList.remove("send");

let url = `https://api.whatsapp.com/send?phone=14074938534&text=
ASISTENCIA%0A

Fecha%0A
${Fecha}%0A
Acomodador%0A
${Acomodador}%0A
Reunion%0A
${Reunion}%0A
Asistencia%0A
${Asistencia}%0A
Zoom%0A
${Zoom}`;

if (Fecha === "" || Acomodador === "" || Asistencia === "" ) {
resp.classList.add("fail");
resp.innerHTML = `Faltan algunos datos, ${Acomodador}`;
return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = `Gracias, ${Acomodador}`;

window.open(url);
});
