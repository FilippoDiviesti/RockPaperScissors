window.onload=function (){

    let playerScore = 0;
    let botScore = 0;
    const playerScore_Span = document.getElementById("playerPoint");
    const botScore_Span = document.getElementById("botPoint");

    const point_div = document.querySelector(".point");
    const result_p = document.querySelector(".result > p");

    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissors_div = document.getElementById("s");





    playerChoice();








    function getBotChoice(){
        const choices = ['r', 'p', 's'];
        return choices[Math.floor(Math.random()*3)];
    }

    function playerChoice(){
        rock_div.addEventListener('click', function () {
            game("r");
        })

        paper_div.addEventListener('click', function (){
            game("p");
        })

        scissors_div.addEventListener('click', function (){
            game("s");
        })
    }


    function win(pc, bc){
        playerScore++;
        playerScore_Span.innerHTML = String(playerScore);
        botScore_Span.innerHTML = String(botScore);
        result_p.innerHTML = String(convertToWord(pc) + " beats " + convertToWord(bc) + ". YOU WIN!");
    }

    function lose(pc, bc){
        botScore++;
        playerScore_Span.innerHTML = String(playerScore);
        botScore_Span.innerHTML = String(botScore);
        result_p.innerHTML = String(convertToWord(bc) + " beats " + convertToWord(pc) + ". YOU LOSE!");
    }

    function draw(pc, bc){
        playerScore_Span.innerHTML = String(playerScore);
        botScore_Span.innerHTML = String(botScore);
        result_p.innerHTML = String("Also the bot choosed " + convertToWord(pc) + ". IT'S A DRAW.");
    }

    function convertToWord(letter){
        if (letter == 'r'){
            return "ROCK";
            debug.log('hai cliccato rock');
        }

        if (letter == 'p'){
            return "PAPER";
        }

        if (letter == 's'){
            return "SCISSORS";
        }
    }

    function game(playerChoice){
        const botChoice = getBotChoice();

        switch (playerChoice + botChoice){
            case "rr":
                draw(playerChoice, botChoice);
                break;

            case "rp":
                lose(playerChoice, botChoice);
                break;

            case "rs":
                win(playerChoice, botChoice);
                break;

            case "pr":
                win(playerChoice, botChoice);
                break;

            case "pp":
                draw(playerChoice, botChoice);
                break;

            case "ps":
                lose(playerChoice, botChoice);
                break;

            case "sr":
                lose(playerChoice, botChoice);
                break;

            case "sp":
                win(playerChoice, botChoice);
                break;

            case "ss":
                draw(playerChoice, botChoice);
                break;

        }
    }









}
