const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1) Como funciona um motor rotativo?",
        alternativas: [
            {
            texto: "a) O motor rotativo usa pistões que se movem para cima e para baixo em um cilindro.",
            afirmacao: "1) Errado, O motor rotativo usa um rotor triangular em vez de pistões. O rotor gira dentro de uma câmara, realizando os ciclos de admissão, compressão, combustão e escape."
            },
            {
            texto:"b) No motor rotativo, a queima do combustível ocorre em uma câmara que se move de forma rotacional, garantindo uma operação suave e contínua.",
            afirmacao: "1) Correto, O motor rotativo, como o Wankel, utiliza um rotor triangular que gira dentro de uma câmara elíptica. Isso proporciona uma operação suave e uma entrega contínua de potência."
            },
            {
            texto:"c) O motor rotativo possui várias válvulas que abrem e fecham para controlar a entrada e saída de gases.",
            afirmacao: "1) Errado, O motor rotativo não possui válvulas. Em vez disso, usa aberturas em forma de órifícios para controlar a entrada e saída de gases."
        }
    ]
    },

    {
        enunciado: "2) Como funciona um motor dois tempos?",
        alternativas: [
            {
            texto:"a) No motor de dois tempos, o ciclo de combustão é dividido em quatro etapas: admissão, compressão, combustão e escape.",
            afirmacao: "2) Errado. No motor de dois tempos, o ciclo de combustão é realizado em apenas duas etapas: compressão e combustão, enquanto a admissão e o escape ocorrem simultaneamente e são realizados através de aberturas no cilindro."
            },
            {
            texto: "b) O motor de dois tempos realiza a admissão e a queima do combustível em dois ciclos separados, o que permite uma operação contínua com cada cilindro completando o ciclo a cada rotação do virabrequim.",
            afirmacao: "2) Errado. No motor de dois tempos, a admissão e a queima do combustível ocorrem simultaneamente durante o mesmo ciclo, o que resulta em cada cilindro completando o ciclo a cada rotação do virabrequim. No entanto, a afirmação de que admissão e queima ocorrem em dois ciclos separados está incorreta."
            },
            { texto:"c) O motor de dois tempos realiza o ciclo completo de combustão em apenas duas etapas: compressão e combustão, enquanto a admissão e o escape ocorrem simultaneamente através de aberturas no cilindro.",
                afirmacao: "2) Correto. No motor de dois tempos, a admissão de combustível e a exaustão dos gases de escape ocorrem simultaneamente em fases que se sobrepõem. O ciclo completo de combustão (compressão e combustão) é feito em apenas duas etapas, permitindo que o motor faça um ciclo completo a cada rotação do virabrequim, o que resulta em maior potência por cilindrada em comparação com motores de quatro tempos."
            }
        ]
           
    },
    {
        enunciado: "3) Como funciona um motor quatro tempos",
        alternativas: [
            {
            texto:"a) No motor de quatro tempos, cada cilindro completa o ciclo de combustão em duas rotações do virabrequim.",
            afirmacao: "3) Correto. No motor de quatro tempos, o ciclo completo de admissão, compressão, combustão e escape ocorre em duas rotações do virabrequim. Isso significa que cada cilindro passa por todas as quatro etapas (admissão, compressão, combustão e escape) a cada duas rotações do virabrequim."
        },
         {   
            texto: "b) No motor de quatro tempos, o ciclo de combustão é realizado em uma única rotação do virabrequim, o que permite que o motor opere de forma mais eficiente.",
            afirmacao: "3) Errado. O ciclo de combustão em um motor de quatro tempos não é realizado em uma única rotação do virabrequim. Na verdade, o ciclo completo, que inclui admissão, compressão, combustão e escape, requer duas rotações do virabrequim."
         },
         {
          texto: "c) No motor de quatro tempos, a admissão e o escape ocorrem durante a mesma etapa do ciclo, usando um sistema de válvulas para controlar a entrada e a saída de gases.",
          afirmacao: "3) Errado. No motor de quatro tempos, a admissão e o escape não ocorrem simultaneamente. Eles ocorrem em etapas separadas: a admissão acontece durante a fase de admissão e o escape durante a fase de escape. Um sistema de válvulas, geralmente composto por válvula de admissão e válvula de escape, controla a entrada e a saída de gases de forma independente."
         }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
    caixaAternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas=document.createElement("button");
            botaoAlternativas.textContent=alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
           caixaAternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Seu Resultado :)";
        textoResultado.textContent = historiaFinal;
        caixaAternativas.textContent = "";
    }

    
    mostraPergunta();
