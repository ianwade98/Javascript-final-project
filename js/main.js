listaPropiedadesJSON = []; //declaro el array de objetos que contendra las propiedades guardadas
//DECLARO LAS VARIABLES PARA TRABAJAR CON EL DOM
let contenedorFiltros = document.querySelector("#contenedorFiltros");
contenedorFiltros.style.display = "none";

let panelFiltros = document.querySelector("#filtros")
let comboFiltros = document.querySelector("#combos")
let panelFiltrosActivos = document.querySelector("#filtrosActivos");
let aIndex = document.querySelectorAll(".aIndex");
console.log(aIndex[0]);



//DECLARO LAS FUNCIONES
$(document).ready(function(){ 
    $("#btn1").click(function(){
        //tipos de mensajes succes, info, warning, error
        //titulo y mensaje de texto
        toastr["warning"]("Mensaje de prueba", "Demo");   
        
    
    });
    


function CambiarColorLink(){
    aIndex[0].style.color = "#00000098";
    aIndex[1].style.color = "#00000098";
    aIndex[2].style.color = "#00000098";
    aIndex[3].style.color = "#00000098";
}


$(() => { //Esto se ejecuta una vez termina de cargar todo el DOM, es algo adicional, no necesario.
    $.getJSON("data/propiedades.json", (respuesta) => { //Obtenemos los datos desde un JSON en forma estática. Es una petición asíncrona.
        // GUARDAMOS LA RESPUESTA EN UNA VARIABLE DENTRO DE LISTATAREASJSON.
        listaPropiedadesJSON = respuesta;
        console.log(listaPropiedadesJSON);

    })
})

function DesCheckTipo(){
    cbox1.checked = false;
    cbox2.checked = false;
    cbox3.checked = false;
    cbox4.checked = false;
}

function DesCheckDorm(){
    cboxTerreno.checked = false;
cboxTerrenoPozo.checked = false;
cboxCasa.checked = false;
cboxDepto.checked = false;
}

// EVENTO CHANGE DEL COMBO DE tipo de PROPIEDAD DE LA PAGINA INDEX

let comboPropiedad = document.querySelector('#comboPropiedad');
comboPropiedad.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    //Primero borramos el contenida de #displayContainer
    switch (evt.target.value) { //Captamos el texto de la opción elegida con evento.target.value
        case "Departamento":
            renderIndex("Departamento");
            break;
        case "Casa":
            renderIndex("Casa");
            break;
        case "Terreno":
            renderIndex("Terreno");
            break;
        case "Terreno en pozo":
            renderIndex("Terreno en pozo");
            break
    }
})


const renderIndex = (tipoPropiedad) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");

    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == tipoPropiedad) { //Solo imprimimos los elementos que coincidan con el tipo elegido del dropdown
            // Hay que colocar += para que se sume al contenido ya puesto antes, sino lo sobreescribe.  
          //  contenedorFiltros.style.display = "none";
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        contenedor.style.border = "1px solid black";
   //     contenedor.style.margin = "20px";
    //    contenedor.style.padding = "25px";

        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo Propiedad: ${tipoPropiedad}</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();
 //   aIndex.style.color = "#00000098";


}


// EVENTO CHANGE DEL COMBO DE tipo de OPERACION DE LA PAGINA INDEX

let comboOperacion = document.querySelector('#comboOperacion');
comboOperacion.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    switch (evt.target.value) { //Captamos el texto de la opción elegida con evento.target.value
        case "Venta":
            renderIndexOperacion("Venta");
            break;
        case "Construccion":
            renderIndexOperacion("Construccion");
            break;
        case "Alquiler":
            renderIndexOperacion("Alquiler");
            break
    }
})


const renderIndexOperacion = (tipoOperacion) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.operacion == tipoOperacion) { //Solo imprimimos los elementos que coincidan con el tipo elegido del dropdown
            // Hay que colocar += para que se sume al contenido ya puesto antes, sino lo sobreescribe.  
            console.log('entro al if');
            console.log(contenedorFiltros.style);
            console.log(contenedorFiltros.style);
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo Operacion: ${tipoOperacion}</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();

}




// EVENTO CHANGE DEL COMBO DE CANTIDAD DE DORMITORIOS DE LA PAGINA INDEX

let comboDorm = document.querySelector('#comboDormitorios');

comboDorm.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    switch (evt.target.value) { //Captamos el texto de la opción elegida con evento.target.value
        case "1":
            renderIndexDorm("1");
            break;
        case "2":
            renderIndexDorm("2");
            break;
        case "3":
            renderIndexDorm("3");
            break
        case "4":
            renderIndexDorm("4");
            break;
    }
})


