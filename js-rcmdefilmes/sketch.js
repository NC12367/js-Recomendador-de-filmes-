let campoIdade;
let fantasia;
let aventura;
function setup() {
  createCanvas(600, 600);
  createSpan("Atenção.");
  createElement("h2", "recomendo filmes para você ºOº");
  campoIdade = createInput();
  campoAventura = createCheckbox("você gosta de aventura!... não?");
  campoFantasia = createCheckbox("você. gosta. de... fantasia?");
}

function draw() {
  background(200, 200, 200);
  let idade = campoIdade.value();
  fantasia = campoFantasia.checked();
  aventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade);
  fill(color(30, 20, 199));
  textAlign(CENTER, CENTER);
  textSize(32);
  text(recomendacao, width / 2, height / 2);
}
function geraRecomendacao(idade, fantasia, aventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      //Se for maior ou igual a 18 anos
      if (idade >= 18) {
        if (aventura || fantasia) {
          return "Mortal Kombat";
        } else {
          return "A Lista de Schindler";
        }
      }
      //Se for menor de 18 anos
      else {
        if (aventura || fantasia) {
          return "Alien: Romulus";
        } else {
          return "À Procura da Felicidade";
        }
      }
    }
    //Se for menor que 14 anos
    else {
      if (aventura || fantasia) {
        return "Os Caçadores da Arca Perdida";
      } else {
        return "A Cápsula do Tempo";
      }
    }
  }
  //Se for menor que 10 anos
  else {
    if (aventura || fantasia) {
      return "Super Mario Bros. - O Filme";
    } else {
      return "A Invenção De Hugo Cabret";
    }
  }
}
