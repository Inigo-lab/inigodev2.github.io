//Typed JS

const typed = new Typed('.texto_cambia', {
    strings: ['Desarrollador Android', 'Desarrollador iOS', 'Desarrollador Web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//Librería de JS - Scroll Reveal

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

//Aquí estableces las clases que quieres que tengan movimiento
ScrollReveal().reveal('.pro, .proyectos', { origin: 'top' });
ScrollReveal().reveal('.java, .kotlin, .swift, .contacto_container, .texto, .imagen, .html, .css, .js, .services-container',{ origin: 'bottom' });
ScrollReveal().reveal('.logo, .txt1, .heading',{ origin: 'left' });
ScrollReveal().reveal('.redes_sociales, .txt2',{ origin: 'right' });


//Easter Egg. Dale clicks al logo del nav...

let logo = document.getElementById('logo')
let cont = 0

logo.addEventListener('click',function(){
    cont++
    switchClick()
})

//Un switch que contabiliza los clicks
function switchClick(){
    switch(cont){
        case 10:
            alert('¡Enhorabuena! Le has dado diez veces al logo, no esperes nada a cambio...')
        break;
        case 25:
            alert('¿Sigues dándole al logo? No hay ninguna recompensa')
        break;
        case 30:
            alert('Vale, ya me has cansado. Eliminando la web...')
            allDiv()
        break;
    }
}

//Aquí selecciono todos los divs de la web
function allDiv(){
    let divs = document.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';        
    }
}





