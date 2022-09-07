let xhr = new XMLHttpRequest();
let url = 'http://localhost/Easy-Park/FrontEnd/Provider/php/dataHome.php';
const login = document.getElementById("login");
let nombre = document.getElementById("nombre");
let plazas = document.getElementById("plazas");
let horario = document.getElementById("horario");
let precio = document.getElementById("precio");
let localidad = document.getElementById("localidad");
let direccion = document.getElementById("direccion");

nombre.addEventListener('input', updateValueNombre)
plazas.addEventListener('input', updateValuePlazas)
horario.addEventListener('input', updateValueHorario)
precio.addEventListener('input', updateValuePrecio)
localidad.addEventListener('input', updateValueLocalidad)
direccion.addEventListener('input', updateValueDireccion)

function updateValueNombre(e) {
    nombre = e.target.value
}
function updateValuePlazas(e) {
    plazas = e.target.value
}
function updateValueHorario(e) {
    horario = e.target.value
}
function updateValuePrecio(e) {
    precio = e.target.value
}
function updateValueLocalidad(e) {
    localidad = e.target.value
}
function updateValueDireccion(e) {
    direccion = e.target.value
}

class CargarEstacionamiento {
    constructor(
        nombre,
        plazas,
        horario,
        precio,
        localidad,
        direccion
    ) {
        this.nombre = nombre;
        this.plazas = plazas;
        this.horario = horario;
        this.precio = precio;
        this.localidad = localidad;
        this.direccion = direccion;
    }

    verificacionCamposVacios() {
        if (this.token == '' < 0 || this.estado == "") {
            return false;
        } else {
            return true;
        }
    }

    cargarEstacionamiento(datos) {
        // fetch(url, {
        //     method: 'POST',
        //     body: datos
        // })
        //     .then(res => res.json())
        //     .then(data => {

        //         if (data === false) {
        //             document.getElementById("error").innerHTML = "Usuario no valido";
        //             setTimeout(() => {
        //                 document.getElementById("error").innerHTML = "";
        //             }, 3000);
        //         } else {
        //             console.log(data)
        //             window.location.href = "http://localhost/Easy-Park/FrontEnd/Provider/pages/Home.html";
        //         }
        //     })
    }
}

login.onsubmit = (e) => {
    e.preventDefault();

    const cargarestacionamiento = new CargarEstacionamiento(
        nombre,
        plazas,
        horario,
        precio,
        localidad,
        direccion
    );

    const verificacion = cargarestacionamiento.verificacionCamposVacios();

    if (!verificacion) {
        document.getElementById("error").innerHTML = "Todos los campos son obligatorios";
        setTimeout(() => {
            document.getElementById("error").innerHTML = "";
        }, 1000);
    } else {
        var datos = new FormData(login)
        cargarestacionamiento.cargarEstacionamiento(datos);
    }
}




