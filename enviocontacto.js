// declarar unas variables para los identificadores, que estan en la etiqueta form y a

const formcontact = document.querySelector('formcontact')
const reception = document.querySelector('#reception')

// se debe capturar o "escuchar" el submit para el envio de correo
formcontact.addEventListener('submit',envioinfo)

// envioinfo es una funcion, la cual va a capturar la informacion que estan en los elementos del formulario: Input


function envioinfo(event){
    //prepara el evento click
    event.preventDefault();
    //para poder imprimir la info, se crea un objeto FormData
    const envioform = new FormData(this)
    //envio
}