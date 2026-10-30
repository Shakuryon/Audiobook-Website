document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('navbarCont');
    const scrollThres = 30; // N of pixels before transformin'

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThres) {
            mainNav.classList.add('scrolled');
            
        }

        else {
            mainNav.classList.remove('scrolled');
        }
    })

    const title = document.title;
    let i = 0;

    function typeTitle() {
        document.title = title.slice(0, i++);
        if (i <= title.length) {
            setTimeout(typeTitle, 95);
        }
    }

    typeTitle();
})

/* ==== Accessible industry dropdown: hover on desktop, tap/click on touch ==== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".nav-dropdown-toggle");
    const menu = dropdown.querySelector(".industry-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", (event) => {
      const isTouch = window.matchMedia("(hover: none)").matches;
      if (!isTouch) return; // Desktop follows the link; hover/focus opens the menu.
      if (!dropdown.classList.contains("is-open")) {
        event.preventDefault();
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    toggle.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.blur();
      }
    });
  });
});
