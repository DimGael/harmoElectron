//document.getElementById('test').innerHTML = "Some text to enter";

// ------------------------- AFFICHAGE DES CONTACTS ---------------------------------

let firstContact = listeContact.get(0);
let li = document.createElement("li");
li.append(firstContact[0]);

document.getElementById('listeContact').appendChild(li);