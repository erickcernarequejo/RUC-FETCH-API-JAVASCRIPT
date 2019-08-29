const ruc = new RUC();

const btnBuscar = document.getElementById('btnBuscar')

btnBuscar.addEventListener('click', function(){
    const ingresoRUC =  document.getElementById('ruc');
    expresion = /\d\d\d\d\d\d\d\d\d\d\d/;
    if(expresion.test(ingresoRUC.value)){
        ruc.obtenerRUC(ingresoRUC.value)
            .then(response => {
                ruc.mostrarRUC(response.listaRUC);
                ingresoRUC.value = '';
            }).catch(function(error){
                ruc.mostrarAlerta('No se encontró RUC', 'alert alert-danger');
                ingresoRUC.value = '';
            })
    }
    else {
        ruc.mostrarAlerta('Ingrese correctamente los 11 dígitos del RUC', 'alert alert-danger');
        ingresoRUC.value = '';
    }
    
});



/* var data = new FormData();
data.append("ruc", "20127529541");
data.append("token", "bed7143b-e7a5-403a-885f-b0558add5849-88fe6987-.......................");

var xhr = new XMLHttpRequest();

xhr.open("POST", "https://api.migoperu.pe/api/v1/ruc");
xhr.setRequestHeader("Accept", "application/json");

xhr.onload = function () {
    if(this.status === 200){
        const respuesta = JSON.parse(this.responseText);
        console.log(respuesta);
    }
}

xhr.send(data); */