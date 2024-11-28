document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".section__index article");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    articles.forEach((article) => observer.observe(article));
  });
  