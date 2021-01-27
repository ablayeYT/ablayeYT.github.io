document.write('<style>.bd-placeholder-img {font-size: 1.125rem;text-anchor: middle;-webkit-user-select: none;-moz-user-select: none;user-select: none;} @media (min-width: 768px) {.bd-placeholder-img-lg {font-size: 3.5rem;}}</style><main class="form-signin"> <!-- millieu de page tu peut rajouter des label/input stv--><form><h1 class="h3 mb-3 fw-normal">Inscrivez-vous</h1><label for="inputName" class="visually-hidden">Nom : </label><input type="Name" id="inputName" class="form-control" placeholder="Nom" required autofocus><label for="inputName" class="visually-hidden">Prénom : </label><input type="Name" id="inputName" class="form-control" placeholder="Prénom" required autofocus><label for="inputEmail" class="visually-hidden">Adresse email : </label><input type="email" id="inputEmail" class="form-control" placeholder="Adresse email" required autofocus><label for="inputPassword" class="visually-hidden">Mot de passe : </label><input type="password" id="inputPassword" class="form-control" placeholder="Mot de passe" required> <input type="checkbox" value="show-password" id="show-password" onchange="showpass(this)" /><label for="show-password">show password</label><div class="checkbox mb-3"><label><input type="checkbox" value="remember-me"> Se souvenir de moi</label></div><button class="w-100 btn btn-lg btn-primary" type="submit">S\'inscrire</button></form><hr class="featurette-divider"></main>');

const showpass = (box) => {
	if (box.checked) {
		document.getElementById("inputPassword").setAttribute("type", "text");
	} else {
		document.getElementById("inputPassword").setAttribute("type", "password");
	}
}
