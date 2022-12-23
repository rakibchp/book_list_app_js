const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function(e){
    e.preventDefault();

    // Basic validation
    if(title.value == ''&& author.value==''&& year.value==''){
        alert('Please insert data first.');
    }
    else{
        const newRow = document.createElement('tr');

        // Creating new Title

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // Creating new Title

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // Creating new Title

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        // Displaying in UI

        bookList.appendChild(newRow);


    }
})
