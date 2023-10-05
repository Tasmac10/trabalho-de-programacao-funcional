/* Registro de palavras que servirá como base para o nosso jogo. Essas palavras são selecionadas aleatoriamente a partir do tópico e da dificuldade escolhida pelo usuário,
além disso, cada palavra possui uma dica específica que poderá ser usada caso o usuário necessite. */

const words = {
  animals: {
    easy: [
      {word: "gato", hint: "Animal de estimação que mia"},{word: "bode", hint: "Um animal com chifres"},{word: "pato", hint: "Ave aquática com bico largo"},{word: "rato", hint: "Um pequeno roedor"},{word: "sapo", hint: "Anfíbio verde e saltador"},{word: "leao", hint: "O rei da selva"},{word: "orca", hint: "Uma baleia preta e branca"},{word: "vaca", hint: "Um animal domesticado para leite"},{word: "urso", hint: "Um grande mamífero peludo"},{word: "lobo", hint: "Um predador selvagem"}],
    medium: [
      {word: "peixe", hint: "Vive na água e é usado para comida"},{word: "tigre", hint: "Um grande felino laranja"},{word: "zebra", hint: "Animal listrado da savana"},{word: "coruja", hint: "Ave noturna de rapina"},{word: "pardal", hint: "Um pequeno pássaro urbano"},{word: "lontra", hint: "Um mamífero aquático brincalhão"},{word: "girafa", hint: "Animal com pescoço longo"},{word: "abelha", hint: "Inseto que faz mel"},{word: "burro", hint: "Animal de carga"},{word: "cachorro", hint: "Amigo leal do homem"}],
    hard: [
      {word: "tartaruga", hint: "Um réptil com casco"},{word: "flamingo", hint: "Ave com pernas longas e bico curvado"},{word: "elefante", hint: "Um mamífero gigante com tromba"},{word: "jacare", hint: "Réptil aquático com mandíbulas fortes"},{word: "canguru", hint: "Animal australiano saltador"},{word: "camaleao", hint: "Réptil que muda de cor"},{word: "hipopotamo", hint: "Um mamífero aquático grande"},{word: "gorila", hint: "Um grande primata"},{word: "golfinho", hint: "Um mamífero marinho inteligente"},{word: "orangotango", hint: "Um grande primata da floresta"},{word: "suricata", hint: "Um pequeno mamífero que vive em grupos"},{word: "pinguim", hint: "Ave marinha não voadora"},{word: "avestruz", hint: "Ave grande que não voa"},{word: "iguana", hint: "Réptil de língua rápida"},{word: "condor", hint: "Uma grande ave de rapina"},{word: "rinoceronte", hint: "Um grande mamífero com chifre nasal"},{word: "mosquito", hint: "Inseto que pica"},{word: "albatroz", hint: "Uma ave marinha de asas longas"}],
  },
  fruits: {
    easy: [
      {word: "uva", hint: "Pequena fruta redonda e suculenta"},{word: "pera", hint: "Fruta macia e de casca fina"},{word: "coco", hint: "Fruta tropical com casca dura"},{word: "kiwi", hint: "Fruta pequena e peluda"},{word: "caju", hint: "Fruta de casca fina e saborosa"},{word: "figo", hint: "Fruta doce com casca fina"},{word: "jaca", hint: "Fruta grande e espinhosa"}],
    medium: [
      {word: "cereja", hint: "Pequena fruta vermelha"},{word: "amora", hint: "Fruta preta e suculenta"},{word: "caqui", hint: "Fruta de casca fina e doce"},{word: "goiaba", hint: "Fruta tropical com sabor único"},{word: "ameixa", hint: "Fruta suculenta de cor variada"},{word: "limao", hint: "Fruta cítrica amarela"},{word: "banana", hint: "Fruta alongada e amarela"},{word: "mamão", hint: "Fruta tropical de cor alaranjada"},{word: "avelã", hint: "Pequena noz com casca dura"},{word: "pequi", hint: "Fruta de casca grossa e saborosa"}],
    hard: [
      {word: "morango", hint: "Pequena fruta vermelha e doce"},{word: "maracuja", hint: "Fruta tropical de sabor ácido"},{word: "framboesa", hint: "Fruta vermelha e suculenta"},{word: "tangerina", hint: "Fruta cítrica de casca fina"},{word: "pessego", hint: "Fruta macia de casca aveludada"},{word: "abobora", hint: "Vegetal de casca dura"},{word: "abacate", hint: "Fruta verde e cremosa"},{word: "jabuticaba", hint: "Fruta roxa que cresce no tronco da árvore"},{word: "melancia", hint: "Grande fruta suculenta"},{word: "laranja", hint: "Fruta cítrica de cor laranja"},{word: "tamarindo", hint: "Fruta de sabor agridoce"},{word: "pitanga", hint: "Fruta vermelha de sabor único"},{word: "damasco", hint: "Fruta de cor alaranjada e doce"}],
  },
  sports: {
    easy: [
      {word: "boxe", hint: "Esporte de combate com luvas"},{word: "golf", hint: "Esporte jogado em campos verdes"},{word: "polo", hint: "Esporte com cavalos e tacos"},{word: "remo", hint: "Esporte aquático com barcos"},{word: "judo", hint: "Arte marcial japonesa"},{word: "sumo", hint: "Esporte de luta japonesa"}],
    medium: [
      {word: "tenis", hint: "Esporte com raquetes e bola"},{word: "volei", hint: "Esporte de rede com bola"},{word: "surfe", hint: "Esporte de pegar ondas"},{word: "xadrez", hint: "Jogo de estratégia"},{word: "esqui", hint: "Esporte de inverno com pranchas"},{word: "karate", hint: "Arte marcial de origem japonesa"}],
    hard: [
      {word: "basquete", hint: "Esporte com bola e cesta"},{word: "ciclismo", hint: "Esporte de pedalar"},{word: "atletismo", hint: "Conjunto de esportes individuais"},{word: "badminton", hint: "Esporte de raquetes com peteca"},{word: "esgrima", hint: "Esporte de combate com espadas"},{word: "canoagem", hint: "Esporte de remar em canoas"},{word: "ginastica", hint: "Conjunto de atividades físicas"},{word: "snowboard", hint: "Esporte de deslizar na neve"},{word: "boliche", hint: "Esporte de derrubar pinos com bola"}],
  },
  countries: {
    easy: [
      {word: "peru", hint: "País na América do Sul"},{word: "cuba", hint: "Ilha no Caribe"},{word: "mali", hint: "País na África Ocidental"},{word: "gana", hint: "País na África Ocidental"},{word: "laos", hint: "País no Sudeste Asiático"},{word: "fiji", hint: "Arquipélago no Oceano Pacífico"}],
    medium: [
      {word: "brasil", hint: "País na América do Sul"},{word: "iraque", hint: "País no Oriente Médio"},{word: "india", hint: "País no Sul da Ásia"},{word: "japao", hint: "País no Extremo Oriente"},{word: "nepal", hint: "País na Ásia do Sul"},{word: "chile", hint: "País na América do Sul"},{word: "mexico", hint: "País na América do Norte"},{word: "china", hint: "País na Ásia Oriental"},{word: "israel", hint: "País no Oriente Médio"},{word: "canada", hint: "País na América do Norte"},{word: "russia", hint: "País na Eurásia"},{word: "italia", hint: "País no Sul da Europa"},{word: "suiça", hint: "País na Europa Central"}],
    hard: [
      {word: "turquia", hint: "País na Eurásia"},{word: "ucrania", hint: "País na Europa Oriental"},{word: "alemanha", hint: "País na Europa Central"},{word: "portugal", hint: "País na Europa do Sul"},{word: "singapura", hint: "Cidade-estado no Sudeste Asiático"},{word: "honduras", hint: "País na América Central"},{word: "camaroes", hint: "País na África Central"},{word: "australia", hint: "País na Oceania"},{word: "holanda", hint: "País na Europa Ocidental"},{word: "argentina", hint: "País na América do Sul"},{word: "austria", hint: "País na Europa Central"},{word: "belgica", hint: "País na Europa Ocidental"},{word: "dinamarca", hint: "País na Europa Setentrional"},{word: "noruega", hint: "País na Europa Setentrional"},{word: "finlandia", hint: "País na Europa Setentrional"},{word: "hungria", hint: "País na Europa Central"},{word: "romenia", hint: "País na Europa Oriental"},{word: "croacia", hint: "País no Sudeste da Europa"},{word: "eslovaquia", hint: "País na Europa Central"}],
  },
  body: {
    easy: [
      {word: "mao", hint: "Parte do corpo usada para segurar"},{word: "olho", hint: "Órgão da visão"},{word: "dedo", hint: "Parte do corpo comum para contar"},{word: "boca", hint: "Parte do corpo usada para comer e falar"},{word: "pe", hint: "Parte do corpo usada para caminhar"},{word: "coxa", hint: "Parte da perna"},{word: "rins", hint: "Órgãos filtradores do corpo"}],
    medium: [
      {word: "nariz", hint: "Órgão usado para cheirar"},{word: "lingua", hint: "Órgão usado para saborear alimentos"},{word: "joelho", hint: "Articulação da perna"},{word: "perna", hint: "Parte do corpo usada para andar"},{word: "dente", hint: "Estrutura usada para mastigar"},{word: "queixo", hint: "Parte do rosto"},{word: "pulso", hint: "Parte do corpo onde você verifica sua pulsação"},{word: "umbigo", hint: "Cicatriz na barriga"},{word: "cabelo", hint: "Fios que crescem na cabeça"},{word: "ombro", hint: "Parte do corpo entre o pescoço e o braço"}],
    hard: [
      {word: "falange", hint: "Ossos dos dedos"},{word: "gargante", hint: "Parte do pescoço"},{word: "gengiva", hint: "Tecido na boca onde os dentes estão inseridos"},{word: "intestino", hint: "Parte do sistema digestivo"},{word: "mandibula", hint: "Osso da boca"},{word: "traqueia", hint: "Tubo de ar no pescoço"},{word: "diafragma", hint: "Músculo que ajuda na respiração"},{word: "panturrilha", hint: "Parte da perna abaixo do joelho"},{word: "bochecha", hint: "Parte do rosto perto da boca"},{word: "sobrancelha", hint: "Fios de pelo acima dos olhos"}],
  },
} 


