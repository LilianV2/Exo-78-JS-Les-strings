let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let texte2 = monTexte.indexOf('i');
document.getElementById("position").innerHTML = texte2;

let nouvelleChaine = monTexte.toLowerCase();
document.getElementById('chaineMaj').innerHTML = nouvelleChaine;

for (let i = 0; i < monTexte.indexOf('i'); i++) {
    alert("la lettre a à été trouvée");
}






