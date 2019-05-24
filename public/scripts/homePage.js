function homePage(){
    $('#page').html(
        `
        <section class="addCheckIt">

            <form id="addToDo" action="/" method="POST">
                <div class="input-group mt-3 mb-3">
                    <div class="input-group-prepend">
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
                        </button>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Watch</a>
                        <a class="dropdown-item" href="#">Eat</a>
                        <a class="dropdown-item" href="#">Read</a>
                        <a class="dropdown-item" href="#">Buy</a>
                        <a class="dropdown-item" href="#">Misc</a>
                    </div>
                    <textarea placeholder="Add something to Check Out!"
                        name="text"></textarea>
                </div>
                <div class="addCheckItFooter">
                    <input class="checkIt" type="submit" 
                        value="checkIt">
                </div>
            </form>
        </section>
    `)
}