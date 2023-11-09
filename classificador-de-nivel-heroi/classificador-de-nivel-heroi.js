let nivel = ""
let texto1 = document.getElementById("texto1")
let texto2 = document.getElementById("texto2")
let nomeHtml = document.getElementById("nome")
let nivelHtml = document.getElementById("nivel")

let nome = prompt("Nome do Herói")
let xp = prompt("Quantidade de XP")

if (xp <= 1000){
    nivel = "de Ferro";
}

else if (xp > 1000 && xp < 2001){
    nivel = "de Bronze";
}

else if (xp > 2000 && xp < 5001){
    nivel = "de Prata";
}

else if (xp > 5000 && xp < 7001){
    nivel = "de Ouro";
}

else if (xp > 7000 && xp < 8001){    
    nivel = "Platina";
}

else if (xp > 8000 && xp < 9001){
    nivel = "Ascendente";
}

else if(xp > 8000 && xp < 9001){ 
    nivel = "Imortal";
}
else{
    nivel = "Radiante";

}


texto1.innerHTML = "O Herói de nome "
nomeHtml.innerHTML = nome
texto2.innerHTML = " está no nível "
nivelHtml.innerHTML = nivel
