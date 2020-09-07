function jugar_ahora() {
  var cant_intentos = 4;
  var acerto = false;
  var respuesta = "john lawrence";
  var nombre;
  var pista1 = false;

  var nombre = document.getElementById("nombre").value;

  if (nombre == "") {
    alert("Por favor, ingrese su nombre para jugar. !");
  } else {
    while (cant_intentos > 0 && acerto != true) {
      cant_intentos--;
      nombre = prompt("Ingrese aqui el nombre");
      if (nombre == respuesta) {
        alert("Excelente Amigo !! Ganaste");
        acerto = true;
      }
      if (nombre != respuesta) {
        if (cant_intentos == 2 && pista1 == false) {
          alert(
            "1° Pista: Es Sensei de Miguel Diaz \nLe quedan " +
              cant_intentos +
              " intentos"
          );
          pista1 = true;
        } else if (pista1) {
          alert(
            "2° Pista: Fue ex-alumno de John Kreese \nLe quedan " +
              cant_intentos +
              " intentos"
          );
          pista1 = false;
        }
      }
      if (cant_intentos == 0 && acerto == false) {
        alert("Perdiste Amigo !!");
      }
    }

    document.getElementById("resultado").className = "alert alert-warning";
    document.getElementById("resultado").innerHTML =
      "Es el Sensei <strong class='text-capitalize'>" + respuesta + "</strong>";
    document.getElementById("biografia").className = "d-block";
  }
}
