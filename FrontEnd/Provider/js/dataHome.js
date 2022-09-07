const login = document.getElementById("login");
let token = document.getElementById("token");
let plaza = document.getElementById("plaza");
let estado = document.getElementById("estado");

token.addEventListener('input', updateValueToken)
plaza.addEventListener('input', updateValuePlaza)
estado.addEventListener('input', updateValueEstado)

function updateValueToken(e) {
    token = e.target.value
}
function updateValuePlaza(e) {
    plaza = e.target.value
}
function updateValueEstado(e) {
    estado = e.target.value
}


class Plaza {
    constructor(token, plaza, estado) {
        this.token = token;
        this.plaza = plaza;
        this.estado = estado;
    }

    verificacionCamposVacios() {
        if (this.token == "" || this.plaza == "" || this.estado == "") {
            return false;
        }
        return true;
    }

}

login.onsubmit = (e) => {
    e.preventDefault();
    const nuevaplaza = new Plaza(token, plaza, estado);
    const verificacion = nuevaplaza.verificacionCamposVacios();

    if (!verificacion) {
        document.getElementById("error").innerHTML = "Todos los campos son obligatorios";
        setTimeout(() => {
            document.getElementById("error").innerHTML = "";
        }, 2000);
    } else {
        const personJSON = JSON.stringify(nuevaplaza);
        fetch("localhost:3000/transactions");
    }
}




