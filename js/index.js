//En este fichero cargaré las funcionalidades de la página

import newsRequest from "./ajax/NewsRequests.js";
import scrollTopButton from "./dom/boton_scroll.js";
import hamburguerMenu from "./dom/menu_hamburguesa.js";

const d = document; // Por ahorrarme escribir document cada que quiera usarlo, es una nueva practica que estoy usando para ahorrarme tiempo.

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a"); // Función para nuestro menu de hamburguesa
  scrollTopButton(".scroll-top-btn"); // Función para realizar el scroll hacia arriba
  newsRequest("");
});
