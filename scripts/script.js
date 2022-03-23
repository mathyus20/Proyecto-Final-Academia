async function fetchData() {
  fetch("/data/mascotas.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = document.querySelector("#container");
      data.mascotas.forEach((card) => {
        let { id, name, especie, edad, description, raza, image } = card;
        output.innerHTML += `
        <div class="card" id="${id}">
          <div class="card-header">
            <img src="${image}" alt="" />
          </div>
          <div class="card-body">
            <h2>${name}</h2>
            <h4>Especie: ${especie}</h4>
            <h4>Edad: ${edad}</h4>
            <h4>Raza: ${raza}</h4>
            <p>${description}</p>
            <a href="#miModal">Adoptame!</a>
            <div id="miModal" class="modal">
              <div class="modal-contenido">
                <a href="#">X</a>
                <h2>Muchas gracias</h2>
                <p>Adopta, no compres</p>
              </div>  
            </div>
          </div>
        </div>
        `;
      });
    })
    .catch((error) => {
      if (error == null) {
        console.log("Error Loading Data");
      } else {
        console.log(error);
      }
    });
}
window.addEventListener("DOMContentLoaded", fetchData());
