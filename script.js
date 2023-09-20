
var jogador1;
var jogador2;
var auxiliar = 1;
var quantidadeJogadas = 0;
var vencedor = "";
var vez = "X";

function solicitarNomes() {
    jogador1 = prompt("Digite o nome do Jogador 1:");
    jogador2 = prompt("Digite o nome do Jogador 2:");

    if (jogador1 && jogador2) {
        alert("Bem-vindos(as), " + jogador1 + " e " + jogador2 + "!");
        vezJogador();
        aoClicar();
    }else{
        alert("Nomes de jogadores não fornecidos. Por favor, recarregue a página para tentar novamente.");
        document.getElementById("vezDoJogador").innerHTML = "Recarregue a página para jogar";
    }
}

function verficarFimDeJogo(){
    quantidadeJogadas++;
    if(verificaCasasIguais(1,2,3)|| verificaCasasIguais(4, 5, 6) || verificaCasasIguais(7, 8, 9) || verificaCasasIguais(1, 4, 7) || verificaCasasIguais(2, 5, 8) || verificaCasasIguais(3, 6, 9) || verificaCasasIguais(1, 5, 9) || verificaCasasIguais(3, 5, 7)){
       if(vencedor=="1"){
            $("#resultado").html("<h1> Parabéns, " + jogador1 + " venceu! </h1>");
            $(".coluna").off("click");
            $(".ultimaColuna").off("click");
       }else{
            $("#resultado").html("<h1> Parabéns, " + jogador2 + " venceu! </h1>");
            $(".coluna").off("click");
            $(".ultimaColuna").off("click");
       }
    }else{
        if(quantidadeJogadas==9){
            $("#resultado").html("<h1> Empate! </h1>");
            $(".coluna").off("click");
            $(".ultimaColuna").off("click");
        }else{
            vezJogador();
        }
    }

}

function verificaCasasIguais(a, b, c){
    var casaA = $("#casa"+a);
    var casaB = $("#casa"+b);
    var casaC = $("#casa"+c);
    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");

    if((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
        if(bgA.indexOf("X.png") >=0){
            vencedor = "1";
        }else{
            vencedor = "2"
        }
        return true;
    }else{
        return false;
    }
}

function vezJogador(){
    if(auxiliar == 1){
        document.getElementById("vezDoJogador").innerHTML = "Sua vez " + jogador2 + "!";
        auxiliar=2;
    }else{
        document.getElementById("vezDoJogador").innerHTML = "Sua vez " + jogador1 + "!";
        auxiliar=1;
    }
}

function reiniciarJogo() {
    $(".coluna, .ultimaColuna").css("background-image", "none");
        
    auxiliar = 1;
    quantidadeJogadas = 0;
    vencedor = "";
    vez = "X";

    $("#resultado").html("");

    $(".coluna, .ultimaColuna").on("click", function() {
        var bg = $(this).css("background-image");
        if (bg == "none" || bg == "") {
            var fig = "url(images/" + vez.toString() + ".png)";
            $(this).css("background-image", fig);
            vez = vez == "X" ? "O" : "X";
            $(this).off("click");
            verficarFimDeJogo();
        }
    });
    
    vezJogador();
}


$(".coluna, .ultimaColuna").click(function(){
    var bg = $(this).css("background-image");
    if(bg == "none" || bg == "")
    {          
        var fig = "url(images/" + vez.toString() + ".png)";
        $(this).css("background-image", fig);
        vez = (vez == "X"? "O":"X"); 
        $(this).off("click");
        verficarFimDeJogo();
    }  
});


$("#reiniciarJogo").click(function(event) {
    event.preventDefault(); 
    reiniciarJogo();
});


