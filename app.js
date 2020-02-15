let library = []


function submitbook(book) {
  
let formAuthor = document.getElementById("author").value
let formTitle = document.getElementById("title").value
let formPages = document.getElementById("pages").value
let newBook = new createBook (formAuthor, formTitle, formPages)
library.push(newBook)
}

class createBook {
    constructor(author, title, pages) {
        this._author = author;
        this._title = title;
        this._pages = pages;
        this._isRead = false
        }
        get author () {
          return this._author
    }
        get title () {
        return this._title
    }
        get pages () {
        return this._pages
    }
        get readStatus () {
        return this._isRead
      }
        set readStatus (value){
        this._isRead = value
     }
        togglereadStatus() {
        this.readStatus = !this.readStatus
        }
            
}

function addBookToLibrary(book) {
for (i=0; i<library.length;i++)
{

 let bookinfo = document.createElement("div")
 bookinfo.classList.add('book-overview')
 bookinfo.textContent =library[i].author + " " + library[i].title + " " + library[i].pages + " " + library[i].readStatus
 document.getElementById("bookcontainer").appendChild(bookinfo)
 library=[]
 }
}



