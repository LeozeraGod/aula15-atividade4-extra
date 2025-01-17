//4- O jogo da memória é um clássico jogo formado por peças que apresentam uma figura em um dos lados. 
//Cada figura se repete em duas peças diferentes. Para começar o jogo, as peças são postas com as figuras voltadas para baixo, 
//para que não possam ser vistas. Cada participante deve, na sua vez, virar duas peças, caso as figuras sejam iguais, 
//o participante deve recolher consigo esse par e jogar novamente. Se forem peças diferentes, estas devem ser viradas novamente, 
//e sendo passada a vez ao participante seguinte. Ganha o jogo quem tiver mais pares no final do jogo.
//Nesse exercício, será uma versão simplificada do jogo, onde o computador deve descobrir os resultados das combinações. 
//Dado o trecho de código para geração de um jogo da memória com 8 palavras, as quais serão armazenadas em um vetor de 
//16 posições dispostas aleatoriamente, crie um código para resolver e imprimir o resultado das posições com as palavras iguais, 
//por exemplo: vetor[4] é igual ao vetor[6]; vetor [2] é igual ao vetor [3].


// Função para embaralhar as palavras
function embaralhar(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Palavras do jogo
const palavras = ["gato", "cachorro", "pássaro", "peixe", "leão", "tigre", "coelho", "urso"];

// Criar o tabuleiro com pares de palavras
const tabuleiro: string[] = embaralhar([...palavras, ...palavras]);

// Função para encontrar e exibir pares iguais
function encontrarPares(tabuleiro: string[]): void {
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = i + 1; j < tabuleiro.length; j++) {
      if (tabuleiro[i] === tabuleiro[j]) {
        console.log(`Par encontrado: posição ${i} e posição ${j} (${tabuleiro[i]})`);
      }
    }
  }
}

// Mostrar o tabuleiro embaralhado
console.log("Tabuleiro embaralhado:", tabuleiro);

// Encontrar e exibir os pares
encontrarPares(tabuleiro);
