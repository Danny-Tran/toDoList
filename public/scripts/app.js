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
      })  
      .catch(function(err) {
        alert(err);
  })
  }) 
}

$(document).ready(function(){
  homePage();
  handleFormSubmit();

  function loadList(){
    $.ajax({
      method: "GET",
      url: "/",
      data:'',
      dataType:"json",
      complete: createList()
  });
  
  function createList(results){
    console.log ("THIS IS THE RESULTS" ,results)
    const $list = $('<div class="tab-pane container fade" id="watch">')
    const $ul = $('<ul>') 
    const $li = $('<li>')
    
    $list.append(($ul).append($li).append(results))
  }
  }
loadList();
})




// app.listen(PORT, () => {
//   console.log("Example app listening on port " + PORT);
// });

