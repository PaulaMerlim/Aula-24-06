// Crie um objeto que receba ao menos três propriedades sobre você.
let pessoa = {
nome: "Paula"
}; 

pessoa.Estado = "Minas Gerais";
pessoa.idade = "45 anos";
console.log (pessoa)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

let perfil= {
    nome: "Paula"
};   

perfil.Estado = "Minas Gerais";
perfil.idade = "45 anos";
perfil.profissão = "Pedagoga";
console.log (perfil)

// Remova uma propriedade desse objeto.

let pessoal = {
    nome: "Paula",
    idade: 45,
    religião: "espírita",
    
};

delete pessoal.religião;
console.log (pessoal)

//Mostre no console todas as propriedades desse objeto.

let informações= {
    nome: "Paula",
    idade: 45,
    profissão: "Pedagoga",
};
console.log (informações.nome)
console.log (informações.idade)
console.log (informações.profissão)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = ["Paula", "45", " 31 99140-4245","pedagoga", "Fazer visitas culturais","amigos"]
    console.log (cadastro)[0]
    console.log (cadastro)[1]
    console.log (cadastro)[2]
    console.log (cadastro)[3]
    console.log (cadastro)[4]
    
let amigos = ["Marido","irmã","filhas","mãe","Sté"];
amigos.unshift ("Sté");
console.log (amigos)









