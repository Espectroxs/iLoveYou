const profiles = document.querySelectorAll('.profile');

profiles.forEach(profile => {
  profile.addEventListener('click', () => {
    
    const profileName = profile.getAttribute('data-name');

    if (profileName === "Larah") {
      
      Swal.fire({
        title: 'Senha',
        input: 'password',
        inputAttributes: {
          maxlength: 8,
          autocapitalize: 'off',
          autocorrect: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Entrar'
      }).then((result) => {
        if (result.isConfirmed) {
          if (result.value === "29052026") { 
            window.location.href = "series.html"; 
          } else {
            Swal.fire('Senha Incorreta. Acceso Negado!');
          }
        }
      });
    } else {
      Swal.fire('Acceso Negado!');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".reminder-btn").forEach(button => {
    button.addEventListener("click", function () {
      const parent = this.parentElement;
      const imgSrc = parent.querySelector("img").src;
      const title = parent.querySelector("img").alt;
      const description = this.getAttribute("data-description");

      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
