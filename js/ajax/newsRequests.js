//Haremos las peticiones asíncronas desde este código
const d = document;
const ApiKey = "814d63c7c89c40f19d0e4f2f87ebe2de";

export default function newsRequest(url) {
  const $container = d.getElementById("container-news"),
    $fragment = d.createDocumentFragment();

  async function getData() {
    try {
      let resultado = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-01-05&sortBy=publishedAt&apiKey=814d63c7c89c40f19d0e4f2f87ebe2de"
      );

      let json = await resultado.json();

      console.log(resultado, json);

      //Div para la tarjeta
      // const $div = d.createElement("div");
      // $div.classList.add("card");

      // json["articles"].forEach((element) => {
      //   //Imagen del div
      //   const $image = d.createElement("img");
      //   $image.classList.add("card-img-top");
      //   $image.src = "https://via.placeholder.com/300.png/09f/fff";

      //   $div.appendChild($image);
      // });

      // d.body.appendChild($div);
    } catch (err) {
      console.log(err);
    }
  }

  getData();
}
