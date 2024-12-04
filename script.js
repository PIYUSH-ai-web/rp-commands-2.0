document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    }
});

function copyText(textBoxId, button) {
    var textBox = document.getElementById(textBoxId);
    
    // Use the Clipboard API
    navigator.clipboard.writeText(textBox.value)
        .then(function() {
            button.innerText = "Copied!";
            setTimeout(function() {
                button.innerText = "Copy";
            }, 2000);
        })
        .catch(function(err) {
            console.error('Could not copy text: ', err);
        });
}
