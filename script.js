$(function() {

    $.get(
        'http://localhost/videoclub/api/categories', // URL à requêter en GET
        false, // Données à transmettre (false si aucune donnée à transmettre)
        function(response) {

            console.log(response);

            response.forEach(category => {

                $('#selectCategories').append('<option value="'+category.id+'">'+ category.title +'</option>');

            });



            /**
             * 1. Séléction de l'élément $('#selectCategories')
             * 2. Actions sur l'élément (ici: append) $('#selectCategories').append('option>Catégorie/option>');
             */

            

        }, // Handler : fonction qui va gérer la réponse
        'json' // Type de données à transmettre
    );

    $('#selectCategories').on('change', function(){ 

        $.get(
            'http://localhost/videoclub/api/movies/category/'+$(this).val(),
            false,
            function(response) {
                
                $('#films').html('');

                response.forEach(film => {

                    $('#films').append('<div class="card"><div class="card-body">'+film.id+': '+film.title+'</div></div>');
                    
                });
            },
            'json'
        );

    });



});



/* 
$(function() {

    $.get(
        'http://localhost/videoclub/api/movies/',
        false,
        function (res) {
            $('#films').html('');

            res.forEach(movie => {
                    var card =
                        '<div class="card">' +
                        '<div class="card-body">' +
                        movie.id + ': ' + movie.title +
                        '</div>' +
                        '</div>';

                    $('#films').append(card);
            })
        },
        'json'
    );

    $.get(
        'http://localhost/videoclub/api/categories/',
        false,
        function(res) {


            res.forEach(category => {
                console.log(category);
                $('#selectCategories').append('<option value="'+ category.id +'">'+ category.title +'</option>');
            });
        },
        'json'
    );


    $('#selectCategories').on('change', function() {
        console.log('la categorie a été changée');

        $.get(
            'http://localhost/videoclub/api/movies/category/'+$(this).val(),
            false,
            function(res) {

                $('#films').html('');

                res.forEach(movie => {
                    
                    var card =
                        '<div class="card">' +
                        '<div class="card-body">' +
                        movie.id + ': ' + movie.title +
                        '</div>' +
                        '</div>';

                    $('#films').append(card);
                });
            },
            'json'

        );
    });

















    $('#todos-load-btn').on('click', function () {

        console.log('Le bouton a été cliqué');

        $.get(
            'http://localhost/videoclub/api/categories',
            false,
            function(res) {
                
                res.forEach(r => {
                    console.log(res)
                    var card =
                        '<div class="card">' +
                        '<div class="card-body">' +
                        r.id + ': ' + r.title +
                        '</div>' +
                        '</div>';

                    $('#todolist').append(card);
                });

            },
            'json'
        );

    });

}) */