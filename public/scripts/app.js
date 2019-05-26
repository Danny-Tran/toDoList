
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });  "restos": (input) => `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=types,name&locationbias=circle:60000@51.0486,-114.0708&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs`,


const APIS = {
  "restos": (input) => `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=types,name&locationbias=circle:60000@51.0486,-114.0708&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs`,
  "books": (input) => `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyDd1bZjix5lQXjGFAZ8x67mblYDt7VtxoA`,
  "movies": (input) => `http://www.omdbapi.com/?t=${input}&apikey=d566210c`,
  "products": (input) => undefined
}

//API Call
function onFormSubmit() {
  const form = $('#addToDo');
  form.on("submit", function(event) {
      event.preventDefault();
      const input = $('#textarea').val();
      const apiChoice = $('select.checkIt').val();
      const api = APIS[apiChoice](input);
      console.log("Choice api", input)

      fetch(api)
      .then((resp) => resp.json())
      .then(function(data) {
        if(apiChoice === 'movies') {
          return $("#watch-items").append(`<li>${data.Title} - ${data.Type}</li>`)
        }

        if (apiChoice === 'books') {
          return $("#read-items").append(`<li>${data.items[0].volumeInfo.title} - ${data.items[0].volumeInfo.printType}</li>`)
        }

        if (apiChoice === 'restos') {
          return $("#movielist").append(`<li>${data.candidates[0].name}</li>`)
        }
      })
      .catch(function(err) {
        alert(err)
      })  
  })
}

function renderItems(items) {
    $("#watch-items").empty();
    $("#eat-items").empty();
    $("#read-items").empty();
    $("#buy-items").empty();
    $("#misc-items").empty();
      for (let item of items) {
        let liWrap = $("<li>").addClass("cat-list");
        let labelWrap = $("<label>").addClass("label-checkbox");
        let inputWrap = $("<input type='checkbox'>").addClass("checkbox");
      
        liWrap.append(labelWrap).append(inputWrap);
      }
  }

$(document).ready(function(){
  $('#addToDo').submit(function(event){
    event.preventDefault();
    const txt = $("#textarea").val();
    if (!txt ) {
      return alert("please enter an item")
    }
    $.ajax({
      method: "POST",
      url: "/update",
      data: $(this).serialize(),
    }).done(function(list){
      renderList(list)
    })
  })
    
    const renderList = list =>{
      console.log(list)
      $list = createList(list);
      $('.tab-content #eat').prepend($list);
    }
  
    const createList = list => {
      const $ul = $('<ul>');
      list.forEach(listItem => {
        const $li = $('<li>');
        $li.append(listItem.title);
        $ul.append($li);
      });
      return $ul;
    }


})  
  
  
// })
  
  $('form#login').on('submit', (function() {
    console.log("clicked")
    redirect("index")
  }));
  // handleFormSubmit();
  





// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=attica&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs




// app.listen(PORT, () => {
//   console.log("Example app listening on port " + PORT);
// });

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



// Google places
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs


//Yelp API
// SAkDMYC750wPdnzXMGp410qhCIg4K3FLQMa8g_QpnsPo1i33IAOm4JUCXoxvp0ihDQ94kDGYpOBtLHga98liNiZ1sMKPiXFU-6ndPZOF0OfD0La7m2DgbiB0bYvoXHYx
// https://api.yelp.com/v3/businesses/search
// Client ID
// 6gEGx3vrvLfzOlo5K9KBMA

// en_CA

// Bearer SAkDMYC750wPdnzXMGp410qhCIg4K3FLQMa8g_QpnsPo1i33IAOm4JUCXoxvp0ihDQ94kDGYpOBtLHga98liNiZ1sMKPiXFU-6ndPZOF0OfD0La7m2DgbiB0bYvoXHYxapi.yelp.com/v3/businesses/search?term=delis&latitude=51.0486&longitude=-114.0708