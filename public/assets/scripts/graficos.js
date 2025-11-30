const apiURL = "http://localhost:3001/deuses";

async function carregarGrafico() {
    const resposta = await fetch(apiURL);
    const dados = await resposta.json();

    // Agrupar por domínio
    const dominios = {};

    dados.forEach(deus => {
        const dominio = deus.dominio || "Desconhecido";

        if (!dominios[dominio]) {
            dominios[dominio] = 0;
        }

        dominios[dominio]++;
    });

    // Preparar dados para o Chart.js
    const labels = Object.keys(dominios);
    const valores = Object.values(dominios);

    const ctx = document.getElementById("graficoDeuses");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: valores,
                borderWidth: 1
            }]
        }
    });
}

carregarGrafico();
