//Metodo para borrar las tarjetas del DOM

const d = document;

export default function borrarTarjetas() {
  const $tarjetas = d.querySelectorAll(".col-lg");
  $tarjetas.forEach((element) => {
    element.remove();
  });
}
