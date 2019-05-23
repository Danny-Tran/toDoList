
const $             = require("jquery"); 

$(document).ready(function() { 


let input = $('#entry').value();
let api = `http://www.omdbapi.com/?t=${input}&apikey=d566210c`;
let key = d566210c;
onSearch();

function onSearch() {
  let searchbutton = $('#search-button');
  searchbutton.on('click', (userEntry))
}
function userEntry() {
  console.log(api);
}
});

function append(parent, el) {
  return parent.appendChild(el);
}


$("#submitform").submit(function(event) {
  event.preventDefault();
  this.querySelector('#entry').value;
    if (!$("#entry").val()) {
      $("#empty-error").slideDown().fadeOut(2500)
  } else if ($("#entry").val()) {
    fetch(api).then(function(data) {
      //Code for handling the data you get from API
      $('#movielist')
    })
    .catch(function(err) {
      throw err;
    })
  }

})


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});