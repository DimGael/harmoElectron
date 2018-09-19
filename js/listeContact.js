/* *************** POUR UTILISER LA CONSOLE
var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
myConsole.log('It works !');
************************************************/
/**
    Module javascript qui va servir à implémenter une liste de contacts
 */

const dialog = require('electron').remote.dialog;
const fs = require("file-system");


//Va contenir tous les contacts
var listeContact = []; //new array

// Un contact sera de la forme : ["Prénom", "Nom", "Telephone", "Adresse"]
//Contacts fictifs
//isteContact.push(["Gael", "DIM", "0687988327", "15 rue de coqui"]);
//listeContact.push(["Jean", "Moulin", "", ""]);



function getJsonContacts(){
    let table = $('#table_contacts').DataTable();
    return JSON.stringify(table.rows().data().toArray());
}

function load(){
    dialog.showOpenDialog(
        {
            title:"Ouvrir un fichier :o",
            filters: [{ name:'JSON File', extensions: ['json'] }],
            properties: ["openfile"],
        },
        function(filePaths, bookmarks){
            console.log(filePaths);
            console.log(bookmarks);
            fs.readFile(filePaths[0], function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log("Asynchronous read: " + data.toString());
            });
        },

    );
}
function save(){
    dialog.showSaveDialog(
      {
        title:"save",
        defaultPath: '~/save.json',
        filters: [{ name:'JSON File', extensions: ['json'], }],
      },
      function(fileName, bookmarks){
        fs.writeFile(fileName, getJsonContacts(), function(data, err){
            if(err){
              console.log(err);
            }
          })
        },
      )
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


    JSON.parse(json_object).forEach(function(contact){
        table.row.add([
            contact[0], contact[1], contact[2], contact[3]
        ]);

        table.draw();
    });
}

$(document).ready(function() {

});
