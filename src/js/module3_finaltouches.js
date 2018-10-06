function setResetButton(){
    var reset = document.getElementById("reset");
    reset.addEventListener("click", function(){
        window.location.reload();
    })
}