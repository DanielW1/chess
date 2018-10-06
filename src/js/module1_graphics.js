function createField(color,colNum) {
    var field = document.createElement("div");
    field.classList.add("field", color);
    field.setAttribute("col",colNum);

    var fieldInside = document.createElement("div");
    fieldInside.classList.add("field-inside");

    field.appendChild(fieldInside);

    return field;
}

function createRow(rowNumber) {
    var row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("row",rowNumber);

    for (let i = 1; i < 9; i++) {
        var color = (i + rowNumber % 2) % 2 ? "white":"black";
        var field = createField(color,i);
        row.appendChild(field);
    }

    return row;
}

function drawChessBoard() {
    var board = document.getElementById("board");

    for (let i = 8; i >0; i--) {
        var col = createRow(i);
        board.appendChild(col);
    }
}

function createFigure(animalName){

    var figure= document.createElement("div");
    figure.classList.add("figure",animalName);

    return figure;
}

function findField(col, row){

    var field= document.querySelector(`[row="${row}"] [col="${col}"]`);
    

    return field;
}

function placeFigure(figureName, col, row){
    var field=findField(col,row);
    var figure=createFigure(figureName);
    field.firstChild.appendChild(figure);
}