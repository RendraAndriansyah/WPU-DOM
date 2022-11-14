// const close = document.querySelector('.close')
// const container = document.querySelector('.container')
// const card = document.querySelector('.card')

// menggunakan method
// close.addEventListener('click', ()=>{
//    container.removeChild(card)
// })

// BEST PRACTICE (manipulasi css display)
// close.addEventListener('click', () =>{
//    card.style.display = 'none'
// }
// )

// ======   DOM TRAVERSAL   ========

// for(let i = 0; i< close.length;i++){
//       close[i].addEventListener('click', (e)=>{
//          // close[i].parentElement.style.display = 'none' // Traversal penelusuran parent
//          e.target.parentElement.style.display = 'none' // menggunakan parameter .target
//       })
//    }

const close = document.querySelectorAll('.close')
const cards = document.querySelectorAll('.card')
const container =  document.querySelector('.container')

container.addEventListener('click', (e) =>{
   // if (e.target.className == 'close') {
   //    e.target.parentElement.style.display = 'none'
      e.preventDefault()
   // }
   console.log(e.target);
})

// close.forEach(el => {
//    el.addEventListener('click', (e)=>{
//       e.target.parentElement.style.display = 'none'
//       // prevent default untuk menghilangkan fungsi default dari element
//       e.preventDefault() // parameter default pada a href="" adalah merefresh/ berpindah halaman
//       // stop propagation untuk menghentikan function / event pada element pembungkusnya
//       e.stopPropagation() // menghentikan event cards(pembungkus close)
//    })
// });

// events bubbling atau event yang berada pada 1 tre (pembungkus)
// cards.forEach(function(el){
//    el.addEventListener('click', (card)=>{
//       alert('card')
//    })
// })