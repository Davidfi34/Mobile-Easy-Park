let xhr = new XMLHttpRequest();
let url = 'http://localhost/Easy-Park/FrontEnd/Provider/php/servidor.php'
const login = document.getElementById("login");
let password = document.getElementById("password");
let usuario = document.getElementById("usuario");

password.addEventListener('input', updateValuePassword)
usuario.addEventListener('input', updateValueUsuario)

function updateValuePassword(e) {
    password = e.target.value
}
function updateValueUsuario(e) {
    usuario = e.target.value
}


class Person {
    constructor(password, usuario) {
        this.password = password;
        this.usuario = usuario;
    }

    verificacionCamposVacios() {
        if (this.password == "" || this.usuario == "") {
            console.log('sexo')
            return false;
        } else {
            return true;
        }

    }
}

login.onsubmit = (e) => {
    e.preventDefault();

    const loginPersona = new Person(password, usuario);
    const verificacion = loginPersona.verificacionCamposVacios();

    if (!verificacion) {
        document.getElementById("error").innerHTML = "Todos los campos son obligatorios";
        setTimeout(() => {
            document.getElementById("error").innerHTML = "";
        }, 1000);
    } else {
        var datos = new FormData(login)
        console.log(datos.get('usuario'))
        console.log(datos.get('password'))

        fetch(url, {
            method: 'POST',
            body: datos
        })
            .then(res => res.json())
            .then(data => {

                if (data === false) {
                    document.getElementById("error").innerHTML = "Usuario no valido";
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




