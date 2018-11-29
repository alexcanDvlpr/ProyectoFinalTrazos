$(function() {

	var tareasCreadas = JSON.parse(localStorage.getItem('tareas'));
	var tareaShow = {};

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
			
			/**
			 *
			 *	Habra que poner aqui un Switch para filtrar por status (todo,
			 *  inprog, finisih) para que pinte en un contenedor u otro
			 *
			 */

			$('.tareasTodo').append('<div class="tarea"><div class="opciones"><div class="prioridad prio-'+tarea.priority+'"></div><div class="delete"><i class="fas fa-trash-alt"></i></div></div><h2>'+tarea.name+'</h2><b>Expira: <span>'+tarea.getSpanishDate()+'</span></b></div>');

			$('.tarea').on({
				dblclick: function() {
					tareaShow = {};
					let index = -1;

					for(let tarea of tareasCreadas) {
						if (tarea.name === $(this)[0].childNodes[1].textContent) {
							index = tareasCreadas.indexOf(tarea);
						}
					}
					tareaShow = tareasCreadas[index];
					let tarea = new Tarea(tareaShow.name, tareaShow.date, tareaShow.priority, tareaShow.user, tareaShow.hoursEstimated);
					tarea.status = tareaShow.status;
					tarea.hoursFinish = tareaShow.hoursFinish;
					tarea.desc = tareaShow.desc;
					cargarModal(tarea);
					$('.modalEditTarea').show();
				}
			});

			$('.fa-trash-alt').on({
				click: function() {
					// console.log(tareasCreadas);
					// let index = -1;

					// for(let tarea of tareasCreadas) {
					// 	if (tarea.name === $(this)[0].childNodes[1].textContent) {
					// 		index = tareasCreadas.indexOf(tarea);
					// 	}
					// }
					// tareasCreadas.splice(index, 1);
					// console.log(tareasCreadas);
					// localStorage.setItem('tareas', JSON.stringify(tareasCreadas));
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

	function cargarModal(tareaShow) {
		$('#TareaNameShow').val(tareaShow.name);
		$('#dateShow').val(tareaShow.date);
		$('#descEdit').val(tareaShow.desc);
		$('#horaEstimadaShow').val(tareaShow.hoursEstimated);
		$('#toDoHoursShow').val(tareaShow.hoursFinish);
		$('.relleno').css({ 'width': tareaShow.getProgress()+'%' });
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