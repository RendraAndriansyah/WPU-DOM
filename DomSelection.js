// dom selection

// getElementByID() =====> node
const judul = document.getElementById('judul')
judul.style.color = 'crimson';
judul.style.backgroundColor = '#cccccc75'
judul.innerHTML = 'innerHTML' // mengganti isinya

// getElementsByTagName() =====> HTMLCollection

// // menyerupai tipe array
// const paragraph = document.getElementsByTagName('p') 
// for (let i = 0; i<paragraph.length;i++){
//     paragraph[i].style.backgroundColor ='lightblue'
// }

// karena hanya memiliki 1 index jadi bisa langsung dituliskan indexnya
const heading = document.getElementsByTagName('h1')[0] 
heading.style.fontSize = '50px'


// getElementsByClassName()=====> HTMLCollection
const textParagraph1 = document.getElementsByClassName('p1')[0]
textParagraph1.innerHTML = 'getElemetsByClassName'


// querySelector()=====> node
const p4 = document.querySelector('#b p')
p4.style.backgroundColor = 'lightgreen'

//                                    selector kurang lengkap
const item1 = document.querySelector('li:nth-child(1)')
item1.style.backgroundColor = 'orange'

//                                    selector lengkap
const item2 = document.querySelector('section#b ul li:nth-child(2)')
item2.style.backgroundColor = 'khaki'


// querySelectorall()======> node list
// querySelectorall mirip dengan getElementsByTagname
const paragraphSelectorAll = document.querySelectorAll('p')

// looping menggunakan for untuk mengubah warna text
for (let index = 0; index < paragraphSelectorAll.length; index++) {
    paragraphSelectorAll[index].style.color = 'crimson'
}