const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="response"]');
let score = 0;

const profiles = {
    endividado:"Perfil Endividado",
    equilibrado: "Perfil Equilibrado",
    investidor: "Perfil  Investidor"
}
const phrases = {
    endividado: "É preciso ter muita atenção e não desanimar, porque chegou a hora de levantar a cabeça e saber que sempre existe um caminho.",
    equilibrado: "Essa posição é conhecida como zona de conforto, mas você deve assumir uma nova postura em relação ao uso do seu dinheiro.",
    investidor: "Parabéns, você está no caminho certo! O hábito de poupar é o melhor caminho para uma pessoa se tornar sustentável financeiramente."
} 

btn.addEventListener("click", () => {
    let countCheckedButtons = 0;

    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            score += Number(radioButton.value)
            countCheckedButtons += 1;
        }
    }

    if (countCheckedButtons == 9) {
        let profile;
        if (score < 30) {
            profile = "endividado"
        } else if (score >= 30 && score < 50 ) {
            profile = "equilibrado"
        } else if (score >= 50) {
            profile = "investidor"
        }

        document.getElementById('titleResult').innerHTML = profiles[profile] ;
        document.getElementById('textResult').innerHTML = phrases[profile];

        document.getElementById('textResult').setAttribute('class', 'bg-grey bg-opacity-25 p-3')
        score = 0;

    } else {
        alert("Lembre-se de responder a todas as perguntas.")
    }
})
