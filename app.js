const dog = document.getElementById('dog');
const cat = document.getElementById('cat');

dog.addEventListener("click", getNewDog);
cat.addEventListener("click", getNewCat);

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const url = jsonData.message;

    dog.src = url;
    dog.style.cursor = 'pointer';
}

async function getNewCat() {
    cat.style.cursor = 'wait';
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {
            'x-api-key': 'live_j4U9P1tus6pCJkgLvEvldbtR584RY9guwoBaWsISPBiaJnsuHHCzQaWaWGeRCW7W'
        }
    });
    const jsonData = await response.json();
    const url = jsonData[0].url;

    cat.src = url;
    cat.style.cursor = 'pointer';
}

// Initial calls
getNewDog();
getNewCat();
