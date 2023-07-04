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
        alert("Elprecio es requerido");
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
        html += "<td>" +;
    })
}