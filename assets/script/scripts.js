var miBtn = document.getElementById("boton");
miBtn.addEventListener('click', function () {
    var texto = parseInt(document.querySelector(".input-a-buscar").value);
    if ((texto < 20) && (texto > 0)) {
        multiplicacion(texto);
        factorialfuncion(texto);
    }
    else {
        alert("número fuera del rango")
    }



});

let multiplicacion = (num) => {
    document.getElementById('multiplicacion').innerHTML = ""
    for (let i = 0; i < num; i++) {
        document.getElementById('multiplicacion').innerHTML += `${i + 1} x ${num} = ${(i + 1) * num}<br>`;
    };
};

let factorialfuncion = (num) => {
    document.getElementById('factorial').innerHTML = ""
    for (let j = 2; j <= num; j++) {
        let factorial = (j) => {
            if (j == 2) return 2;
            return factorial(j - 1) * j
        };
        document.getElementById('factorial').innerHTML += `El factorial de ${j} es ${factorial(j)}<br>`;
    }
};