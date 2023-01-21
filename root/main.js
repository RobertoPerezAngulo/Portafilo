const grid = new Muuri(".grid", {
  layout: {
    rounding: false,
  },
});


function formulario(){


}

function descargaCV() {
  let timerInterval;
  Swal.fire({
    title: "Descargando el formato",
    html: "se cerrara <b></b> milisegundos.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      var link = document.createElement("a");
      //Nuevo metodo
      link.href =
        "https://github.com/RobertoPerezAngulo/Portafilo/raw/master/root/CV_JoseRobertoPerezAngulo_En.pdf";
      link.download = "file.pdf";
      link.dispatchEvent(new MouseEvent("click"));
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    Swal.fire({
		html: `<!DOCTYPE html>
		<html lang='en'>
		
		<body style='font-family: Arial; margin: 0;'>
			<div style='padding: 10px; text-align: center;background:#0d6efd;color: black; font-size: 8px;'>
				<h1>Comuniquémonos</h1>
			</div> <br>
			<div>
				<table cellpadding='0' cellspacing='0' width='100%'>
					<tbody>
						<tr>
							<td>
								<input type='text' id='name' name='name' placeholder='Escribe tu nombre'
									style=' width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 10px; box-sizing: border-box;'>
							</td>
						</tr>
						<tr>
							<td>
								<input type='text' id='empresa' name='empresa' placeholder='Escribe de donde me contactas'
									style=' width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 10px; box-sizing: border-box;'>
							</td>
						</tr>
						<tr>
							<td>
								<input type='text' id='perfil' name='perfil' placeholder='Escribe el perfil que buscas'
									style=' width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 10px; box-sizing: border-box;'>
							</td>
						</tr>
		
					</tbody>
				</table>
			</div>
		</body>
		
		</html>`,
		input: "checkbox",
		inputValue: 0,
		inputPlaceholder:
		  "<span style='font-size: 8px;'>Al llenar el formulario mandare un correo a José Roberto notificando tu interes, muchas gracias.</span>",
		confirmButtonText:
		  'ACEPTAR <i class="fa fa-arrow-right"></i>',
		inputValidator: (result) => {
		  return !result && "Requiere confirmación de envío de correo";
		},
		preConfirm: ()=>{
		  const email =  Swal.getPopup().querySelector('#emailc').value
		  const number =  Swal.getPopup().querySelector('#telpar').value
		  exprNum = /^[0-9]+$/;
		  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
	  
		  if(!exprNum.test(number))
			Swal.showValidationMessage('El número telefonico no es valido.');
		  if (!expr.test(email))
			Swal.showValidationMessage('La dirección de correo "' + email + '" es incorrecta.');
		},
		confirmButtonColor: "#5BB662",
	  });
  });
}

$(document).ready(function () {
  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("imagenes-cargadas");

  // Agregamos los listener de los enlaces para filtrar por categoria.
  const enlaces = document.querySelectorAll("#categorias a");
  enlaces.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove("activo"));
      evento.target.classList.add("activo");

      const categoria = evento.target.innerHTML.toLowerCase();
      categoria === "todos"
        ? grid.filter("[data-categoria]")
        : grid.filter(`[data-categoria="${categoria}"]`);
    });
  });

  // Agregamos el listener para la barra de busqueda
  document
    .querySelector("#barra-busqueda")
    .addEventListener("input", (evento) => {
      const busqueda = evento.target.value;
      grid.filter((item) =>
        item.getElement().dataset.etiquetas.includes(busqueda)
      );
    });

  // Agregamos listener para las imagenes
  const overlay = document.getElementById("overlay");
  document.querySelectorAll(".grid .item img").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      const ruta = elemento.getAttribute("src");
      const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

      overlay.classList.add("activo");
      document.querySelector("#overlay img").src = ruta;
      document.querySelector("#overlay .descripcion").innerHTML = descripcion;
    });
  });

  // Eventlistener del boton de cerrar
  document.querySelector("#btn-cerrar-popup").addEventListener("click", () => {
    overlay.classList.remove("activo");
  });

  // Eventlistener del overlay
  overlay.addEventListener("click", (evento) => {
    evento.target.id === "overlay" ? overlay.classList.remove("activo") : "";
  });
});
