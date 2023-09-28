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