// API addresses
const APIS = {
  "restos": (input) => `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=types,name&locationbias=circle:60000@51.0486,-114.0708&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs`,
  "books": (input) => `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyDd1bZjix5lQXjGFAZ8x67mblYDt7VtxoA`,
  "movies": (input) => `http://www.omdbapi.com/?t=${input}&apikey=d566210c`,
  "products": (input) => `https://api.nutritionix.com/v1_1/search/${input}?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name&appId=34f1c2e9&appKey=9bd833c435be73e49737f80d8e005ab6`
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
          return $("#watch-items").append(`<li>${data.Title}</li>`)
        }

        if (apiChoice === 'books') {
          return $("#read-items").append(`<li>${data.items[0].volumeInfo.title} - ${data.items[1].volumeInfo.authors[0]}</li>`)
        }

        if (apiChoice === 'products') {
          return $("#buy-items").append(`<li>${data.hits[19].fields.item_name}</li>`)
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
    $('#textarea').val('')
  })
    
    const renderList = list =>{
      console.log(list)
      $list = createList(list);
      $('.tab-content #eat').prepend($list);
    }
  
    const createList = list => {
      const $ul = $("#eat-items")
      list.forEach(listItem => {
        const $li = $('<li>');
        $li.append(listItem.title);
        $ul.append($li);
      });
      return $ul;
    }
    
    $('form#login').on('submit', (function() {
      redirect("index")
    }));

    onFormSubmit();


})