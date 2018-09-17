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
    let table = $('#table_contacts').DataTable();
    table.row.add([
        prenom, nom, tel, adresse
    ]);
    table.draw();
}

function supprimerContact(index){
    listeContact.splice(index-1, 1);
}

function getJsonContacts(){
    return JSON.parse(listeContact);
}

function setContactsJson(json_object){

    /*
    let arrayTest = [["test0","test0","",""],
        ["test1","test1","",""],
        ["test2", "test2", "", "adresse de test2"],
        ["test3", "test3", "0555333333", ""],
        ["Michel","Dubois", "0555571728", "26 rue des trottoirs"]];

    let json_object__test = JSON.stringify(arrayTest);
    */


    let table = $('#table_contacts').DataTable();
    table.clear();

    listeContact = [];

    JSON.parse(json_object).forEach(function(contact){
        ajouterContact(contact[0], contact[1], contact[2], contact[3]);
    });
}

$(document).ready(function() {

});


