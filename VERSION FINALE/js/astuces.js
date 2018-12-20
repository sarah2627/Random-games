/////////////////////////////////////////////
// FONCTION POUR LA LISTE DE TOUS LES JEUX //
/////////////////////////////////////////////


function liste_astuces()
	{
	//la ligne \ est un caractère d'échappement
	//la ligne | permet de pouvoir récupérer indépendamment les phrases dans un tableau
	var chaine="<div id=listeastuces> <img src=images/action.gif> <h1> Le jeu d'action </h1> <p> Consigne : Effectuez l'action ci-dessous ! </p> <input class=hover type=button value=Question onclick=genere_nouveaujeu()> </div>| \
	<div id=listeastuces><img src=images/verite.gif> <h1> Le jeu de la vérité </h1> <p>Consigne : Répondez à une vérité ci-dessous !</p> <input class=hover type=button value=Question onclick=genere_nouveaujeu2()> </div>| \
	<div id=listeastuces><img src=images/tupreferes.gif> <h1> Tu préfères </h1> <p>Consigne : Répondez à la question ci dessous !</p> <input class=hover type=button value=Question onclick=genere_nouveaujeu3()> </div>| \
	<div id=listeastuces><img src=images/giphy.gif> <h1> Je n'ai jamais </h1> <p>Consigne : Répondez à la question ci-dessous !</p> <input class=hover type=button value=Question onclick=genere_nouveaujeu4()> </div>| \
	<div id=listeastuces><img src=images/quidevousdeux.gif> <h1> Qui de vous deux ? </h1> <p>Consigne : Répondez à la question en cliquant sur le bouton !</p> <input class=hover type=button value=Question onclick=genere_nouveaujeu5()> </div>| \
	<div id=listeastuces><img src=images/patatechaude.gif> <h1> La patate chaude </h1> <p>Consigne : Faîtes circuler le verre jusqu'à ce que la musique s'arrête ! Si vous possèdez le verre à l'arrêt de la musique, buvez le !</p> <input class=hover type=button value=Générer onclick=genere_nouveaujeu6()> </div> \
	";
	return chaine;
	}

/////////////////////////////////////////////
////// FONCTION POUR CHACUN DES JEUX  ///////
/////////////////////////////////////////////

function liste_jeuaction(){
	var chaine="<div id=action> <p> Fais une éloge de ton voisin de gauche pendant une longue minute ! </p> </div> | \
	<div id=action> <p> Raconte une blague génante qui fera rire tout le monde </p> </div> | \
	<div id=action> <p> Raconte nous ton dernier rêve... </p> </div> | \
	<div id=action> <p> Ferme les yeux jusqu'au tour suivant </p> </div> | \
	<div id=action> <p> On te bande les yeux et tu dois reconnaitre quelqu'un en le touchant </p> </div> | \
	<div id=action> <p> Echange de chaussures avec ton voisin de droite </p> </div> | \
	<div id=action> <p> Fais 10 pompes </p> </div> | \
	<div id=action> <p> Cul sec </p> </div> | \
	<div id=action> <p> Bois 3 gorgées </p> </div> | \
	<div id=action> <p> Bois 2 gorgées </p> </div> | \
	<div id=action> <p> Bois 5 gorgées </p> </div> | \
	<div id=action> <p> Echange ton verre avec ton voisin de gauche </p> </div> \
	";
	return chaine;
}

function liste_jeuverite(){
	var chaine="<div id=action> <p> Dis ce que tu as pensé la première fois que tu as vu ton voisin de gauche ! <br/> </p> </div> | \
	<div id=action> <p> Donne nous la musique que tu as le plus honte d'écouter ! </p> </div> | \
	<div id=action> <p> Si tu pouvais arrêter le temps, que ferais-tu ? </p> </div> | \
	<div id=action> <p> Si tu pouvais emmener 2 choses avec toi sur une île déserte, que serait-ce ? </p> </div> | \
	<div id=action> <p> Si tu pouvais avoir un travail différent pour une journée, lequel serait-ce ? </p> </div> | \
	<div id=action> <p> As-tu déjà menti au jeu Action ou Vérité ? </p> </div> | \
	<div id=action> <p> Dans quelle maison de Poudlard voudrais-tu être ? </p> </div> | \
	<div id=action> <p> Quel est ton style de musique favori ? </p> </div> | \
	<div id=action> <p> Quel est ta musique et ton artiste préférés ? </p> </div> | \
	<div id=action> <p> Si tu pouvais réaliser un de tes rêves, lequel serait-ce ? </p> </div> \
	";
	return chaine;
}

