function listPage(){
    $('#page').html(`
        <!-- Nav tabs -->
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#watch">I gotta SEE this</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#resto">I gotta EAT here</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#book">I gotta READ this</a>
        </li>
        <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#product">I gotta GET this</a>
        </li>
    </ul>
    
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane container active" id="watch">
            <ul>
                <li>Bohemian Rhapsody</li>
                <li>Detective Picachu</li>
                <li>Bob's Burgers</li>
                <li>Dark Tourist</li>
            </ul>
        </div>
        <div class="tab-pane container fade" id="resto">
            <ul>
                <li>Ogam chicken</li>
                <li>El Furniture Warehouse</li>
                <li>Mina's Brazillian</li>
            </ul>
        </div>
        <div class="tab-pane container fade" id="book">
            <ul>
                <li>Neil Gaiman - American Gods</li>
                <li>George Orwell - 1984</li>
                <li>Ernest Cline - Ready Player One</li>
            </ul>
        </div>
        <div class="tab-pane container fade" id="product">
            <ul>
                <li>Bidet</li>
                <li>Shampoo</li>
                <li>Sham Wow</li>
            </ul>
        </div>
    </div>


    `)
}