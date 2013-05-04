

		$(document).on("ready", cargoPagina);
		var color;

		function cargoPagina(){

			$('.primera').on('click', clickBotonColor_1);
			$('.segunda').on('click', clickBotonColor_2);
			$('.tercera').on('click', clickBotonColor_3);
			$('#clean').on('click', Limpiar);
			$('#again').on('click', Empezar);

			//Codigo de jquery

		}

		function clickBotonColor_1(){
			 color = $(this).data('color');
			 $('#caja_1').css('background', color );
			 validarBandera();
			//alert(color);
		}
		function clickBotonColor_2(){
			 color = $(this).data('color');
			 $('#caja_2').css('background', color );
			  validarBandera();
			//alert(color);
		}
		function clickBotonColor_3(){
			 color = $(this).data('color');
			 $('#caja_3').css('background', color );
			  validarBandera();
			//alert(color);
		}
		function Empezar(){
			$('.primera').on('click', clickBotonColor_1);
			$('.segunda').on('click', clickBotonColor_2);
			$('.tercera').on('click', clickBotonColor_3);
			$('.color_boton').slideDown('fast');
			$('#resultado').html("");

		
		}
		function Limpiar(){
			$('#caja_1').css('background', 'white' );
			$('#caja_2').css('background', 'white' );
			$('#caja_3').css('background', 'white' );
		}
		function  validarBandera(){
			var color_1 = $('#caja_1').css('background');
			var color_2 = $('#caja_2').css('background');
			var color_3 = $('#caja_3').css('background');

			if(color_1 =='rgb(255, 255, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
				if(color_2 =='rgb(0, 0, 255) none repeat scroll 0% 0% / auto padding-box border-box'){
					if(color_3 =='rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
							$('#resultado').html("Ganaste");
							$('.primera').off('click', clickBotonColor_1);
							$('.segunda').off('click', clickBotonColor_2);
							$('.tercera').off('click', clickBotonColor_3);
							$('.color_boton').slideUp('fast');
					}
				}
			}
		}