function liste_tupreferes(){
	var chaine="<div id=action> <p> Tu préfères le casque de dj d'Emilie Verger ou les sandales de Novelli ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères le RU de copernic ou le crous pizza ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères être Harry Potter ou Hermione Granger ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères participer aux Hunger Games ou être laché dans Le Labyrinthe ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères avoir une personne qui t'aime jusqu'à la fin de tes jours ou aimer quelqu'un jusqu'à la fin de ta vie ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères avoir un mono sourcil à vie OU ne pas avoir du tout de sourcil à vie ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères être un fantôme OU être vivant mais invisible ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères être un homme OU être une femme ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères être le 24 décembre ou le 25 décembre ? </p> La majorité distribue 10 gorgées</div> | \
	<div id=action> <p> Tu préfères avoir tout le temps faim OU avoir tout le temps soif ? </p> La majorité distribue 10 gorgées</div> \
	";
	return chaine;
}

function liste_jenaijamais(){
	var chaine="<div id=action> <p> Je n'ai jamais signé à la place de mes parents sur un papier de l’établissement scolaire ! </p> Si vous ne l'avez jamais fait buvez 3 gorgées !</div> | \
	<div id=action> <p> Je n'ai jamais pris l'avion </p> Si vous ne l'avez jamais fait buvez 3 gorgées !</div> | \
	<div id=action> <p> Je n'ai jamais sauté en parachute ! </p> Si vous ne l'avez jamais fait buvez 2 gorgées !</div> | \
	<div id=action> <p> Je ne me suis jamais pris un râteau !  </p> Si vous ne l'avez jamais fait buvez 4 gorgées !</div> | \
	<div id=action> <p> Je ne suis jamais resté éveillé plus de 24h d'affilé ! </p> Si vous ne l'avez jamais fait buvez 2 gorgées !</div> | \
	<div id=action> <p> Je ne me suis jamais teint les cheveux de couleur flashy ! </p> Si vous ne l'avez jamais fait buvez 4 gorgées !</div> | \
	<div id=action> <p> Je n'ai jamais été dans un pays d'Asie ! </p> Si vous ne l'avez jamais fait buvez 3 gorgées !</div> | \
	<div id=action> <p> Je n'ai jamais perdu connaissance ! </p> Si vous ne l'avez jamais fait buvez 2 gorgées !</div> | \
	<div id=action> <p> Je ne suis jamais apparu(e) dans une vidéo YouTube ! </p> Si vous ne l'avez jamais fait buvez 5 gorgées !</div> | \
	<div id=action> <p> Je n'ai jamais fait de saut à l'élastique ! </p> Si vous ne l'avez jamais fait buvez 2 gorgées !</div> \
	";
	return chaine;
}

function liste_quidevousdeux(){
	var chaine="<div id=action> <p> Qui de vous deux a déjà vomi en soirée ? </p> Celui qui a déjà vomi mérite un cul sec ! </div> | \
	<div id=action> <p> Qui de vous deux râle le plus ? </p> Celui qui râle le plus boit 3 gorgées !</div> | \
	<div id=action> <p> Qui de vous deux chante le mieux ? </p> Celui qui chante le moins bien distribue 3 gorgées !</div> | \
	<div id=action> <p> Qui de vous fait les meilleures blagues ? </p> Le meilleur d'entre vous distribue 4 gorgées !</div> | \
	<div id=action> <p> Qui de vous deux a le plus pécho ? </p> Celui qui a le moins pécho distribue 5 gorgées </div> \
	";
	return chaine;
}



