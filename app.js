let dogScore = 0;
        let catScore = 0;
        let round = 0;

        const dog = document.getElementById('dog');
        const cat = document.getElementById('cat');
        const dogResult = document.getElementById('dogResult');
        const catResult = document.getElementById('catResult');
        const dogVoteBtn = document.getElementById('dogVote');
        const catVoteBtn = document.getElementById('catVote');

        dog.addEventListener("click", () => vote('dog'));
        cat.addEventListener("click", () => vote('cat'));

        async function getNewDog() {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const jsonData = await response.json();
            const url = jsonData.message;
            dog.src = url;
        }

        async function getNewCat() {
            const response = await fetch("https://api.thecatapi.com/v1/images/search", {
                headers: {
                    'x-api-key': 'live_j4U9P1tus6pCJkgLvEvldbtR584RY9guwoBaWsISPBiaJnsuHHCzQaWaWGeRCW7W'
                }
            });
            const jsonData = await response.json();
            const url = jsonData[0].url;
            cat.src = url;
        }

        function vote(animal) {
            if (animal === 'dog') {
                dogScore++;
            } else if (animal === 'cat') {
                catScore++;
            }

            round++;
            if (round === 5) {
                showResult();
            } else {
                getNewDog();
                getNewCat();
            }
        }

        function showResult() {
            let dogResultText, catResultText;
            if (dogScore > catScore) {
                dogResultText = "Dog Wins!";
                catResultText = "Dog Wins!";
            } else if (catScore > dogScore) {
                dogResultText = "Cat Wins!";
                catResultText = "Cat Wins!";
            } else {
                dogResultText = "It's a Tie!";
                catResultText = "It's a Tie!";
            }

            dogResult.innerText = dogResultText;
            catResult.innerText = catResultText;

            if (confirm("Game Over!\nDog: " + dogScore + "\nCat: " + catScore + "\nPlay again?")) {
                resetGame();
            }
        }

        function resetGame() {
            dogScore = 0;
            catScore = 0;
            round = 0;
            dogResult.innerText = '';
            catResult.innerText = '';
            getNewDog();
            getNewCat();
        }

        // Initial calls
        getNewDog();
        getNewCat();