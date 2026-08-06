const bt = document.getElementById("boton-tema");

if(localStorage.getItem("tema") === "oscuro"){
    document.documentElement.classList.add("modo-oscuro");
    if(bt) bt.textContent="☀️ Modo Claro";
}


if(bt){

    bt.onclick = ()=>{

        document.documentElement.classList.toggle("modo-oscuro");

        if(document.documentElement.classList.contains("modo-oscuro")){
            localStorage.setItem("tema","oscuro");
            bt.textContent="☀️ Modo Claro";
        }else{
            localStorage.setItem("tema","claro");
            bt.textContent="🌙 Modo Nocturno";
        }

    };

}
