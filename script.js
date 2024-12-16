document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores dos campos de hora e operação
    const hora1 = document.getElementById('hora1').value;
    const hora2 = document.getElementById('hora2').value;
    const operacao = document.getElementById('operacao').value;

    if (!hora1 || !hora2) {
        alert('Por favor, preencha ambos os campos de hora!');
        return;
    }

    // Converte as horas para minutos
    const [horas1, minutos1] = hora1.split(':').map(Number);
    const [horas2, minutos2] = hora2.split(':').map(Number);

    const minutosTotais1 = horas1 * 60 + minutos1;
    const minutosTotais2 = horas2 * 60 + minutos2;

    // Calcula a diferença ou soma de tempo
    let resultadoEmMinutos;
    if (operacao === 'soma') {
        resultadoEmMinutos = minutosTotais1 + minutosTotais2;
    } else if (operacao === 'subtracao') {
        resultadoEmMinutos = Math.abs(minutosTotais1 - minutosTotais2);
    }

    // Converte os minutos de volta para horas e minutos
    const horasResultado = Math.floor(resultadoEmMinutos / 60);
    const minutosResultado = resultadoEmMinutos % 60;

    // Exibe o resultado
    if (operacao === 'soma') {
        document.getElementById('resultado-texto').textContent = `A soma é ${horasResultado} horas e ${minutosResultado} minutos.`;
    } else if (operacao === 'subtracao') {
        document.getElementById('resultado-texto').textContent = `A diferença é ${horasResultado} horas e ${minutosResultado} minutos.`;
    }
});