/* Usamos variáveis, porém ainda vamos mudar isso. */

let word;
let displayedWord;

/* A função "displayWord" serve para que, em um espaço do html que tem id = 'word-display' mostrar a entrada
desse elemento html e concatenar os elementos do array com separador de espaço: ' ' . */ 

 const displayWord = () => {
  document.getElementById('word-display').textContent = displayedWord.join(' ');
}

/* A função "startGame" iniciará o jogo, tendo como entrada o nível e tema escolhido pelo usuário, sorteará uma palavra aleatoriamente da lista baseada neste tema e nivel
e junto com a palavra pegará a dica referente a ela, usará a função "displayword" para que o usuário veja a palavra com as letras substituídas por traços "_" e
para que a palavra não seja revelada e usará a função "displayHint(Hint)" para que o texto referente a dica já esteja incrementado no botão da dica, além disso,
irá fazer com que só as partes pertencentes ao id = "game" fiquem a mostra na tela do usuário. */

function startGame() {
  const level = document.getElementById("level").value;
  const theme = document.getElementById("theme").value;

  const wordPool = words[theme][level];
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  word = wordPool[randomIndex].word;
  const Hint = wordPool[randomIndex].hint;

  displayedWord = Array(word.length).fill('_');

  displayWord();
  displayHint(Hint);
  document.getElementById("setup").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("lostgame").style.display = "none";
  document.getElementById("wongame").style.display = "none";
}

