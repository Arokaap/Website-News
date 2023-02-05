//Haremos las peticiones asíncronas desde este código
const d = document;
const ApiKey = "814d63c7c89c40f19d0e4f2f87ebe2de";
const $fragment = d.createDocumentFragment();
const $divRow = d.querySelector(".row");
let repetir = true;

export default function newsRequest(url) {
  const $container = d.getElementById("container-news"),
    $fragment = d.createDocumentFragment();

  async function getData(infor = "Noticias") {
    try {
      let resultado = await fetch(
          `https://newsapi.org/v2/everything?q=${infor}&language=es&apiKey=814d63c7c89c40f19d0e4f2f87ebe2de`
        ),
        json = await resultado.json();

      if (!resultado.ok)
        throw { status: resultado.status, statusText: resultado.statusText };

      json["articles"].forEach((element) => {
        //Div para tamanio bootstrap
        const $divBootstrap = d.createElement("div");
        $divBootstrap.classList.add("col-lg");

        //Div para tarjeta
        const $divTarjeta = d.createElement("div");
        $divTarjeta.classList.add("card");

        //Imagen del div
        const $image = d.createElement("img");
        $image.classList.add("card-img-top");
        if (element.urlToImage == null) {
          $image.src = "../assets/images/noticiaDefecto.jpg";
        } else {
          $image.src = element.urlToImage;
        }
        $image.alt = "";

        //Body de la tarjeta
        const $divBody = d.createElement("div");
        $divBody.classList.add("card-body");

        //Titulo de la tarjeta
        const $titulo = d.createElement("h5");
        $titulo.classList.add("card-title");
        $titulo.textContent = element.title;

        //Descripcion de la tarjeta
        const $descripcion = d.createElement("p");
        $descripcion.classList.add("card-text");
        $descripcion.textContent = element.description;

        //Enlace a la noticia
        const $enlaceNoticia = d.createElement("a");
        $enlaceNoticia.classList.add("btn");
        $enlaceNoticia.classList.add("btn-secondary");
        $enlaceNoticia.textContent = "Leer más";
        $enlaceNoticia.href = element.url;

        //Insertamos al body de la tarjeta la informacion
        $divBody.appendChild($titulo);
        $divBody.appendChild($descripcion);
        $divBody.appendChild($enlaceNoticia);

        //Insertamos la imagen a la tarjeta
        $divTarjeta.appendChild($image);

        //Insertamos el body a la tarjeta
        $divTarjeta.appendChild($divBody);

        //Insertamos la tarjeta en un col-lg para que se dividan de manera proporcional (de tres en tres)
        $divBootstrap.appendChild($divTarjeta);

        //Lo insertamos todo en el fragmento
        $fragment.appendChild($divBootstrap);
      });

      //Una vez están todas las noticias dentro del fragmento los metemos en la página y así ahorramos recursos
      $divRow.appendChild($fragment);

      while (repetir) {
        const $hijos = d.querySelectorAll(".col-lg");

        //Borramos noticias para que nuestra página quede uniforme
        if ($hijos.length % 3 == 0) {
          repetir = false;
        } else {
          $hijos[$hijos.length - 1].remove();
        }
      }
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $divRow.innerHTML = `Error ${err.statusText}: ${message}`;
    }
  }

  getData(url);
}
