//Validate form inputs before submiting data
function validateForm(){
    var titulo = document.getElementById("titulo").value; 
    var consola = document.getElementById("consola").value; 
    var precio = document.getElementById("precio").value; 
    var clasificacion = document.getElementById("clasificacion").value;
    
    if(titulo == ""){
        alert("El titulo es requerido");
        return false
    }
   
    if(consola == ""){
        alert("Tipo de consola requerido");
        return false
    }
    if(precio == ""){
        alert("El precio es requerido");
        return false
    }

    else if(precio < 1){
        alert("El precio no puede ser de cero");
        return false
    }

    if(clasificacion == ""){
        alert("La clasificacion es requerido");
        return false
    }
}

// Fuction to show Data
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html ="";

    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.titulo + "</td>";
        html += "<td>" + element.consola + "</td>";
        html += "<td>" + element.precio + "</td>";
        html += "<td>" + element.clasificacion + "</td>";
        html +=
        '<td><button onclick="deleData"('+ index +')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index +')" class="btn btn-warning m-2">EDIT</button></td>';
     html +="</tr>";       
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

//Loads All datawhen document or page loaded
ducument.onload = showData();

//Fumction to add data

function actualizar(){
    //if form is validate
    if(validateForm() == true){
        var titulo =document.getElementById("titulo").value;
        var consola =document.getElementById("consola").value;
        var precio =document.getElementById("precio").value;
        var clasificacion =document.getElementById("clasificacion").value;

        var  peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
        } 
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            titulo: titulo,
            consola: consola,
            precio: precio,
            categoria: categoria,
        });

        localStorage.setItem("peopleList", JSON.stringify (peopleList));
        showData();
        document.getElementById("titulo").value = "";
        document.getElementById("consola").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("categoria").value = "";
    }
}