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



    function clearModal() {
        $('#inTareaName')[0].value = "";
		$('#dateIn')[0].value = "";
		$('#prioridadIn')[0].value = "";
		$('#userIn')[0].value = "";
		$('#horaEstimadaIn')[0].value = "";
    }



});