const renderIndexDorm = (cantDorm) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.dormitorios == cantDorm) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo: ${cantDorm} Dormitorios</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();
}


// EVENTO CLICK DEL BOTON APLICAR PARA FILTRAR POR PRECIOS
let pDesde = '';
let pHasta = '';
let bAplicar = document.querySelector('#baplicar');
bAplicar.addEventListener('click', (evt) => {
    if (iDesde != '' && iHasta != '') {
        pDesde = iDesde.value;
        pHasta = iHasta.value;
        console.log(iDesde.value);
        console.log(iHasta.value);
        renderIndexPrecio(pDesde, pHasta);


    } else {
        alert("Complete ambos campos Desde y Hasta");
    }
})


const renderIndexPrecio = (Desde, Hasta) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.precio >= Desde && elemento.precio <= Hasta) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += ` <p> Precio Desde: ${Desde} </p>`;
    panelFiltrosActivos.innerHTML += ` <p> Precio Hasta: ${Hasta} </p>`;
    panelFiltrosActivos.style.color = "red";
}



// EVENTO CLICK DEL combos checkbox tipo propiedad --- cboxTerreno

let cboxTerreno = document.querySelector('#cboxTerreno');
cboxTerreno.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == 'Terreno') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Terreno </p>`;
    panelFiltrosActivos.style.color = "red";
    cboxTerrenoPozo.checked = false;
    cboxCasa.checked = false;
    cboxDepto.checked = false;
    DesCheckTipo();
    
})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cboxTerrenoeN pOZO

let cboxTerrenoPozo = document.querySelector('#cboxTerrenoPozo');
cboxTerrenoPozo.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == 'Terreno en pozo') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Terreno en pozo</p>`;
    panelFiltrosActivos.style.color = "red";
    cboxTerreno.checked = false;
    cboxCasa.checked = false;
    cboxDepto.checked = false;
    DesCheckTipo();


})

// EVENTO CLICK DEL combos checkbox tipo propiedad --- cboxCasa

let cboxCasa = document.querySelector('#cboxCasa');
cboxCasa.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == 'casa') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Casa </p>`;
    panelFiltrosActivos.style.color = "red";
    cboxTerrenoPozo.checked = false;
    cboxTerreno.checked = false;
    cboxDepto.checked = false;
    DesCheckTipo();

})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cboxDepto

let cboxDepto = document.querySelector('#cboxDepto');
cboxDepto.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == 'Departamento') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Departamento </p>`;
    panelFiltrosActivos.style.color = "red";
    cboxTerrenoPozo.checked = false;
    cboxCasa.checked = false;
    cboxTerreno.checked = false;
    DesCheckTipo();


})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cbox1

let cbox1 = document.querySelector('#cbox1');
cbox1.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.dormitorios == '1') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Cantidad de Dormitorios: 1 </p>`;
    panelFiltrosActivos.style.color = "red";
    cbox2.checked = false;
    cbox3.checked = false;
    cbox4.checked = false;
    DesCheckDorm();

})

// EVENTO CLICK DEL combos checkbox tipo propiedad --- cbox2

let cbox2 = document.querySelector('#cbox2');
cbox2.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.dormitorios == '2') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Cantidad de Dormitorios: 2 </p>`;
    panelFiltrosActivos.style.color = "red";
    cbox1.checked = false;
    cbox3.checked = false;
    cbox4.checked = false;
    DesCheckDorm();


})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cbox3

let cbox3 = document.querySelector('#cbox3');
cbox3.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.dormitorios == '3') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Cantidad de Dormitorios: 3 </p>`;
    panelFiltrosActivos.style.color = "red";
    cbox2.checked = false;
    cbox1.checked = false;
    cbox4.checked = false;
    DesCheckDorm();

})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cbox4

let cbox4 = document.querySelector('#cbox4');
cbox4.addEventListener('click', (evt) => {
    console.log(evt)
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.dormitorios > '3') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Cantidad de Dormitorios 4 o mas</p>`;
    panelFiltrosActivos.style.color = "red";
    cbox2.checked = false;
    cbox3.checked = false;
    cbox1.checked = false;
    DesCheckDorm();

})


//EVENTO CLICK DEL ENLACE INICIO 
/*
let linksContacto = document.getElementsByClassName("linkContacto");    
linksContacto.addEventListener('click', (evt) => {
    linksContacto.style.color = "blue";
});

*/



