let playerNumber = 0;

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == XMLHttpRequest.DONE && this.status >= 200 && this.status < 300) {
    var response = JSON.parse(this.responseText);
    playerNumber = response.player_count;
    alert(playerNumber);
  }
};

request.open("GET", "https://ablayeyt.github.io/json/infos/players");
request.send();


document.write("NARTIUM <br />");
document.write("EN DEV <br />");
document.write("JOUEURS : " + playerNumber +"<br/>");

vrai = true;

if (vrai) {
  console.log ("CRAFTIUM");

  console.log ("EN DEV");

  console.log ("PLAYER : 8");
}
