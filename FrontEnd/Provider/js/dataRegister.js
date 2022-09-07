let xhr = new XMLHttpRequest();
let url = 'http://localhost/Easy-Park/FrontEnd/Provider/php/dataRegister.php'
const login = document.getElementById("login");
let nombre = document.getElementById("nombre");
let password = document.getElementById("password");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let localidad = document.getElementById("localidad");

nombre.addEventListener('input', updateValueNombre)
password.addEventListener('input', updateValuePassword)
telefono.addEventListener('input', updateValueTelefono)
email.addEventListener('input', updateValueEmail)
localidad.addEventListener('input', updateValueLocalidad)

function updateValueNombre(e) {
    nombre = e.target.value
}
function updateValuePassword(e) {
    password = e.target.value
}
function updateValueTelefono(e) {
    usuario = e.target.value
}
function updateValueLocalidad(e) {
    localidad = e.target.value
}
function updateValueEmail(e) {
    email = e.target.value
}
class Person {
    constructor(
        nombre,
        password,
        usuario,
        localidad,
        email,
        domicilio,
        plazas) {
        this.nombre = nombre;
        this.password = password;
        this.usuario = usuario;
        this.localidad = localidad;
        this.email = email;
        this.domicilio = domicilio;
        this.plazas = plazas;
    }

    verificacionCamposVacios() {
        if (this.nombre == "") {
            console.log(this.nombre)
            return false;
        } else {
            return true
        }
    }
}

login.onsubmit = (e) => {
    e.preventDefault();

    const persona = new Person(
        nombre,
        password,
        telefono,
        email,
        localidad,
    );

    const verificacion = persona.verificacionCamposVacios();

    if (!verificacion) {
        document.getElementById("error").innerHTML = "Todos los campos son obligatorios";
        setTimeout(() => {
            document.getElementById("error").innerHTML = "";
        }, 2000);
    } else {
        var datos = new FormData(login)
        console.log(datos.get('nombre'))
        console.log(datos.get('password'))
        console.log(datos.get('telefono'))
        console.log(datos.get('email'))
        console.log(datos.get('localidad'))

        fetch(url, {
            method: 'POST',
            body: datos
        })
            .then(res => res.text())
            .then(data => {

                if (data === 'ERROR NO SE PUDO REGISTRAR') {
                    document.getElementById("error").innerHTML = "ERROR NO SE PUDO REGISTRAR";
                    setTimeout(() => {
                        document.getElementById("error").innerHTML = "";
                    }, 3000);
                } else {
                    console.log(data)
                    window.location.href = "http://localhost/Easy-Park/FrontEnd/Provider/pages/Home.html";
                }
            })
    }
}




