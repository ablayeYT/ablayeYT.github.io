let playerNumber = null;

const request = new XMLHttpRequest();

request.onreadystatechange = () => {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.responseText);
    playerNumber = response.player_count;
  }
};

request.open("GET", "https://mon.serveur.mc/json/infos/players");
request.send();

// comme y'a pas de site on va mettre à 3 lol
playerNumber = 3;


document.write("xD <br />");
document.write("CRAFTIUM <br />");
document.write("EN DEV <br />");
document.write("JOUEURS : " + playerNumber +"<br/>");

vrai = true;

if (vrai) {
  console.log ("CRAFTIUM");

  console.log ("EN DEV");

  console.log ("PLAYER : 3");
}
