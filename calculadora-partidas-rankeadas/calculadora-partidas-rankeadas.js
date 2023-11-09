let vitorias = prompt("Quantidade de Vitórias:")
let derrotas = prompt("Quantidade de Derrotas:")

let saldo = calculatorRank(vitorias, derrotas)
let rank = rankear(saldo)

let texto1 = document.getElementById("texto1")
let texto2 = document.getElementById("texto2")
let saldoHtml = document.getElementById("saldo")
let rankHtml = document.getElementById("rank")

/// Condiciona a partir do saldo resultante e retorna o rank do herói
function rankear(saldo){
    var rank = ""
    if (saldo <= 10){
        rank = "Ferro";
    }
    
    else if (saldo > 10 && saldo < 21){
        rank = "Bronze";
    }
    
    else if (saldo > 20 && saldo < 51){
        rank = "Prata";
    }
    
    else if (saldo > 50 && saldo < 81){
        rank = "Ouro";
    }
    
    else if (saldo > 80 && saldo < 91){    
        rank = "Diamante";
    }
    
    else if (saldo > 90 && saldo < 101){    
        rank = "Lendário";
    }

    else if (saldo >= 101){
        rank = "Imortal";
    }
    return rank
}

///Retorna a diferença de vitórias e derrotas
function calculatorRank(vitorias, derrotas){
    let subs = vitorias - derrotas
    return (subs)
}

///Modifica texto HTML para apresentar variáveis
texto1.innerHTML = "O Herói tem saldo de  "
saldoHtml.innerHTML = saldo
texto2.innerHTML = " e está no nível "
rankHtml.innerHTML = rank

/// Mostra saldo e rank no console
console.log(`O Herói tem de saldo de ${saldo} está no rank de ${rank}`)