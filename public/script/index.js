const accordion = document.querySelectorAll('.accordion');

accordion.forEach(element =>{
    element.addEventListener('click',(event) =>{
       accordion.forEach(el =>{
           if(el !== event.currentTarget){
               el.children[1].classList.remove('accordion-content-visible');
        el.children[0].children[1].classList.remove('fa-minus')
        el.children[0].children[1].classList.add('fa-plus')
        console.log(el.children[0].children)

           }
       })

        event.currentTarget.children[1].classList.toggle('accordion-content-visible')
        // event.currentTarget.children[0].children[1].classList.remove('fa-plus')
        event.currentTarget.children[0].children[1].classList.toggle('fa-plus fa-minus')
    })
})

const containerCarrossel = document.getElementById('container-carrossel')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')

arrowRight.addEventListener('click', () => {
    containerCarrossel.scrollLeft += containerCarrossel.offsetWidth;
})

arrowLeft.addEventListener('click', () => {
    containerCarrossel.scrollLeft -= containerCarrossel.offsetWidth;
})

