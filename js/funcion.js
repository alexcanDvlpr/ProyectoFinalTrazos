$(function() {

	var tareasCreadas = JSON.parse(localStorage.getItem('tareas'));

	if(!tareasCreadas) {
		tareasCreadas = [];
	} else {
		for(let obj of tareasCreadas) {
			let tarea = new Tarea(obj.name, obj.date, obj.priority, obj.user, obj.hoursEstimated);
			tarea.status = obj.status;
			tarea.hoursFinish = obj.hoursFinish;
			tarea.desc = obj.desc;
			createElementForTarea(tarea);
		}
	}
	
	$('.btnSaveAdd').on({
		click: function() {
			var tarea = obtenerDatosFormCrearTarea();
			createElementForTarea(tarea);
			$('.modalAddTarea').hide();
			tareasCreadas.push(tarea);
			localStorage.setItem('tareas', JSON.stringify(tareasCreadas));
		}
	});

	function createElementForTarea(tarea) {

		if(tarea) {
			
			$('.tareasTodo').append('<div class="tarea"><div class="opciones"><div class="prioridad prio-'+tarea.priority+'"></div><div class="edit"><i class="fas fa-highlighter">'+
			'</i></div><div class="delete"><i class="fas fa-trash-alt"></i></div></div><h2>'+tarea.name+'</h2><b>Expira: <span>'+tarea.getSpanishDate()+'</span></b></div>');

			$('.fa-trash-alt').on({
				click: function() {
					console.log('delete');
				}
			});
		
			$('.fa-highlighter').on({
				click: function() {
					console.log('Edit');
				}
			});

			$('.tarea').draggable({
				start: function() {
					console.log("lo Cojo");
				},
				drag: function() {
					console.log("arrastro");
				},
				stop: function(event, ui) {
					console.log("ui", ui);
					console.log("evento", event);
				},
			});

		} else {
			console.log('Error, no hay tarea');
		}

	}

	function obtenerDatosFormCrearTarea() {
		let nombreTarea = $('#inTareaName')[0].value;
		let fechaFin = $('#dateIn')[0].value;
		let prioridad = $('#prioridadIn')[0].value;
		let usuario = $('#userIn')[0].value;
		let horasEstimadas = $('#horaEstimadaIn')[0].value;

		let tarea = new Tarea(nombreTarea, fechaFin, prioridad, usuario, horasEstimadas);
		return tarea;
	}

	$('.tareasInProgress').droppable({
		hoverClass: 'activeDrag',
		accept: '.tarea',
	});

	$('.tareasTerminadas').droppable({
		hoverClass: 'activeDrag',
		accept: '.tarea',
	});



});