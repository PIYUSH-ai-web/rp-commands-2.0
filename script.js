document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

function copyText(textBoxId, button) {
    var textBox = document.getElementById(textBoxId);
    textBox.select();
    textBox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    button.innerText = "Copied!";
    setTimeout(function() {
        button.innerText = "Copy";
    }, 2000);
}