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


function handleFormSubmit() {
  const searchbutton = $('#submitform');
  searchbutton.on("submit", function(event) {
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

$(document).ready(function(){
  handleFormSubmit();
  homePage();
})




app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

