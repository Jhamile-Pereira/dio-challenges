let nome = prompt("Nome:")
let idade = prompt("Idade:")
let tipo = prompt("Classe:\nDigite 1 para Mago\nDigite 2 para Guerreiro\nDigite 3 para Monge\nDigite 4 para NInja")
let ataque = 0;
let classe = "";
let ok = true;

let texto1 = document.getElementById("texto1");
let tipoHtml = document.getElementById("tipo");
let texto2 = document.getElementById("texto2");
let ataqueHtml = document.getElementById("ataque");

class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(tipo){
        if (tipo == 1){
            classe = "Mago";
            ataque = "Magia";
        } 
        
        else if (tipo == 2){
            classe = "Guerreiro";
            ataque = "Espada";
        } 
        
        else if (tipo == 3){
            classe = "Monge";
            ataque = "Artes Marciais";
        } 
        
        else if (tipo == 4){
            classe = "Ninja";
            ataque = "Shuriken";
        } 
        
        else {
            texto1.innerHTML = "Entrada inválida.";
            ok = false
        }
    }

    escreverHtml(ok){
        if (ok == true){
            texto1.innerHTML = "O ";
            tipoHtml.innerHTML = classe;
            texto2.innerHTML = " atacou usando ";
            ataqueHtml.innerHTML = ataque;
        }
    }
}

let heroi1 = new heroi(nome, idade, tipo);
heroi1.atacar(tipo);
heroi1.escreverHtml(ok);
