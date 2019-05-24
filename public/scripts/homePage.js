function homePage(){
    $('#page').html(
        `
        <section class="addCheckIt" id="parent-section">
            <h1>What do you want to Check Out?</h1>
            <form id="addToDo" action="/" method="POST">
                <div class="input-group mt-3 mb-3">
                    <div class="input-group-prepend">
                        <select class="checkIt" name="activities">
                            <option id="resto" value="resto">What to eat</option>
                            <option id="book" value="books">What to read</option>
                            <option id="movie" value="movies">What to watch</option>
                            <option id="product" value="products">What to buy</option>
                        </select>
                </div>
                <textarea placeholder="Add something to Check Out!" name="text">
                </textarea>
                <input class="checkIt" type="submit" value="checkIt">
                <div class="addCheckItFooter">
                    
                </div>
            </form>
        </section>
    `)
}

