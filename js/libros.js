<div id="lista-libros"></div>

<script src="js/libros.js"></script>

<script>

const lista = document.getElementById("lista-libros");


libros.forEach(libro=>{

    let boton=document.createElement("button");

    boton.textContent="📖 "+libro.titulo;


    boton.onclick=()=>{

        window.location.href=
        "capitulos.html?libro="+libro.id;

    };


    lista.appendChild(boton);

});

</script>
