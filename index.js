// document.addEventListener("DOMContentLoaded", function() {});

const bookUrl = 'http://localhost:3000/books'
const bookList = document.querySelector('#list-panel')
const bookShow = document.querySelector('#show-panel')
const bookUser = []
const allBooks = []
// const userList = document.querySelector('#user-list')

fetch(bookUrl, {method: "GET"})
.then (respond => {return respond.json()})
.then ( function (books) {
  console.log(books);
  books.forEach( book => {
    // allBooks.push(book)
    // console.log(allBooks);
    const showBooks = document.createElement('p')
    showBooks.innerText = book.title
    showBooks.description = book.description
    showBooks.img_url = book.img_url
    showBooks.id = book.id
    bookList.appendChild(showBooks)
    showBooks.addEventListener('click', e => {
      bookShow.innerHTML = `<p id= '${book.id}'> ${book.title}</p> <br>
      <img src="${book.img_url}" id='${book.id}'>
      <p id='${book.id}'> ${book.description}</p>
      <ul id='user-list'> like! </ul>`


    })//end of showing book event

  })//end of forEeach loop for books
})//end of fetch
