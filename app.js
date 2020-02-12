let library = []

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

let newBook = new createBook ('Man', 'made', '575') 
let newBook2 = new createBook ('Kappa', "Kappa2", "697")
let newBook3 = new createBook ('Krappa', "Krappa2", "652")
function addBookToLibrary1() {
    library.push(newBook)
    library.push(newBook2)
    library.push(newBook3)
    
  }
  addBookToLibrary1()
console.log(library)


function addBookToLibrary(book) {
for (i=0; i<library.length;i++)
{

 let bookinfo = document.createElement("div")
 bookinfo.classList.add('book-overview')
 bookinfo.textContent =library[i].author + " " + library[i].title + " " + library[i].pages
 document.getElementById("bookcontainer").appendChild(bookinfo)
 
}
}
console.log(library.length)
addBookToLibrary()



