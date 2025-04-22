function calcularFactorial(num) {
    if (num < 0) return undefined;
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

async function solicitarNumero() {
    const numero = prompt("Por favor, ingrese un número (presione X para salir): ");

    if (numero === null || numero.toLowerCase() === 'x') {
        console.log("Gracias, vuelve cuando quieras!");
        document.body.innerHTML += "<p>Gracias, vuelve cuando quieras!</p>";
        return false;
    }

    const parsedNumero = parseInt(numero, 10);
    
    if (isNaN(parsedNumero)) {
        console.error("Error: La entrada no es un número válido.");
        return await solicitarNumero(); 
    }

    const resultado = calcularFactorial(parsedNumero);

    if (resultado === undefined) {
        console.error("Error: No se puede calcular el factorial de un número negativo.");
        return await solicitarNumero();
    }

    console.log(`El factorial de ${parsedNumero} es: ${resultado}`);
    document.body.innerHTML += `<p>El factorial de ${parsedNumero} es: ${resultado}</p>`;

    await new Promise(resolve => setTimeout(resolve, 3000));
    return await solicitarNumero();
}

async function main() {
    await solicitarNumero();
}

main();