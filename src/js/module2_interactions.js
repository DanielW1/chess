function setEventListener() {
    var figures = document.querySelectorAll(".figure");

    for (let item of figures) {
        item.addEventListener("click", showPossibleMoves)
    }

    document.addEventListener("click", function (event) {
        if (event.target.closest(".possible_move")) {
            //robimy ruch

            moveFigure(event.target.closest(".possible_move"));

        } else {
            hideAllPossibleMoves();
        }
    })
}

function moveFigure(target) {

    var fromCol = target.dataset.fromCol;
    var fromRow = target.dataset.fromRow;
    var figure = findField(fromCol, fromRow).querySelector(".figure");
    target.firstChild.appendChild(figure);
    hideAllPossibleMoves();
}

function hideAllPossibleMoves() {
    var items = document.querySelectorAll(".possible_move");
    for (var item of items) {
        item.classList.remove("possible_move");
    }

}

function showPossibleMoves(event) {
    event.stopPropagation();
    hideAllPossibleMoves();
    var clickedFigure = event.target;
    var col = +clickedFigure.closest(".field").getAttribute("col");
    var row = + clickedFigure.closest(".row").getAttribute("row");

    var newRow = clickedFigure.classList.contains("wolf") ? row - 1 : row + 1;
    var col_left = col - 1;
    var col_right = col + 1;

    if (newRow < 1 || newRow > 8) {
        return;
    }

    if (col_left > 0 && col_left < 9) {
        if (isFieldEmpty(col_left, newRow)) {
            let field = findField(col_left, newRow);
            field.classList.add("possible_move");
            field.dataset.fromCol = col;
            field.dataset.fromRow = row;
        }
    }


    if (col_right > 0 && col_right < 9) {
        if (isFieldEmpty(col_right, newRow)) {
            let field = findField(col_right, newRow);
            field.classList.add("possible_move");
            field.dataset.fromCol = col;
            field.dataset.fromRow = row;
        }
    }

}

function isFieldEmpty(col, row) {
    return !findField(col, row).querySelector(".figure");
}

function isFieldOccupied(col, row) {
    return findField(col.row).querySelector(".figure")
}