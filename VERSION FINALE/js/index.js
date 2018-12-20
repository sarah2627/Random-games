/////////////////////////////////////////////
// AJOUTER NOM A PARTIR D'UN FORMULAIRE /////
/////////////////////////////////////////////

const name = document.querySelector('#name');
const inputName = document.querySelector('#inputName');
const name2 = document.querySelector('#name2');
const inputName2 = document.querySelector('#inputName2');

const changeValue =
	(value, element) => element.innerHTML = value || 'Default';

	inputName.addEventListener(
    'keyup',
    evt => changeValue(evt.target.value, name)
);

const changeValue2 =
    (value, element) => element.innerHTML = value || 'Default';

	inputName2.addEventListener(
    'keyup',
    evt => changeValue(evt.target.value, name2)
);


const button = document.querySelector("#submit");
button.addEventListener("click", ajoutli, false);

function ajoutli(ul) {
    // récupération de la liste
    var ul = document.querySelector('#ul'); 
    // longueur de la liste (nombre de joueurs)
    var length = ul.getElementsByTagName("li").length;
 
    // on cré un nouveau noeud item de liste
    var li = document.createElement("li"); 
    li.className = "bold";
    // on cré un noeud texte
    var text = document.createTextNode("Joueur " + (length + 1) + " : "); 

    // on attache le noeud texte au noeud item de liste
    li.appendChild(text); 
    // on attache le noeud item de liste au noeud liste
    ul.appendChild(li); 

    var input = document.createElement("input");
    input.setAttribute('type','text');
    input.className = "inputName3";
    li.appendChild(input);

    return li;
}

