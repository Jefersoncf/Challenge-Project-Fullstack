
const accordion = document.querySelectorAll('.accordion ');

accordion.forEach(element =>{
    element.addEventListener('click',(event) =>{
    
        accordion.forEach(async element =>{
            element.children[0].children[1].classList.remove('no-visible');
            element.children[0].children[2].classList.add('no-visible');
        })

        const accordionContent = event.currentTarget.children[1];
        accordionContent.classList.toggle('accordion-content-visible')

        const iconMenos = event.currentTarget.children[0].children[1];
        const iconMais = event.currentTarget.children[0].children[2];
       
       
         iconMenos.classList.toggle('no-visible')
        iconMais.classList.toggle('no-visible')

    })
})

// const accordionSelect = document.querySelectorAll('.accordion');
// accordionSelect.onclick = () => {
//     img.style.display = 'none';
// }


const containerCarrossel = document.getElementById('container-carrossel')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')

arrowRight.addEventListener('click', () => {
    containerCarrossel.scrollLeft += containerCarrossel.offsetWidth;
})

arrowLeft.addEventListener('click', () => {
    containerCarrossel.scrollLeft -= containerCarrossel.offsetWidth;
})

