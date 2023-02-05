const d = document,
  w = window;

let active = false;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  function toogleScroll() {
    let scrollTop = w.scrollY || d.documentElement.scrollTop;
    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  }

  w.addEventListener("scroll", (e) => {
    toogleScroll();
  });

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".panel-btn") ||
      e.target.matches(".panel *") ||
      e.target.matches(".panel-btn *")
    ) {
      if (!active) {
        $scrollBtn.classList.add("hidden");
        active = true;
      } else {
        active = false;
        toogleScroll();
      }
    }

    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        // left:0
      });
    }
  });
}
