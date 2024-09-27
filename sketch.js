let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("purple");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(30);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 14) {
    if (idade >= 16) {
      return "As vantagens de ser invisível";
    } else {
      if (idade >= 10) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "500 dias com ela";          
        } else{
         return "como perder um homem em 10 dias";
        }
      } else {
        if (gostaDeFantasia) {
          return "matilda";
        } else {
          return "divertidamente";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "castelo animado";
    } else {
      return "ponyo";
    }
  }
}
