/*class Slider{
    constructor(){
        this.atual = 0
        this.slides = Array.from(document.querySelectorAll(".slide"))
        this.slideSize = this.slides.length - 1
    }

    mostraSlide(index) {
        slider.slides.forEach((slide) => slide.classList.remove("atual"))
        slider.slides[index].classList.add("atual")
        autoNext()
    }

    nextSlide() {
        if(this.atual < this.slideSize){
            this.atual++
        } else{
            this.atual = 0
        }
        mostraSlide(this.atual)
        
    }

    autoNext() {
        clearTimeout(timeOut)
        const timeOut = setTimeout(this.nextSlide, 1000)
    }
    
}

Tentei utilizar Classe pra criar um objeto slider mas não consegui a tempo
*/

const thumbs = Array.from(document.querySelectorAll(".item-solo"))
thumbs.forEach(item => item.addEventListener("click", escolheSlide))
document.querySelectorAll(".cookies button").forEach(btn => btn.addEventListener("click", cookie))// retira modal Cookies
document.querySelectorAll(".link-menu").forEach(link => link.addEventListener("click", suavizarLinks))//suaviza os links
document.querySelectorAll(".cta").forEach(link => link.addEventListener("click", suavizarLinks))//suaviza os cta
document.querySelector(".menu-btn").addEventListener('click', alternaBtnMenu);//ativa/desativa botão mobile
document.addEventListener("submit", feedbackMensagem)//Avissa que a mensagem foi enviado na seção do contato
window.addEventListener("scroll", animaSecoes)// anima  entrada das secoes com scrool
document.querySelectorAll(".entrada").forEach(item => item.addEventListener("click", (event) => event.target.classList.add("clicado")))// da feedback se dos inputs area contato se estão corretos


/*Suaviza a passagem dos links internos e tambem do */
function suavizarLinks(event) {
    event.preventDefault()
    document.querySelector(".nav-top").classList.remove("active")
    const topoSecao = document.querySelector(event.target.getAttribute('href')).offsetTop - 100
    window.scroll({
        top: topoSecao,
        behavior: "smooth"
    })
}

/*Caso todos os inputs estejam preemchidos corretamente*/
function feedbackMensagem(event) {
    event.preventDefault()
    const resultado = document.querySelector(".result")
    resultado.innerHTML = "Mensagem enviada"
    resultado.style.color = "green"
}


/*Anima as secoes com scrool*/
function animaSecoes() {
    const altura = window.pageYOffset + ((window.innerHeight * 3) / 4)
    document.querySelectorAll(".anima").forEach(secao => {
        if (secao.offsetTop < altura) {
            secao.classList.remove("anima")
            secao.classList.add('entra')
        }
    })
}


/*Altera a classe da nav do header para fazer um botão e deixar responsivo*/
function alternaBtnMenu() {
    document.querySelector(".nav-top").classList.toggle("active");
}


/*Verifica se os cookies ja foram aceitos
Caso queira que a pergunta sempre apareça deixe essa parte comentada*/
if(localStorage.cookies){
    document.querySelector(".cookies").classList.add("esconder")
}

function cookie(event){
    if(+event.target.getAttribute("id")){
       localStorage.cookies = true 
    }
    document.querySelector(".cookies").classList.add("esconder")
}



/*Slider*/

function Slider(){
    this.atual = 0
    this.slides = Array.from(document.querySelectorAll(".slide"))
    this.slideSize = this.slides.length - 1
}

/*função para mostrar o slide desejado*/
function mostraSlide(index) {
    slider.slides.forEach((slide) => slide.classList.remove("atual"))
    slider.slides[index].classList.add("atual")
    thumbs.forEach(item => item.classList.remove("marcado"))
    thumbs[index].classList.add("marcado")
    autoNext()
}

/*Função para passar para o proximo slide*/
function nextSlide() {
    if(slider.atual < slider.slideSize){
        slider.atual++
    } else{
        slider.atual = 0
    }
    mostraSlide(slider.atual)
}

/*Função que deixa automatica a passagem dos slides e reinicia a contagem sempre quando muda de slide*/
function autoNext() {
    clearTimeout(timeOut)
    timeOut = setTimeout(nextSlide, 7000)
}

/*função que muda o slide para o selecionado nos thumbs*/
function escolheSlide(event){
    thumbs.forEach(item => item.classList.remove("marcado"))
    event.target.classList.add("marcado")
    mostraSlide(+event.target.getAttribute("id"))
}

/*Inicia o slider*/
let timeOut = setTimeout(() => mostraSlide(0), 0)
const slider = new Slider()