/* A função displayHint(Hint) serve para que, quando a dica for selecionada ela seja escrita no container destinado
e chame a função "mostrarHint()" para que ela possa ser aberta quando o usuário interagir com o botão. */

function displayHint(Hint) {
  const HintText = document.getElementById('Hint-text');
  HintText.textContent = Hint;
  mostrarHint();
}

/* Função "mostrarHint()" está destinada a exibir a dica referente a palavra sorteada pela função "startGame". */

function mostrarHint() {
  const HintContainer = document.getElementById('Hint-container');
  HintContainer.classList.add('show');
}

/* "btnHint" está linkado com o botão da dica e com a função "mostrarHint()" assim sendo 
possivel o acontecimento de um evento para exibir a dica quando o botão é clicado. */

const btnHint = document.getElementById('Hint-button');
btnHint.addEventListener('click', () => {
    const HintText = document.getElementById('Hint-text');

    mostrarHint(); /* Chamada na função "mostrarHint()" que exibe a dica. */
});

/* Função "ocultarHint()" está destinada a ocultar a dica referente a palavra sorteada pela função "startGame". */

function ocultarHint() {
  const HintContainer = document.getElementById('Hint-container');
  HintContainer.classList.remove('show');
}

/* Caso o usuário faça um clique no container da dica ou na tela do jogo está função irá ser chamada,
assim fazendo outra chamada e ocultando a dica por meio da função "ocultarHint()". */

