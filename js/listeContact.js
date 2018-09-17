/* *************** POUR UTILISER LA CONSOLE
var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
myConsole.log('It works !');
************************************************/
/**
    Module javascript qui va servir à implémenter une liste de contacts
 */

//Va contenir tous les contacts
var listeContact = []; //new array

// Un contact sera de la forme : ["Prénom", "Nom", "Telephone", "Adresse"]
//Contacts fictifs
//listeContact.push(["Gael", "DIM", "0687988327", "15 rue de coqui"]);
//listeContact.push(["Jean", "Moulin", "", ""]);

function ajouterContact(prenom, nom, tel, adresse){
    listeContact.push([prenom, nom, tel, adresse]);
    var table = $('#table_contacts').DataTable();
    table.row.add([
        prenom, nom, tel, adresse
    ])
}

function supprimerContact(index){
    listeContact.splice(index-1, 1);
}


$(document).ready(function() {

});


