const $=id=>document.getElementById(id);

console.log("Botón empezar:", document.getElementById("boton-empezar"));
console.log("Texto entrada:", document.getElementById("texto-entrada"));

const bt=$('boton-tema'),pi=$('pantalla-inicio'),pe=$('pantalla-escritura'),te=$('texto-entrada'),be=$('boton-empezar'),br=$('boton-reiniciar'),tm=$('texto-mostrar'),vt=$('tiempo'),vw=$('wpm'),vp=$('precision'),vn=$('num-pagina'),vtp=$('total-paginas');
let pags=[],pagAct=0,letras=[],indAct=0,temp,t=0,escribiendo=!1,pulTot=0,pulCor=0;
bt.onclick=()=>{document.body.classList.toggle('modo-oscuro');bt.textContent=document.body.classList.contains('modo-oscuro')?'☀️ Modo Claro':'🌙 Modo Nocturno'};
const norm=tx=>tx.replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[\u2013\u2014]/g,"-").replace(/\u00A0/g," ");
const divTx=(tx,max)=>{let p=[],i=0;while(i<tx.length){let f=i+max;if(f<tx.length){let uEsp=tx.lastIndexOf(' ',f),uEnt=tx.lastIndexOf('\n',f),corte=Math.max(uEsp,uEnt);if(corte>i)f=corte+1;}p.push(tx.slice(i,f));i=f;}return p;};
const showPag=i=>{
    tm.innerHTML='';
    indAct=0;
    vn.textContent=i+1;


    // Cargar capítulo seleccionado desde la biblioteca
const textoGuardado = localStorage.getItem("textoPractica");

if(textoGuardado){
    te.value = textoGuardado;
    localStorage.removeItem("textoPractica");
    pags[i].split('').forEach(c=>{
        let s=document.createElement('span');

        if(c === '\n'){
            s.textContent='↵';
            s.classList.add('salto-linea');
        } else {
            s.textContent=c;
        }

        s.dataset.caracter=c;
        tm.appendChild(s);
    });

    letras=document.querySelectorAll('#texto-mostrar span');

    if(letras.length>0)
        letras[0].classList.add('actual');
};
const startT=()=>{if(!escribiendo){escribiendo=!0;temp=setInterval(()=>{t++;vt.textContent=t;let w=Math.round((pulCor/5)/(t/60));vw.textContent=w>0?w:0;},1000)}};
const handle=e=>{
    if(
        e.key.length!==1 &&
        e.key!=='Backspace' &&
        e.key!=='Enter'
    ) return;

    if(indAct>=letras.length)return;

    startT();

    let lAct=letras[indAct];

    if(e.key==='Backspace'){
        if(indAct>0){
            lAct.className='';
            indAct--;
            letras[indAct].className='actual';
        }
        return;
    }

    let tecla=e.key;

    // Convertir Enter a salto de línea
    if(tecla==='Enter'){
        tecla='\n';
    }

    if(tecla===' ')e.preventDefault();

    pulTot++;

   if(tecla===lAct.dataset.caracter){
        lAct.className='correcto';
        pulCor++;
    }else{
        lAct.className='incorrecto';
    }

    vp.textContent=Math.round((pulCor/pulTot)*100);

    indAct++;

    if(indAct<letras.length){
        letras[indAct].className='actual';
    }else{
        if(pagAct<pags.length-1){
            pagAct++;
            showPag(pagAct);
        }else{
            clearInterval(temp);
            lAct.classList.remove('actual');
        }
    }
};
    be.onclick=()=>{let tx=norm(te.value.trim());if(!tx)return;t=0;escribiendo=!1;pulTot=0;pulCor=0;vt.textContent=0;vw.textContent=0;vp.textContent=100;clearInterval(temp);pags=divTx(tx,500);pagAct=0;vtp.textContent=pags.length;pi.style.display='none';pe.style.display='block';showPag(pagAct);window.removeEventListener('keydown',handle);window.addEventListener('keydown',handle);};
br.onclick=()=>{clearInterval(temp);pe.style.display='none';pi.style.display='block';window.removeEventListener('keydown',handle);};

const botonLibros = $('boton-libros');
const botonEjercicios = $('boton-ejercicios');

botonLibros.onclick = ()=>{

    console.log("Abrir biblioteca");

};


botonEjercicios.onclick = ()=>{

    console.log("Abrir ejercicios");

};
