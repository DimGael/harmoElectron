/*
    Module javascript qui va servir à implémenter une liste de contacts
 */

//Va contenir tous les contacts
var listeContact = []; //new array

// Un contact sera de la forme : ["Prénom", "Nom", "Telephone", "Adresse"]
//Contacts fictifs
listeContact.push(["Gael", "DIM", "0687988327", "15 rue de coqui"]);
listeContact.push(["Jean", "DIM", "0687988327", "15 rue de coqui"]);
listeContact.push(["Michel", "DIM", "0687988327", "15 rue de coqui"]);
listeContact.push(["Luna", "DIM", "0687988327", "15 rue de coqui"]);

function ajouterContact(prenom, nom, tel, adresse){
    listeContact.push([prenom, nom, tel, adresse])
}

function supprimerContact(index){
    listeContact.splice(index-1, 1);
}

function afficherContacte(){

}


$(document).ready(function() {
    //JQuery code
});


