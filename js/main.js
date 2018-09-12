// ------------------------- AFFICHAGE DES CONTACTS ---------------------------------
$(document).ready(function() {
    afficherContacts();

    function setListeners() {
        //Listener sur les boutons supprimer
        $('body').find('.supprimer').each(function () {
            $(this).on('click', null, function (event) {
                event.preventDefault();
                contact_suppr_index = $(this).attr('id');
                supprimerContact(contact_suppr_index);
                afficherContacts();
                setListeners();
            })
        })

        // ---- Affichage des détails du contact
        $('body').find('.afficher').each(function () {
            $(this).on('click', null, function (event) {
                event.preventDefault();
                alert("affichage");
                setListeners();
            })
        })
    }

    setListeners();
});