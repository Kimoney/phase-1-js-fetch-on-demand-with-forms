const init = () => {

    // first get the element from the DOM
    const inputForm = document.querySelector('form');
    // We add an event listener to our form

    inputForm.addEventListener("submit", (event) => {
        // This function will run every time we submit the form
        // preventing the default behaviour of a form which is refreshing the page
        event.preventDefault();

        // to get the value from the input we can use 
        // event.target.searchByID.value
        // or also >> event.target.children[1].value or the uncommented code below
        const input = document.querySelector("input#searchByID");
        console.log(input.value)

        // send data asynchronously using fetch() method. Wth this data, and the default form behavior overridden, we can set up a fetch request.
        // We need to modify the URL we pass to our fetch function based on the input typed into the HTML form. Using interpolation, we can adapt our existing code to do this:
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then (data => {
            //  We will input code here that will help render our data
            // We first access the DOM and store the two elements where we will display data in JavaScript
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        // Then, we set the values of these elements with the data returned by the server
        title.innerText = data.title;
        summary.innerText = data.summary;
        })
    })
}

document.addEventListener('DOMContentLoaded', init);