///////////////////////////////////////////////////
////// FONCTION POUR GENERER ALEATOIREMENT  ///////
///////////////////////////////////////////////////

function genere_nouveaujeu(){
	var tab_jeu = liste_jeuaction().split('|');
	var nb_jeu = tab_jeu.length;
	var nombre_alea = Math.floor(Math.random() * nb_jeu);
	document.querySelector('#calque_action').innerHTML = tab_jeu[nombre_alea];

	//afficher un popup avec le jeu
	document.querySelector('#calque_jeu').style.display = 'none';
	document.querySelector('#jeuaction').style.display = 'block';
}

function genere_nouveaujeu2(){
	var tab_jeu = liste_jeuverite().split('|');
	var nb_jeu = tab_jeu.length;
	var nombre_alea = Math.floor(Math.random() * nb_jeu);
	document.querySelector('#calque_verite').innerHTML = tab_jeu[nombre_alea];

	//afficher un popup avec le jeu
	document.querySelector('#calque_jeu').style.display = 'none';
	document.querySelector('#jeuverite').style.display = 'block';
}

function genere_nouveaujeu3(){
	var tab_jeu = liste_tupreferes().split('|');
	var nb_jeu = tab_jeu.length;
	var nombre_alea = Math.floor(Math.random() * nb_jeu);
	document.querySelector('#calque_tupreferes').innerHTML = tab_jeu[nombre_alea];

	//afficher un popup avec le jeu
	document.querySelector('#calque_jeu').style.display = 'none';
	document.querySelector('#jeutupreferes').style.display = 'block';
}

function genere_nouveaujeu4(){
	var tab_jeu = liste_jenaijamais().split('|');
	var nb_jeu = tab_jeu.length;
	var nombre_alea = Math.floor(Math.random() * nb_jeu);
	document.querySelector('#calque_jenaijamais').innerHTML = tab_jeu[nombre_alea];

	//afficher un popup avec le jeu
	document.querySelector('#calque_jeu').style.display = 'none';
	document.querySelector('#jeujenaijamais').style.display = 'block';
}

function genere_nouveaujeu5(){
	var tab_jeu = liste_quidevousdeux().split('|');
	var nb_jeu = tab_jeu.length;
	var nombre_alea = Math.floor(Math.random() * nb_jeu);
	document.querySelector('#calque_quidevousdeux').innerHTML = tab_jeu[nombre_alea];

	//afficher un popup avec le jeu
	document.querySelector('#calque_jeu').style.display = 'none';
	document.querySelector('#jeuquidevousdeux').style.display = 'block';
}

function genere_nouveaujeu6(){
	//afficher un popup avec le jeu
	document.querySelector('#calque_jeu').style.display = 'none';
	document.querySelector('#jeupatatechaude').style.display = 'block';

}

function genere_astuces(){
	var tab_astuces = liste_astuces().split('|');
	var nb_astuces = tab_astuces.length;
	var nombre_alea = Math.floor(Math.random() * nb_astuces);
	console.log(tab_astuces);
	document.querySelector('#calque_astuce').innerHTML = tab_astuces[nombre_alea];

	//afficher un popup avec le jeu
	document.querySelector('#calque_jeu').style.display = 'block';
}

//<div id=listeastuces><img src=images/dansmavalise.gif> <h1> Dans ma valise... </h1> <p>Consigne : Chacun ajoute une affaire dans la valise en répétant ce que les autres ont déjà mis. Celui qui perd boit 4 gorgées !</p>  <input class=hover type=button value=Question onclick=genere_nouveaujeu7()> </div> | \
//<div id=listeastuces><img src=images/pierrefeuilleciseau.gif> <h1> Pierre feuille ciseaux </h1> <p>Consigne : Faîtes un pierre feuille ciseaux en 3 manches. Celui qui perd boit 5 gorgées ! </p> </div> \


