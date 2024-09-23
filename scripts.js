function ShowHide(){
    var container=document.getElementsByClassName("Ventana")[0]
    var container2=document.getElementsByClassName("Ventanaprevia")[0]
    var container3=document.getElementsByClassName("circuloMensaje")[0]
    

    if(container.style.display == "none"){
        container2.style.display  = "none";
        container.style.display  = "block";
        container3.style.display  = "none";

        

    }
    else{

        container.style.display  = "none";
        container2.style.display  = "block";

    }
}