/* Registro de palavras que servirá como base para o nosso joga. 
Essas palavras são selecionadas aleatoriamente a partir do tópico e da dificuldade escolhida pelo usuário final.*/
const words = {
    animals: {
      easy: ["gato", "bode", "pato", "rato", "sapo", "leao", "orca", "vaca", "urso", "lobo"],
      medium: ["peixe", "tigre", "zebra", "coruja", "pardal", "lontra", "girafa", "abelha", "burro", "cachorro"],
      hard: ["tartaruga", "flamingo", "elefante", "jacare", "canguru", "camaleao", "hipopotamo", "gorila", "golfinho", "orangotango", "suricata", "pinguim", "avestruz", "iguana", "condor", "rinoceronte", "mosquito", "albatroz"]
    },
    fruits: {
      easy: [ "uva", "pera", "coco", "kiwi", "caju", "figo", "jaca"],
      medium: ["cereja", "amora", "caqui", "goiaba", "ameixa", "limao", "banana", "mamão", "avelã", "pequi"],
      hard: ["morango", "maracuja", "framboesa", "tangerina", "pessego", "abobora", "abacate", "jabuticaba", "melancia", "laranja", "tamarindo", "pitanga", "damasco"]
    },
    sports: {
      easy: ["boxe", "golf", "polo", "remo", "judo", "sumo"],
      medium: ["tenis", "volei", "surfe", "xadrez", "esqui", "karate"],
      hard: [ "basquete", "ciclismo", "atletismo", "badminton", "esgrima", "canoagem", "ginastica", "snowboard", "boliche"]
    },
    countries: {
      easy: ["peru", "cuba", "mali", "gana", "laos", "fiji"],
      medium: ["brasil", "iraque", "india", "japao", "nepal", "chile", "mexico", "china", "israel", "canada", "russia", "italia", "suiça"],
      hard: ["turquia", "ucrania", "alemanha", "portugal", "singapura", "honduras", "camaroes", "australia", "holanda", "argentina", "austria", "belgica", "dinamarca", "noruega", "finlandia", "hungria", "romenia", "croacia", "eslovaquia"]
    },
    body: {
      easy: ["mao", "olho", "dedo", "boca", "pe", "coxa", "rins"],
      medium: ["nariz", "lingua", "joelho", "perna", "dente", "queixo", "pulso", "umbigo", "cabelo", "ombro"],
      hard: ["falange", "gargante", "gengiva", "intestino", "mandibula", "traqueia", "diafragma", "panturrilha", "bochecha", "sobrancelha"]
    },
  }


/*Usamos Variáveis, porém ainda vamos mudar isso.*/  
let word;
let displayedWord;

/* A função "displayWord" serve para, em um espaço do html que tem id = 'word-display', este espaço mostraráa entrada
 desse elemento html e concatenará os elementos do array com separador de espaço: ' ' .*/ 

 const displayWord = () => {
  document.getElementById('word-display').textContent = displayedWord.join(' ');
}

/* A função "startGame". Iniciará o jogo, tendo como entrada o Nivel e Tema escolhido pelo usuário, sorteia uma palavra aleatória, 
da lista baseada no tema e no nivel,usando a função "displayword"  para que o usuário veja a palavra com as letras substituídas por traços "_",
 para que a palavra não seja revelada, além de fazer com que só as partes pertencentes ao id = 'game' fiquem a mostra na tela do usuário. */

function startGame() {
  const level = document.getElementById("level").value;
  const theme = document.getElementById("theme").value;

  const wordPool = words[theme][level];
  word = wordPool[Math.floor(Math.random() * wordPool.length)];
  displayedWord = Array(word.length).fill('_');

  displayWord();
  document.getElementById("setup").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("lostgame").style.display = "none";
  document.getElementById("wongame").style.display = "none";
}
  
/*A função "decreaseChances"  é responsável por diminuir as chances do usuário de acertar a palavra. 
Ela é chamada quando o usuário escolhe uma letra que não está presente na palavra sorteada.
A função começa obtendo o elemento HTML que representa o número de chances restantes e o valor atual desse elemento é convertido em um número inteiro. 
Em seguida, a função diminui o número de chances em 1 e atualiza o elemento HTML com o novo valor.
Se o novo valor de chances for igual a 0, significa que o usuário perdeu o jogo. 
Nesse caso, a função esconde a seção do jogo e mostra a seção de "game over", 
além de desabilitar todas as teclas de letras para que o usuário não possa mais tentar adivinhar a palavra.*/
 
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


/*A função "disableAllKeys" desabilita todas as teclas de letras do jogo. 
Ela seleciona todos os elementos HTML com a classe .key e define o atributo disabled como true para cada um deles. 
Isso impede que o usuário clique nas teclas de letras após o jogo ter terminado.*/ 
function disableAllKeys() {
  Array.from(document.querySelectorAll(".key"))
      .map(key => key.disabled = true);
}

/*A função enableAllKeys é responsável por habilitar todas as teclas de letras do jogo. 
Ela seleciona todos os elementos HTML com a classe .key e define o atributo disabled como false para cada um deles. 
Isso permite que o usuário clique nas teclas de letras após o jogo ter terminado.*/
function enableAllKeys() {
  Array.from(document.querySelectorAll(".key"))
      .map(key => key.disabled = false);
}
