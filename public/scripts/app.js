// $(() => {
//   homePage()

//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

//Movie GET
function movieFormSubmit() {
  const movieButton = $('#submitform');
  movieButton.on("submit", function(event) {
      event.preventDefault();
      let input = $('#textarea').val();
      let api = `http://www.omdbapi.com/?t=${input}&apikey=d566210c`;
      fetch(api)
      .then((resp) => resp.json())
      .then(function(movie) {
          $("#movielist").append(`<li>${movie.Title} - ${movie.Type}</li>`)
      });  
  })
  .catch(function(err) {
    alert(err);
  }) 
}

//Book GET ---- Change Jquery id tags for Separate button
function bookFormSubmit() {
  const bookButton = $('#submitform');
  bookButton.on("submit", function(event) {
      event.preventDefault();
      let input = $('#textarea').val();
      let api = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyDd1bZjix5lQXjGFAZ8x67mblYDt7VtxoA`;
      fetch(api)
      .then((resp) => resp.json())
      .then(function(book) {
          $("#movielist").append(`<li>${book.items[0].volumeInfo.title} - ${book.items[0].volumeInfo.printType}</li>`)
      });  
  })
  .catch(function(err) {
    alert(err);
  }) 
}

function restoFormSubmit() {
  const restoButton = $('#submitform');
  restoButton.on("submit", function(event) {
      event.preventDefault();
      let input = $('#textarea').val();
      let api = `https://developers.zomato.com/api/v2.1/search?entity_id=300&entity_type=city&q=${input}`;
      fetch(api)
      .then((resp) => resp.json())
      .then(function(resto) {
          $("#movielist").append(`<li>${resto.restaurants[0].restaurant.name}</li>`)
      });  
  })
  .catch(function(err) {
    alert(err);
  }) 
}

$(document).ready(function(){
  // movieFormSubmit()
  restoFormSubmit();
  homePage();
})




app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

// https://cse.google.com/cse?cx=017873622156579969207:tayz2vdgawe

// Search engine ID 
// 017873622156579969207:tayz2vdgawe


//

//Google Books
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey


//GOOGLE API
//AIzaSyDd1bZjix5lQXjGFAZ8x67mblYDt7VtxoA


//Zomato API Key
// 7fc0ba52b112ebf563c06ad6256d9b8e

//Zomato Restos
// https://developers.zomato.com/api/v2.1/search?entity_id=300&entity_type=city&q=Cactus
