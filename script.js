
/* ========================================
   1. MOBILE NAVIGATION
======================================== */

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the mobile menu when a navigation link is selected.
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Close the menu when the screen returns to desktop size.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}

/* ========================================
   2. AUTOMATIC COPYRIGHT YEAR
======================================== */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/* ========================================
   3. CONTACT FORM VALIDATION
======================================== */

const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const message = formData.get("message").trim();

        formFeedback.classList.remove("error");

        if (!name || !email || !message) {
            formFeedback.textContent = "Please complete all fields.";
            formFeedback.classList.add("error");
            return;
        }

        if (message.length < 10) {
            formFeedback.textContent =
                "Please enter a message of at least 10 characters.";
            formFeedback.classList.add("error");
            return;
        }

        formFeedback.textContent =
            `Thank you, ${name}! Your form passed validation. ` +
            "This demonstration form does not send emails yet.";

        contactForm.reset();
    });
}
