window.onload = registrarPlantas;

function registrarPlantas(){
    fetch('../Json/plantas.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
      let html = '';
      let container_plantas = document.getElementById("container-plantas");
      let tipo = container_plantas.accessKey;
      container_plantas.innerHTML = "";
      data.forEach(function(planta){
        if (planta.Tipo == tipo) {
          let propiedades = "";
        planta.Propiedades.forEach(function(element, index){
          if (index != (planta.Propiedades.length-1)) {
            propiedades+= element + ", ";
          } else {
            propiedades+= element + ".";
          }
        });
        html = `
        <div class=" planta">
          <div class="card">
            <div class="image-wrapped">
                      <img src="${planta.Imagen}" alt="...">
            </div>
            <div class="card-body ali plant-title">
                      <h5 class="card-title text-uppercase fs-6 fw-bold  ">${planta.Nombre}</h5>
                      <p class="card-text  ">Propiedades: ${propiedades}</p>
            </div>
            
          </div>
        </div>
        `;
        container_plantas.innerHTML += html;
        }
      });
      
    })
}

function FiltroPlantas(filtro){
  fetch('../Json/plantas.json')
  .then(function(res){
      return res.json();
  })
  .then(function(data){
    let acesso = false;
    let html = '';
    let container_plantas = document.getElementById("container-plantas");
    let tipo = container_plantas.accessKey;
    container_plantas.innerHTML = "";
    data.forEach(function(planta){
      if (planta.Tipo == tipo) {
        let propiedades = "";
      planta.Propiedades.forEach(function(element, index){
        if(element == filtro){
          acesso = true;
        }
        if (index != (planta.Propiedades.length-1)) {
          propiedades+= element + ", ";
        } else {
          propiedades+= element + ".";
        }
      });

      html = `
      <div class=" planta">
        <div class="card">
          <div class="image-wrapped">
                    <img src="${planta.Imagen}" alt="...">
          </div>
          <div class="card-body ali plant-title">
                    <h5 class="card-title">${planta.Nombre}</h5>
                    <p class="card-text">Propiedades: ${propiedades}</p>
          </div>
          
        </div>
      </div>
      `;
      if (acesso == true) {
        container_plantas.innerHTML += html;
        acesso = false
      }   
      }
    });   
  })
}