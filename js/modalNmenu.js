$(function(){

    $('#toggle').on({
		click: () => {
			$('.sidemenu').toggleClass('active');
		}
	});

	$('.btnAddTarea').on({
		click: function() {
            clearModal();
			$('.modalAddTarea').show();
		}
	});
	$('.close').on({
		click: function() {
			$('.modalAddTarea').hide();
			$('.modalEditTarea').hide();
		}
	});

	$('#prioridadIn').on({
		change: function() {
			var prioridad = $('#prioridadIn')[0].value;

			switch (prioridad) {
				case "low":
					$('.modal-header').css({ "background-color": "#28a745" });
					$('.modal-footer').css({ "background-color": "#28a745" });
				break;
				case "medium":
					$('.modal-header').css({ "background-color": "#ffc107" });
					$('.modal-footer').css({ "background-color": "#ffc107" });
				break;
				case "hight":
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


	$('.btnEdit').on({

		click: function() {

			$('.btnEdit').attr('disabled', true);
			$('.btnSaveChangesEdit').attr('disabled', false );
			$('#TareaNameShow').attr('disabled', false);
			$('#dateShow').attr('disabled', false);
			$('#descEdit').attr('disabled', false);
			$('#toDoHoursShow').attr('disabled', false);
		}

	});

	$('.btnSaveChangesEdit').on({

		click: function() {

			var nombre = $('#TareaNameShow').val();
			var fecha = $('#dateShow').val();
			var desc = $('#descEdit').val();
			var horas = $('#horaEstimadaShow').val();
			var horasFin = $('#toDoHoursShow').val();

		}

	});
















    function clearModal() {
        $('#inTareaName')[0].value = "";
		$('#dateIn')[0].value = "";
		$('#prioridadIn')[0].value = "";
		$('#userIn')[0].value = "";
		$('#horaEstimadaIn')[0].value = "";
    }



});
