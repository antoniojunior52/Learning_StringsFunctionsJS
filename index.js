let umaString = "O rato roeu a roupa do rei de roma.";

//========Exibir caracter=======================
// Mostra o caractere na posição 7 da string (contagem começa de 0)
alert(umaString[7]);  // Exibe: 'r'

// Usando charAt para pegar o caractere na posição 4
alert(umaString.charAt(4));  // Exibe: 'r'

// indexOf encontra a primeira ocorrência do caractere 'i' a partir da posição 7
console.log(umaString.indexOf('i', 7));  // Exibe: 24

// lastIndexOf encontra a última ocorrência do caractere 'i' até a posição 7
console.log(umaString.lastIndexOf('i', 7));  // Exibe: 7

// =============================================


//=====Concatenar/Adicionar palavras===========
console.log(umaString.concat(' oi'));  // Adiciona 'oi' ao final da string, Exibe: "O rato roeu a roupa do rei de roma. oi"
console.log(umaString + " oi")  // Utiliza o operador '+' para concatenar, Exibe: "O rato roeu a roupa do rei de roma. oi"
console.log(`${umaString} oi`)  // Usa template literals para concatenar, Exibe: "O rato roeu a roupa do rei de roma. oi"
//=============================================


//======Encontrar Caracter utilizando expressão regular===========
// match retorna todas as ocorrências do padrão de letras minúsculas de a-z
console.log(umaString.match(/[a-z]/g));  // Exibe: ['o', 'r', 'a', 't', 'o', 'r', 'o', 'e', 'u', 'a', 'r', 'o', 'u', 'p', 'a', 'd', 'o', 'r', 'e', 'i', 'd', 'e', 'r', 'o', 'm', 'a']

// search encontra a posição da primeira ocorrência do caractere 'p'
console.log(umaString.search(/[p]/));  // Exibe: 18
//================================================================


//========Utilizar replace para alterar um elemento da string==========
console.log(umaString.replace('r', 'l'));  // Substitui apenas a primeira ocorrência de 'r' por 'l', Exibe: "O lato roeu a roupa do rei de roma."
console.log(umaString.replace(/r/g, 'l'));  // Substitui todas as ocorrências de 'r' por 'l', Exibe: "O lato loeu a loupa do lei de loma."
//=====================================================================


//========Utilizar o Length para descobrir a quantidade de caracteres existentes na string========
console.log(umaString.length);  // Exibe: 35, que é o comprimento da string original
console.log(umaString.slice(2, 6));  // Exibe: " rat", cortando a string da posição 2 até 6
console.log(umaString.slice(-3));  // Exibe: "oma.", pega os últimos 3 caracteres da string
console.log(umaString.slice(32));  // Exibe: "roma.", começa a cortar a partir da posição 32 até o final
console.log(umaString.length - 3);  // Exibe: 32, que é o índice do terceiro caractere de trás para frente
console.log(umaString.slice(-5, umaString.length - 1));  // Exibe: " rei de rom", corta do penúltimo caractere até o final
console.log(umaString.slice(-5, -1));  // Exibe: " rei de rom", corta do penúltimo caractere até o último, excluindo o final
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));  // Exibe: " rei de rom", usando substring para cortar da posição 30 até 34
//================================================================================================


//==========Utilizando o split no array para separar e mostrar um caracter específico(Valor não incluído)====
console.log(umaString.split('r'));  // Exibe um array separando a string pelo caractere 'r'
console.log(umaString.split(' ', 4));  // Exibe: ["O", "rato", "roeu", "a"], separa por espaços e pega no máximo 4 elementos
//===========================================================================================================


// =============Transformar caracter em maiúsculo=========
console.log(umaString.toUpperCase());  // Exibe: "O RATO ROEU A ROUPA DO REI DE ROMA."
console.log(umaString.toLowerCase());  // Exibe: "o rato roeu a roupa do rei de roma."
// =======================================================
