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
    return true;
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

        '<td><button onclick="deleteData('+ 
        index +
        ')" class="btn btn-danger">Delete</button><buttononclick = "updateData (' +
        index +
        ')" class="btn btn-warning m-2">Edit</button></td>';

     html +="</tr>";       
    });

    document.querySelector("#crudTable tbody").innerHTML = 
    html;
}

//Loads All data when document or page loaded
document.onload = showData();

//Function to add data

function AddData(){

    //if form is validate

    if(validateForm() == true){
        var titulo =document.getElementById("titulo").value;
        var consola =document.getElementById("consola").value;
        var precio =document.getElementById("precio").value;
        var clasificacion =document.getElementById("clasificacion").value;

        var  peopleList;
        if(localStorage.getItem("peopleList") == null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem 
            ("peopleList"));
        }

        peopleList.push({
            titulo: titulo,
            consola: consola,
            precio: precio,
            clasificacion: clasificacion,
        });

        localStorage.setItem("peopleList", JSON.stringify 
        (peopleList));
        showData();
        document.getElementById("titulo").value = "";
        document.getElementById("consola").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("clasificacion").value = "";
    }
}

//function to delete Date form local storage

function deleteData(index){
    var peopleList;
    if(localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem 
        ("peopleList"));
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleLlist", JSON.stringify 
    (peopleList));
    showData();
}

//fuction to update/edit data in local storage

function updateData(index){
    //submit button 
    document.getElementById("Submit").style.display = "none";
    document.getElementById("update").style.display = "block";

    var peopleList;
    if (localStorage.getItem ("peopleList") == null) {
        peopleList = [];

    } else {
        peopleList = JSON.parse(localStorage.getItem
        ("peopleList"));
    }

    document.getElementById("titulo").value = peopleList[index].titulo;
    document.getElementById("consola").value = peopleList[index].consola;
    document.getElementById("precio").value = peopleList[index].precio;
    document.getElementById("clasificacion").value = peopleList[index].clasificacion;

    document.querySelector("#update").onclick = function(){
        if(validateForm() == true){
            peopleList[index].titulo = document.getElementById
            ("titulo").value;
            peopleList[index].consola = document.getElementById
            ("consola").value;
            peopleList[index].precio = document.getElementById
            ("precio").value;
            peopleList[index].clasificacion = document.getElementById
            ("clasificacion").value;

        localStorage.setItem("peopleList", JSON.stringify
        (peopleList));

        showData();

        document.getElementById("titulo").value ="";
        document.getElementById("consola").value ="";
        document.getElementById("precio").value ="";
        document.getElementById("clasificacion").value ="";

        //update button

        document.getElementById("Submit").style.display = 
        "block";
        document.getElementById("Update").style.display = 
        "none";
        }
    }
}
