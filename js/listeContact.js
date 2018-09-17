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

function afficherContacts() {
    $('#table_contacts').find('tbody').empty();
    listeContact.forEach(function (contact, index) {
        let tr = $('<tr>');
        tr.addClass('tr_'+index);

        //Prenom
        $('<td>')
            .append(contact[0])
            .appendTo(tr);

        //Nom
        $('<td>')
            .append(contact[1])
            .appendTo(tr);

        //Telephone
        $('<td>')
            .append(contact[2])
            .appendTo(tr);

        //Adresse
        $('<td>')
            .append(contact[3])
            .appendTo(tr);

        //Bouton supprimer
        let linkSupr =$('<a>')
            .addClass('supprimer')
            .attr('id', ''+(index-1))
            .attr('href', '#');

        $('<img>')
            .attr('src', 'img/trash.png')
            .attr('width', '25')
            .appendTo(linkSupr);

        $('<td>')
            .addClass('link_delete')
            .append(linkSupr)
            .appendTo(tr);

        $('#table_contacts').find('tbody').append(tr);
    });
}


$(document).ready(function() {

});


