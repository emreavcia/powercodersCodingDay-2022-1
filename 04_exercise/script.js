let books = [
    {
        title: "Tales of the City",
        isSoldOut: true,
        price: "10 CHF"
    },
    {
        title: "The Serial",
        isSoldOut: false,
        price: "15 CHF"
    },
    {
        title: "East of Eden",
        isSoldOut: false,
        price: "12 CHF"
    }
]

const ol = document.querySelector("ol")
const addBookName = document.querySelector("#add-book-name")
const addBookPrice = document.querySelector("#add-book-price")
const btn = document.querySelector("input[type='submit']")

//sort the array by alphabetical order

const printBooks = () => {
    books = books.sort((a, b) => a.title.localeCompare(b.title))

    ol.innerHTML = books.map(book => {
        return (
            `<li>
            <ul> 
            <li>Title: ${book.title}</li>
            <li>Price: ${book.price}</li>
            <li>In Stock: ${book.isSoldOut ? "yes" : "sold out"}</li>
            </ul> 
            </li>
            `
        )
    }).join("")
}

printBooks()


btn.addEventListener("click", () => {
    let title = addBookName.value;
    let price = addBookPrice.value;
    const newBook = {
        title: title,
        price: price + " CHF",
        isSoldOut: false
    }
    books = [...books, newBook]
    printBooks()
})

