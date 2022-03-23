async function fetchData() {
  fetch("/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let output = document.querySelector("container");
      data.mascotas.forEach((card) => {
        let { id, name, especie, edad, description, raza, image } = data;
        output.innerHTML += `
        <div class="card" id="${id}">
          <div class="card-header">
            <img src="${image}" alt="" />
          </div>
          <div class="card-body">
            <h4>${name}</h4>
            <h4>${especie}</h4>
            <h4>${edad}</h4>
            <h4>${raza}</h4>
            <h4>${description}</h4>
          </div>
        </div>
        `;
      });
      document.querySelector("mascotas").innerHTML = output;
    })
    .catch((error) => {
      if (error == null) {
        document.querySelector("container").innerHTML = "Error Loading Data";
      } else {
        console.log(`Error al traer la data : ${error}`);
      }
    });
}
window.onload = fetchData();

