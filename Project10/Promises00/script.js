function temporizador(milissegundos) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, milissegundos)
    })
}

async function executarAlertas() {
    alert("Início")

    await temporizador(3000)
    alert("Alerta 1: Se passaram 3 segundos.")

    await temporizador(5000)
    alert("Alerta 2: Se passaram 5 segundos.")

    await temporizador(7000)
    alert("Alerta 3: Se passaram 7 segundos.")

    alert("Fim")
}

executarAlertas()