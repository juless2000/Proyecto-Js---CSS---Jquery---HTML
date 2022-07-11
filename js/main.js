$(document).ready(function(){

	// SLIDER
  // Si en caso exista la pagina index, cargue el slider
  if (window.location.href.indexOf('index') > -1) {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive: true,
      // Quitar paginador
      // pager: false
    });
  }
	
// Que solo se ejecute en la pagina index 
if (window.location.href.indexOf('index') > -1) {
  	// Post -> Listados
  	var posts = [
  		{
  			title: 'Prueba de titulo 1',
  			// Formateamos la fecha con la libreria MomentJs
  			date: 'Publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
  			content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  		},
		{
  			title: 'Prueba de titulo 2',
  			date: 'Publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
  			content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  		},
  		{
  			title: 'Prueba de titulo 3',
  			date: 'Publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
  			content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  		},
  		{
  			title: 'Prueba de titulo 4',
  			date: 'Publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
  			content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  		},
  		{
  			title: 'Prueba de titulo 5',
  			date: 'Publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
  			content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  		},
  	];

  	console.log(posts)

  	// Recorre la coleccion de objetos posts
  	posts.forEach((item, index) =>{
  		var post = `
  			<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>

					<a href="#" class="button-more">Leer más</a>

			</article>
  		`;

  		// console.log(post)

  		$('#posts').append(post);
  	});
};
    // Selector de temas 

    // Capturamos la hoja de estilos con ID theme
    var theme = $('#theme')

    // Al dar click a verde...
    $('#to-green').click(function(){
      // attr -> cambia el atributo del href
      theme.attr("href", "css/green.css");
    })

    $('#to-red').click(function(){
      // attr -> cambia el atributo del href
      theme.attr("href", "css/red.css");
    })

    $('#to-blue').click(function(){
      // attr -> cambia el atributo del href
      theme.attr("href", "css/blue.css");
    })

    // Scroll hacia arriba
    $('.subir').click(function(e){
      // Para que no haga ninguna funcionalidad la etiqueta
      e.preventDefault();
      //  Obtenemos el html y body
      $('html, body').animate({
        // Subir hacia lo más alto de la pagina
        scrollTop: 0
      }, 1000);

      return false;
    });

    // Login falso

    // Capturamos el evento submit del formulario 
    $('#login form').submit(function(){
      // Capturamos el valor del input name
      var form_name = $('#form_name').val();
      // Guardamos la información en el LocalStorage
      localStorage.setItem("form_name", form_name);

    });

    // Recoger el valor del localStorage
    var form_name = localStorage.getItem("form_name");

    // Si el form_name es diferente a null y undefined...
    if (form_name != null && form_name != "undefined") {
      var about_parrafo =  $("#about p");
       // Seleccionamos el parrafo del div about
       // para mostrar la información del LocalStorage
       about_parrafo.html("<br><strong>Bienveni@, " + form_name + "</strong>");
       // Agregamos un link para cerrar sesión
       about_parrafo.append("<br><a href= '#' id= 'logout'> Cerrar sesión </a>");
       // Ocultamos el formulario
       $('#login form').hide();

       // Al dar click en el link...
       $('#logout').click(function(){
        // Limpiamos la memoria del LocalStorage
        localStorage.clear(); 
        // Recargamos la pantalla
        location.reload();
       })
    }

    // Acordeón

    if (window.location.href.indexOf('about') > -1) {
      $('#acordeon').accordion(); 
    }

    // Reloj

    if (window.location.href.indexOf('reloj') > -1) {
      // setIterval, nos permite realizar una instruccion cada
      // cierto tiempo que le indiques
      setInterval(function(){
        // Formateamos el reloj  
        var reloj = moment().format('hh:mm:ss');
        // Capturamos el div reloj, para incrustarlo en el html
        // con la variable reloj
        $('#reloj').html(reloj);
      }, 1000);
    }

    // Validación del formulario

    if (window.location.href.indexOf('contact') > -1) {

      // Agregar un calendario al input de tipo date
      $("form input[name='date']").datepicker({
        // Dar formato a la fecha 
        dateFormat: 'dd-mm-yy'
      });

      // Validate -> Inicializar el plugin de validacion
      // El plugin es de pago, así que unicamente se mostrará en ingles
      $.validate({
        //lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
      });
    }
    

});