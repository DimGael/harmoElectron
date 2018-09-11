// ------------------------- AFFICHAGE DES CONTACTS ---------------------------------
$(document).ready(function(){
    afficherContacts();

    //Listener sur les boutons supprimer
    $('body').find('.supprimer').on('click', null, function(){
        alert('Supprimer le contact : ' + $(this).attr('id'))
    })
});