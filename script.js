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