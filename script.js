       function computar(){   

        var tirada; 
        f=[0,0,0,0,0,0,0] ;
        n=parseInt(document.datos.n.value) ;
        fecuencia=0 ;

        for(j=0 ; j<n; j++){  
            tirada=Math.round(6*Math.random(1)+0.5)  ;  
            f[tirada]=f[tirada]+1 ;
        }


        for(i=1 ; i<7; i++){  

            fecuencia=fecuencia+f[i];
            document.datos[3*i-1].value=f[i]  ; 
            valor = (f[i]/n)*100 +"%";
            document.datos[3*i+1].value=valor ;
            document.datos[3*i].value=fecuencia  ;    
        }

    canvas();
    

}



function canvas(){

var canvas = document.getElementById("oilChart");

var ctxGrupo = canvas.getContext("2d");

var Data = {
    labels: [
        "Uno",
        "Dos",
        "Tres",
        "Cuatro",
        "Cinco",
        "Seis"
    ],
    datasets: [
        {
            data: [f[1],f[2],f[3],f[4],f[5],f[6]],
            backgroundColor: [
                "red",
                "blue",
                "green",
                "yellow",
                "purple",
                "orange"
            ]
        }]
};

if (window.ctxGrupo != undefined)
    window.ctxGrupo.destroy();

window.ctxGrupo = new Chart(ctxGrupo, { type: 'bar', data: Data});


}