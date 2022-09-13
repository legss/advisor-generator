document.getElementById('button').addEventListener('click', async function ConselhoAleatorio() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()
    const textoConselho = json.slip.advice
    const numeroConselho = json.slip.id
    document.getElementById('random-text').innerHTML = `"${textoConselho}"`;
    document.getElementById('title').innerHTML = `advice #${numeroConselho}`;
    
})





