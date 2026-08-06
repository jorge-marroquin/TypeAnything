const bt = document.getElementById("boton-tema");

if(bt){

    // Restaurar tema
    if(localStorage.getItem("tema") === "oscuro"){
        document.body.classList.add("modo-oscuro");
        bt.textContent = "☀️ Modo Claro";
    }

    bt.onclick = ()=>{

        document.body.classList.toggle("modo-oscuro");

        if(document.body.classList.contains("modo-oscuro")){
            localStorage.setItem("tema","oscuro");
            bt.textContent = "☀️ Modo Claro";
        }else{
            localStorage.setItem("tema","claro");
            bt.textContent = "🌙 Modo Nocturno";
        }

    };

}
