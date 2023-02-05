const d = document;

//Buscador de nuestra pagina web
export default function search() {
  const $buscador = d.getElementById("formBuscador");

  if ($buscador.buscador.value == "") {
    return "Noticias";
  } else {
    return $buscador.buscador.value;
  }
}
