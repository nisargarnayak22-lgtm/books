function showMessage() {
    alert("Welcome to My Book Library 📚");
}

// Simple search filter
document.getElementById("searchBox").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let books = document.getElementsByClassName("book-card");

    for (let i = 0; i < books.length; i++) {
        let title = books[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
        
        if (title.includes(value)) {
            books[i].style.display = "block";
        } else {
            books[i].style.display = "none";
        }
    }
});
