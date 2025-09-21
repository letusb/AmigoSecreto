// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value;
    if (amigo==="") {
       alert("Porfavor, ingrese el nombre de un amigo");
       return;
    }
    amigos.push (amigo)
    console.log (amigos)

    let inputLista = document.getElementById('listaAmigos');
    inputLista.innerHTML = '';

    amigos.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre; 
        inputLista.appendChild(li);
    });

    inputAmigo.value = ""; 
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos registrados para el sorteo");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    console.log("Amigo sorteado: " + amigoSorteado);
    
    let resultado = document.getElementById('resultado');
    resultado.textContent = "Amigo sorteado: " + amigoSorteado;
}
