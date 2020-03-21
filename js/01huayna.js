$(document).ready(function () {

	if (window.location.href.indexOf('index') > -1) {


		$('.bxslider').bxSlider({
			mode: 'fade',
			slideWidth: 1200,
			captions: true,
			slideWidth: 1200,
			speed: 800,
			auto: true,
			infiniteLoop: true,
			reStart: true, //reiniciar slide cuando termine el ciclo
			autoHover: true, //pausar el slide poniendo mouse sobre el
			pause: 2000, //tiempo que permanece una imagen 
			pager: false,
		});

	}








	//Reloj Cuenta Regresiva
	if (window.location.href.indexOf('index') > -1) {

		var end = new Date('09/20/2020 8:00 AM');

		var _second = 1000;
		var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;
		var timer;

		function showRemaining() {
			var now = new Date();
			var distance = end - now;
			if (distance < 0) {

				clearInterval(timer);
				document.getElementById('countdown').innerHTML = 'EXPIRED!';

				return;
			}
			var days = Math.floor(distance / _day);
			var hours = Math.floor((distance % _day) / _hour);
			var minutes = Math.floor((distance % _hour) / _minute);
			var seconds = Math.floor((distance % _minute) / _second);

			document.getElementById('countdown').innerHTML = days + " días ";
			document.getElementById('countdown').innerHTML += hours + " : ";
			document.getElementById('countdown').innerHTML += minutes + " : ";
			document.getElementById('countdown').innerHTML += seconds;
		}

		timer = setInterval(showRemaining, 1000);
	}







	//Ecuaciones para la tabla de puntuaciones (intertribus.html)
	if (window.location.href.indexOf('intertribus') > -1) {

		var intelectualh = parseInt(document.getElementById("deporte_gralH").innerHTML);
		var nochefinalh = parseInt(document.getElementById("nochefinalh").innerHTML);
		var intelectualch = parseInt(document.getElementById("deporte_gralCh").innerHTML);
		var nochefinalch = parseInt(document.getElementById("nochefinalch").innerHTML);



		//Valores hombres H
		var dephm1 = parseInt(document.getElementById("dep_Masc_H1").innerHTML);
		var dephm2 = parseInt(document.getElementById("dep_Masc_H2").innerHTML);
		var dephm3 = parseInt(document.getElementById("dep_Masc_H3").innerHTML);
		var dephm4 = parseInt(document.getElementById("dep_Masc_H4").innerHTML);
		var dephm5 = parseInt(document.getElementById("dep_Masc_H5").innerHTML);
		var dephm6 = parseInt(document.getElementById("dep_Masc_H6").innerHTML);
		var dephm7 = parseInt(document.getElementById("dep_Masc_H7").innerHTML);
		var dephm8 = parseInt(document.getElementById("dep_Masc_H8").innerHTML);
		var dephm9 = parseInt(document.getElementById("dep_Masc_H9").innerHTML);

		var subtotalhm = dephm1 + dephm2 + dephm3 + dephm4 + dephm5 + dephm6 + dephm7 + dephm8 + dephm9 + intelectualh + nochefinalh;

		var subtotalhmm = document.getElementById('subtotal_Masc_H');
		subtotalhmm.innerHTML = subtotalhm;


		//Valores mujeres H
		var dephf1 = parseInt(document.getElementById("dep_Fem_H1").innerHTML);
		var dephf2 = parseInt(document.getElementById("dep_Fem_H2").innerHTML);
		var dephf3 = parseInt(document.getElementById("dep_Fem_H3").innerHTML);
		var dephf4 = parseInt(document.getElementById("dep_Fem_H4").innerHTML);
		var dephf5 = parseInt(document.getElementById("dep_Fem_H5").innerHTML);
		var dephf6 = parseInt(document.getElementById("dep_Fem_H6").innerHTML);
		var dephf7 = parseInt(document.getElementById("dep_Fem_H7").innerHTML);
		var dephf8 = parseInt(document.getElementById("dep_Fem_H8").innerHTML);
		var dephf9 = parseInt(document.getElementById("dep_Fem_H9").innerHTML);

		var subtotalhf = dephf1 + dephf2 + dephf3 + dephf4 + dephf5 + dephf6 + dephf7 + dephf8 + dephf9 + intelectualh + nochefinalh;

		var subtotalhff = document.getElementById('subtotal_Fem_H');
		subtotalhff.innerHTML = subtotalhf;


		//Valores hombres CH
		var depchm1 = parseInt(document.getElementById("dep_Masc_Ch1").innerHTML);
		var depchm2 = parseInt(document.getElementById("dep_Masc_Ch2").innerHTML);
		var depchm3 = parseInt(document.getElementById("dep_Masc_Ch3").innerHTML);
		var depchm4 = parseInt(document.getElementById("dep_Masc_Ch4").innerHTML);
		var depchm5 = parseInt(document.getElementById("dep_Masc_Ch5").innerHTML);
		var depchm6 = parseInt(document.getElementById("dep_Masc_Ch6").innerHTML);
		var depchm7 = parseInt(document.getElementById("dep_Masc_Ch7").innerHTML);
		var depchm8 = parseInt(document.getElementById("dep_Masc_Ch8").innerHTML);
		var depchm9 = parseInt(document.getElementById("dep_Masc_Ch9").innerHTML);

		var subtotalchm = depchm1 + depchm2 + depchm3 + depchm4 + depchm5 + depchm6 + depchm7 + depchm8 + depchm9 + intelectualch + nochefinalch;

		var subtotalchmm = document.getElementById('subtotal_Masc_Ch');
		subtotalchmm.innerHTML = subtotalchm;

		//valores mujeres Ch
		var depchf1 = parseInt(document.getElementById("dep_Fem_Ch1").innerHTML);
		var depchf2 = parseInt(document.getElementById("dep_Fem_Ch2").innerHTML);
		var depchf3 = parseInt(document.getElementById("dep_Fem_Ch3").innerHTML);
		var depchf4 = parseInt(document.getElementById("dep_Fem_Ch4").innerHTML);
		var depchf5 = parseInt(document.getElementById("dep_Fem_Ch5").innerHTML);
		var depchf6 = parseInt(document.getElementById("dep_Fem_Ch6").innerHTML);
		var depchf7 = parseInt(document.getElementById("dep_Fem_Ch7").innerHTML);
		var depchf8 = parseInt(document.getElementById("dep_Fem_Ch8").innerHTML);
		var depchf9 = parseInt(document.getElementById("dep_Fem_Ch9").innerHTML);

		var subtotalchf = depchf1 + depchf2 + depchf3 + depchf4 + depchf5 + depchf6 + depchf7 + depchf8 + depchf9 + intelectualch + nochefinalch;

		var subtotalchff = document.getElementById('subtotal_Fem_Ch');
		subtotalchff.innerHTML = subtotalchf;



		//Totales (suma de los dos subtotales)
		var stotalHm = parseInt(document.getElementById("subtotal_Masc_H").innerHTML);
		var stotalHf = parseInt(document.getElementById("subtotal_Fem_H").innerHTML);
		var totalHH = document.getElementById('total_puntos_H');
		totalHH.innerHTML = stotalHm + stotalHf;

		var stotalChm = parseInt(document.getElementById("subtotal_Masc_Ch").innerHTML);
		var stotalChf = parseInt(document.getElementById("subtotal_Fem_Ch").innerHTML);
		var totalCCH = document.getElementById('total_puntos_Ch');
		totalCCH.innerHTML = stotalChm + stotalChf;
	};






	if (window.location.href.indexOf('fotos') > -1) {

		$("#galeria2018").hide();
		$("#galeria2019").hide();

		$("#mostrar2019").click(function () {
			$("#galeria2019").toggle("slow");
		});

		$("#mostrar2018").click(function () {
			$("#galeria2018").toggle("slow");
		});



	}

	if (window.location.href.indexOf('videos') > -1) {


	}

	if (window.location.href.indexOf('indios') > -1) {

		$("#indios_primero").hide();
		$("#indios_segundo").hide();
		$("#indios_tercero").hide();
		$("#indios_cuarto").hide();

		$("#mostrar_primero").click(function () {
			$("#indios_primero").toggle("slow");
		});

		$("#mostrar_segundo").click(function () {
			$("#indios_segundo").toggle("slow");
		});
		$("#mostrar_tercero").click(function () {
			$("#indios_tercero").toggle("slow");
		});
		$("#mostrar_cuarto").click(function () {
			$("#indios_cuarto").toggle("slow");
		});
	}

	//CATALOGO
	if (window.location.href.indexOf('merchandising') > -1) {

		var clase_producto = $('.productos')
		$(".info_producto").hide();

		for (let i = 1; i <= clase_producto.length; i++) {

			$("#producto" + i).hover(function () {
				$("#info_producto" + i).show();
			});

			$("#producto" + i).mouseleave(function () {
				$("#info_producto" + i).hide();
			});
		}
	}




});