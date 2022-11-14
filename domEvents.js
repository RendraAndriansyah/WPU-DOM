// DOM Event


// Event Handler
//  -Inline HTML
// merubah warna text pada paragraph 1 dengan click
// lihat cara penulisan pada line 28 difile html
function gantiWarna(){
    const P1 = document.querySelector('.p1')
    P1.style.color = 'red'
}


//  -Element Method
// kekurangan method adalah pada saat menggunakan lebih dari 1 function
// maka yang di eksekusi adalah function terakhir 

const P2 = document.querySelector('.p2')
// Contoh
// function pertama ubah warna background
function ubahWarnaBg(){
    P2.style.backgroundColor = 'khaki'
} 

// function kedua ubah warna text
function ubahWarnaText(){
    P2.style.color = 'violet'
}
// yang di eksekusi adalah function terakir yaitu ubah text
P2.onclick = ubahWarnaBg 
P2.onclick = ubahWarnaText 

// bisa saja jika isi function tersebut digabungkan
const p3 = document.querySelector('.p3')
function ubahWarnaBgDanText (){
    p3.style.color = '#eaeaea'
    p3.style.backgroundColor = '#999'
}
p3.onclick = ubahWarnaBgDanText


// addEventListener()
// sedangkan addEventListener mampu mengeksekusi function lebih dari 1 secara bersamaan
const p4 = document.querySelector('.p4')

// function pertama dengan addEventListener dengan event click
p4.addEventListener ('click', function(){
    p4.innerHTML = 'addEventListener !!!'
})
// function kedua dengan addEventListener dengan event yang sama
p4.addEventListener('click', function (){
    p4.style.color = 'crimson'
    p4.style.fontWeight = 'bold'
})
// ====== keduanya bisa di eksekusi secara bersamaan

// contoh lain addEventListener
// membuat list baru pada paragraph 5
const p5 = document.querySelector('section#b p')
p5.addEventListener('click', function(){
    const ulItem = document.querySelector('section#b ul')
    const itemBaru = document.createElement('li')
    const textItemBaru = document.createTextNode('item Baru')
    itemBaru.appendChild(textItemBaru)
    ulItem.appendChild(itemBaru)
})


