$(function() {

	$('#toggle').on({
		click: () => {
			$('.sidemenu').toggleClass('active');
		}
	});



	$('.btnAddTarea').on({
		click: function() {
			$('.modalAddTarea').show();
		}
	});
	$('.close').on({
		click: function() {
			$('.modalAddTarea').hide();
		}
	});

	$('#prioridadIn').on({
		change: function() {
			var prioridad = $('#prioridadIn')[0].value;

			switch (prioridad) {
				case "baja":
					$('.modal-header').css({ "background-color": "#28a745" });
					$('.modal-footer').css({ "background-color": "#28a745" });
				break;
				case "media":
					$('.modal-header').css({ "background-color": "#ffc107" });
					$('.modal-footer').css({ "background-color": "#ffc107" });
				break;
				case "alta":
					$('.modal-header').css({ "background-color": "#dc3545" });
					$('.modal-footer').css({ "background-color": "#dc3545" });
				break;
				default:
					$('.modal-header').css({ "background-color": "#4C4646" });
					$('.modal-footer').css({ "background-color": "#4C4646" });
				break;
			}
		}
	});

	$('.btnSaveAdd').on({
		click: function() {

			var obj = {
				'name': $('#inTareaName')[0].value,
				'endDate': $('#dateIn')[0].value,
				'priority': $('#prioridadIn')[0].value,
				'user': $('#userIn')[0].value,
				'hoursEstimated': $('#horaEstimadaIn')[0].value
			}

			console.log(obj);



			// var nombreTarea = $('#inTareaName').value;
			// var fechaFin = $('#dateIn').value;
			// var prioridad = $('#prioridadIn').value;
			// var usuario = $('#userIn').value;
			// var horasEstimadas = $('#horaEstimadaIn').value;
		}
	});



});