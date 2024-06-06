function cargarAmigos() {
    $.ajax({
        url:'http://localhost:5000/amigos',
        type:'GET',
        success:(data)=>{
            data.forEach((amigo) => $("#lista").append(`<li> ${amigo.name} </li>`))        
        }
    })
}
function buscarAmigos() {
    let id = $("#input").val();
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type:'GET',
        success:(data_id)=>{
            //console.log(data_id);
            $("#amigo").append(`<p>${data_id.name} </p>`);
            $("#amigo").append(`<p>${data_id.email} </p>`);
            $("#input").val(' ');
        }
    })
}
function borrarAmigos() {
    let id = $("#inputDelete").val();
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type:'DELETE',
        success:(data_delete)=>{
            alert("Amigo Eliminado Correctamente")
            //console.log(data_delete);            
            $("#inputDelete").val(" ")
            //cargarAmigos();
        }
    })
}

$("#boton").click( ()=>{    
    $("#lista").empty();
   cargarAmigos();
});

$("#search").click( ()=>{    
$("#amigo").empty();

  buscarAmigos();
});

$("#delete").click(()=>{
    borrarAmigos();  
})