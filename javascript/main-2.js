jQuery(function() {

    $("#boton1").on("click", function(){
        
        $("#boton1").text($("#mostrado-1").is(":visible")?"Qatar 2022":"OCULTAR");
        $("#mostrado-1").toggle(1000);
        $("#mostrado-0").toggle(1000);
            
    })

    $("#boton2").on("click", function(){
        
        $("#boton2").text($("#mostrado-2").is(":visible")?"Liga Argentina":"OCULTAR");
        $("#mostrado-2").toggle(1000);
        $("#mostrado-0").toggle(1000);   
    }) 
    
    $("#boton3").on("click", function(){
        
        $("#boton3").text($("#mostrado-3").is(":visible")?"Copa Argentina":"OCULTAR");
        $("#mostrado-3").toggle(1000);
        $("#mostrado-0").toggle(1000);
            
    })

})
