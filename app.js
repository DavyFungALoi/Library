let library = []

class createBook {
    constructor(author, title, numberOfPages) {
        this._author = author;
        this._title = title;
        this._numberOfPages = numberOfPages;
        this._isRead = false
        }
        get author () {
          return this._author
    }
        get title () {
        return this._title
    }
        get numberOfPages () {
        return this._numberOfPages
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
let newBook = new createBook ('Man', 'made', 575)

function addBookToLibrary() {
    library.push('newBook')
  }
  console.log(library)
  console.log(newBook.author)
  console.log(newBook.readStatus)
  newBook.togglereadStatus()
  console.log(newBook.readStatus)
