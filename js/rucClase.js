class RUC {
    constructor(){
        this.token = 'bed7143b-e7a5-403a-885f-b0558add5849-................';
        this.url = 'https://api.migoperu.pe/api/v1/ruc';
    }

    async obtenerRUC(ingresoRUC) {
        let data = {
            ruc : ingresoRUC,
            token : this.token
        }

        const respuestaRUC = await fetch(this.url,
            {
                method : 'POST',
                body : JSON.stringify(data),
                headers : {
                    'Content-Type' : "application/json"
                }
            })
        
        const listaRUC = await respuestaRUC.json();
        return {
            listaRUC
        }
    }

    mostrarRUC(listaRUCS){
        const listadoRUC = document.querySelector('#listadoRUC tbody');
        if(listaRUCS.estado_del_contribuyente === 'ACTIVO'){
            const row = document.createElement('tr');
            row.classList = 'table-success';
            row.innerHTML = `
            <td>${listaRUCS.nombre_o_razon_social}</td>
            <td>${listaRUCS.estado_del_contribuyente}</td>
            <td>${listaRUCS.condicion_de_domicilio}</td>
            <td>${listaRUCS.departamento}</td>
            `;
            listadoRUC.appendChild(row);
        }else{
            const row = document.createElement('tr');
            row.classList = 'table-danger';
            row.innerHTML = `
            <td>${listaRUCS.nombre_o_razon_social}</td>
            <td>${listaRUCS.estado_del_contribuyente}</td>
            <td>${listaRUCS.condicion_de_domicilio}</td>
            <td>${listaRUCS.departamento}</td>
            `;
            listadoRUC.appendChild(row);
        }
        
    }

    mostrarAlerta(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));
        const divRuc = document.getElementById('ingreso-ruc');
        divRuc.after(div);

        setTimeout(() => {
            const alert = document.querySelector('.alert');
            if(alert){
                alert.remove();
            }
        }, 2000);
    }
}