let hero =document.querySelector('.hero')
let thumbs = document.querySelectorAll('.thumb')

thumbs.forEach(el => {
   el.addEventListener('click', function (e){
   hero.src = e.target.src
   hero.classList.add('fade')
   setTimeout(() => {
   hero.classList.remove('fade')
   }, 500);
   thumbs.forEach((thumb) =>{
      thumb.classList.remove('active')
   })
   console.log(el);
   e.target.classList.add('active')
   })
})