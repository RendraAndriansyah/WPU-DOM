// DOM MANIPULATION

// ===> MANUPULATION ELEMENT !!! <===
//element.innerHTML
const heading = document.getElementById('judul')
heading.innerHTML = 'Heading'
heading.style.backgroundColor = '#cccccc60'

//element.style.<property CSS>
const p1 = document.getElementsByTagName('a')[0]
p1.style.backgroundColor = 'lightgreen'

// element.setAtribute (lihat di inspect element browser)
// set atribute hanya bisa menambahkan 1 atribute dalam sekali penggunaan
const atribute = document.querySelector('#judul')
//                    atribute,isi atribute
atribute.setAttribute('name','judulAtribute') 
atribute.setAttribute('class','classAtribute') 


// getAtribute
// menampilkan isi atribute dari element
atribute.getAttribute('name') // isi dari atribute name adalah juduAtribute


// removeAttribute
atribute.removeAttribute('class') // menghilangkan class attribute


// element.classList. ...()
// add()
const p2 = document.querySelector('.p2')
p2.classList.add('addClass') // menambahkan class
p2.classList.add('hapusClass') // menambahkan class
p2.classList.add('gantiClass') // menambahkan class

// remove()
p2.classList.remove('hapusClass') // menghapus class yang ada

// toggle()
// toggle akan menambahkan class jika tidak ada class yang dimaksud dan akan dihapus jika sudah memilikinya
p2.classList.toggle('toggle') // menambahkan class 'toggle' karena belum ada 

// item()
// item akan menampilkan class sesuai urutan pada element yang ditarget, urutan dimulai dari angka 0
p2.classList.item(1) // akan menampilkan urutan class ke 2 (addClass)

// contains()
// contains seperti menayakan ada atau tidaknya (true/false) class pada element
p2.classList.contains('p2') // true karena ada class p2
p2.classList.contains('paragraph') // false karena tidak ada class paragraph

// replace()
p2.classList.replace('gantiClass', 'replaceClass') // mengganti class dengan nama 'gantiClass' menjadi 'replaceClass'




// ===============================
    // ===============================
// ===============================
    // ===============================
// ===============================
    // ===============================
// ===============================



// ===> MANUPULATION NODE !!! <===
// document.createElement
const paragraphBaru = document.createElement('p') // membuat element P (paragraph)

// document.createTextNode
const textParagraphBaru =document.createTextNode('Paragraph Baru') // membuat text berisi "paragraph baru"

// node.appendChild
paragraphBaru.appendChild(textParagraphBaru) // memasukan text "paragraph baru ke element P di variable paragraphBaru "

const sectionA = document.querySelector('#a') // inisiasi variable sectionA ke element html yang berisi id 'a'
sectionA.appendChild(paragraphBaru) // memasukan element P yang baru dibuat (paragraphBaru) ke sectionA

// add list item baru 
const itemBaru = document.createElement('li')
const textItemBaru = document.createTextNode('Item Baru')
itemBaru.appendChild(textItemBaru)

// node.insertBefore
const ul =  document.querySelector('section#b ul') // inisiasi variable ul ke element html ul di section b
const item2 =document.getElementsByTagName('li')[1] // inisasi item2 ke element list ke 2 di tagname li 
//               insert  before
ul.insertBefore(itemBaru,item2) // menambahkan itemBaru sebelum item2 pada ul

// add list item 4
const item4 = document.createElement('li')
const textItem4 = document.createTextNode('Item 4')
item4.appendChild(textItem4)
ul.appendChild(item4)

// parentNode.removeChild
const item3 = ul.querySelector('li:nth-child(3)') // inisiasi variable item3 pada element HTML
ul.removeChild(item) // menghapus child element(item3) pada element parentnya (ul)


// parentNode.replaceChild(item pengganti, item yang diganti)
ul.replaceChild(item2,itemBaru) // mengganti itemBaru dengan item2