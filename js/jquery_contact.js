var nodeConsole = require('console');
//var myConsole = new nodeConsole.Console(process.stdout, process.stderr);


$(document).ready(function() {

    var table = $('#table_contacts').DataTable({
        scrollY: 200,
        ordering: true,
        select: true,
        searching:true,
        paging:false,
    });

    $('.dataTables_filter').addClass('pull-left');


        let body = $('body');
        //Listener sur les boutons supprimer
        body.find('.supprimer').on('click', null, function (event) {
            event.preventDefault();
            table.rows('.selected').remove();
            table.draw();
        });


    table.draw();

    /* ******************* AJOUT D'UN NOUVEAU CONTACT ***********************/
    $('.btn_add').on('click', null, function(event){
        event.preventDefault();
        let form = $('#form_add');
        form.toggle();
        form.find("input[name='prenom']").focus();
    });

    $('#form_add').on('submit', null, function(event){
        event.preventDefault();
        $(this).hide();

        let prenom = $( "input[name='prenom']" ).val();
        let nom = $( "input[name='nom']" ).val();
        let adresse = $( "textarea[name='adresse']" ).val();
        let tel = $( "input[name='tel']" ).val();

        table.row.add([
            prenom, nom, tel, adresse
        ]);

        table.draw();

        // --- reset du formulaire
        $(':input','#form_add')
            .not(':submit')
            .val('');
    })
    /************************************************************************/
});