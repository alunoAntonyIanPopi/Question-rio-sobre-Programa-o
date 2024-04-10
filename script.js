const questions = [
  { q: "O que é uma div em html?", o: ["1) uma caixa", "2) um garfo", "3) uma classe", "4) uma pseudo-classe"], a: "1) uma caixa" },
  { q: "Qual elemento HTML é utilizado para criar uma lista não ordenada?", o: ["1) ul", "2) li", "3) ol", "4) div "], a: "1) ul" },
  { q: "Qual é o propósito principal da propriedade CSS display flex?", o: ["1) Tornar um elemento visível na página", "2) Criar um layout flexível para os elementos filhos de um contêiner", "3) Controlar o fluxo de elementos inline em uma linha", "4) Especificar a direção do fluxo de blocos dentro de um contêiner"], a: "2) Criar um layout flexível para os elementos filhos de um contêiner" },
  { q: "Qual é a propriedade CSS usada para definir a cor do texto?", o: ["1) text-color", "2) text-style", "3) color", "4) font-color"], a: "3) color" },
  { q: "Qual é a propriedade CSS usada para adicionar margens internas a um elemento?", o: ["1) padding", "2) border", "3) margin", "4) spacing internal"], a: "1) padding" },
  { q: "Como você pode selecionar um botão que está ativamente sendo pressionado pelo usuário usando CSS?", o: ["1 :hover)", "2) :active", "3) :focus", "4) :selected"], a: "2) :active" },
  { q: "Qual é a sintaxe correta para comentários de uma linha em JavaScript?", o: ["1) /* Este é um comentário */", "2) // Este é um comentário", "3) <!-- Este é um comentário -->", "4) ** Este é um comentário **"], a: "2) // Este é um comentário" },
  { q: "Qual é a tag semântica HTML usada para definir o conteúdo principal de um documento?", o: ["1) main", "2) section", "3) article", "4) div"], a: "1) main" },
  { q: "Como você pode garantir que uma div se ajuste dinamicamente ao tamanho da tela em um layout responsivo usando CSS?", o: ["1) Aplicando uma largura fixa à div em pixels", "2) Utilizando a propriedade CSS position absolute para posicionar a div em relação ao canto da tela", "3) Definindo a largura da div em porcentagem em relação à largura do contêiner pai", "4) Usando a propriedade CSS float left para alinhar a div à esquerda da tela"], a: "3) Definindo a largura da div em porcentagem em relação à largura do contêiner pai" },
  { q: "Qual é a finalidade da pseudo-classe hover em CSS?", o: ["1) Definir estilos para um elemento quando ele é clicado", "2) Aplicar estilos a um elemento quando o mouse está sobre ele", "3) Especificar estilos para um elemento quando ele é focado", "4) Ocultar um elemento quando o mouse está sobre ele"], a: "2) Aplicar estilos a um elemento quando o mouse está sobre ele" },
  { q: "Qual é a finalidade do método getElementById() em JavaScript?", o: ["1) Selecionar vários elementos HTML com base em uma classe específica", "2) Selecionar um elemento HTML com base em seu nome de tag", "3) Pegar um elemento HTML com base em seu ID exclusivo", "4) Pesquisar elementos HTML usando uma consulta complexa"], a: "3) Pegar um elemento HTML com base em seu ID exclusivo" },
  { q: "Parabens você concluiu todas as perguntas ou sera que não? a proxima questão é dificil kk", o:["Proxima"], a:"Proxima" },
  { q: "--------------------------O codigo a seguir é um codigo que retorna um numero usando console.log() e let você consegue saber qual numero ele retorna?-------------------------let num1 = 2 let numero = '2' let num2 = 2 console.log(num1 + 'numero' - num2);", o: ["1) 3", "2) 21", "3) 1", "4) 2"], a: "2) 21" }, 
  { q: "kk veja quantas acertou:", o: ["Acertos"] , a:"Acertos"}
];

const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const { q, o } = questions[currentQuestion];
  questionText.textContent = q;
  optionsList.innerHTML = o.map(option => `<li>${option}</li>`).join('');
}

function selectOption(selectedOption) {
  const correctAnswer = questions[currentQuestion].a;
  if (selectedOption === correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

optionsList.addEventListener("click", (event) => {
  if (event.target.tagName === 'LI') {
    selectOption(event.target.textContent);
  }
});

function showResult() {
  optionsList.style.display = "none";
  submitButton.style.display = "none";
  resultContainer.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

displayQuestion();
