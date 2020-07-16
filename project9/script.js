// Play Game Button
(function() {
    // Play Game Button
    const playGame = document.querySelector(".play-now"),
        mainHead = document.querySelector(".head"),
        playNow = document.querySelector(".play-now"),
        game = document.querySelector(".game");

    // Event Listener
    playGame.addEventListener("click", () => {
        playNow.classList.toggle("hidden");
        mainHead.classList.toggle("hidden");
        game.classList.toggle("hidden");
    });
})();
const option = document.querySelector(".option"),
    roundNum = document.querySelector(".round-num");
let message = document.querySelector(".message"),
    computerScore = document.querySelector(".computer-score"),
    humanScore = document.querySelector(".human-score");
// Event Listener
option.addEventListener("click", function(e) {
    const humanOption = e.target.parentElement.getAttribute("data-class");
    if (humanOption === "r" || humanOption === "s" || humanOption === "p") {
        setTimeout(() => {
            document.querySelector(
                ".human-hand .hand"
            ).style.backgroundImage = `url('./img/n.png'`;
            roundNum.textContent++;
            const computerOption = ["r", "p", "s"][Math.floor(Math.random() * 3)];
            const combinedOption = `${computerOption}${humanOption}`;
            document.querySelector(
                ".computer-hand .hand"
            ).style.backgroundImage = `url('./img/${computerOption}.png')`;
            document.querySelector(
                ".human-hand .hand"
            ).style.backgroundImage = `url('./img/${humanOption}.png')`;
            switch (combinedOption) {
                case "rs":
                case "sp":
                case "pr":
                    computerScore.textContent++;
                    message.textContent = "Oops :( Try Again, Dear";
                    break;
                case "sr":
                case "ps":
                case "rp":
                    humanScore.textContent++;
                    message.textContent = "Woohoo :) A Real Champ";
                    break;
                default:
                    message.textContent = "It's a Draw. Try Again, Please";
            }
        }, 600);
    }
});