let playerNumber = 0;

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == XMLHttpRequest.DONE && this.status >= 200 && this.status < 300) {
    var response = JSON.parse(this.responseText);
    playerNumber = response.player_count;
  }
};

request.open("GET", "https://ablayeyt.github.io/json/infos/players");
request.send();

let e = document.querySelector("#script p");

e.innerHTML = "NARTIUM <br />EN DEV <br />JOUEURS : " + playerNumber + "<br/>");

vrai = true;

if (vrai) {
  console.log ("CRAFTIUM");

  console.log ("EN DEV");

  console.log ("PLAYER : " + playerNumber);
  alert(playerNumber);
}
