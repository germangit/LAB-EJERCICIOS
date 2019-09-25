window.addEventListener('load',()=>{
    document.getElementById('btnTraer').addEventListener('click',traerTexto);
} )

function traerTexto(){
    //alert("hola");


    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        //codigo que maneja la peticion 
        let info = document.getElementById('info');
        if(xhr.readyState == 4){
              if(xhr.status == 200){
                  setTimeout(  ()=> {
                    let persona = JSON.parse(xhr.responseText);
                    info.innerText = `Nombre: ${persona.nombre} ${persona.apellido}  `  ;
                    clearTimeout(tiempo);
                  },3000  );
                    
                    //info.innerHTML = xhr.responseText;
              }
              else{
                    console.log(`Error: . ${xhr.status} . ${xhr.statusText} `);
              }  
        }else{

            info.innerHTML = '<img src=" ./img/spinner.gif" alt="spinner" />' ;


        }
        

    }

    xhr.open('GET','./js/personas.json',true);
    xhr.send();
    var tiempo = setTimeout(  ()=> {
        xhr.abort();
        info.innerHTML = 'Servidor ocupado , intente mas tarde' ;
    },4000 );
}

