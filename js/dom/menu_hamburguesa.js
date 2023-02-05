//Con esta función manejo el menu de hamburguesa
export default function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      //Si el evento en el documento coincide con el boton de hamburguesa entrará al if
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      //Remuevo la clase si el click se hace en el menu
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
