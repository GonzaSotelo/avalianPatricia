document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".section__index article");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    
);
  
    articles.forEach((article) => observer.observe(article));
  });


  /* CONTACTO */

  (function () {
    emailjs.init("TU_USER_ID"); // Reemplaza con tu User ID de EmailJS
})();

// Enviar el formulario
const form = document.getElementById("contactForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", form)
        .then(() => {
            document.getElementById("statusMessage").innerHTML = 
                '<div class="alert alert-success">¡Mensaje enviado correctamente!</div>';
            form.reset();
        }, (error) => {
            document.getElementById("statusMessage").innerHTML = 
                '<div class="alert alert-danger">Hubo un error al enviar el mensaje.</div>';
            console.error("Error:", error);
        });
});