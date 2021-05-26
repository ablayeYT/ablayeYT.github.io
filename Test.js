let e = document.getElementById("infos");

const getOnlinePlayers = () => {
  fetch("https://ablayeyt.github.io/json/infos/players").then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(value => {
    document.getElementById("infos").innerHTML = "NARTIUM <br />EN DEV <br />JOUEURS : " + value.player_count + "<br/>";
  }).catch(err => {
    document.getElementById("infos").innerHTML = "NARTIUM <br />EN DEV <br />JOUEURS : " + "nombre inconnu" + "<br/>";
    console.log("erreur : " + err);
  });
}

vrai = true;

if (vrai) {
  console.log ("CRAFTIUM");

  console.log ("EN DEV");
}

// setInterval(getOnlinePlayers, 10);
