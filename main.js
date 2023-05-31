var gerado = Math.floor(Math.random() * 100)
let tentativas = 0;
let digitado = document.querySelector("#digitado");
let infos = document.querySelector("#infos")
let recorde = 1000000;
let bdy = document.body;
let tit = document.querySelector("#tit");
var rectela = document.querySelector("#rectela")

let data = new Date();
let opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let formatador = new Intl.DateTimeFormat('pt-br', opcoes);


function validador() {
    tentativas++
    if (digitado.value == gerado) {
        infos.innerHTML = ("PARABÉNS!! " + " VOCÊ ACERTOU COM " + tentativas + " TENTATIVAS &#129395;");
        //sistema recorde
        if (tentativas < recorde) {
            recorde = tentativas;
            rectela.innerHTML = ("seu recorde de tentativas foi " + recorde + " em " + formatador.format(data) + " .");
        }
        //reiniciar
        var br = document.createElement("button")
        br.textContent = ("RECOMEÇAR");
        br.id = ("br");
        bdy.appendChild(br);
        br.onclick = function () {
            digitado.value = ("");
            gerado = Math.floor(Math.random() * 100)
            tit.innerHTML = ("ADIVINHE OUTRO NÚMERO");
            infos.innerHTML = ("");
            var brdelete = document.getElementById('br');
            brdelete.parentNode.removeChild(br);
        }

        tentativas = 0;
    }
    else if (digitado.value > gerado) {
        infos.innerHTML = ("VALOR ALTO, TENTE NOVAMENTE! &#128546;");
    }
    else {
        infos.innerHTML = ("VALOR BAIXO, TENTE NOVAMENTE! &#128531;");
    }
}



