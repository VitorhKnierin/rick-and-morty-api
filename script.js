let currentPageUrl = 'https://rickandmortyapi.com/api/character';

window.onload = async () => {
    try {
        const responseJson = await loadCharacters(currentPageUrl);

        const nextButton = document.getElementById("next-button");
        const backButton = document.getElementById("back-button");

        

        backButton.style.visibility = responseJson.previous ? "visible" : "hidden";

        nextButton.addEventListener('click', loadNextPage);
        backButton.addEventListener('click', loadPreviousPage);
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar cards');
    }
};

async function loadCharacters(url) {
    const mainContent = document.getElementById('maincontent');
    mainContent.innerHTML = '';

    try {
        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach((character) => {
            const card = document.createElement("div");
            card.style.backgroundImage = `url('${character.image}')`;
            card.className = "cards";

            const characterNameBG = document.createElement("div");
            characterNameBG.className = "character-name-bg";

            const characterName = document.createElement("span");
            characterName.className = "character-name";
            characterName.innerText = `${character.name}`;

            characterNameBG.appendChild(characterName);
            card.appendChild(characterNameBG);

            card.onclick = () => {
                const modal = document.getElementById('modal');
                modal.style.visibility = 'visible';

                const modalcontent = document.getElementById("modalcontent");
                modalcontent.innerHTML = '';

                const characterImage = document.createElement("div");
                characterImage.style.backgroundImage = `url('${character.image}')`;
                characterImage.className = "character-image";

                const name = document.createElement("span");
                name.className = "character-details";
                name.innerText = `Nome: ${character.name}`;

                const characterStatus = document.createElement("span");
                characterStatus.className = "character-details";
                characterStatus.innerText = `Status: ${convertStatus(character.status)}`;

                const characterSpecies = document.createElement("span");
                characterSpecies.className = "character-details";
                characterSpecies.innerText = `Especie: ${convertSpecies(character.species)}`;

                
                const characterGender = document.createElement("span");
                characterGender.className = "character-details";
                characterGender.innerText = `Genero: ${convertGender(character.gender)}`;

                const origin  = document.createElement("span");
                origin.className = "character-details";
                origin.innerText=`origem :  ${character.origin.name}`;

                modalcontent.appendChild(characterImage);
                modalcontent.appendChild(name);
                modalcontent.appendChild(characterStatus);
                modalcontent.appendChild(characterSpecies);
                modalcontent.appendChild(characterGender);
                modalcontent.appendChild(origin);

            };

            mainContent.appendChild(card);
        });

        const nextButton = document.getElementById("next-button");
        const backButton = document.getElementById("back-button");
        nextButton.disabled = !responseJson.info.next;
        backButton.disabled = !responseJson.info.prev;

        backButton.style.visibility= responseJson.info.prev? "visible" :  "hidden";

        currentPageUrl = url;
        return responseJson;
    } catch (error) {
        alert('Erro ao carregar os personagens');
        console.log(error);
    }
}

async function loadNextPage() {
    try {
        const response = await fetch(currentPageUrl);
        const responseJson = await response.json();
        await loadCharacters(responseJson.info.next);
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar a página');
    }
}

async function loadPreviousPage() {
    try {
        const response = await fetch(currentPageUrl);
        const responseJson = await response.json();
        await loadCharacters(responseJson.info.prev);
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar a página');
    }
}

function hideModal() {
    const modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
}

function convertStatus(status){
    const characterStatus = {
        alive: "Vivo",
        dead: "Morto",
        unknown: "Desconhecido"
    };
    return characterStatus[status.toLowerCase()] || status;
}


function convertSpecies(species){
    const characterSpecies = {
        human: "Humano",
        alien: "Alienigena",
        cronenberg: "Cronenbergiano",
        humanoid: "Humanoide",
        animal: "Animal",
        robot: "Robo",
        "mythological creature": "Criatura Mitológica",
        poopybutthole: "Bunda cagada",
        unknown: "Desconhecida",
        disease: "Doença"

    };
    return characterSpecies[species.toLowerCase()] || species;
 }
 function convertGender(gender){
    const characterGender = {
        male: "Macho",
        female:"Femea",
        unknown:"Desconhecido"
    };
    return characterGender[gender.toLowerCase()] || gender;
   
 }


