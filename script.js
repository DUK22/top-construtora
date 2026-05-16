const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contactForm = document.getElementById("contact-form");
const currentYear = document.getElementById("current-year");

function closeMenu() {
    if (!hamburger || !navMenu) return;

    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("active");
}

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        hamburger.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const nome = formData.get("nome");
        const telefone = formData.get("telefone");
        const tipo = formData.get("tipo");
        const mensagem = formData.get("mensagem");

        const text = [
            "Olá, Top Construtora.",
            `Meu nome é ${nome}.`,
            `Telefone: ${telefone}.`,
            `Tipo de projeto: ${tipo}.`,
            `Mensagem: ${mensagem}`
        ].join("\n");

        const url = `https://wa.me/5562999999999?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    });
}