document.addEventListener('click', (event) => {
  const HintContainer = document.getElementById('Hint-container');

  if (event.target !== btnHint && event.target !== HintContainer) {
      
      ocultarHint(); /* Chamada na função "ocultarHint()" que oculta a dica. */
  }
});

/* A função "decreaseChances" é responsável por diminuir as chances do usuário de acertar a palavra. Ela irá ser chamada, 
quando o usuário escolher uma letra que não está presente na palavra sorteada.
A função começará obtendo o elemento HTML que representa o número de chances restantes e o valor atual desse elemento e converterá em um número inteiro. Em seguida, 
a função diminui o número de chances em 1 e atualiza o elemento HTML com o novo valor, 
se o novo valor de chances for igual a 0, significa que o usuário perdeu o jogo. Nesse caso,
a função esconde a seção do jogo e mostrará a seção de "game over", além disso, 
desabilitará todas as teclas de letras para que o usuário não possa mais tentar adivinhar a palavra. */
 
const decreaseChances = () => {

  const chancesElement = document.getElementById('chances');
  const currentChances = parseInt(chancesElement.textContent);
  const newChances = currentChances - 1;
  chancesElement.textContent = newChances;

  if (newChances === 0) {
      document.getElementById("game").style.display = "none";
      document.getElementById("lostgame").style.display = 'block';
      document.getElementById("wongame").style.display = "none";
      disableAllKeys();
  }
}

function chooseLetter(event) {
  const btn = event.target;
  const char = btn.textContent.toLowerCase();
  btn.disabled = true;

  if (word.includes(char)) {
      displayedWord = word.split('').map((letter, index) => 
      letter === char ? char.toUpperCase() : displayedWord[index]
  );
      displayWord();
      if (!displayedWord.includes('_')) {
          document.getElementById("wongame").style.display = "block";
          document.getElementById("game").style.display = "none";
          disableAllKeys();
      }
  } else {
      decreaseChances();
  }
}


/* A função "disableAllKeys" desabilita todas as teclas de letras do jogo. Ela seleciona todos os elementos HTML com a classe .key 
e define o atributo disabled como true para todos eles. Isso impedirá que o usuário clique nas teclas de letras após o jogo ter terminado. */ 

function disableAllKeys() {
  Array.from(document.querySelectorAll(".key"))
      .map(key => key.disabled = true);
}

/* A função "enableAllKeys" é responsável por habilitar todas as teclas de letras do jogo. Ela seleciona todos os elementos HTML com a classe .key 
e define o atributo disabled como false para todos eles. Isso permitirá que o usuário clique nas teclas de letras após o jogo ter terminado. */

function enableAllKeys() {
  Array.from(document.querySelectorAll(".key"))
      .map(key => key.disabled = false);
}

/* A função "restartGame" está ligada com os botões "Jogar Novamente" e "Tentar Novamente", para que quando o usuário apertar, o jogo voltará
a primeira página com todas as suas configurações reiniciadas para que o usuário possa escolher de novo.
Ela reinicia o número de chances, determinando 4 chances, reinicia também "word" e "displayedWord", para que quando voltar a página inicial,
tudo consiga funcionar sem que haja conflito com o jogo anterior. "enableAllKeys" reinicia todas as teclas do teclado para que o usuário consiga apertar. */

function restartGame() {
  const chancesElement = document.getElementById('chances');
  chancesElement.textContent = '4';
  word = ''; 
  displayedWord = []; 
  enableAllKeys();
  document.getElementById("setup").style.display = "block";
  document.getElementById("game").style.display = "none";
  document.getElementById("wongame").style.display = "none";
  document.getElementById("lostgame").style.display = 'none';
}
