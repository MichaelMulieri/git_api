var cardsDiv = document.querySelector("#cards");
var currentUserName = "";

function getUserName(element){
    console.log(element.value);
    currentUserName = element.value;
}

function makeCoderCard(data){
    var res = `<div id="card">
                    <img src="${data.avatar_url}" alt="${data.name}">
                    <h3>Name: ${data.name}</h3>
                    <p>Location: ${data.location}</p>
                    <p>Repositories: ${data.public_repos}</p>
                </div>`
    return res;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUserName);
    var coderData = await response.json();
    console.log(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData);
}