document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const message = document.getElementById("message");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const projectCaptions = document.querySelectorAll("figcaption");
  const projectTitles = document.querySelectorAll("figure img");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      message.classList.remove("hidden");
      message.style.opacity = "1";
      setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => {
          message.classList.add("hidden");
        }, 500);
      }, 3000);
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-theme");
      if (body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light Mode";
        projectCaptions.forEach((caption) => (caption.style.color = "#ffffff"));
        projectTitles.forEach((title) => (title.style.borderColor = "#ffffff"));
        document
          .querySelectorAll("figcaption")
          .forEach((fig) => (fig.style.color = "#ffffff"));
      } else {
        themeToggle.textContent = "Dark Mode";
        projectCaptions.forEach((caption) => (caption.style.color = "#333333"));
        projectTitles.forEach((title) => (title.style.borderColor = "#333333"));
        document
          .querySelectorAll("figcaption")
          .forEach((fig) => (fig.style.color = "#333333"));
      }
    });
  }

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      // event.preventDefault(); // Mencegah submit bawaan

      // Ambil data dari input
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      // Nomor WhatsApp tujuan (ganti dengan nomor lo)
      let phoneNumber = "6282260741675"; // Ganti dengan nomor WhatsApp lo tanpa "+"

      // Format pesan dengan encode
      let whatsappMessage = `Halo, saya ${name} (%0AEmail: ${email})%0A%0A${message}`;
      let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

      // Arahkan ke WhatsApp
      window.open(whatsappURL, "_blank");
    });

  document.addEventListener("scroll", function () {
    const projects = document.querySelectorAll(".projects figure");
    projects.forEach((project) => {
      const rect = project.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        project.classList.add("show");
      }
    });
  });
});
