// ------------------------- AFFICHAGE DES CONTACTS ---------------------------------
$(document).ready(function() {

    function setListeners() {
        //Listener sur les boutons supprimer
        $('body').find('.supprimer').on('click', null, function (event) {
            event.preventDefault();
            contact_suppr_index = $(this).attr('id');
            supprimerContact(contact_suppr_index);
            afficherContacts();
            setListeners();
        });
        // ---- Affichage des détails du contact
        $('body').find('.afficher').on('click', null, function (event) {
            event.preventDefault();
            alert("affichage");
            setListeners();
        });
    }

    function updateListeContact() {
        afficherContacts();
        setListeners();
    }

    updateListeContact();

    $('#btn_add').on('click', null, function(event){
        event.preventDefault();
        $('#form_add').toggle();
    });

    $('#form_add').on('submit', null, function(event){
        event.preventDefault();
        $(this).hide();

        prenom = $( "input[name='prenom']" ).val();
        nom = $( "input[name='nom']" ).val();
        adresse = $( "textarea[name='adresse']" ).val();
        tel = $( "input[name='tel']" ).val();

        ajouterContact(prenom,  nom, tel, adresse);

        updateListeContact();

        // --- reset du formulaire
        $(':input','#form_add')
            .not(':submit')
            .val('');
    })
});