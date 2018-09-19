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

function loadContacts(){
    dialog.showOpenDialog(
        {
            title:"Charger vos contacts",
            filters: [{ name:'JSON File', extensions: ['json'] }],
            properties: ["openfile"],
        },
        function(filePaths, bookmarks){
            fs.readFile(filePaths[0], function (err, data) {
                if (err) {
                    return console.error(err);
                }
                let contacts = JSON.parse(data.toString());
                let table = $('#table_contacts').DataTable();

                contacts.forEach(function(contact, index){
                    if(contact.length === 4) {
                        table.row.add([contact[0], contact[1], contact[2], contact[3]]);
                    }
                    else{
                        console.log("Erreur d'insertion d'un contact, mauvais format. Index contact : " + index);
                    }
                });

                table.draw();
            });
        },

    );
}
function saveContacts(){
    dialog.showSaveDialog(
      {
        title:"Sauvegarder vos contacts",
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