let xhr = new XMLHttpRequest();
let url = 'http://localhost/Easy-Park/FrontEnd/Provider/php/dataHome.php';
const login = document.getElementById("login");
let token = document.getElementById("token");
let estado = document.getElementById("estado");
token.addEventListener('input', updateValueToken)
estado.addEventListener('input', updateValueEstado)

function updateValueToken(e) {
    token = e.target.value
}
function updateValueEstado(e) {
    estado = e.target.value
}

class Gestion {
    constructor(token, estado) {
        this.token = token;
        this.estado = estado;
    }

    verificacionCamposVacios() {
        if (this.token == '' < 0 || this.estado == "") {
            console.log('sexo')
            return false;
        } else {
            return true;
        }
    }

    gestion(datos) {
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

    const gestion = new Gestion(token, estado);
    const verificacion = gestion.verificacionCamposVacios();

    if (!verificacion) {
        document.getElementById("error").innerHTML = "Todos los campos son obligatorios";
        setTimeout(() => {
            document.getElementById("error").innerHTML = "";
        }, 1000);
    } else {
        var datos = new FormData(login)
        gestion.gestion(datos)
    }
}




