function homePage(){
    $('#page').html(
        `
        <section class="addCheckIt">
            <h1>What do you want to Check Out?</h1>
            <form id="addToDo" action="/data" method="POST">
                <textarea placeholder="Add something to Check Out!"
                    name="text"></textarea>
                <div class="addCheckItFooter">
                    <input type="submit" 
                        value="checkIt">
                </div>
            </form>
        </section>
    `)
}