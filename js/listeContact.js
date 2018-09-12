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
listeContact.push(["Gael", "DIM", "0687988327", "15 rue de coqui"]);
listeContact.push(["Jean", "Moulin", "", ""]);

function ajouterContact(prenom, nom, tel, adresse){
    listeContact.push([prenom, nom, tel, adresse])
}

function supprimerContact(index){
    listeContact.splice(index-1, 1);
}

function afficherContacts(){
    $('#listeContact').empty();
    listeContact.forEach(function(value, index){
        let i = index+1;
        let li = $('<li/>')
            .text(i + ' : ' + value[0] + ' ' + value[1]);
        let link_show = $('<a/>')
            .text('Afficher')
            .attr('href', "#")
            .addClass('afficher')
            .attr('id', 'afficher_'+i);
        let link_del = $('<a/>')
            .text('Supprimer')
            .attr('href', "#")
            .addClass('supprimer')
            .attr('id', ''+i);

        link_show.appendTo(li);
        link_del.appendTo(li);
        li.appendTo('#listeContact');
    })
}


$(document).ready(function() {

});


