var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

// ------------------------- AFFICHAGE DES CONTACTS ---------------------------------
$(document).ready(function() {
    /* ************** FONCTION POUR RESET LES CONTACTS **************************/
    function setListeners() {
        let body = $('body');
        //Listener sur les boutons supprimer
        body.find('.supprimer').on('click', null, function (event) {
            event.preventDefault();
            let contact_suppr_index = $(this).attr('id');
            supprimerContact(contact_suppr_index);
            updateListeContact();
        });

        // ---- Affichage des détails du contact
        body.find('.afficher').on('click', null, function (event) {
            event.preventDefault();

            //Vidage de la page résultats
            $('#result').children('article').remove();

            //Récupération de l'index du contact
            let index = $(this).attr('id').split('_')[1];
            index = index - 1;

            afficherUnNouveauContact(index);
        });
    }

    function updateListeContact() {
        afficherContacts();
        setListeners();
    }
    /**************************************************************************/

    //Index : index du contact commençant par 0
    function afficherUnNouveauContact(index){
        let contact = listeContact[index];

        let article = $('<article>');

        $('<header/>')
            .append('<h1>Contact ' + (index+1) + ' : ' + contact[0] + ' ' + contact[1]+'</h1>')
            .append($('<em/>').text('Numéro de téléphone : ' + contact[2]))
            .appendTo(article);

        $('<p/>')
            .text('Adresse : ' + contact[3])
            .appendTo(article);
        article.appendTo('#result');
    }


    updateListeContact();

    $('#btn_add').on('click', null, function(event){
        event.preventDefault();
        $('#form_add').toggle();
    });

    $('#form_add').on('submit', null, function(event){
        event.preventDefault();
        $(this).hide();

        let prenom = $( "input[name='prenom']" ).val();
        let nom = $( "input[name='nom']" ).val();
        let adresse = $( "textarea[name='adresse']" ).val();
        let tel = $( "input[name='tel']" ).val();

        ajouterContact(prenom,  nom, tel, adresse);

        updateListeContact();

        // --- reset du formulaire
        $(':input','#form_add')
            .not(':submit')
            .val('');
    })
});